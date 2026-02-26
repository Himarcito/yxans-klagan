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
    description: "Todo ocurre de manera casi imperceptible. Al principio, todos los sonidos se extinguen y lo único que oís es vuestra propia charla. Entonces sentís que se os eriza el pelo de la nuca, como si el aire estuviera lleno de electricidad... Un terror profundo y primigenio se apodera de vosotras. Sentís la imperiosa necesidad de huir de inmediato, sea como sea. Unos segundos después, todo ocurre de verdad. La Niebla de Sangre surge de repente de la tierra húmeda, densa y roja y bloquea toda visión. A su paso arrastra algo que hace que la sangre se os hiele en las venas... y viene a por vosotras. Tras pasar un tiempo en la Niebla de Sangre, las aventureras serán atacadas por un sanguino. Podrán darse cuenta del ataque si superan sendas tiradas de ATLETISMO (para aguantar hasta el momento del ataque) y PERSPICACIA (si no se han ocultado)." 
  },
  2: { 
    book: "Manual de la Directora de Juego", 
    page: "148", 
    title: "DUELO EN LOS BOSQUES", 
    description: "Oís sonido de lucha y gritos violentos mezclados con alaridos y canciones de batalla. Un poco más adelante hay un orco batiéndose en duelo con una elfa tatuada. Se lanzan el uno contra el otro y se paran los golpes sin conseguir darse. De vez en cuando se detienen para lanzarse insultos. La elfa Heldemin y el herrero orco Alakran tienen una historia trágica. El clan de orcos Urhur capturó al grupo de aventureros de Heldemin en los años que precedieron al Levantamiento de Hierro y forzó a las elfas y los humanos a ser sus esclavos. Heldemin conoció a Alakran, trabaron amistad y ambos fueron repudiados y desterrados. Si Alakran no limpiaba su honor matando a la elfa o viceversa, ninguno sería bienvenido por su pueblo, por lo que su extraño duelo ha durado semanas. Ya no se acuerdan de qué les hizo enfadar en un primer momento; ahora solo están cansados e irritados. Si las aventureras entablan conversación con la pareja es posible que dejen de pelear y ambos se unan al grupo, siempre que ninguno pierda el honor. Tienen recursos, pero se han quedado sin comida." 
  },
  3: { 
    book: "Manual de la Directora de Juego", 
    page: "149", 
    title: "EL ORCO FUGITIVO", 
    description: "Primero oís una canción gutural, «Msshamassh, gukkul, gukkul» y el sonido de un tambor que marca el ritmo. Entonces veis un grupo de orcos que caminan en una caótica procesión, cantando el himno. En medio del grupo, dos de los orcos llevan un enorme palo de madera del que cuelga un orco indefenso atado de pies y manos. Lo llevan de vuelta a su clan. El grupo forma parte del clan Urhur y el orco atrapado es Sargah. Intentó desertar pero lo persiguieron y ahora está siendo llevado ante el consejo de ancianos para enfrentarse al castigo. Las aventureras que puedan escabullirse del grupo podrán encontrar a Sargah abandonado y atado cerca del camino en un campamento para pasar la noche. Si lo salvan les jurará lealtad eterna, pero huirá en la primera oportunidad que tenga. En caso de que se produzca una pelea, los orcos son tres veces más que las aventureras." 
  },
  4: { 
    book: "Manual de la Directora de Juego", 
    page: "149", 
    title: "MUERTE DESDE EL AIRE", 
    description: "Oís un chillido que hiela la sangre que viene del cielo y, al momento siguiente, el batir de unas pesadas alas. Entonces lo veis. Un enorme pájaro demoníaco desciende desde las nubes. Os ve, vira en el aire y se lanza en picado a por vuestro grupo. Las aventureras han entrado de repente en el territorio de caza de un grifo. El grifo les advertirá mediante su grito desgarrador, pero si el grupo se mantiene firme el grifo atacará y el combate será a muerte. Si se dan la vuelta y deciden caminar en otra dirección y alejarse del nido del grifo, la fiera las dejará marchar." 
  },
  5: { 
    book: "Manual de la Directora de Juego", 
    page: "149", 
    title: "EL BANQUETE DE LAS ARPÍAS", 
    description: "Incluso antes de verlas, el viento os trae un fuerte hedor a muerte y podredumbre, un olor empalagoso al que se suma un sonido chirriante parecido al lloro de un recién nacido. Son arpías. Tres pesadas y sucias criaturas vuelan por encima de las copas de los árboles e inmediatamente vuelven su atención hacia vosotras. Las arpías, Krag, Mag y Serag, andan buscando el almuerzo de hoy, e irán a por las aventureras (a menos que haya algo cerca de aspecto más tentador). En combate son letales, pero muy codiciosas y fáciles de distraer si ven oro u otros tesoros que brillen en el suelo, se centrarán por completo en su hallazgo. A veces se pelean por objetos y dejan a sus víctimas escapar." 
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
  },
  20: { 
    book: "Manual de la Directora de Juego", 
    page: "156", 
    title: "LA PROCESIÓN FÚNEBRE", 
    description: "Se acerca algo muy grande que emite un sonido que nunca antes habíais oído. Unos toques de cuerno prolongados, interminables, hacen reverberar el aire. Unos crujidos y chasquidos crean un ritmo en torno a los aullidos que cortan el aire en quejumbrosas cascadas. Al cabo del rato aparecen cinco árboles andantes que llevan entre ellos a un sexto. Dan un paso, tocan el cuerno, dan unos cuantos pasos más, se detienen y luego vuelven a tocar en una lenta procesión. Los ents llevan a un pariente muerto hacia la Niebla Calma en una procesión fúnebre. El rubí del corazón de elfo del ent muerto sigue en su lugar, pero la criatura ha pedido que la liberen de su cuerpo de árbol y monten su rubí en el muro conmemorativo de Rosenstaad. Si los ents se encuentran en una localización o región extraña, quizá lleven al ent muerto a un lugar que este siempre haya querido ver. La procesión va escoltada por unos cuantos elfos, pero no se darán a conocer a menos que las aventureras molesten a los ents. Si lo hacen, los elfos exclamarán: «¡Marchaos, malditos sacos de carne!». Los elfos no son muy numerosos, pero si hay un combate, los ents dejarán su carga en el suelo y se unirán a la lucha. No matarán a nadie si pueden evitarlo, pero destrozarán el equipo y romperán unos cuantos miembros a modo de advertencia. Si las aventureras no interrumpen la procesión, las dejarán en paz. Puede incluso que un ent abandone la procesión, se incline ante las aventureras y les dé un regalo: una fruta o semilla del ent muerto o algo más útil." 
  },
  21: { 
    book: "Manual de la Directora de Juego", 
    page: "157", 
    title: "EL ESPÍRITU VENGADOR", 
    description: "¡Silencio! ¿Lo oís? ¿Un grito? ¿Una voz? Os miráis entre vosotras, pero el paisaje está desierto. Entonces, súbitamente, sentís un viento gélido que sopla a través de vuestra alma. Una figura gris reluciente toma forma en medio del grupo, con un rostro otrora humano distorsionado en un grito sobrenatural. Habéis oído historias junto a la hoguera otras veces. Un alma perdida, un espíritu incapaz de encontrar el descanso. Las aventureras se encuentran con el fantasma del comandante aliseo Garmagol, muerto hace mucho. Durante una campaña en la que participó hace cuatrocientos años cayó en una trampa que le tendieron sus hombres, cansados de la guerra, y fue asesinado por sus propias tropas. Desde entonces, Garmagol ha vagado por la tierra en busca de venganza. Como hace mucho que los soldados aliseos se fueron, cualquiera que tenga un arma le vale. Si las aventureras son observadoras, verán que el fantasma tiene una reluciente daga clavada entre los omóplatos. Puede que las aventureras puedan razonar con el fantasma si hablan de la daga y de cómo murió. No se puede evitar al fantasma VIGILANDO." 
  },
  22: { 
    book: "Manual de la Directora de Juego", 
    page: "157", 
    title: "LA SOPLADORA DE VIDRIO", 
    description: "Cada vez que el viento abraza los árboles oís un silbido en la lejanía. Suena como una enorme flauta. Una estructura de cristal se eleva sobre el paisaje: pasillos, aberturas, espirales y túneles, todo hecho de vidrio. En el centro del edificio hay una enana, iluminada por las llamas de una chimenea. La enana levanta del fuego la punta de un largo tubo de metal, cubierta por una masa de reluciente vidrio. Aplica los labios al otro extremo y, con un fuerte soplido, la masa se transforma en un largo tubo de cristal serpenteante. La enana Varamak tuvo una visión de la estructura de cristal en sueños. Cree que es posible comprender, frenar y controlar la Niebla de Sangre. Lleva varias semanas trabajando en el proyecto de su vida. Lo único que le queda es recolectar Niebla de Sangre en un tubo de cristal y verterlo en la estructura. Les pide ayuda a las aventureras. Lo que Varamak no sabe es que la visión que tuvo fue creada por un demonio. Si consigue recoger la Niebla de Sangre, se extenderá por la estructura a cada vez más velocidad, emitiendo un chillido. Al cabo de 1D6 horas, el vidrio se romperá y la niebla cubrirá los alrededores llenando todo ese hexágono del mapa (consulta el encuentro aleatorio de la Niebla de Sangre). Se dispersará tras 1D6 semanas." 
  },
  23: { 
    book: "Manual de la Directora de Juego", 
    page: "158", 
    title: "EL CACHORRITO", 
    description: "Oís un suave gemido y luego algo que parece un ladrido. Por debajo de un arbusto sobresale una cola. Es un cachorrito de perro que os mira con sus ojazos. Resulta que el cachorrito se ha hecho daño en una pata. Su madre y otros cinco cachorros murieron a manos de la trol Ghormald, que quería almorzárselos, pero el cachorrito consiguió escapar. Ghormald ha seguido sus huellas y entra en escena con un cachorro muerto en cada mano y la cara cubierta de sangre. Les pide a las aventureras que dejen a su presa tranquila. Está lista para luchar por él con la porra que lleva colgada del cinturón. Ghormald es una trol típica." 
  },
  24: { 
    book: "Manual de la Directora de Juego", 
    page: "158", 
    title: "EL OGRO MALDITO", 
    description: "—Ay-ho, ay-ho, a casa a descansar… —resuena una voz profunda y gutural. Al momento siguiente veis a un ogro enorme y musculoso arrastrando un saco. Algo se debate dentro del saco y el ogro lo golpea repetidamente. Los movimientos cesan inmediatamente—. ¡Que te calles, te he dicho! El ogro Kurge va de camino a su guarida con su última captura. En el saco se encuentra el desafortunado hermano herrumbroso Oker, que invocó la maldición del dios Herrumbre sobre Kurge. El ogro aún no ha decidido qué hacer con Oker, pero se está planteando hacer algo divertido, como practicar tiro de piedras o arrancarle las extremidades. Todo depende del humor de Kurge. Kurge tiene las estadísticas de un ogro típico." 
  },
  25: { 
    book: "Manual de la Directora de Juego", 
    page: "158", 
    title: "LAS CANDELERAS", 
    description: "Junto a una cabaña hay dos mujeres, una vieja y una joven, de pie junto a un caldero puesto al fuego de unos troncos. Junto a ellas hay unas velas azules colgadas de un soporte. Las mujeres parecen preocupadas y no dejan de mirar al bosque. Las aventureras se encuentran con una mujer llamada Engsle y su hija. Hacen un tipo de vela especial usado en ceremonias religiosas. El hijo de la familia desapareció hace una hora en el bosque mientras recogía centellazul, un tipo de flor que se usa para hacer las velas. La madre ofrece diez velas a las aventureras si consiguen encontrar a su hijo y traerlo de vuelta. Las velas que están haciendo no funcionarán hasta que se hayan sumergido en una tina de centellazul pulverizada. Cuando estén acabadas, al encenderlas producen el mismo efecto que el conjuro PURIFICAR ESPÍRITU de nivel de poder 1. El hijo de Engsle ha sido capturado por el ogro Gonlab, que se lo ha llevado como esclavo." 
  },
  26: { 
    book: "Manual de la Directora de Juego", 
    page: "159", 
    title: "INCENDIO FORESTAL", 
    description: "Percibís un olor a humo al tiempo que un ciervo pasa corriendo junto a vosotras. Veis una humareda negra sobre los árboles. El viento cambia y el fuego viene hacia aquí. Un incendio forestal ruge. Los animales tratan de escapar, las copas de los árboles se prenden y un humo sofocante se extiende por el bosque. El fuego avanza rápidamente. Las aventureras deben superar una prueba de SUPERVIVENCIA para escapar. Si la fallan, serán atacadas por las llamas, tira por el ataque contra cada aventurera con seis dados de base (daño de arma 1). Entonces las aventureras pueden volver a tirar por SUPERVIVENCIA para escapar. Si vuelven a fallar, el fuego ataca con siete dados de base. Este ciclo continúa añadiendo otro dado de base al ataque del fuego cada vez hasta que las aventureras escapen o queden Derrotadas." 
  },
  27: { 
    book: "Manual de la Directora de Juego", 
    page: "159", 
    title: "ARENA NEGRA", 
    description: "El bosque se abre y veis un gigantesco claro rodeado de árboles. El suelo está cubierto de arena negra. No veis ninguna planta. Hay algunas rocas que podrían ser restos de casas. En mitad del claro hay alguien sentado, una niña con la mirada fija en el suelo. El lugar apesta a azufre. La arena se agita cuando el viento sopla a través del claro. Dos hechiceros rivales se encontraron en el pueblo de Sotoagreste. Uno de ellos falló el conjuro y el percance provocó la destrucción tanto de los hechiceros como del pueblo entero. La única superviviente fue la niña, llamada Linn. Está encerrada en sí misma y no contesta a lo que le dicen, ni tampoco se mueve ni se resiste si las aventureras se la llevan con ella. Al cabo de 1D6 días, si le dan de comer, puede contarles a las aventureras lo que ocurrió. Si permanece con ellas, mostrará que el accidente le otorgó unos potentes poderes mágicos que no sabe controlar. Linn quiere aprender a lanzar conjuros. Quiere matar a todos los hechiceros de las Tierras Prohibidas." 
  },
  28: { 
    book: "Manual de la Directora de Juego", 
    page: "160", 
    title: "LA CASA VACÍA", 
    description: "En la lejanía se ve el humo de una chimenea. Hay una casita al abrigo de unos altos árboles. En un tendedero de palos hay una colada puesta a secar. Junto al edificio hay un pequeño corral delimitado por una valla, pero no se ve ningún animal. Hay un pequeño campo rodeado de rocas sacadas de esa misma tierra. Unos verdes tallos se alzan en derechas hileras. Oís el murmullo de un arroyo. Las aventureras han llegado a una casa de campo, pero la familia que vivía en ella acaba de ser atacada y hecha esclava. La casa está vacía. El fuego aún está encendido y sobre la mesa de la cocina hay cardadores de lana. En una cuna hay tirado un muñeco. Hay una silla volcada y la pared está decorada por una salpicadura de sangre coagulada. Ni los residentes ni los secuestradores aparecen por ninguna parte, pero afuera, en el barro, se pueden encontrar huellas de pisadas. Si las aventureras rastrean a los secuestradores (perfil de bandidos típicos), descubrirán que el señor del lugar necesita nuevos esclavos para su mina de plata." 
  },
  29: { 
    book: "Manual de la Directora de Juego", 
    page: "160", 
    title: "CRUJIR DE HUESOS", 
    description: "Aparecen sin previo aviso. Es un grupo de lo que en otro tiempo fueron orgullosos guerreros humanos. Ahora no son más que esqueletos a punto de desmoronarse, que por alguna razón han cobrado vida. Son totalmente silenciosos, pero cuando empiezan a moverse oís el seco sonido de huesos de siglos de antigüedad entrechocando unos con otros. Las sonrientes calaveras de los esqueletos abren las mandíbulas al atacar, emitiendo un grito inaudible. Un D6+3 esqueletos atacan a las aventureras sin previo aviso. Luchan hasta el último, pero no son especialmente rápidos y es bastante fácil huir de ellos, aunque los esqueletos perseguirán a las aventureras mientras permanezcan a la vista." 
  },
  30: { 
    book: "Manual de la Directora de Juego", 
    page: "160", 
    title: "TERAMALDA", 
    description: "Un olor a carne quemada os da en la nariz y, al mismo tiempo, oís unas pesadas pisadas. Algo se acerca a través de la espesura. La criatura hace un estruendo infernal, chirriando y traqueteando. Hasta la tierra tiembla. Frente a vosotras emerge de entre la vegetación una enorme caballero, completamente cubierta por una antigua armadura negra oxidada. Tiene un símbolo grabado en la coraza. La criatura lleva una espada manchada de marrón por la sangre seca. La armadura andante es la extraña criatura no muerta Teramalda, que vaga por las Tierras Prohibidas en busca de venganza desde que los enanos la quemaran viva dentro de su armadura hace 350 años. Los Hermanos Herrumbrosos la consideran la campeona de su dios, Herrumbre, ya que su coraza lleva el símbolo de la deidad y principalmente mata enanos. Teramalda se mantiene con vida gracias a un pincho de hierro mágico que atraviesa el pecho de la ferral por dentro de la armadura. Es prácticamente invulnerable y no contestará si se le habla. Cada encuentro con Teramalda será diferente: PRIMER ENCUENTRO: Teramalda simplemente se quedará de pie mirando a las aventureras durante un rato hasta que decida que no son lo bastante interesantes. Si las aventureras la atacan, pasa directamente al tercer encuentro. SEGUNDO ENCUENTRO: Teramalda atacará a las enanas que haya en el grupo. TERCER ENCUENTRO: Teramalda clasifica a las aventureras como enemigas y las ataca. No las perseguirá si huyen. CUARTO ENCUENTRO: Teramalda considera a las aventureras enemigas juradas y las persigue. Camina lentamente y se la puede oír a cierta distancia, pero nunca se rinde. Encontrará a sus enemigas mientras estas lleven algo de hierro." 
  }
  31: { 
    book: "Manual de la Directora de Juego", 
    page: "161", 
    title: "LOS CANTORES DE PIEDRA", 
    description: "Una pequeña nube de polvo se levanta donde os encontráis. Tres figuras bajas con túnicas grises, capuchas y el rostro envuelto en bufandas giran a vuestro alrededor cantando a una misteriosa estructura antigua de metal y piedra. Oculta bajo el polvo que levantan está la cantora Porisia Vozdeplata y dos de sus estudiantes. Su objetivo es entender y purificar la tierra para el dios enano Gran, y estarán encantados de hablar sobre su trabajo y las propiedades arcanas de la piedra que han encontrado. Si el grupo tiene un enano, los tratarán con infinito respeto." 
  },
  32: { 
    book: "Manual de la Directora de Juego", 
    page: "161", 
    title: "RATAS", 
    description: "El sonido de algo correteando, el corretear de miles de patas sobre el suelo, las rocas y entre las hojas secas. Un mar gris, marrón y negro se abre paso como una ola emitiendo un sonido estridente de finos chillidos de hambre. Es un enjambre de ratas (usa los atributos de Enjambre). Las ratas no atacan de inmediato a las aventureras, sino que rodean algo que hay en el suelo: una cesta. Se oyen los débiles lloros de un bebé desde su interior. La madre del bebé, una mediano llamada Belinda, fue obligada a abandonarlo aquí para huir de sus amos esclavistas. Las aventureras tienen un par de rondas para rescatar al bebé antes de que el enjambre lo devore." 
  },
  33: { 
    book: "Manual de la Directora de Juego", 
    page: "162", 
    title: "EL LAMENTO DEL MINOTAURO", 
    description: "Una criatura grande y peluda, con la parte superior del cuerpo de un toro y la inferior de un humanoide de fuertes patas, está en el suelo llorando y rugiendo. En sus brazos yace una criatura similar, muerta. Un poco más lejos, escondidos entre los arbustos, hay cuatro soldados humanos temblando de miedo. Los soldados atacaron a la pareja de minotauros por pura ignorancia y mataron al macho, Kaun. Ahora la hembra está ciega de dolor y busca a los asesinos. Los soldados pedirán auxilio a las aventureras en un susurro. Si la minotaura los huele, atacará con furia asesina. El grupo deberá decidir de qué lado se pone o si intenta mediar." 
  },
  34: { 
    book: "Manual de la Directora de Juego", 
    page: "162", 
    title: "LOS MUERTOS INQUIETOS", 
    description: "Veis acercarse a seis bufones con trajes andrajosos. No dicen ni una palabra, sino que realizan un espectáculo patético, cayéndose, tropezando y malabareando. O eso creéis, hasta que una ráfaga de viento os trae el inconfundible olor a muerte y podredumbre. Son un grupo de muertos vivientes. Los aldeanos locales sintieron pena por ellos y los vistieron de bufones para tratar de esconderlos y trasladarlos a un lugar seguro. Sin embargo, una patrulla de 5 Guardias de Hierro los persigue para quemarlos. Las aventureras quedan atrapadas en medio del conflicto: ¿protegerán a los \"inofensivos\" muertos de la inquisición o ayudarán a destruirlos?" 
  },
  35: { 
    book: "Manual de la Directora de Juego", 
    page: "163", 
    title: "EL TROL DORMIDO", 
    description: "Una colina boscosa se alza en medio de la llanura. Pero la colina se mueve, se levanta sobre dos patas y se gira hacia vosotras... ¡Es un trol! El enorme trol ancestral Karg, cubierto de tierra y maleza por haber dormido durante décadas, bloquea el paso. Karg es avaricioso pero vago. Exigirá un peaje para dejarlas pasar: algo brillante (oro, plata o magia), o en su defecto, algo sabroso (goblins, orcos o una de las aventureras). Si se niegan, Karg bostezará y atacará con una fuerza arrolladora." 
  },
  36: { 
    book: "Manual de la Directora de Juego", 
    page: "163", 
    title: "LOS PELONES", 
    description: "Oís aullidos lastimeros. Seis humanoides con cabeza de lobo pero sin un solo pelo en el cuerpo se acercan tambaleándose. Su piel está roja y cubierta de ampollas purulentas. Son lupinos (liderados por Abaken). Encontraron unos cristales mágicos cerca de una cría de dragón dormida y la radiación mágica los ha enfermado. Tienen un hambre atroz y atacarán. Cualquier daño que inflijan con sus mordiscos obliga a tirar Resistencia para no contraer la enfermedad (Pérdida de cabello y llagas, Virulencia 4)." 
  },
  37: { 
    book: "Manual de la Directora de Juego", 
    page: "164", 
    title: "PASO CORTADO", 
    description: "El camino se estrecha entre paredes de roca y está bloqueado por un carro volcado. Sobre él hay sentado un enano pelirrojo con una ballesta. Cuatro humanos con lanzas y escudos os apuntan desde detrás de la barricada. El enano, Guntermann, es un \"empresario\" oportunista. Exige un peaje de 3 monedas de plata por cabeza para permitirles pasar por \"su\" camino. No atacarán a menos que los ataquen primero, pero se negarán a moverse si el grupo no paga, lucha o los intimida (requiere una tirada muy exitosa de MANIPULACIÓN)." 
  },
  38: { 
    book: "Manual de la Directora de Juego", 
    page: "164", 
    title: "LOS INFECTADOS", 
    description: "Encontráis una barquita a la deriva o un carro varado en el fango (dependiendo del terreno). Dentro hay una persona envuelta en mantas empapadas de sudor, con la piel teñida de un azul enfermizo y respirando con mucha dificultad. Hay equipo y monedas esparcidos alrededor. Es una trampa biológica: la persona sufre la Peste Azul, una enfermedad altamente contagiosa y mortal (Virulencia 5). Saquear las pertenencias o intentar tratar a la persona sin precauciones extremas forzará una tirada de enfermedad inmediata para todos los involucrados." 
  },
  39: { 
    book: "Manual de la Directora de Juego", 
    page: "164", 
    title: "EL POLIZÓN", 
    description: "Una pequeña coca mercante o un carro mercante robusto se cruza en vuestro camino. El capitán Sertold os saluda animadamente y os invita a comerciar y compartir noticias. Vende provisiones, vino y algún hallazgo sencillo. Sin embargo, no sabe que lleva un polizón: el escurridizo goblin Meroggha. Mientras las aventureras charlan y comercian con Sertold, el goblin intentará saltar de la coca a las mochilas de las aventureras y robar algo de valor. Si lo descubren, Sertold se quedará perplejo y no querrá saber nada del asunto." 
  },
  40: { 
    book: "Manual de la Directora de Juego", 
    page: "165", 
    title: "MUERTE DESDE ABAJO", 
    description: "El agua del lago se vuelve completamente negra de repente y empieza a hervir y hacer burbujas. Una gran cantidad de espuma ensucia la superficie. Segundos después, tres gruesos tentáculos viscosos salen disparados del agua hacia vosotras. Un gigantesco calamar os ataca. Los tres tentáculos actúan como enemigos individuales (Fuerza 3, Destreza 2, Pelea 3). Si un tentáculo atrapa a un personaje, intentará arrastrarlo bajo el agua al siguiente turno para ahogarlo. Cortar un tentáculo liberará a la presa, y si el grupo destruye dos tentáculos, el monstruo se retirará a las profundidades." 
  },
  41: { 
    book: "Manual de la Directora de Juego", 
    page: "165", 
    title: "EL MERCADER DE ALMAS", 
    description: "Un hechicero de aspecto macabro llamado Vergevil viaja en un carruaje oscuro o una lancha (según terreno), iluminado por fanales de cristal que brillan con luz espectral. Los cristales no contienen fuego, sino almas de personas en forma de gas. Vergevil es encantador y ofrece grandes recompensas (Objetos mágicos o monedas de oro) si una de las aventureras está dispuesta a \"donar\" un trocito de su alma para un experimento. Extraer un trozo de alma inflige 1 punto de daño permanente a Empatía que no se puede curar de manera normal." 
  },
  42: { 
    book: "Manual de la Directora de Juego", 
    page: "166", 
    title: "LOS REPTILES CAZADORES", 
    description: "La niebla o los altos juncos ocultan el movimiento a vuestro alrededor. De repente, una red de cuero crudo vuela por el aire hacia uno de vosotros. Alisando sus escamas, seis saurios humanoides surgen de la maleza armados con tridentes y espadas cortas. El grupo ha sido emboscado por saurios esclavistas liderados por Sheeerz. Buscan prisioneros (especialmente humanos o elfos, a los que desprecian). Los saurios tiran Sigilo con ventaja para sorprender. Intentarán apresar a las aventureras con redes y huir con sus presas; si el combate se tuerce, no dudarán en retirarse y hundirse en el lodo." 
  },
  43: { 
    book: "Manual de la Directora de Juego", 
    page: "166", 
    title: "ENTERRADOS VIVOS", 
    description: "Oís gritos en la distancia, atormentados lamentos de agonía. Cuando os acercáis veis a siete elfos armados con espadas y arcos de pie frente a una profunda fosa en el suelo. Todos llevan plumas azules en el pelo. En la fosa hay una familia de elfos: una mujer, un hombre y dos niños. Gritan pidiendo ayuda. Dos de los elfos de arriba están echando tierra con palas para enterrarlos vivos. La líder elfa, Plumazul, es una cazarrecompensas que ha sentenciado a esta familia (los Ylendidra) por esconder a unos orcos fugitivos de la justicia élfica. Plumazul es arrogante y advertirá al grupo de que interferir en los asuntos de los elfos significará la muerte." 
  }
};
