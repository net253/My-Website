const htmlLogo = "https://img.icons8.com/color/72/000000/html-5--v1.png";
const cssLogo = "https://img.icons8.com/color/72/000000/css3.png";
const javascriptLogo = "https://img.icons8.com/color/72/000000/javascript--v1.png";
const reactLogo = "https://img.icons8.com/officel/72/000000/react.png";
const nodejsLogo = "https://img.icons8.com/color/72/000000/nodejs.png";
const phpLogo = "https://img.icons8.com/dusk/72/000000/php-logo.png";
const pythonLogo = "https://img.icons8.com/color/72/000000/python--v1.png";
const mysqlLogo = "https://img.icons8.com/color/72/000000/mysql-logo.png";
const sqlserverLogo = "https://img.icons8.com/color/72/000000/microsoft-sql-server.png";


const frontIcon = "https://img.icons8.com/pastel-glyph/24/000000/web-design--v2.png";
const backIcon = "https://img.icons8.com/pastel-glyph/24/000000/code--v2.png";
const dbIcon = "https://img.icons8.com/pastel-glyph/26/000000/data-encryption.png";
const langIcon = "https://img.icons8.com/pastel-glyph/24/000000/translation.png";
const otherIcon = "https://img.icons8.com/ios-filled/24/000000/robot.png";

export const skillDetails = [
    {
        subject: "Front End",
        details: ["HTML", "CSS", "Javascript", "React.js"],
        logo: [htmlLogo, cssLogo, javascriptLogo, reactLogo],
        icon: frontIcon
    },
    {
        subject: "Back End",
        details: ["Node.js", "Express.js", "PHP", "Python"],
        logo: [nodejsLogo, phpLogo, pythonLogo],
        icon: backIcon
    },
    {
        subject: "DataBase",
        details: ["MySQL", "Microsoft SQL Server"],
        logo: [mysqlLogo, sqlserverLogo],
        icon: dbIcon
    },
    {
        subject: "Languages",
        details: [
            "Thai(Native)",
            "English(Good)",
            "Chinese(Fair) ",
        ],
        logo: [],
        icon: langIcon
    },
    {
        subject: "Other",
        details: [
            "Mitsubishi PLC",
            "Fanuc Robot",
            "Ansys",
            "ERP(SAP)",
            "Matlab",
            "Solidwork",
        ],
        logo: [],
        icon: otherIcon
    },
];