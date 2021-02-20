let lang = prompt(`Enter the language code \n es for Spanish \n de for German \n en for Engish \n fr for French`);

switch (lang) {
    case "es": 
        window.console.info("Hello World translated in Spanish is: Hola Mundo");
        break;
    case "de": 
        window.console.info("Hello World translated in German is: Hallo Welt");
        break;
    case "en": 
        window.console.info("Hello World translated in English is: Hello World");
        break;
    case "fr": 
        window.console.info("Hello World translated in French is: Bonjour le monde");
        break;
    default:   
        window.console.info("Unknown language code greetings in English is: Hello World");
}