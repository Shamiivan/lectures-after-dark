import { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { SpacingControl } from "../editor/SpacingControl";
import { ColorControl } from "../editor/ColorControl";
import {
    Box,
    Typography as MuiTypography,
    Select,
    MenuItem,
    TextField,
    ToggleButtonGroup,
    ToggleButton,
    Divider,
    Grid
} from "@mui/material";
import {
    AlignCenter,
    AlignLeft,
    AlignRight,
    Type,
    MoveVertical,
    LayoutGrid
} from "lucide-react";

export interface TextProps {
    text: string;
    fontSize?: string | number;
    fontFamily?: string;
    fontWeight?: string | number;
    lineHeight?: string | number;
    letterSpacing?: string | number;
    textAlign?: "left" | "center" | "right";
    tagName?: string;
    className?: string;
    margin?: string;
    padding?: string;
    color?: string;
    textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
}

export const Text = ({
    text,
    fontSize = 20,
    fontFamily = "'Playfair Display', serif",
    fontWeight = 400,
    lineHeight = 1.7,
    letterSpacing = "0px",
    textAlign = "left",
    tagName = "p",
    className,
    margin = "0px",
    padding = "0px",
    color = "var(--text-secondary)",
    textTransform = "none"
}: TextProps) => {
    const { connectors: { connect, drag }, actions: { setProp }, hasSelectedNode } = useNode((state) => ({
        hasSelectedNode: state.events.selected,
    }));

    const [editable, setEditable] = useState(false);

    useEffect(() => {
        if (!hasSelectedNode) setEditable(false);
    }, [hasSelectedNode]);

    const layoutStyles = {
        display: "inline-block",
        width: "100%",
        margin,
        padding,
    };

    const typographyStyles = {
        fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
        fontFamily,
        fontWeight,
        lineHeight,
        letterSpacing,
        textAlign,
        color,
        textTransform,
        margin: 0,
        outline: 'none',
    };

    return (
        <div
            ref={(ref: any) => connect(drag(ref))}
            onClick={() => hasSelectedNode && setEditable(true)}
            style={layoutStyles}
        >
            <ContentEditable
                html={text}
                disabled={!editable}
                onChange={(e) => setProp((props: any) => props.text = e.target.value)}
                tagName={tagName}
                className={className}
                style={typographyStyles}
            />
        </div>
    );
};

const TextSettings = () => {
    const {
        actions: { setProp },
        fontSize,
        fontFamily,
        fontWeight,
        lineHeight,
        letterSpacing,
        textAlign,
        margin,
        padding,
        color,
        textTransform
    } = useNode((node) => ({
        fontSize: node.data.props.fontSize,
        fontFamily: node.data.props.fontFamily,
        fontWeight: node.data.props.fontWeight,
        lineHeight: node.data.props.lineHeight,
        letterSpacing: node.data.props.letterSpacing,
        textAlign: node.data.props.textAlign,
        margin: node.data.props.margin,
        padding: node.data.props.padding,
        color: node.data.props.color,
        textTransform: node.data.props.textTransform,
    }));

    return (
        <Box sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <MuiTypography variant="subtitle2" sx={{ fontWeight: 600, color: '#fff' }}>Typography</MuiTypography>
                <LayoutGrid size={16} color="#888" />
            </Box>

            {/* Font Family */}
            <Select
                fullWidth
                size="small"
                value={fontFamily || "'Playfair Display', serif"}
                onChange={(e) => setProp((props: any) => props.fontFamily = e.target.value)}
                sx={{
                    bgcolor: '#222',
                    color: '#fff',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
                }}
            >
                <MenuItem value="'Oswald', sans-serif">Oswald</MenuItem>
                <MenuItem value="'Playfair Display', serif">Playfair Display</MenuItem>
                <MenuItem value="'Inter', sans-serif">Inter</MenuItem>
            </Select>

            {/* Weight, Size and Color */}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
                <Box sx={{ flex: 1 }}>
                    <MuiTypography variant="caption" sx={{ color: '#888', display: 'block', mb: 0.5 }}>Weight</MuiTypography>
                    <Select
                        fullWidth
                        size="small"
                        value={fontWeight || 400}
                        onChange={(e) => setProp((props: any) => props.fontWeight = e.target.value)}
                        sx={{
                            bgcolor: '#222',
                            color: '#fff',
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                        }}
                    >
                        <MenuItem value={300}>Light</MenuItem>
                        <MenuItem value={400}>Regular</MenuItem>
                        <MenuItem value={500}>Medium</MenuItem>
                        <MenuItem value={600}>Semi-Bold</MenuItem>
                        <MenuItem value={700}>Bold</MenuItem>
                    </Select>
                </Box>
                <Box>
                    <MuiTypography variant="caption" sx={{ color: '#888', display: 'block', mb: 0.5 }}>Size</MuiTypography>
                    <TextField
                        size="small"
                        type="number"
                        value={fontSize || 20}
                        onChange={(e) => setProp((props: any) => props.fontSize = parseInt(e.target.value))}
                        sx={{
                            width: '70px',
                            bgcolor: '#222',
                            '& .MuiInputBase-input': { color: '#fff', p: '8.5px 10px' },
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                        }}
                    />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <ColorControl
                        label="Color"
                        value={color || ''}
                        onChange={(val) => setProp((props: any) => props.color = val)}
                    />
                </Box>
            </Box>

            {/* Alignment and Case */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                    <MuiTypography variant="caption" sx={{ color: '#888', display: 'block', mb: 0.5 }}>Alignment</MuiTypography>
                    <ToggleButtonGroup
                        fullWidth
                        size="small"
                        value={textAlign || "left"}
                        exclusive
                        onChange={(_, val) => val && setProp((props: any) => props.textAlign = val)}
                        sx={{ bgcolor: '#222', '& .MuiToggleButton-root': { border: 'none', color: '#888', flex: 1, '&.Mui-selected': { color: '#fff', bgcolor: '#333' } } }}
                    >
                        <ToggleButton value="left"><AlignLeft size={16} /></ToggleButton>
                        <ToggleButton value="center"><AlignCenter size={16} /></ToggleButton>
                        <ToggleButton value="right"><AlignRight size={16} /></ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <MuiTypography variant="caption" sx={{ color: '#888', display: 'block', mb: 0.5 }}>Case</MuiTypography>
                    <ToggleButtonGroup
                        fullWidth
                        size="small"
                        value={textTransform || "none"}
                        exclusive
                        onChange={(_, val) => val && setProp((props: any) => props.textTransform = val)}
                        sx={{ bgcolor: '#222', '& .MuiToggleButton-root': { border: 'none', color: '#888', flex: 1, '&.Mui-selected': { color: '#fff', bgcolor: '#333' } } }}
                    >
                        <ToggleButton value="none" sx={{ textTransform: 'none', fontSize: '11px' }}>Aa</ToggleButton>
                        <ToggleButton value="uppercase" sx={{ textTransform: 'none', fontSize: '11px' }}>AA</ToggleButton>
                        <ToggleButton value="capitalize" sx={{ textTransform: 'none', fontSize: '11px' }}>Ab</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>

            {/* Line Height and Letter Spacing */}
            <Grid container spacing={1}>
                <Grid size={6}>
                    <MuiTypography variant="caption" sx={{ color: '#888', display: 'block', mb: 0.5 }}>Line height</MuiTypography>
                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#222', borderRadius: 1, border: '1px solid #444', p: 0.5 }}>
                        <MoveVertical size={14} color="#888" style={{ marginRight: 4 }} />
                        <TextField
                            variant="standard"
                            type="number"
                            value={lineHeight || 1.7}
                            onChange={(e) => setProp((props: any) => props.lineHeight = parseFloat(e.target.value))}
                            InputProps={{ disableUnderline: true, sx: { color: '#fff', fontSize: '13px' } }}
                        />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <MuiTypography variant="caption" sx={{ color: '#888', display: 'block', mb: 0.5 }}>Letter spacing</MuiTypography>
                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#222', borderRadius: 1, border: '1px solid #444', p: 0.5 }}>
                        <Type size={14} color="#888" style={{ marginRight: 4 }} />
                        <TextField
                            variant="standard"
                            value={letterSpacing || "0px"}
                            onChange={(e) => setProp((props: any) => props.letterSpacing = e.target.value)}
                            InputProps={{ disableUnderline: true, sx: { color: '#fff', fontSize: '13px' } }}
                        />
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={{ borderColor: '#333', my: 1 }} />

            <SpacingControl
                margin={margin}
                padding={padding}
                setProp={setProp}
            />
        </Box>
    );
};

Text.craft = {
    displayName: "Text",
    props: {
        text: "Hi",
        fontSize: 20,
        fontFamily: "'Playfair Display', serif",
        fontWeight: 400,
        lineHeight: 1.7,
        letterSpacing: "0px",
        textAlign: "left",
        tagName: "p",
        margin: "0px",
        padding: "0px",
        color: "var(--text-secondary)",
        textTransform: "none"
    },
    related: {
        settings: TextSettings,
    },
    rules: {
        canDrag: () => true,
    },
};
