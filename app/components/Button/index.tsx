import styles from "./style.module.scss";
import clsx from "clsx";

interface IProps {
  onClick?: any;
  className?: any;
  buttonClass?: any;
  value?: string | number;
  label?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  isLoading?: boolean;
  children?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  onClick,
  className,
  buttonClass,
  value,
  id,
  name,
  disabled,
  isLoading,
  children,
  onMouseEnter,
  onMouseLeave,
  type,
}: IProps) => {
  const buttonClasses = clsx(
    styles.actionBtn,
    buttonClass ? buttonClass : styles.button,
    disabled && styles.disabled,
    isLoading && styles.loading
  );
  return (
    <div className={`${className ? className : ""}`}>
      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={buttonClasses}
        disabled={disabled || isLoading}
        onClick={onClick}
        value={value}
        id={id}
        name={name}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
