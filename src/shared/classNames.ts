type Props = string | { [key: string]: boolean } | undefined;

const classNames = (...props: Props[]): string => {
  const classes: string[] = [];

  props.forEach((className) => {
    if (className === undefined) {
      return;
    }

    if (typeof className === "string") {
      return classes.push(className);
    }

    Object.keys(className).forEach((key) => {
      if (className[key]) {
        classes.push(key);
      }
    });
  });

  return classes.join(" ");
};

export default classNames;
