import { useNode, useEditor } from "@craftjs/core";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { type ChangeEvent, useState } from "react";

interface ImageProps {
    storageId?: string;
    alt?: string;
    width?: string;
    height?: string;
}

export const Image = ({ storageId, alt = "Image", width = "100%", height = "auto" }: ImageProps) => {
    const { connectors: { connect, drag } } = useNode();

    const imageUrl = useQuery(api.files.getFileUrl, storageId ? { storageId: storageId as Id<"_storage"> } : "skip");

    return (
        <div ref={(ref: any) => connect(drag(ref))} style={{ width, height }}>
            {imageUrl ? (
                <img src={imageUrl} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
                <div style={{
                    width: "100%",
                    height: "200px",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#888"
                }}>
                    {storageId ? "Loading..." : "Select an image"}
                </div>
            )}
        </div>
    );
};

export const ImageSettings = () => {
    const { actions: { setProp }, storageId } = useNode((node) => ({
        storageId: node.data.props.storageId,
    }));

    const generateUploadUrl = useMutation(api.files.generateUploadUrl);
    const [uploading, setUploading] = useState(false);

    const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            // Step 1: Get a short-lived upload URL
            const postUrl = await generateUploadUrl();

            // Step 2: POST the file to the URL
            const result = await fetch(postUrl, {
                method: "POST",
                headers: { "Content-Type": file.type },
                body: file,
            });

            const { storageId } = await result.json();

            // Step 3: Save the newly allocated storage id to the component props
            setProp((props: ImageProps) => {
                props.storageId = storageId;
            });
        } catch (error) {
            console.error("Upload failed:", error);
            alert("Upload failed. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <h4>Image Settings</h4>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Upload Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    disabled={uploading}
                />
                {uploading && <p>Uploading...</p>}
            </div>
        </div>
    );
};

Image.craft = {
    displayName: "Image",
    props: {
        storageId: "",
        alt: "Image",
        width: "100%",
        height: "auto",
    },
    related: {
        settings: ImageSettings,
    },
};
