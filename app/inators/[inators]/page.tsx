import PreviewComponent from "@/components/previewComponent";
import Types from "../list";

export default function Page({ params, searchParams }: any) {
  const selectedType = Types.find((type) => type.component === params.inators);

  //  console.log(selectedType?.types)

  return (
    <div>
      {selectedType?.types.map((type, index) => {
        return (
          <PreviewComponent
            code={type?.code}
            installation={type?.installation}
            key={index}
          >
            {type?.component}
          </PreviewComponent>
        );
      })}
    </div>
  );
}
