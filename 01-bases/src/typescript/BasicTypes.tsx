export const BasicTypes = () => {
  const name: string = "Milton Fabian";
  const age: number = 38;
  const isActive: boolean = true;

  const powers: string[] = ["React", "ReactNative", "Astro"];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} - {age} - {isActive ? "Activo" : "No Activo"}
      <p>{powers.join(", ")}</p>
    </>
  );
};
