export default function Title({ title, align }) {
  return (
    <h1
      style={{
        textAlign: align,
      }}
      className="xsm:text-primary-title-mobile md:text-primary-title-tablet lg:text-primary-title  font-bold"
    >
      {title}
    </h1>
  );
}
