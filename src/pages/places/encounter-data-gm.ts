export interface EncounterData {
  book: string;
  page: string;
  title: string;
  description: string;
}

// Matriz oficial del Manual de la Directora (Tirada D66 cruzada con el Terreno)
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
  1: { 
    book: "Manual de la Directora de Juego", 
    page: "147", 
    title: "LA NIEBLA DE SANGRE", 
    description: "Todo ocurre de manera casi imperceptible. Al principio, todos los sonidos se extinguen y lo único que oís es vuestra propia charla. Entonces sentís que se os eriza el pelo de la nuca, como si el aire estuviera lleno de alguna energía extraña. Finalmente, la veis: la neblina carmesí que fluye hacia vosotras lentamente sobre el suelo. La Niebla de Sangre. Las aventureras se han metido en una bolsa de Niebla de Sangre viva. Viene de todas partes y forma un anillo alrededor del grupo. Si la vigía la descubre a tiempo, cada aventurera puede hacer una tirada de ATLETISMO para escapar trepando a un árbol o algo similar. Si la vigía falla la tirada, las aventureras quedan atrapadas en la Niebla de Sangre. Si una aventurera puede hacer la tirada de ATLETISMO pero falla, también queda atrapada en la Niebla de Sangre. En cualquier caso, la aventurera puede hacer otra tirada de ATLETISMO cada ronda para escapar. Una aventurera que quede sumida en la Niebla de Sangre debe hacer una tirada de PERSPICACIA cada ronda. Si la falla, sufre 1 punto de daño a Empatía y una intensa nostalgia por su hogar. Si la víctima cae Derrotada, pierde la voluntad de vivir y, simplemente, se sienta a esperar a la muerte. Las otras aventureras deberán arrastrarla hasta un lugar seguro. Tras pasar un tiempo en la Niebla de Sangre, las aventureras serán atacadas por un sanguino." 
  },
  2: { 
    book: "Manual de la Directora de Juego", 
    page: "148", 
    title: "DUELO EN LOS BOSQUES", 
    description: "Oís sonido de lucha y gritos violentos mezclados con alaridos y canciones de batalla. Un poco más adelante hay un orco batiéndose en duelo con una elfa tatuada. Se lanzan el uno contra el otro y se paran los golpes sin conseguir darse. De vez en cuando se detienen para lanzarse insultos. La elfa Heldemin, una recolectora de savia errante, llevaba mucho tiempo intentando acercarse al clan Roko para estudiar sus costumbres e intentar comprenderlos. Entonces conoció al herrero orco Alakran. Cuando descubrió que tenía una voz muy bonita para cantar, se le ocurrió que podrían hacer una obra de teatro y representarla tanto ante los orcos como ante los elfos. Como su amistad es bastante polémica, ensayan en un lugar apartado, en el bosque." 
  },
  3: { 
    book: "Manual de la Directora de Juego", 
    page: "149", 
    title: "EL ORCO FUGITIVO", 
    description: "Primero oís una canción gutural, «Msshamassh, gukkul, gukkul» y el sonido de un tambor que marca el ritmo. Entonces veis un grupo de orcos que caminan en una caótica procesión, cantando el himno. En medio del grupo, dos de los orcos llevan un enorme palo de madera del que cuelga un orco indefenso atado de pies y manos. Un grupo de orcos el doble de numeroso que las aventureras vuelve a su clan con el fugitivo Sargah, que huyó en busca de su destino en las Tierras Prohibidas. Los orcos tienen el perfil del orco úrhura." 
  },
  4: { 
    book: "Manual de la Directora de Juego", 
    page: "149", 
    title: "MUERTE DESDE EL AIRE", 
    description: "Oís un chillido que hiela la sangre que viene del cielo y, al momento siguiente, el batir de unas pesadas alas. Entonces lo veis. Un enorme pájaro demoníaco desciende desde las nubes. Os ve, vira en el aire y se lanza en picado a por vuestro grupo. Las aventureras han entrado de repente en el territorio de un grifo. Al principio, intentará asustar a las aventureras y medir sus fuerzas. Si las aventureras huyen por donde han venido, el grifo planeará en círculos sobre ellas, pero las dejará escapar. Si atacan al grifo o continúan adentrándose en su territorio, luchará hasta la muerte." 
  },
  5: { 
    book: "Manual de la Directora de Juego", 
    page: "149", 
    title: "EL BANQUETE DE LAS ARPÍAS", 
    description: "Primero oís los gritos: «¡Dameeee!», «¡Noooo, dameeee!», «¡Nooo, quieeero comeeerme a los pequeeñoooos!». Entonces divisáis a tres horribles criaturas con alas como de águila y cuerpos retorcidos, que se abalanzan aleteando sobre vosotros. ¡Arpías! Tres arpías hambrientas, Krag, Mag y Serag, atacan a las aventureras para darse un banquete con sus cadáveres. Durante el ataque, una de ellas descubrirá que una de las aventureras lleva un objeto brillante y empieza a gritar emocionada sobre «el tesoro». Esto les dará a las aventureras una oportunidad de usar la codicia de las arpías en su contra. Esta bandada de arpías tiene una Fortaleza combinada de 9." 
  },
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
    description: "Frente a vosotras se extiende una escena terrible: una docena de humanos empapados en sangre, algunos arrastrándose por el suelo con las tripas fuera, aún vivos. Hay un carro de mercancías volcado. Unas pocas personas gimen, otras gritan. Una mujer con cota de malla intenta levantar una espada. Al veros, un joven comparativamente ileso grita histéricamente: —¡Ladrones! Se han llevado nuestros caballos. ¿Tenéis agua? ¿Alguna de vosotras es sanadora? ¡No, hermano, no te duermas! En realidad, todo es un montaje y nadie está herido. Un grupo de esclavistas se ha cubierto de sangre e intestinos de animales para intentar hacer que las aventureras se acerquen a ellos con las armas envainadas. El líder, Harwa, tiene un cuerno de bronce y, cuando lo toca, todo el grupo debe ponerse en pie inmediatamente y atacar a sus «salvadoras». Su objetivo no es matar, sino dejar a las aventureras fuera de combate con sus porras y luego venderlas como esclavas, posiblemente en el pueblo de Muelehueso. Si alguna consigue escapar, los esclavistas no la perseguirán, sino que asegurarán a las que han capturado." 
  },
  8: { 
    book: "Manual de la Directora de Juego", 
    page: "150", 
    title: "EL GRAN OFENSOR", 
    description: "Una voz fuerte y agitada atraviesa el paisaje. Alguien está gritando burlas e insultos. Cuando os acercáis, veis una tambaleante estructura de madera que se eleva unos metros sobre el suelo. Sobre ella hay un pequeño orco de mirada altanera. Cuando os ve, se desabrocha los calzones y orina en vuestra dirección, sin parar de lanzar insultos. El orco Khardnal se autoproclama «el Gran Provocador» y quiere despertar a la gente de su sueño. Khardnal considera su misión personal extender su palabra y provocar a los transeúntes para hacer que liberen su rabia interior. Cree que fue él quien hizo retirarse a la Niebla de Sangre, asustada. Si las aventureras lo atacan, Khardnal utilizará un arco o un hacha y un escudo. Le encanta dejarse llevar por su rabia berserker. Luchará hasta la muerte mientras provoca a sus oponentes y al mismo tiempo las elogia por estar en contacto con su rabia interior. Khardnal pertenece al clan Úrhura y tiene el perfil de un miembro típico con la adición del talento BERSERKER." 
  },
  9: { 
    book: "Manual de la Directora de Juego", 
    page: "151", 
    title: "LAS RUINAS DE ANTAÑO", 
    description: "Ante vosotras veis los fragmentados restos de lo que una vez fue un edificio, un bastión de civilización en las tierras agrestes. Ahora la naturaleza ha reclamado su lugar y no quedan más que unos restos caídos y recuerdos perdidos entre las nieblas de la historia. Las aventureras han encontrado unas ruinas adecuadas como lugar seguro para acampar. Para decidir el tipo de ruinas y quién vivió aquí, tira un D66: 11–16 Cabaña (Pareja de ancianos). 21–24 Molino (Molinero, enterrado en el patio de atrás). 25–32 Puesto de guardia (Explorador, muerto en servicio). 33–35 Templo (Hermanas del Cuervo asesinadas). 36–46 Granja (Mercader rico, muerto hace mucho). 51–54 Torre (Hechicero perdido). 55–62 Puesto avanzado (Otrora guarnecido por soldados aliseos). 64–66 Fonda (Viajeros antes de la Niebla de Sangre)." 
  },
  10: { 
    book: "Manual de la Directora de Juego", 
    page: "151", 
    title: "EL ZORRO", 
    description: "Una extraña canción resuena por la tierra. Una áspera voz masculina canta sobre flores moradas y tumbas profundas allá donde el cielo y la tierra se dan encuentro. Nunca habíais oído una canción como esta. Al doblar un recodo del camino, os encontráis de repente cara a cara con un zorrito. Os mira con los ojos muy abiertos. La canción ha cesado. En realidad, el zorro es un demonio llamado Grelf y es quien estaba cantando la canción. Sin embargo, Grelf se enorgullece de meterse en su personaje de zorro y prefiere no cantar ni hablar mientras esté cerca de las aventureras. Si decide hablar, sonará como un guerrero viejo y cansado. Como es un demonio muy curioso, Grelf seguirá de cerca a las aventureras y dormirá cerca de ellas cuando acampen (a veces mientras duerme habla en sueños sobre otros mundos, otras veces solo ronca estruendosamente). Grelf puede transformarse en demonio en cualquier momento." 
  },
  11: { 
    book: "Manual de la Directora de Juego", 
    page: "152", 
    title: "EL PRÍNCIPE OLVIDADO", 
    description: "Una enorme pila de pesadas rocas, amontonadas unas sobre otras formando un monumento que reconocéis. Alguien ha invertido un obvio esfuerzo en construir el túmulo y bajo él hay enterrado algo o alguien. Un príncipe aliseo, cuyo nombre fue olvidado hace mucho, cayó en batalla hace cientos de años y fue enterrado aquí junto a su caballo y dos caballeros leales; todos perecieron en el mismo enfrentamiento. La tumba contiene un collar de plata (por valor de 2D6 monedas de plata), una vieja espada ancha y un trozo de cota de malla oxidada. Si las aventureras deciden buscar tesoros, ¡el príncipe despertará de su sueño y las atacará como un caballero de la Muerte! Puedes leer más sobre los caballeros de la Muerte en la página 78." 
  },
  12: { 
    book: "Manual de la Directora de Juego", 
    page: "152", 
    title: "LOS LADRONES HAMBRIENTOS", 
    description: "Un grupo de humanos desaliñados vestidos con ropas gastadas y equipados con todo tipo de armas sencillas sale al camino. Están sucios y parece que llevan varios días sin tomar una comida decente. Un hombre grande con barba negra da un paso adelante, escupe y se lleva la mano a la espada. —¿Quién puñetas sois vosotras? ¿A qué habéis venío? ¿Ejque no sabéis quién soy yo? Un grupo de ladrones muertos de hambre, iguales en número a las aventureras y liderados por Argam Dosbarbas, está pasando una mala racha y va en busca de un botín con el que levantar cabeza. Los ladrones están cansados y es posible convencerlos hablando de compartir el campamento si las aventureras les ofrecen comida e historias." 
  },
  13: { 
    book: "Manual de la Directora de Juego", 
    page: "153", 
    title: "EL HERMANO PLAGA", 
    description: "Os encontráis frente a los restos putrefactos de un desafortunado viajero. Los cuervos y las alimañas ya han hecho su parte y el cuerpo está casi reducido a unos trozos de carne. El muerto era un hermano herrumbroso que cayó en desgracia y fue sometido a un cruel experimento por su señor. Se llamaba Lagras y lo infectaron a propósito con una enfermedad demoníaca. Lagras consiguió escapar de sus perseguidores, pero la infección ya había arraigado. Al final, la enfermedad siguió su curso y él murió en el sitio, presa de un intenso dolor. Toda aventurera que toque el cadáver quedará infectada, pero la enfermedad ya es mucho más débil y solo tiene virulencia 3. Durante el curso de la infección, la víctima tendrá fuertes alucinaciones en las que verá demonios retorcidos en lugar de personas. El cadáver también tiene un sencillo medallón de bronce con el símbolo de los Hermanos Herrumbrosos." 
  },
  14: { 
    book: "Manual de la Directora de Juego", 
    page: "153", 
    title: "LOS FLAGELANTES", 
    description: "Es difícil decir si lo primero que oís es el restallido de los látigos y los gritos o los golpes de tambor y los cánticos sagrados. Se acerca una gran procesión. Sus integrantes, vestidos de negro y envueltos en ramas de zarza, se azotan y golpean a sí mismos. Varios se han cortado la lengua o las orejas y algunos se han sacado los ojos. A la cabecera de la fila hay un grupo de mujeres vestidas de rojo que portan un gran plato de incienso ardiente. Una de ellas sostiene un palo con un extraño símbolo de hierro. En medio de la multitud hay una construcción de madera con ruedas. De unas cuerdas cuelgan personas desnudas con ganchos insertos bajo la piel. Unos esclavos encadenados empujan la estructura por el barro. La líder de los sectarios es la madre Catyala, líder de una facción inesperadamente exitosa de la Iglesia herrumbrosa. Predica que la Niebla de Sangre se extendió por las Tierras Prohibidas para marcar su caída. Cuando la niebla se disipó, fue un signo de que se acercaba el fin. Hay abiertos portales al mundo de los demonios. Los bandidos y proscritos violan y saquean. La tierra se está rompiendo en pedazos. La única forma de salvar las Tierras Prohibidas es que sus gentes se castiguen lo suficiente para hacer que los dioses los perdonen. La madre Catyala intentará convencer a las aventureras de que se despojen de sus ropas y equipo y se unan a la multitud. Cuenta con la ayuda de un símbolo de hierro que contiene el conjuro ILUSIÓN. Si una aventurera mira al símbolo debe hacer una tirada de PERSPICACIA. Si la falla, verá el mundo a través de los ojos de la madre Catyala. El efecto durará hasta que el símbolo se destruya o quede fuera de su campo de visión." 
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
    description: "En la lejanía veis una especie de capullo verde sobre un árbol. Al acercaros veis que se trata de un globo aerostático enganchado en la copa. El enano Andred abjuró del dios Gran cuando el derrumbamiento de un túnel mató a su familia. Andred estaba en el otro lado del derrumbe. Los oyó gritar y asfixiarse uno tras otro. Desde entonces, se niega a poner el pie en el suelo y viaja por las Tierras Prohibidas en su globo aerostático. Para sobrevivir, echa el ancla por la noche sobre las casas y roba cosas que luego pueda intercambiar por comida y otros artículos de primera necesidad. Ahora el globo se ha estrellado contra un árbol. Andred se ha roto una pierna. Necesita ayuda para reparar el globo, pero le da miedo que las aventureras le roben. Andred tiene tres ballestas cargadas y un hacha de combate. En el globo hay varios objetos robados: un hallazgo SENCILLO y uno VALIOSO (tira en las tablas de «hallazgos en guarida» de las páginas 188 y 189)." 
  },
  17: { 
    book: "Manual de la Directora de Juego", 
    page: "154", 
    title: "BODA", 
    description: "En la lejanía se oye música y jolgorio, voces humanas y graves voces de orcos. Cantan canciones alegres. Cuando os acercáis veis un escenario de madera decorado con flores en el centro de un claro. Mesas con comida y bebida. Violines y acordeones. Y en el borde del claro hay una mujer orco y un hombre humano vestidos de blanco. La orco Tregga y su futuro marido Robert han decidido dejar atrás sus vidas de guerreros y unirse en matrimonio. Han reunido a sus familiares y amigos más íntimos. Si las aventureras se acercan a la boda y hablan con alguien les presentarán a los novios, que las invitarán a quedarse. Algunos de los invitados a la boda, tanto orcos como humanos, han decidido sabotear la boda, ya que la idea de mezclar las dos razas les parece repugnante. Se han puesto de acuerdo para empezar una pelea entre ellos durante la ceremonia con la esperanza de que otros invitados se les unan. Las aventureras pueden unirse o intentar poner fin a la pelea." 
  },
  18: { 
    book: "Manual de la Directora de Juego", 
    page: "155", 
    title: "EL PANADERO DEMONÍACO", 
    description: "Cuando el viento cambia os llega un olor a pan recién hecho. Cuando os acercáis veis una casita de piedra acurrucada entre la vegetación. No tiene caminos, pastos ni campos. De la chimenea se eleva un denso humo y en sus pequeñas ventanas cuadradas brilla la luz. La casa es el hogar de Melkar, un robusto mediano con una fina barba roja. Después de ser expulsado del pueblo de Pernty, encontró unas rocas demoníacas que utilizó para construir un horno. Melkar está vestido de blanco y lleva un gorro de cocinero. A su alrededor hay bandejas y boles llenos de masa. Dos de las bandejas tienen masa con forma de criaturas con brazos, piernas y pasas a modo de ojos. Quienes las miren más de cerca se darán cuenta de que los dos pedazos de masa están vivos. Melkar utiliza su horno para hacer criaturas de masa. Su plan es utilizarlas como siervos y guerreros. Ya hay una hornada hecha. En los arcones, los cacharros y los armarios hay escondidas veinte criaturas de masa armadas con lanzas pequeñas y cuchillos. Melkar invitará a las aventureras a tomar té con pastas (que no están vivas). Si descubren alguna criatura de masa, Melkar les dirá que tiene la capacidad de crear vida y que quiere vivir en paz con sus creaciones. Si las aventureras le atacan llamará a todas sus criaturas. En un arcón de madera hay una joya con un diamante (por valor de 1 moneda de oro) que Melkar le robó al jefe del pueblo de Pernty. Si las aventureras intentan hacer sus propias pastas, el demonio que vive en las rocas intentará corromperlas.\n\n✥ PASTAS DEMONÍACAS: Las pastas demoníacas de Melkar se tratan como una sola criatura. La única característica que tienen es Fortaleza, que es igual al número de pastas dividido entre 5 (redondeando hacia arriba). Las pastas no tienen habilidades. Sus ataques tienen daño de arma 1 (puñalada).\n\n✥ SEGUNDO ENCUENTRO: La siguiente vez que las aventureras visiten a Melkar, estará rodeado de 70 pastas demoníacas ocupadas en producir armas y hornear más criaturas de masa. Sirven a Melkar, que está arrellanado en su sillón, dándose un festín con los panes y bollos que se han portado mal, que gritan agónicamente mientras el panadero demoníaco los devora. Ahora el mediano muestra su verdadera personalidad: actúa de forma altanera e incluso amenazadora.\n\n✥ TERCER ENCUENTRO: La tercera vez que las aventureras visiten el lugar, la casa estará vacía. Melkar se ha llevado doscientas pastas demoníacas al pueblo de Pernty. Los aldeanos de Pernty lo expulsaron porque robó una joya y ahora Melkar se venga de ellos haciendo que sus tropas quemen el pueblo y tomen a sus habitantes como esclavos. Si las aventureras permanecen en la casa, Melkar regresará unas horas más tarde con un montón de medianos encadenados." 
  },
  19: { 
    book: "Manual de la Directora de Juego", 
    page: "156", 
    title: "EL SANTUARIO ANIMAL", 
    description: "Cuando la oscuridad se extiende y vuestro fuego arde veis el primer par de ojos entre los árboles. Al principio son solo unos pocos, pero cada vez aparecen más ojos, más de los que podéis contar. Estáis rodeadas. Entre los árboles se mueven lechuzas y otras criaturas del bosque, sobre vuestras mochilas corretean ratones. A vuestros pies se arrastran gusanos y sobre vuestras hachas y espadas se posan pájaros. Hay un ciervo a unos metros de vosotras, junto a un zorro. Los animales se acercan lentamente. Las aventureras han acampado accidentalmente en el santuario secreto de los animales. Los animales están aquí para expulsarlas pacíficamente. Al campamento irán llegando más animales: grandes jabalíes, lobos y alces. Utilizarán sus hocicos y cuernos para intentar echar a las aventureras y sus cosas del lugar. Si las aventureras los atacan, los animales retrocederán, pero no se marcharán. Al final llegará un alce negro, el líder sagrado de los animales del bosque. Empujará al grupo reunido en torno a la hoguera con los cuernos y dará un sonoro resoplido. Si alguien lo ataca, todos los animales del bosque lo ayudarán y no dejarán de atacar a las aventureras hasta que abandonen el bosque." 
  },
  20: { 
    book: "Manual de la Directora de Juego", 
    page: "156", 
    title: "LA PROCESIÓN FÚNEBRE", 
    description: "Se acerca algo muy grande que emite un sonido que nunca antes habíais oído. Unos toques de cuerno prolongados, interminables, hacen reverberar el aire. Unos crujidos y chasquidos crean un ritmo en torno a los aullidos que cortan el aire en quejumbrosas cascadas. Al cabo del rato aparecen cinco árboles andantes que llevan entre ellos a un sexto. Dan un paso, tocan el cuerno, dan unos cuantos pasos más, se detienen y luego vuelven a tocar en una lenta procesión. Los ents llevan a un pariente muerto hacia la Niebla Calma en una procesión fúnebre. El rubí del corazón de elfo del ent muerto sigue en su lugar, pero la criatura ha pedido que la liberen de su cuerpo de árbol y monten su rubí en el muro conmemorativo de Rosenstaad. Si los ents se encuentran en una localización o región extraña, quizá lleven al ent muerto a un lugar que este siempre haya querido ver. La procesión va escoltada por unos cuantos elfos, pero no se darán a conocer a menos que las aventureras molesten a los ents. Si lo hacen, los elfos exclamarán: «¡Marchaos, malditos sacos de carne!». Los elfos no son muy numerosos, pero si hay un combate, los ents dejarán su carga en el suelo y se unirán a la lucha. No matarán a nadie si pueden evitarlo, pero destrozarán el equipo y romperán unos cuantos miembros a modo de advertencia. Si las aventureras no interrumpen la procesión, las dejarán en paz. Puede incluso que un ent abandone la procesión, se incline ante las aventureras y les dé un regalo: una fruta o semilla del ent muerto o algo más útil." 
  }
};
