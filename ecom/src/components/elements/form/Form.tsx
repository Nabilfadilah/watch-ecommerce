import React from "react";

// definisikan tipe untuk properti props
type FormProps = {
    children: React.ReactNode;
    className?: string;
    onSubmit?: () => void;
};

const Form: React.FC<FormProps> = ({
    children,
    className,
    onSubmit = () => {}
}) => {
    return (
        <form className={className} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form;