export interface EncounterData {
  book: string;
  page: string;
  title: string;
  description: string;
}

export const gmGuideMatrix: Record<number, Record<string, number>> = {
  41: { plains: 1, forest: 1, dark_forest: 1, hills: 1, mountains: 1, lake: 0, marsh: 1, quagmire: 1, ruins: 1 },
  42: { plains: 16, forest: 16, dark_forest: 1, hills: 2, mountains: 35, lake: 0, marsh: 5, quagmire: 4, ruins: 4 },
  43: { plains: 2, forest: 17, dark_forest: 18, hills: 31, mountains: 31, lake: 1, marsh: 9, quagmire: 5, ruins: 5 },
  44: { plains: 3, forest: 18, dark_forest: 19, hills: 21, mountains: 21, lake: 1, marsh: 9, quagmire: 7, ruins: 6 },
  45: { plains: 4, forest: 2, dark_forest: 20, hills: 22, mountains: 22, lake: 38, marsh: 11, quagmire: 8, ruins: 8 },
  46: { plains: 5, forest: 28, dark_forest: 21, hills: 3, mountains: 4, lake: 38, marsh: 12, quagmire: 9, ruins: 9 },
  51: { plains: 6, forest: 3, dark_forest: 3, hills: 4, mountains: 5, lake: 4, marsh: 12, quagmire: 10, ruins: 9 },
  52: { plains: 7, forest: 6, dark_forest: 25, hills: 5, mountains: 23, lake: 4, marsh: 13, quagmire: 11, ruins: 9 },
  53: { plains: 34, forest: 7, dark_forest: 24, hills: 7, mountains: 7, lake: 39, marsh: 16, quagmire: 12, ruins: 11 },
  54: { plains: 8, forest: 34, dark_forest: 9, hills: 33, mountains: 33, lake: 39, marsh: 18, quagmire: 13, ruins: 12 },
  55: { plains: 9, forest: 8, dark_forest: 9, hills: 34, mountains: 36, lake: 39, marsh: 21, quagmire: 14, ruins: 13 },
  56: { plains: 10, forest: 24, dark_forest: 10, hills: 24, mountains: 24, lake: 39, marsh: 29, quagmire: 16, ruins: 21 },
  61: { plains: 11, forest: 9, dark_forest: 11, hills: 9, mountains: 9, lake: 5, marsh: 30, quagmire: 21, ruins: 21 },
  62: { plains: 12, forest: 10, dark_forest: 12, hills: 32, mountains: 32, lake: 5, marsh: 38, quagmire: 23, ruins: 24 },
  63: { plains: 13, forest: 11, dark_forest: 13, hills: 11, mountains: 11, lake: 40, marsh: 40, quagmire: 29, ruins: 29 },
  64: { plains: 14, forest: 12, dark_forest: 29, hills: 12, mountains: 12, lake: 40, marsh: 41, quagmire: 30, ruins: 30 },
  65: { plains: 15, forest: 13, dark_forest: 27, hills: 13, mountains: 13, lake: 41, marsh: 42, quagmire: 34, ruins: 34 },
  66: { plains: 30, forest: 26, dark_forest: 30, hills: 14, mountains: 37, lake: 41, marsh: 42, quagmire: 42, ruins: 43 }
};

