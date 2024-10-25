const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "../components/inatorscomponents");
const listFilePath = path.join(__dirname, "inators/list.tsx");

const getComponentCode = (filePath) => {
  return JSON.stringify(fs.readFileSync(filePath, "utf-8"));
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const generateTypesList = () => {
  const typesList = [];
  const importStatements = [];
  const componentMap = {};

  const componentFolders = fs.readdirSync(componentsDir);

  componentFolders.forEach((folder) => {
    const folderPath = path.join(componentsDir, folder);
    if (fs.lstatSync(folderPath).isDirectory()) {
      const componentFiles = fs.readdirSync(folderPath);

      componentFiles.forEach((file) => {
        const filePath = path.join(folderPath, file);
        const componentName = path.basename(file, path.extname(file));
        const componentCode = getComponentCode(filePath);
        const importName = capitalizeFirstLetter(componentName);

        importStatements.push(
          `import ${importName} from "@/components/inatorscomponents/${folder}/${componentName}";`
        );

        const mainType = folder.toLowerCase();
        if (!componentMap[mainType]) {
          componentMap[mainType] = [];
        }

        componentMap[mainType].push({
          name: importName,
          component: importName,
          installation: "",
          code: componentCode,
        });
      });
    }
  });

  for (const [mainType, components] of Object.entries(componentMap)) {
    typesList.push({
      component: mainType,
      types: components,
    });
  }

  return { typesList, importStatements };
};

const formatTypesList = (typesList) => {
  return typesList
    .map((type) => {
      const formattedTypes = type.types
        .map((t) => {
          const { name, installation, code } = t;
          return `{
        "name": "${name}",
        "component": <${t.component} />,
        "installation": \`${installation}\`,
        "code": ${code}
      }`;
        })
        .join(",\n");

      return `{
      "component": "${type.component}",
      "types": [
        ${formattedTypes}
      ]
    }`;
    })
    .join(",\n");
};

const updateListFile = (typesList, importStatements) => {
  const formattedTypesList = formatTypesList(typesList);

  const listFileContent = `
// import statements of all components
${importStatements.join("\n")}

// list
const Types = [
  ${formattedTypesList}
];

export default Types;
`;

  fs.writeFileSync(listFilePath, listFileContent, "utf-8");
};

const { typesList, importStatements } = generateTypesList();
updateListFile(typesList, importStatements);

console.log("Types list updated successfully.");
