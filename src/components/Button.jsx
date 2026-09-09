import clsx from "clsx";

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  className,
  onClick,
  href,
  type = "button",
  target,
  rel,
  ...props
}) => {
  const classes = clsx(
    "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
    containerClass,
    className
  );

  const content = (
    <>
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </>
  );

  if (href) {
    return (
      <a
        id={id}
        href={href}
        onClick={onClick}
        className={classes}
        target={target}
        rel={rel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
