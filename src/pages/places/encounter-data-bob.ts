import { EncounterData } from './encounter-data-gm';

// LA MATRIZ OFICIAL EXACTA DEL BOOK OF BEASTS
export const bookOfBeastsMatrix: Record<number, Record<string, number>> = {
  11: { forest: 0, dark_forest: 0, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  12: { forest: 0, dark_forest: 0, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  13: { forest: 0, dark_forest: 0, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  14: { forest: 0, dark_forest: 0, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  15: { forest: 0, dark_forest: 0, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  16: { forest: 0, dark_forest: 0, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  21: { forest: 1, dark_forest: 0, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  22: { forest: 2, dark_forest: 0, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  23: { forest: 3, dark_forest: 1, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  24: { forest: 5, dark_forest: 2, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  25: { forest: 8, dark_forest: 3, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  26: { forest: 9, dark_forest: 5, plains: 0, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  31: { forest: 10, dark_forest: 8, plains: 1, hills: 0, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  32: { forest: 11, dark_forest: 9, plains: 2, hills: 2, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  33: { forest: 12, dark_forest: 10, plains: 3, hills: 3, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  34: { forest: 13, dark_forest: 12, plains: 4, hills: 4, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  35: { forest: 14, dark_forest: 13, plains: 5, hills: 5, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  36: { forest: 15, dark_forest: 14, plains: 7, hills: 6, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  41: { forest: 16, dark_forest: 15, plains: 8, hills: 7, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  42: { forest: 17, dark_forest: 16, plains: 9, hills: 8, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  43: { forest: 18, dark_forest: 17, plains: 11, hills: 9, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  44: { forest: 19, dark_forest: 18, plains: 12, hills: 11, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  45: { forest: 20, dark_forest: 19, plains: 13, hills: 12, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  46: { forest: 22, dark_forest: 20, plains: 14, hills: 17, mountains: 0, lake: 0, quagmire: 0, marsh: 0, ruins: 0 },
  51: { forest: 23, dark_forest: 22, plains: 17, hills: 18, mountains: 0, lake: 0, quagmire: 1, marsh: 0, ruins: 0 },
  52: { forest: 24, dark_forest: 23, plains: 18, hills: 20, mountains: 0, lake: 0, quagmire: 2, marsh: 0, ruins: 0 },
  53: { forest: 26, dark_forest: 24, plains: 20, hills: 21, mountains: 0, lake: 0, quagmire: 5, marsh: 0, ruins: 0 },
  54: { forest: 27, dark_forest: 27, plains: 22, hills: 22, mountains: 0, lake: 0, quagmire: 9, marsh: 0, ruins: 0 },
  55: { forest: 28, dark_forest: 28, plains: 23, hills: 23, mountains: 0, lake: 0, quagmire: 12, marsh: 0, ruins: 0 },
  56: { forest: 29, dark_forest: 29, plains: 24, hills: 24, mountains: 0, lake: 0, quagmire: 18, marsh: 0, ruins: 0 },
  61: { forest: 30, dark_forest: 30, plains: 26, hills: 26, mountains: 0, lake: 0, quagmire: 20, marsh: 0, ruins: 0 },
  62: { forest: 31, dark_forest: 31, plains: 28, hills: 28, mountains: 0, lake: 0, quagmire: 22, marsh: 0, ruins: 0 },
  63: { forest: 32, dark_forest: 32, plains: 29, hills: 29, mountains: 6, lake: 0, quagmire: 23, marsh: 0, ruins: 2 },
  64: { forest: 33, dark_forest: 33, plains: 31, hills: 33, mountains: 21, lake: 0, quagmire: 24, marsh: 12, ruins: 14 },
  65: { forest: 34, dark_forest: 34, plains: 34, hills: 34, mountains: 28, lake: 25, quagmire: 26, marsh: 24, ruins: 18 },
  66: { forest: 35, dark_forest: 35, plains: 35, hills: 35, mountains: 34, lake: 36, quagmire: 34, marsh: 25, ruins: 34 }
};

export const bookOfBeastsEncounters: Record<number, EncounterData> = {
  1: { 
    book: "Book of Beasts", 
    page: "124", 
    title: "LA MANTÍCORA DANDO A LUZ", 
    description: "Un agonizante bramido resuena a través de la naturaleza, doblando árboles y ramas con su onda de sonido y sacudiendo la misma tierra bajo vuestros pies. El siguiente bramido casi os tira al suelo. No hay duda al respecto: una gran y poderosa bestia no muy lejos de aquí siente un inmenso dolor. Los bramidos provienen de una mantícora hembra dando a luz a una camada de cachorros monstruosos. Los personajes jugadores que sigan el ruido a través del terreno pronto encontrarán la guarida de la criatura. La mantícora descansa sobre una macabra cama de ramas, cráneos y huesos roídos. Sus cachorros recién nacidos ruedan por el suelo como bolas de pelo, cubiertos de mucosidad y sangre. De repente la madre abre su enorme boca y dos de los cachorros desaparecen entre su triple hilera de dientes con un sorbo sangriento. Con una tirada exitosa de SUPERVIVENCIA las aventureras recuerdan que las mantícoras siempre cazan en parejas. Desafortunadamente, este caso no es una excepción. Un macho sobreprotector acecha en la vegetación fuera de la guarida. Descubre a las aventureras justo cuando descubren la guarida. Se abalanzará sobre ellas en D6 rondas, y a menos que alguien en el grupo tenga éxito en una tirada enfrentada de EXPLORACIÓN contra el SIGILO de la mantícora macho (nivel de habilidad 4) el ataque cuenta como un Ataque Furtivo (Manual del Jugador, página 90). Para las estadísticas de la mantícora, ver página 111 en el Manual de la Directora de Juego." 
  },
  2: { 
    book: "Book of Beasts", 
    page: "124", 
    title: "LA PALOMA MUERTA", 
    description: "En el suelo frente a vosotras yace un pájaro muerto con sus alas grises moteadas extendidas. La causa de la muerte es una gruesa flecha de hierro con plumas de color azul brillante que ha perforado el pecho del pobre animal. Una tirada exitosa de TRATO CON ANIMALES identifica al pájaro como una paloma, probablemente del tipo que a menudo se usa como mensajeros alados en las Tierras Prohibidas. Las aventureras que examinen el cadáver encontrarán una diminuta cápsula de metal unida a una de las garras de la paloma. La cápsula está cerrada con llave, pero se puede abrir con una tirada de JUEGO DE MANOS. En el interior hay un trozo de pergamino enrollado cubierto de letras minúsculas. El texto está encriptado con un clásico código Algavardiano, lo que significa que las letras del mensaje oculto se han desplazado cuatro pasos a la derecha (A = D, B = E, etc.): ABXO PFPQBO QEB YIRB CIXJB EXP XTXHBKBA YBTXOB FQP TOXQE YOLQEBO KFDEQ (“Querida hermana/La llama azul ha despertado/Cuidado con su ira/Hermano noche”). Si les toma tiempo a los jugadores descifrar el código, la DJ puede permitirles hacer una tirada de LEYENDAS para comprender la lógica detrás de él y acceder al mensaje secreto. Depende de la DJ decidir qué significa realmente el mensaje." 
  },
  3: { 
    book: "Book of Beasts", 
    page: "125", 
    title: "EL HOMBRE DE LA JAULA DE HIERRO", 
    description: "Una gran jaula de hierro negro cuelga ominosamente de un árbol muerto cercano. Paja y huesos de prisioneros anteriores se pueden vislumbrar a través de los barrotes oxidados. En medio del desastre se sienta un hombre demacrado y de aspecto salvaje. Parece absorto limpiándose las uñas con un dedo de esqueleto arrancado, pero de repente levanta la vista y extiende los brazos hacia vosotras en un gesto implorante. El hombre de la barba asilvestrada se presenta como Ambrosius Klack. Afirma ser el espadachín más hábil y apuesto de las Tierras Prohibidas, encarcelado injustamente por un usurpador local debido a un leve malentendido amoroso. Si los personajes jugadores fuerzan la cerradura (JUEGO DE MANOS) y liberan a Ambrosius, él mostrará su gratitud llevándolos a un árbol hueco cercano, donde ha escondido un tesoro que ahora les ofrece como recompensa. Tira una vez en la tabla de Hallazgos Valiosos en Guaridas." 
  },
  4: { 
    book: "Book of Beasts", 
    page: "126", 
    title: "EL MURO DE GARMAR", 
    description: "Una estructura en ruinas emerge de repente del terreno. Son los restos de una muralla de hace mucho tiempo, mucho más alta que un ogro bien alimentado, que se eleva silenciosa y misteriosamente sobre el paisaje antiguo. Muchos de sus bloques de piedra están parcialmente erosionados y cubiertos con musgo y enredaderas. Al examinar la larga estructura, notáis varios agujeros enormes donde el muro se ha derrumbado, pero también algunas torres de vigilancia que se elevan por encima del resto de la muralla. A pesar de los estragos del tiempo, está claro que una vez fue una poderosa fortificación destinada a mantener a raya los horrores de las Tierras Prohibidas. Todo lo que queda del antiguo muro es la sección parcialmente derrumbada de 500 metros de largo que se levanta en el terreno frente a las aventureras. Sin embargo, en algunos lugares queda poco más que los cimientos de piedra, apenas perceptibles en el suelo bajo espinas y matas de hierba. El origen de la muralla se ha perdido en la antigüedad, pero una tirada exitosa de LEYENDAS sugiere que probablemente se trate de los restos del Muro de Garmar: una maravilla enana mencionada en canciones sobre la primera Guerra Alisea entre enanos y aliseos. Las aventureras que decidan explorar la muralla tarde o temprano se encontrarán con la cronista enana Grumhildur Cuarzo. Esta intrépida buscadora de la verdad del clan Belderan está buscando la tumba del líder enano Garmar Cuatrobarbas. Según la investigación de Grumhildur –de la cual alardeará felizmente ante cualquiera dispuesto a escuchar– la tumba de este legendario líder está rebosante de oro, artefactos y acero enano indestructible. Odia a los orcos y desconfía de los humanos, pero si las aventureras logran ganarse su confianza, puede mostrarles su mapa que indica que la tumba está ubicada junto a la sección del muro en cuestión. Su punto de referencia es una torre específica, que según los registros más antiguos solía ser el punto central de los \"fuegos enanos\" del muro: un ingenioso sistema de fuegos de señales creado por los antiguos cantores de piedra – mucho más avanzado que las almenaras primitivas usadas por los humanos, señala Grumhildur. Después de un Cuarto de Día, las aventureras dedicadas a la tarea encontrarán un símbolo que se asemeja a una llama grabado en la superficie exterior de una torre de vigilancia en ruinas. Grumhildur, o una tirada exitosa de LEYENDAS, identifica el símbolo como una antigua runa enana para \"fuego\", \"portador de luz\" o posiblemente \"advertencia\". Y, efectivamente: escondida bajo los matorrales espinosos está la entrada a una cámara subterránea. Dos enormes rocas bloquean la entrada, pero pueden ser retiradas con una tirada exitosa de FUERZA. Pero lo que aguarda en el otro lado no es la tumba de un líder, sino un demonio de fuego malhumorado que ha estado encerrado en este agujero inhóspito desde que tiene memoria. El demonio de fuego intenta abrirse paso luchando contra las aventureras y escapar, con un solo objetivo en mente: alejarse lo más posible de ese muro maldito – y prenderle fuego al mundo una vez más." 
  },
  5: { 
    book: "Book of Beasts", 
    page: "126", 
    title: "EL HUEVO PERDIDO", 
    description: "Algo liso y moteado sobresale del suelo detrás de unos montones de tierra excavada apresuradamente cerca de aquí. Podría ser el cuero cabelludo calvo de un goblin al acecho, pero al acercaros veis que es un huevo enorme incrustado en paja en el fondo de un pozo profundo. La cáscara del huevo está moteada en colores naturales apagados y parece tan sólida como la roca. Con una tirada exitosa de TRATO CON ANIMALES las aventureras se dan cuenta de que probablemente provenga de un reptil de buen tamaño en lugar de un ave grande, aunque por supuesto hay leyendas sobre el ave titánica conocida como el roc. Requiere una tirada exitosa de FUERZA mover el huevo del área, pero si se lleva a un pueblo cercano se puede vender a un precio de 2D6 monedas de plata. Si la DJ quiere desarrollar este encuentro aleatorio en una pequeña aventura, el huevo podría empezar a eclosionar un Cuarto de Día después de ser encontrado. Una red de grietas se extiende por la cáscara y un calor intenso empieza a irradiar desde el interior. En poco tiempo las aventureras oyen un extraño sonido siseante proveniente de las profundidades del huevo, que pronto es respondido por una versión más poderosa del mismo sonido desde un lugar más lejano. La madre ha vuelto para recibir a su retoño. La DJ elige un monstruo adecuado, pero un dragón, dracosierpe o hidra podría ser un adversario épico en un pequeño escenario." 
  },
  6: { 
    book: "Book of Beasts", 
    page: "127", 
    title: "TALLAS EN LA ROCA", 
    description: "Imponentes imágenes de monstruos, bestias y criaturas humanoides se pueden ver por toda una pared de roca cercana. Guerreros armados y campesinos arando aparecen en las escenas dramáticas. Las imágenes estilizadas están talladas directamente en la roca y coloreadas en tonos de rojo, azul y dorado. Con una tirada exitosa de LEYENDAS las aventureras reconocen varios símbolos de los antiguos dioses, en particular cuervos con serpientes retorciéndose en sus garras. Si sacan al menos dos equis (éxitos), las aventureras se dan cuenta de que el lugar está vinculado a los Aliseos y a los asentamientos humanos más antiguos de las Tierras Prohibidas." 
  },
  7: { 
    book: "Book of Beasts", 
    page: "127", 
    title: "EL DIOS OLVIDADO", 
    description: "La silueta de una enorme criatura humanoide se eleva desde el terreno. Es tan alta como varios hombres, pero afortunadamente no se mueve en absoluto. Pronto veis que es una estatua gigante de una criatura de dos piernas que sostiene una espada de dos manos aserrada contra su pecho. Si se acercan, las aventureras notan que la estatua puede tener un cuerpo humanoide, pero su rostro no es de este mundo y se asemeja al de un insecto con antenas, mandíbulas y ojos compuestos fijos. Con una tirada exitosa de LEYENDAS las aventureras recuerdan leyendas sobre un dios insectoide llamado Daño: una encarnación de la naturaleza salvaje e indómita, adorado por ciertas sociedades druídicas como un aspecto inusualmente caprichoso e incomprensible del omnipresente Caminante Nocturno." 
  },
  8: { 
    book: "Book of Beasts", 
    page: "128", 
    title: "EL ÁRBOL VIVIENTE", 
    description: "Un majestuoso roble se eleva hacia el cielo desde una pequeña colina cercana. El árbol se ve robusto y vital con sus gruesas ramas y su follaje brillante, pero también hay algo sumamente antiguo en él: algo que observa. Las aventureras que examinen el gran árbol y tengan éxito en una tirada de EXPLORACIÓN pueden hacer tres observaciones interesantes. Primero, las ramas del árbol se mueven constantemente, aunque no sopla nada de viento en el área. Segundo, su tronco y hojas brillan con un tono rojo dorado. Tercero, aquellos que peguen sus oídos al tronco pueden oír un débil zumbido. Con una tirada exitosa de LEYENDAS las aventureras reconocen unas pocas palabras élficas, y un PJ que pase un Cuarto de Día escuchando al árbol llega a escuchar una leyenda aleatoria. El zumbido proviene de un antiguo elfo silvano, cuyo rubí está incrustado dentro del árbol. El rubí está fuera del alcance de las aventureras, pero si deseas convertir este encuentro aleatorio en una pequeña aventura, el árbol podría cobrar vida en la forma de un ent (ver el Manual de la Directora de Juego, página 92)." 
  },
  9: { 
    book: "Book of Beasts", 
    page: "128", 
    title: "LA CACERÍA SALVAJE", 
    description: "Un joven con ropas salpicadas de sangre salta repentinamente al camino frente a vosotras. Por un breve y dramático momento vuestros ojos se encuentran. Ojos salvajes y presas del pánico os miran suplicantes, antes de que el hombre salga corriendo hacia el terreno. Unas cuantas respiraciones después llega un grupo de orcos salvajes de un tipo que nunca habéis visto antes: grandes, imponentes y asombrosamente similares a los humanos, y todas ellas son mujeres. Armadas con arcos y lanzas de caza, os miran fijamente con brillantes ojos amarillos. Su líder, que lleva nueve colas de zorro adornadas con perlas colgando por su espalda, os habla con una voz profunda pero sorprendentemente articulada: \"Forasteros, buscamos a la liebre humana, ¿la habéis visto bailar por aquí?\". Las orcos (tantas como las aventureras) son Viragas a la caza de un pobre joven que ha sido elegido como presa para uno de sus espeluznantes rituales de caza. Son sedientas de sangre y agresivas, pero están completamente absortas en el antiguo ritual. Es por eso que no atacarán a las aventureras, ya sea que las apunten hacia el joven o no. Sin embargo, lucharán hasta la última gota de sangre si las aventureras se interponen en su camino e intentan obstruir la persecución asesina. La presa es un prometedor alquimista a quien las Viragas han secuestrado de una fortaleza cercana donde trabajaba como creador de elixires para la familia del señor local. Los PJs que salven la vida del alquimista y lo lleven de vuelta a la fortaleza son recompensados con D10 monedas de plata cada uno, además de la amistad eterna del joven. Si no intervienen, más tarde encontrarán sus restos desollados cerca del camino, colgando de nueve colas de zorro entrelazadas en un nudoso árbol de sacrificios. Para las estadísticas de las Viraga, ver el Manual de la Directora de Juego, página 66." 
  },
  10: { 
    book: "Book of Beasts", 
    page: "129", 
    title: "UNA GUARDIA DE PIEDRA", 
    description: "La silueta de una figura humanoide se puede ver en la densa vegetación. La figura no responde cuando se le habla y parece estar casi antinaturalmente quieta. Las aventureras que se aventuren en la espesa maleza pronto descubrirán que la figura es de hecho una estatua cubierta de vegetación. Quitar la densa maraña de vegetación requiere una tirada exitosa de FUERZA. Escondida debajo de la vegetación hay una estatua bien hecha de una guerrera humana. En una mano sostiene una gruesa espada corta cuya empuñadura termina en una serpiente que se come a sí misma (uróboros). En la otra lleva la cabeza cortada de un Engendro demoníaco con retorcidos cuernos de carnero y una codiciosa cara de sapo. Las aventureras que tengan éxito con una tirada de LEYENDAS reconocen la forma de la empuñadura retorcida como un símbolo de la Congregación de la Serpiente. Si la tirada resulta en al menos dos equis (éxitos), también recuerdan leyendas sobre una guardia de doncellas escuderas que protegieron al Rey Algarod contra las hordas demoníacas de Zygofer durante la huida a Alderstone al final de la cuarta Guerra Alisea." 
  }
};