export const gmGuideEncounters: Record<number, EncounterData> = {
  1: { book: "Manual de la Directora de Juego", page: "147", title: "LA NIEBLA DE SANGRE", description: "Todo ocurre de manera casi imperceptible. Al principio, todos los sonidos se extinguen y lo único que oís es vuestra propia charla. Entonces sentís que se os eriza el pelo de la nuca, como si el aire estuviera lleno de electricidad... Un terror profundo y primigenio se apodera de vosotras. Sentís la imperiosa necesidad de huir de inmediato, sea como sea. Unos segundos después, todo ocurre de verdad. La Niebla de Sangre surge de repente de la tierra húmeda, densa y roja y bloquea toda visión. A su paso arrastra algo que hace que la sangre se os hiele en las venas... y viene a por vosotras. Tras pasar un tiempo en la Niebla de Sangre, las aventureras serán atacadas por un sanguino. Podrán darse cuenta del ataque si superan sendas tiradas de ATLETISMO (para aguantar hasta el momento del ataque) y PERSPICACIA (si no se han ocultado)." },
  2: { book: "Manual de la Directora de Juego", page: "148", title: "DUELO EN LOS BOSQUES", description: "Oís sonido de lucha y gritos violentos mezclados con alaridos y canciones de batalla. Un poco más adelante hay un orco batiéndose en duelo con una elfa tatuada. Se lanzan el uno contra el otro y se paran los golpes sin conseguir darse. De vez en cuando se detienen para lanzarse insultos. La elfa Heldemin y el herrero orco Alakran tienen una historia trágica. El clan de orcos Urhur capturó al grupo de aventureros de Heldemin en los años que precedieron al Levantamiento de Hierro y forzó a las elfas y los humanos a ser sus esclavos. Heldemin conoció a Alakran, trabaron amistad y ambos fueron repudiados y desterrados. Si Alakran no limpiaba su honor matando a la elfa o viceversa, ninguno sería bienvenido por su pueblo, por lo que su extraño duelo ha durado semanas. Ya no se acuerdan de qué les hizo enfadar en un primer momento; ahora solo están cansados e irritados. Si las aventureras entablan conversación con la pareja es posible que dejen de pelear y ambos se unan al grupo, siempre que ninguno pierda el honor. Tienen recursos, pero se han quedado sin comida." },
  3: { book: "Manual de la Directora de Juego", page: "149", title: "EL ORCO FUGITIVO", description: "Primero oís una canción gutural, «Msshamassh, gukkul, gukkul» y el sonido de un tambor que marca el ritmo. Entonces veis un grupo de orcos que caminan en una caótica procesión, cantando el himno. En medio del grupo, dos de los orcos llevan un enorme palo de madera del que cuelga un orco indefenso atado de pies y manos. Lo llevan de vuelta a su clan. El grupo forma parte del clan Urhur y el orco atrapado es Sargah. Intentó desertar pero lo persiguieron y ahora está siendo llevado ante el consejo de ancianos para enfrentarse al castigo. Las aventureras que puedan escabullirse del grupo podrán encontrar a Sargah abandonado y atado cerca del camino en un campamento para pasar la noche. Si lo salvan les jurará lealtad eterna, pero huirá en la primera oportunidad que tenga. En caso de que se produzca una pelea, los orcos son tres veces más que las aventureras." },
  4: { book: "Manual de la Directora de Juego", page: "149", title: "MUERTE DESDE EL AIRE", description: "Oís un chillido que hiela la sangre que viene del cielo y, al momento siguiente, el batir de unas pesadas alas. Entonces lo veis. Un enorme pájaro demoníaco desciende desde las nubes. Os ve, vira en el aire y se lanza en picado a por vuestro grupo. Las aventureras han entrado de repente en el territorio de caza de un grifo. El grifo les advertirá mediante su grito desgarrador, pero si el grupo se mantiene firme el grifo atacará y el combate será a muerte. Si se dan la vuelta y deciden caminar en otra dirección y alejarse del nido del grifo, la fiera las dejará marchar." },
  5: { book: "Manual de la Directora de Juego", page: "149", title: "EL BANQUETE DE LAS ARPÍAS", description: "Incluso antes de verlas, el viento os trae un fuerte hedor a muerte y podredumbre, un olor empalagoso al que se suma un sonido chirriante parecido al lloro de un recién nacido. Son arpías. Tres pesadas y sucias criaturas vuelan por encima de las copas de los árboles e inmediatamente vuelven su atención hacia vosotras. Las arpías, Krag, Mag y Serag, andan buscando el almuerzo de hoy, e irán a por las aventureras (a menos que haya algo cerca de aspecto más tentador). En combate son letales, pero muy codiciosas y fáciles de distraer si ven oro u otros tesoros que brillen en el suelo, se centrarán por completo en su hallazgo. A veces se pelean por objetos y dejan a sus víctimas escapar." }
  6: { 
    book: "Manual de la Directora de Juego", 
    page: "150", 
    title: "EL CABALLO", 
    description: "Oís el relincho de un caballo y de repente lo tenéis delante. Un orgulloso semental con silla, manta y alforjas. No se ve a su dueño por ninguna parte. El caballo solitario sacude la cabeza, claramente frustrado. El caballo pertenece al noble Lavide, que murió en una emboscada hace dos días. En las alforjas de su silla hay un hallazgo VALIOSO, además del sello de la casa noble del dueño, que tiene forma de rosa. El caballo está entrenado para el combate, pero no le gustan mucho los desconocidos. Sin embargo, superar una tirada de TRATO CON ANIMALES lo calmará. Si la tirada falla, las aventureras tendrán que capturarlo por la fuerza. Si devuelven el caballo y el sello a la familia de Lavide, que vive en un castillo cercano, esta les regalará el caballo, junto con un hallazgo PRECIADO." 
  },
  7: { 
    book: "Manual de la Directora de Juego", 
    page: "150", 
    title: "LA MASACRE CEBO", 
    description: "Frente a vosotras se extiende una escena terrible: una docena de humanos empapados en sangre, algunos arrastrándose por el suelo con las tripas fuera, aún vivos. Hay un carro de mercancías volcado. Unas pocas personas gimen, otras gritan. Una mujer con cota de malla intenta levantar una espada. Al veros, un joven comparativamente ileso grita histéricamente: —¡Ladrones! Se han llevado nuestros caballos. ¿Tenéis agua? ¿Alguna de vosotras es sanadora? ¡No, hermano, no te duermas! En realidad, todo es un montaje y nadie está herido. Un grupo de esclavistas se ha cubierto de sangre e intestinos de animales para intentar hacer que las aventureras se acerquen a ellos con las armas envainadas. El líder, Harwa, tiene un cuerno de bronce y, cuando lo toca, todo el grupo debe ponerse en pie inmediatamente y atacar a sus «salvadoras». Su objetivo no es matar, sino dejar a las aventureras fuera de combate con sus porras y luego venderlas como esclavas." 
  },
  8: { 
    book: "Manual de la Directora de Juego", 
    page: "150", 
    title: "EL GRAN OFENSOR", 
    description: "Una voz fuerte y agitada atraviesa el paisaje. Alguien está gritando burlas e insultos. Cuando os acercáis, veis una tambaleante estructura de madera que se eleva unos metros sobre el suelo. Sobre ella hay un pequeño orco de mirada altanera. Cuando os ve, se desabrocha los calzones y orina en vuestra dirección, sin parar de lanzar insultos. El orco Khardnal se autoproclama «el Gran Provocador» y quiere despertar a la gente de su sueño. Khardnal considera su misión personal extender su palabra y provocar a los transeúntes para hacer que liberen su rabia interior. Si las aventureras lo atacan, Khardnal utilizará un arco o un hacha y un escudo. Luchará hasta la muerte mientras provoca a sus oponentes y al mismo tiempo las elogia por estar en contacto con su rabia interior." 
  },
  9: { 
    book: "Manual de la Directora de Juego", 
    page: "151", 
    title: "LAS RUINAS DE ANTAÑO", 
    description: "Ante vosotras veis los fragmentados restos de lo que una vez fue un edificio, un bastión de civilización en las tierras agrestes. Ahora la naturaleza ha reclamado su lugar y no quedan más que unos restos caídos y recuerdos perdidos entre las nieblas de la historia. Las aventureras han encontrado unas ruinas adecuadas como lugar seguro para acampar. Para decidir el tipo de ruinas y quién vivió aquí, tira un D66:\n11–16: Cabaña (Pareja de ancianos)\n21–24: Molino (Molinero, enterrado atrás)\n25–32: Puesto de guardia (Explorador muerto)\n33–35: Templo (Hermanas del Cuervo asesinadas)\n36–46: Granja (Mercader rico, muerto hace mucho)\n51–54: Torre (Hechicero perdido)\n55–62: Puesto avanzado (Soldados aliseos)\n64–64: Fonda (Viajeros de antes de la Niebla)." 
  },
  10: { 
    book: "Manual de la Directora de Juego", 
    page: "151", 
    title: "EL ZORRO", 
    description: "Una extraña canción resuena por la tierra. Una áspera voz masculina canta sobre flores moradas y tumbas profundas allá donde el cielo y la tierra se dan encuentro. Nunca habíais oído una canción como esta. Al doblar un recodo del camino, os encontráis de repente cara a cara con un zorrito. Os mira con los ojos muy abiertos. La canción ha cesado. En realidad, el zorro es un demonio llamado Grelf y es quien estaba cantando. Sin embargo, Grelf se enorgullece de meterse en su personaje de zorro y prefiere no cantar ni hablar mientras esté cerca de las aventureras. Como es un demonio curioso, Grelf las seguirá de cerca. Grelf puede transformarse en demonio en cualquier momento (utiliza las tablas de creación de demonios)." 
  },
  11: { 
    book: "Manual de la Directora de Juego", 
    page: "152", 
    title: "EL PRÍNCIPE OLVIDADO", 
    description: "Una enorme pila de pesadas rocas, amontonadas unas sobre otras formando un monumento que reconocéis. Alguien ha invertido un obvio esfuerzo en construir el túmulo y bajo él hay enterrado algo o alguien. Un príncipe aliseo, cuyo nombre fue olvidado hace mucho, cayó en batalla hace cientos de años y fue enterrado aquí junto a su caballo y dos caballeros leales. La tumba contiene un collar de plata, una vieja espada ancha y un trozo de cota de malla oxidada. Si las aventureras deciden buscar tesoros, ¡el príncipe despertará de su sueño y las atacará como un caballero de la Muerte!" 
  },
  12: { 
    book: "Manual de la Directora de Juego", 
    page: "152", 
    title: "LOS LADRONES HAMBRIENTOS", 
    description: "Un grupo de humanos desaliñados vestidos con ropas gastadas y equipados con todo tipo de armas sencillas sale al camino. Están sucios y parece que llevan varios días sin tomar una comida decente. Un hombre grande con barba negra da un paso adelante, escupe y se lleva la mano a la espada. —¿Quién puñetas sois vosotras? ¿A qué habéis venío? ¿Ejque no sabéis quién soy yo? Un grupo de ladrones muertos de hambre, liderados por Argam Dosbarbas, está pasando una mala racha y va en busca de un botín. Los ladrones están cansados y es posible convencerlos hablando de compartir el campamento si las aventureras les ofrecen comida e historias." 
  },
  13: { 
    book: "Manual de la Directora de Juego", 
    page: "153", 
    title: "EL HERMANO PLAGA", 
    description: "Os encontráis frente a los restos putrefactos de un desafortunado viajero. Los cuervos y las alimañas ya han hecho su parte. El muerto era un hermano herrumbroso llamado Lagras, castigado con la Peste Demoníaca (virulencia 3). Toda aventurera que toque el cadáver quedará infectada. Durante la infección, la víctima tendrá fuertes alucinaciones en las que verá demonios retorcidos en lugar de personas. El cadáver también tiene un sencillo medallón de bronce de los Hermanos Herrumbrosos." 
  },
  14: { 
    book: "Manual de la Directora de Juego", 
    page: "153", 
    title: "LOS FLAGELANTES", 
    description: "Se acerca una gran procesión. Sus integrantes, vestidos de negro y envueltos en ramas de zarza, se azotan y golpean a sí mismos. Varios se han cortado la lengua o las orejas. En medio de la multitud hay una construcción de madera de donde cuelgan personas desnudas con ganchos insertos bajo la piel. La líder de los sectarios es la madre Catyala, quien predica que la única forma de salvar las Tierras Prohibidas es castigarse. Intentará convencer a las aventureras de que se despojen de equipo y ropas usando un símbolo de hierro con el conjuro ILUSIÓN. Si fallan PERSPICACIA, verán el mundo a través de los locos ojos de Catyala." 
  },
  15: { 
    book: "Manual de la Directora de Juego", 
    page: "154", 
    title: "MENDIGOS", 
    description: "A lo lejos veis una muchedumbre de vagabundos hambrientos y cansados vestidos con harapos. Los mendigos os rodean con las manos extendidas, sin decir nada. Esta veintena de mendigos es lo que queda del pueblo de Sotofrey, que fue quemado hasta los cimientos por unos codiciosos aventureros." 
  },
  16: { 
    book: "Manual de la Directora de Juego", 
    page: "154", 
    title: "EL PILOTO DE GLOBO ENANO", 
    description: "En la lejanía veis una especie de capullo verde sobre un árbol. Al acercaros veis que se trata de un globo aerostático enganchado en la copa. El enano Andred abjuró del dios Gran y juró no volver a tocar el suelo tras perder a su familia en una mina. Ahora se ha estrellado, roto una pierna y necesita ayuda para reparar el globo sin tocar el piso. Tiene tres ballestas cargadas y desconfía de que le roben sus valiosos hallazgos almacenados a bordo." 
  },
  17: { 
    book: "Manual de la Directora de Juego", 
    page: "154", 
    title: "BODA", 
    description: "En la lejanía se oye música y jolgorio, voces humanas y graves voces de orcos. En el borde de un claro hay una mujer orco (Tregga) y un humano (Robert) vestidos de blanco a punto de casarse. Han reunido a familiares y amigos. Sin embargo, algunos invitados racistas han decidido sabotear la boda empezando una pelea mortal durante la ceremonia. Las aventureras pueden unirse, mirar o intentar poner fin a la sangrienta reyerta." 
  },
  18: { 
    book: "Manual de la Directora de Juego", 
    page: "155", 
    title: "EL PANADERO DEMONÍACO", 
    description: "Una casita huele a pan recién hecho. Es el hogar de Melkar, un robusto mediano que encontró rocas demoníacas y las usa como horno para animar a criaturas de masa como sus soldados. Ofrecerá té y pastas, pero si descubren a sus 20 criaturas escondidas y le atacan, los enviará al combate. (Sus ataques tienen daño de arma 1). Si el grupo se queda o vuelve más tarde, Melkar se volverá un tirano opresor que intenta conquistar pueblos con su ejército de pan." 
  },
  19: { 
    book: "Manual de la Directora de Juego", 
    page: "156", 
    title: "EL SANTUARIO ANIMAL", 
    description: "Cuando la oscuridad se extiende, miles de ojos de animales rodean vuestro campamento. Ciervos, zorros, lobos, jabalíes e insectos se acercan lentamente. Las aventureras han acampado en un santuario secreto. Los animales las empujarán pacíficamente para expulsarlas. Al final llegará un colosal alce negro, el líder sagrado. Si el grupo ataca al alce, absolutamente todos los animales del bosque enfurecerán y atacarán hasta que huyan." 
  }
};
