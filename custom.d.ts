declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module "*.json" {
    const value: any;
    export default value;
}

declare module '*.css' {
    const content: { [className: string]: string } | string;
    export default content;
}

declare module '*.scss' {
    const content: { [className: string]: string } | string;
    export default content;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jfif' {
    const value: string;
    export default value;
}

declare module '*.webp' {
    const value: string;
    export default value;
}