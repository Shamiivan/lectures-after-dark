import { Button as MaterialButton, type ButtonProps as MaterialButtonProps } from "@mui/material";
import { useNode } from "@craftjs/core";

export interface ButtonProps extends Omit<MaterialButtonProps, 'classes'> {
    size?: "small" | "medium" | "large";
    variant?: "text" | "outlined" | "contained";
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    children?: React.ReactNode;
    text?: string;
    margin?: string;
    padding?: string;
}

export const Button = ({ size, variant, color, children, text, margin = "0px", padding = "0px", ...props }: ButtonProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <MaterialButton
            ref={(ref: any) => connect(drag(ref))}
            size={size}
            variant={variant}
            color={color}
            style={{ margin, padding }}
            {...props}
        >
            {children || text}
        </MaterialButton>
    );
};

const ButtonSettings = () => {
    const { actions: { setProp }, text, size, variant, color, margin, padding } = useNode((node) => ({
        text: node.data.props.text,
        size: node.data.props.size,
        variant: node.data.props.variant,
        color: node.data.props.color,
        margin: node.data.props.margin,
        padding: node.data.props.padding,
    }));

    return (
        <>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "12px", color: "#666" }}>Text</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setProp((props: any) => props.text = e.target.value)}
                    style={{ width: "100%", padding: "5px", border: "1px solid #e0e0e0", borderRadius: "4px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "12px", color: "#666" }}>Size</label>
                <select
                    value={size}
                    onChange={(e) => setProp((props: any) => props.size = e.target.value)}
                    style={{ width: "100%", padding: "5px", border: "1px solid #e0e0e0", borderRadius: "4px" }}
                >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "12px", color: "#666" }}>Variant</label>
                <select
                    value={variant}
                    onChange={(e) => setProp((props: any) => props.variant = e.target.value)}
                    style={{ width: "100%", padding: "5px", border: "1px solid #e0e0e0", borderRadius: "4px" }}
                >
                    <option value="text">Text</option>
                    <option value="outlined">Outlined</option>
                    <option value="contained">Contained</option>
                </select>
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "12px", color: "#666" }}>Color</label>
                <select
                    value={color}
                    onChange={(e) => setProp((props: any) => props.color = e.target.value)}
                    style={{ width: "100%", padding: "5px", border: "1px solid #e0e0e0", borderRadius: "4px" }}
                >
                    <option value="inherit">Inherit</option>
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                    <option value="info">Info</option>
                    <option value="warning">Warning</option>
                </select>
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "12px", color: "#666" }}>Margin</label>
                <input
                    type="text"
                    value={margin || ""}
                    onChange={(e) => setProp((props: any) => props.margin = e.target.value)}
                    style={{ width: "100%", padding: "5px", border: "1px solid #e0e0e0", borderRadius: "4px" }}
                    placeholder="e.g., 10px or 10px 20px"
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "12px", color: "#666" }}>Padding</label>
                <input
                    type="text"
                    value={padding || ""}
                    onChange={(e) => setProp((props: any) => props.padding = e.target.value)}
                    style={{ width: "100%", padding: "5px", border: "1px solid #e0e0e0", borderRadius: "4px" }}
                    placeholder="e.g., 10px or 10px 20px"
                />
            </div>
        </>
    );
};

Button.craft = {
    displayName: "Button",
    props: {
        size: "small",
        variant: "contained",
        color: "primary",
        text: "Click me",
        margin: "0px",
        padding: "0px",
    },
    related: {
        settings: ButtonSettings,
    },
    rules: {
        canDrag: () => true,
    }
}
