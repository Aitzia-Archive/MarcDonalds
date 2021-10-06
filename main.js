const Discord = require("discord.js");
const {Client, RichEmbed} = require("discord.js");
const app = new Client();
const PREFIX = '-'
const TOKEN = ''

app.on('ready', () => {
    console.log('OK')
})

app.on('message', message => {

    if(message.content.startsWith(PREFIX + 'menu')) {
        const EmbedMenu = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("MarcDonald's Menu")
            .setDescription('Elija su pedido!')
            .setFooter("MarcBurguesas: 24 Elementos\nMarcComplementos: 16 Elementos\nMarcPostres: 20 Elementos\nPacks para compartir MarcAuto: 3 Elementos\nMarcCafé: 4 Categorías\nMarcBreakfast: 7 Elementos\nMarcBebidas: 13 Elementos")

        message.channel.send(EmbedMenu);
    }

    if(message.content.startsWith(PREFIX + 'MarcBurguesas')) {
        const EmbedBurger = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("MarcBurguesas:")
            .setDescription('Elija su MarcBurguer!')
            .setFooter("Happy Marc - 1L€\nBig Marc - 1,50L€\nMarcRoyale Deluxe - 2L€\nMarcCuarto de Libra - 2L€\nMarcPollo - 1,50L€\nMarcCBO - 2.5L€\nMarcCBO x Aitana - 3,50L€\nSignature Collection by MarcDonald's Queso de Cabra - 4L€\nSignature Collection by MarcDonald's Queso de Cabra Doble - 5L€\nAmerican Style MarcChicken Honey Mustard - 4L€\nAmerican Style MarcChicken Creamy Parmesan - 4L€\nGrand MarcExtreme de MarcDonald’s Cheesy Buffalo - 4L€\nGrand MarcExtreme de MarcDonald’s Cheesy Buffalo Doble - 5L€\nGrand MarcExtreme de MarcDonald's Bacon - 4L€\nGrand MarcExtreme de MarcDonald's Bacon Doble - 5L€\nMarcburguesa - 1,50L€\nMarcburguesa con queso - 1,80L€\nMarcChicken & Cheese - 2,90L€\nMarcWrap Chicken crujiente & Bacon - 3,60L€\nChicken Marcger BBQ - 2,30L€\nMarcFilete de pescado - 3L€\nMarcFish - 3L€\nBig Double MarcCheese - 4L€\nMarcChicken BBQ & Mayo - 3,90L€")

        message.channel.send(EmbedBurger);
    }

    if(message.content.startsWith(PREFIX + 'MarcComplementos')) {
        const EmbedComp = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("MarcComplementos:")
            .setDescription('Elija su MarcComplemento!')
            .setFooter("MarcShake Fries - 2,50L€\nMarcShake Fries Deluxe - 3L€\nTop MrcFries Bacon & MarcCheese - 2,50L€\nTop MarcFries Bacon & MarcCheese Deluxe - 3L€\nMarctatas Fritas - 1,50L€\nMarctatas Deluxe - 2L€\nMarcNuggets de Pollo - 2,50L€\nChicken MarcBites - 2,50L€\nMaxhy Cubo 25 MarcNuggets - 4,50L€\nHappy MarCherritos - 1L€\nMarclitas de pollo - 1,75L€\nMaxhy Cubo 10 Alitas + 10 MarcNuggets - 4,50L€\nMarczpacho - 2L€\nMarcsalada de la huerta - 2,30L€\nEnsalada césar con pollo crujiente - 2,75L€\nEnsalada queso de cabra - 2,65L€")

        message.channel.send(EmbedComp);
    }

    if(message.content.startsWith(PREFIX + 'MarcPostre')) {
        const EmbedPostres = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("MarcPostre:")
            .setDescription('Elija su MarcPostre!')
            .setFooter("MarcFlurry Oreo Crema de Cacahuete - 2L€\nMarcFlurry Conguitos Chocolate con leche - 2L€\nMarcFlurry Conguitos Chocolate blanco - 2L€\nMarcFlurry KitKat - 2L€\nMarcFlurry Oreo - 2L€\nMarcFlurry Oreo Chocolate Blanco - 2L€\nMarcApple Pie 1,75L€\nMarCono de helado - 1,75L€\nMarcSundae Crema de Cacahuete - 2L€\nMarcSundae Chocolate - 2L€\nMarcSundae Caramelo - 2L€\nMarcSundae Fresa - 2L€\nMarcSundae Chocolate Blanco - 2L€\nMini MarcFlurry Conguitos Chocolate Blanco - 1,50L€\nMini MarcFlurry Conguitos Chocolate con Leche - 1,50L€\nMini MarcFlurry Oreo - 1,50L€\nMini MarcFlurry Kit Kat - 1,50L€\nMarcdonald's - Danonino Street Fresa - 1,50L€\nBolsa de Marczana - 1,50L€\nMarcPiña - 1,50L€")

        message.channel.send(EmbedPostres);
    }
    
    if(message.content.startsWith(PREFIX + 'MarcAuto')) {
        const EmbedAuto = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("Packs para compartir McAuto")
            .setDescription('Elija su MarcAuto!')
            .setFooter("1 MarcMenú Big Marc grande 1 MarcMenú MarcPollo grande 2 MarcFlurry - 7L€\n2 MarcMenú Big Marc grande 1 MarcMenú MarcPollo grande Maxhy Cubo 25 MarcNuggets - 7,1L€\n1 MarcMenú Big Marc grande 1 MarcMenú MarcPollo grande Happy Marcl 9 MarcNuggets - 9L€")

        message.channel.send(EmbedAuto);
    }

    if(message.content.startsWith(PREFIX + 'MarcCoffe')) {
        const EmbedCafe = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("MarcCafé:")
            .setDescription('Elija su categoria de MarcCafés!')
            .setFooter("MarcBebidas calientes - 8 Elementos (-MarcCafe1)\nMarcBebidas frías - 2 Elementos (-MarcCafe2)\nMarcProductos dulces - 8 Elementos (-MarcCafe3)\nMarcProductos salados - 4 Elementos (-MarcCafe4)")

        message.channel.send(EmbedCafe);
    }

    /////////////////MARCCAFE/////////////////

    if(message.content.startsWith(PREFIX + 'MarcCafe1')) {
        const EmbedCafe1 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("MarcBebidas calientes:")
            .setDescription('Elija su MarcBebida caliente!')
            .setFooter("MarcCafé Expresso - 2L€\nMarcpuccino - 2L€\nMarcCafé con leche - 2L€\nMarcCafé Americano - 2L€\nMarcCafé Vienés - 2L€\nMarcCaramel latte marcchiato grande - 2L€\nMarcChocolate latte marcchiato grande - 2L€\nMarcChai Latte - 2L€")

        message.channel.send(EmbedCafe1);
    }

    if(message.content.startsWith(PREFIX + 'MarcCafe2')) {
        const EmbedCafe2 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("MarcBebidas frias:")
            .setDescription('Elija su MarcBebida frias!')
            .setFooter("MarcBatido - 2L€\nMarcFrappe de Oreo - 2L€")

        message.channel.send(EmbedCafe2);
    }

    if(message.content.startsWith(PREFIX + 'MarcCafe3')) {
        const EmbedCafe3 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("MarcProductos dulces:")
            .setDescription('Elija su MarcProducto dulce!')
            .setFooter("MarcPops chocolate con avellana - 1,90L€\nMarcPops chocolate blanco - 1,90L€\nMarcCarrot cake - 1,90L€\nMarcCookie caramelo nueces de Pecán - 1,90L€\nMarcCookie chocolate - 1,90L€\nMarcCheesecake NY - Tarta de queso - 1,90L€\nMarcCookie caramelo + helado - 1,90L€")

        message.channel.send(EmbedCafe3);
    }

    if(message.content.startsWith(PREFIX + 'MarcCafe4')) {
        const EmbedCafe4 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("MarcProductos salados:")
            .setDescription('Elija su MarcProducto salado!')
            .setFooter("Deseo de tortilla de Marctata - 2L€\nMarcTostada ibérico - 2L€\nMarcCroissant de jamon y queso - 2,80L€\nMarcTostada marctequilla y mermelada de melocotón o fresa - 2,60L€")

        message.channel.send(EmbedCafe4);
    }

    //////////////////////////////////////////

    if(message.content.startsWith(PREFIX + 'MarcBreakfast')) {
        const EmbedBreakfast = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("MarcBreakfast:")
            .setDescription('Elija su MarcBreakfast!')
            .setFooter("MarcCroissant de Mantequilla - 2,10L€\nDeseo de Tortilla de Marctata - 2,25L€\nMarcTostada de Ibérico - 1,75L€\nMarcTostada con Aceite y Tomate - 2L€\nMarcffin de Chocolate - 2L€\nMarcRedondo Glaseado - 1,75L€\nMarcRedondo Bombón - 1,75L€")

        message.channel.send(EmbedBreakfast);
    }

    if(message.content.startsWith(PREFIX + 'MarcBebidas')) {
        const EmbedBebidas = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle("Marcbebidas:")
            .setDescription('Elija su MarcBebida!')
            .setFooter("MarcCoca-Cola - 2L€\nMarcCoca-Cola Light - 2L€\nMarcCoca-Cola Zero - 2L€\nMarcCoca-Cola Zero Zero - 2L€\nMarcFanta Naranja Zero - 2L€\nMarcSprite - 2L€\nMarcquarius Zero - 2L€\nMarcLipton Ice Tea - 2L€\nMarcCerveza Mahou - 2,50L€\nMarcCerveza sin alcohol - 2,50L€\nMarcTropicana Pure Premium Naranja - 2L€\nMarcTropicana Pure Premium Marczana - 2L€\nMarcAgua Mineral Nestlé Aquarel - 2L€")

        message.channel.send(EmbedBebidas);
    }
})

app.login(TOKEN);
