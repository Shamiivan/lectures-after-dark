import React from "react";
import { Paper, Box, Typography, TextField, Divider } from "@mui/material";
import { useNode } from "@craftjs/core";
import { SpacingControl } from "../editor/SpacingControl";
import { ColorControl } from "../editor/ColorControl";

export interface ContainerProps {
    background?: string;
    padding?: number | string;
    width?: string;
    height?: string;
    children?: React.ReactNode;
    margin?: string;
}

export const Container = ({ background, padding = 0, width, height, children, margin = "5px 0", ...props }: ContainerProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <Paper
            {...props}
            ref={(ref: any) => connect(drag(ref))}
            style={{ margin, background, padding: typeof padding === 'number' ? `${padding}px` : padding, width, height }}
        >
            {children}
        </Paper>
    );
};

const ContainerSettings = () => {
    const { actions: { setProp }, background, padding, width, height, margin } = useNode((node) => ({
        background: node.data.props.background,
        padding: node.data.props.padding,
        width: node.data.props.width,
        height: node.data.props.height,
        margin: node.data.props.margin,
    }));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <ColorControl
                label="Background Color"
                value={background || ''}
                onChange={(val) => setProp((props: any) => props.background = val)}
            />

            <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" sx={{ color: '#888', display: 'block', mb: 0.5 }}>Width</Typography>
                    <TextField
                        fullWidth
                        size="small"
                        value={width}
                        onChange={(e) => setProp((props: any) => props.width = e.target.value)}
                        sx={{
                            bgcolor: '#222',
                            '& .MuiInputBase-input': { color: '#fff', p: '8.5px 14px' },
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                        }}
                    />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" sx={{ color: '#888', display: 'block', mb: 0.5 }}>Height</Typography>
                    <TextField
                        fullWidth
                        size="small"
                        value={height}
                        onChange={(e) => setProp((props: any) => props.height = e.target.value)}
                        sx={{
                            bgcolor: '#222',
                            '& .MuiInputBase-input': { color: '#fff', p: '8.5px 14px' },
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                        }}
                    />
                </Box>
            </Box>

            <Divider sx={{ borderColor: '#333', my: 1 }} />

            <SpacingControl
                margin={margin}
                padding={padding}
                setProp={setProp}
            />
        </Box>
    );
};

Container.craft = {
    displayName: "Container",
    props: {
        background: "#eeeeee",
        padding: 20,
        width: "100%",
        height: "auto",
        margin: "5px 0",
    },
    related: {
        settings: ContainerSettings,
    },
    rules: {
        canDrag: () => true,
    }
}
