import { EncounterData } from './encounter-data-gm';

export const bookOfBeastsMatrix: Record<number, Record<string, number>> = {
  11: { plains: 11, forest: 11, dark_forest: 11, hills: 11, mountains: 11, lake: 11, marsh: 11, quagmire: 11, ruins: 11 },
  12: { plains: 12, forest: 12, dark_forest: 12, hills: 12, mountains: 12, lake: 12, marsh: 12, quagmire: 12, ruins: 12 },
  13: { plains: 13, forest: 13, dark_forest: 13, hills: 13, mountains: 13, lake: 13, marsh: 13, quagmire: 13, ruins: 13 },
  14: { plains: 14, forest: 14, dark_forest: 14, hills: 14, mountains: 14, lake: 14, marsh: 14, quagmire: 14, ruins: 14 },
  15: { plains: 15, forest: 15, dark_forest: 15, hills: 15, mountains: 15, lake: 15, marsh: 15, quagmire: 15, ruins: 15 },
  16: { plains: 16, forest: 16, dark_forest: 16, hills: 16, mountains: 16, lake: 16, marsh: 16, quagmire: 16, ruins: 16 },
  21: { plains: 21, forest: 21, dark_forest: 21, hills: 21, mountains: 21, lake: 21, marsh: 21, quagmire: 21, ruins: 21 },
  22: { plains: 22, forest: 22, dark_forest: 22, hills: 22, mountains: 22, lake: 22, marsh: 22, quagmire: 22, ruins: 22 },
  23: { plains: 23, forest: 23, dark_forest: 23, hills: 23, mountains: 23, lake: 23, marsh: 23, quagmire: 23, ruins: 23 },
  24: { plains: 24, forest: 24, dark_forest: 24, hills: 24, mountains: 24, lake: 24, marsh: 24, quagmire: 24, ruins: 24 },
  25: { plains: 25, forest: 25, dark_forest: 25, hills: 25, mountains: 25, lake: 25, marsh: 25, quagmire: 25, ruins: 25 },
  26: { plains: 26, forest: 26, dark_forest: 26, hills: 26, mountains: 26, lake: 26, marsh: 26, quagmire: 26, ruins: 26 },
  31: { plains: 31, forest: 31, dark_forest: 31, hills: 31, mountains: 31, lake: 31, marsh: 31, quagmire: 31, ruins: 31 },
  32: { plains: 32, forest: 32, dark_forest: 32, hills: 32, mountains: 32, lake: 32, marsh: 32, quagmire: 32, ruins: 32 },
  33: { plains: 33, forest: 33, dark_forest: 33, hills: 33, mountains: 33, lake: 33, marsh: 33, quagmire: 33, ruins: 33 },
  34: { plains: 34, forest: 34, dark_forest: 34, hills: 34, mountains: 34, lake: 34, marsh: 34, quagmire: 34, ruins: 34 },
  35: { plains: 35, forest: 35, dark_forest: 35, hills: 35, mountains: 35, lake: 35, marsh: 35, quagmire: 35, ruins: 35 },
  36: { plains: 36, forest: 36, dark_forest: 36, hills: 36, mountains: 36, lake: 36, marsh: 36, quagmire: 36, ruins: 36 },
  41: { plains: 41, forest: 41, dark_forest: 41, hills: 41, mountains: 41, lake: 41, marsh: 41, quagmire: 41, ruins: 41 },
  42: { plains: 42, forest: 42, dark_forest: 42, hills: 42, mountains: 42, lake: 42, marsh: 42, quagmire: 42, ruins: 42 },
  43: { plains: 43, forest: 43, dark_forest: 43, hills: 43, mountains: 43, lake: 43, marsh: 43, quagmire: 43, ruins: 43 },
  44: { plains: 44, forest: 44, dark_forest: 44, hills: 44, mountains: 44, lake: 44, marsh: 44, quagmire: 44, ruins: 44 },
  45: { plains: 45, forest: 45, dark_forest: 45, hills: 45, mountains: 45, lake: 45, marsh: 45, quagmire: 45, ruins: 45 },
  46: { plains: 46, forest: 46, dark_forest: 46, hills: 46, mountains: 46, lake: 46, marsh: 46, quagmire: 46, ruins: 46 },
  51: { plains: 51, forest: 51, dark_forest: 51, hills: 51, mountains: 51, lake: 51, marsh: 51, quagmire: 51, ruins: 51 },
  52: { plains: 52, forest: 52, dark_forest: 52, hills: 52, mountains: 52, lake: 52, marsh: 52, quagmire: 52, ruins: 52 },
  53: { plains: 53, forest: 53, dark_forest: 53, hills: 53, mountains: 53, lake: 53, marsh: 53, quagmire: 53, ruins: 53 },
  54: { plains: 54, forest: 54, dark_forest: 54, hills: 54, mountains: 54, lake: 54, marsh: 54, quagmire: 54, ruins: 54 },
  55: { plains: 55, forest: 55, dark_forest: 55, hills: 55, mountains: 55, lake: 55, marsh: 55, quagmire: 55, ruins: 55 },
  56: { plains: 56, forest: 56, dark_forest: 56, hills: 56, mountains: 56, lake: 56, marsh: 56, quagmire: 56, ruins: 56 },
  61: { plains: 61, forest: 61, dark_forest: 61, hills: 61, mountains: 61, lake: 61, marsh: 61, quagmire: 61, ruins: 61 },
  62: { plains: 62, forest: 62, dark_forest: 62, hills: 62, mountains: 62, lake: 62, marsh: 62, quagmire: 62, ruins: 62 },
  63: { plains: 63, forest: 63, dark_forest: 63, hills: 63, mountains: 63, lake: 63, marsh: 63, quagmire: 63, ruins: 63 },
  64: { plains: 64, forest: 64, dark_forest: 64, hills: 64, mountains: 64, lake: 64, marsh: 64, quagmire: 64, ruins: 64 },
  65: { plains: 65, forest: 65, dark_forest: 65, hills: 65, mountains: 65, lake: 65, marsh: 65, quagmire: 65, ruins: 65 },
  66: { plains: 66, forest: 66, dark_forest: 66, hills: 66, mountains: 66, lake: 66, marsh: 66, quagmire: 66, ruins: 66 }
};

export const bookOfBeastsEncounters: Record<number, EncounterData> = {
  11: { 
    book: "Book of Beasts", 
    page: "123", 
    title: "PIEDRA RÚNICA ENANA", 
    description: "Una gran roca tallada con runas sobresale de la tierra en una colina cercana. Las runas, de tono rojizo, están rodeadas por elaborados lazos que parecen colas de dragón. Son runas enanas que pueden ser leídas superando una tirada de LEYENDAS: «Tyrmyr hijo de Grundhir, señor del Gran Salón de la Cascada de la Montaña, erigió este monumento para que el mundo tema y admire por siempre su varonil matanza de la escoria de Herrumbre en la gran guerra». La piedra rúnica es un monumento conmemorativo de la Primera Guerra Alisea, y la \"escoria de Herrumbre\" mencionada es el ejército de la ferral Teramalda. Las aventureras enanas que descansen aquí durante un turno recuperarán todos sus atributos al máximo si han sufrido cualquier tipo de daño. Este efecto solo se aplica una vez." 
  },
  12: { 
    book: "Book of Beasts", 
    page: "124", 
    title: "RASTROS DE BABA EN LA VEGETACIÓN", 
    description: "Hilos brillantes de una secreción babosa se extienden por el terreno. Cubren las piedras, la hierba y el musgo, y cuelgan en racimos de los arbustos y ramas como capullos goteantes de sustancias impías. Las aventureras que examinen el rastro de baba y superen una tirada de SUPERVIVENCIA deducirán que proviene de un basilisco en celo. También recordarán que la baba es altamente venenosa y puede paralizar incluso a las aventureras más fuertes al menor contacto (Veneno Paralizante, Potencia 6). Si llevan guantes gruesos, el veneno puede ser recolectado en botellas y, por ejemplo, ser aplicado en armas (obteniendo 2D6 dosis)." 
  },
  13: { 
    book: "Book of Beasts", 
    page: "125", 
    title: "CAMPO DE BATALLA CUBIERTO DE MALEZA", 
    description: "Un antiguo campo de batalla se abre en el paisaje como una herida de malos recuerdos. El campo está cubierto de hierba salvaje y zarzas serpenteantes, con calaveras sonrientes empaladas en picas que sobresalen de la vegetación. Entre los matorrales hay armas oxidadas que yacen lado a lado con huesos roídos. A juzgar por los cráneos, parece que orcos, elfos, enanos y humanos lucharon y murieron por igual en este lugar. Si las aventureras pasan un Cuarto de Día EXPLORANDO el campo de batalla, puedes dejarles tirar una vez en la tabla de Hallazgos Valiosos Transportados. También encontrarán D66 monedas de varias denominaciones. Tira 1D6 por cada decena de monedas: 1-3 significa cobre; 4-5 plata; 6 oro." 
  },
  14: { 
    book: "Book of Beasts", 
    page: "126", 
    title: "EL ESQUELETO EN EL ÁRBOL", 
    description: "Vuestros ojos, cansados del viaje, se topan con una visión ominosa: un esqueleto vestido con ropas raídas y desgarradas cuelga de un árbol más adelante. Su cabeza está inclinada hacia adelante en un ángulo antinatural y una gruesa cadena de hierro atada a una de las ramas le rodea el cuello como si fuese una soga. El esqueleto es todo lo que queda del erudito nigromante Mortelius Quidom, asesinado por aldeanos asustados tras un oscuro experimento. Quienes registren el esqueleto encontrarán un compendio de pergaminos amarillentos que contiene 3 conjuros de nigromancia. El muerto no puede moverse mientras la cadena de hierro siga en su lugar, pero si alguien se la quita, Mortelius regresará en forma de Fantasma. Es una visión aterradora, pero no tiene intenciones hostiles (a menos que lo ataquen). Si se comportan de forma decente, mostrará su gratitud contándoles leyendas de las Tierras Prohibidas. Si deciden atacarle, usará todos sus poderes impíos para convertir al grupo en esclavos no muertos (Fuerza 12, Intelecto 7)." 
  },
  15: { 
    book: "Book of Beasts", 
    page: "126", 
    title: "VIEJO POZO", 
    description: "Un pozo antiguo y parcialmente cubierto de maleza se asoma entre la densa vegetación. No tiene polea, pero los restos podridos de su cubierta de madera y un cubo yacen esparcidos entre la maleza. Las aventureras que miren hacia la oscuridad del fondo serán recibidas por un fuerte olor a humedad. Es posible descender hasta el fondo (cuatro metros), pero las paredes son resbaladizas y se requiere superar una tirada de MOVERSE para no perder el agarre y sufrir daño por caída. Esparcidos en el barro del fondo hay fragmentos de huesos de varios animales desafortunados que cayeron en el profundo agujero. Si las aventureras exploran activamente el lugar, tira una vez en la tabla de Hallazgos Sencillos en Guaridas." 
  },
  16: { 
    book: "Book of Beasts", 
    page: "127", 
    title: "LA MESA DE PIEDRA DE LOS DIOSES", 
    description: "Una gran mesa de piedra se alza entre unos árboles cercanos. Es una construcción impresionante de granito y mármol, cortada en bloques toscos pero simétricos. La vegetación circundante es densa y salvaje, pero la mesa en sí misma se mantiene asombrosamente intacta por los estragos del tiempo y la naturaleza. Alrededor de la superficie de la mesa se aprecian símbolos arcaicos que parecen indicar los asientos de los comensales. Si superan una tirada de LEYENDAS, reconocerán un puñado de ellos como los símbolos antiguos de los viejos dioses de las Tierras Prohibidas. El Caminante Nocturno está posicionado en el extremo de la mesa, pero Lamento, Flujo, Arcilla y Enorme también están representados junto con otros dioses olvidados que ahora no tienen nombre." 
  },
  21: { 
    book: "Book of Beasts", 
    page: "128", 
    title: "LA ROCA VIVIENTE", 
    description: "Algo llena el silencio a vuestro alrededor. Un sonido, apenas audible, pero definitivamente presente. Un murmullo profundo. Constante, retumbante y cantarino. Al acercaros a hurtadillas a través del terreno, podéis distinguir algunas palabras, aunque nadie entiende el idioma. Pronto notáis una luz llameante y a un hombre de larga barba con una túnica de color rojo oscuro bajo la sombra de unas grandes rocas. Unas enormes grietas resplandecientes se han abierto en el suelo a los pies del hombre. Mientras levanta los brazos hacia el cielo y empieza a hablar con voz autoritaria, veis a una criatura tosca hecha de piedra y raíces emergiendo lentamente de la roca viva. El hombre es un Cantor de Piedra en proceso de crear un Gólem. Si las aventureras interfieren, el mago les azuzará a su Gólem (Nivel de Poder 4). Si en lugar de eso deciden seguir al hechicero y a su creación en secreto, los verán desaparecer en una cueva que termina en un callejón sin salida. Al examinar el muro de roca, una tirada de LEYENDAS revela runas enanas y garabatos orcos que advierten de una masacre en este lugar: la montaña está hechizada por espíritus inquietos." 
  },
  22: { 
    book: "Book of Beasts", 
    page: "128", 
    title: "TROL PETRIFICADO", 
    description: "Una silueta monstruosa, más alta que dos humanos juntos, se alza amenazante en el terreno más adelante. Con su maza levantada para la batalla, la figura parece decidida a aplastar a cualquiera que pase. Pronto resulta evidente para las aventureras que la sombra amenazante es inofensiva, ya que está compuesta de rocas medio desmoronadas y cubiertas de musgo y liquen. Con una tirada exitosa de LEYENDAS, se dan cuenta de que son los restos de un Trol que fue convertido en piedra por la luz del sol. Esparcidos por el suelo a su alrededor están los huesos de varios de sus desafortunados enemigos, así como sus armas oxidadas. Quienes registren la zona encontrarán D6 monedas de plata y, posiblemente, un arma de excelente calidad que haya sobrevivido ilesa al paso del tiempo." 
  },
  23: { 
    book: "Book of Beasts", 
    page: "129", 
    title: "RESTOS DE UN CAMINO GONDIANO", 
    description: "Secciones desmoronadas de un antiguo camino pavimentado serpentean a través del terreno, siendo un testigo mudo de un pasado glorioso y de conocimientos hace mucho olvidados. Gran parte del camino está cubierto por la maleza y las secciones visibles están llenas de grietas, pero está claro que una vez fue una impresionante obra de ingeniería. Si superan una tirada de LEYENDAS, se dan cuenta de que están mirando un fragmento del intrincado sistema de carreteras que el rey enano Gonder ordenó construir en la época anterior a las Guerras Aliseas. Si las aventureras dedican un Cuarto de Día a EXPLORAR minuciosamente entre las grietas del camino viejo, puedes permitirles tirar una vez en la tabla de Hallazgos Valiosos en Guaridas." 
  },
  24: { 
    book: "Book of Beasts", 
    page: "130", 
    title: "EXCREMENTOS DE MONSTRUO", 
    description: "Un hedor acre os golpea el rostro. Más adelante hay una inmensa pila de estiércol de color marrón verdoso, rodeada de insectos grandes que zumban frenéticamente. La pila es más grande que un humano adulto y aún no se ha endurecido. Con una tirada exitosa de SUPERVIVENCIA o TRATO CON ANIMALES, las aventureras deducen que los excrementos están recientes y que es muy probable que su origen no ande lejos. A juzgar por el tamaño de las heces, debe ser una bestia de tamaño colosal. Si las aventureras deciden escarbar entre el estiércol, puedes dejarles tirar una vez en la tabla de Hallazgos Valiosos Transportados (una posesión que perteneció a un desafortunado individuo que terminó siendo el desayuno de la bestia). Sin embargo, el estiércol de la bestia es altamente corrosivo y actúa como un Veneno Letal con Potencia 6 sobre quien meta las manos." 
  },
  25: { 
    book: "Book of Beasts", 
    page: "130", 
    title: "LA GRAN SERPIENTE", 
    description: "Un grito de ayuda hace eco a través de la niebla. Es la voz de un joven, aguda y presa del pánico. Al acercaros, veis a diez figuras de pie sobre un acantilado junto al agua, empuñando largas lanzas de púas. Un joven aterrorizado, vestido con un camisón blanco como la nieve, hace equilibrios al borde del acantilado mientras las figuras amenazantes lo acorralan hacia el agua. Entre los gritos de terror del chico, repiten un canto monótono: «Gran Serpiente, Gran Padre, Gran Amo de la Vida y la Muerte». Las ondas y olas repentinas en el agua indican que algo en las oscuras profundidades ha respondido a su llamada. Los cultistas encapuchados son pescadores locales que sacrifican a un joven cada año al \"Dios Wyrm\" para asegurarse una buena temporada de pesca. Las aventureras pueden intentar MANIPULARLOS para que perdonen la vida del muchacho a cambio de ofrecerles un objeto brillante y valioso que puedan sacrificar en su lugar. No obstante, la Serpiente Marina que acecha en las oscuras aguas ya ha sido atraída por los cánticos. Si el joven no es arrojado al agua en D10 rondas, el gigantesco monstruo emergerá e intentará atrapar a todas las personas posibles al borde del acantilado." 
  },
  26: { 
    book: "Book of Beasts", 
    page: "131", 
    title: "UN LUGAR PACÍFICO", 
    description: "Un prado cubierto de maleza ondula a través del paisaje. Coloridas cabezas de flores rojas, azules y amarillas asoman por encima de la hierba, que os llega hasta la cintura. El aire zumba con abejas bien alimentadas y mariposas. Una rara serenidad reina en este lugar. Las aventureras que superen una tirada de SUPERVIVENCIA notarán grandes cantidades de Gelipiedra creciendo en el prado: una planta cuyas esporas tienen un efecto paralizante. Con otra tirada exitosa de SUPERVIVENCIA, las plantas pueden destilarse en un veneno transportable para aplicarlo a las armas (D10 dosis). Las aventureras que se muevan a través del prado florido sin protegerse las vías respiratorias se exponen a un ataque venenoso (Veneno Paralizante, Potencia 7)." 
  },
  31: { 
    book: "Book of Beasts", 
    page: "138", 
    title: "EL ARBUSTO ARDIENTE", 
    description: "Un arbusto que os llega por la cintura en medio del terreno emite una extraña y reluciente luz azul. Al acercaros, veis grandes llamas de fuego azul brotando en todas direcciones desde la nudosa planta. Curiosamente, la vegetación circundante parece no verse afectada por el fuego. Las aventureras que toquen el arbusto ardiente sentirán un calor intenso, pero no sufrirán daño. Sin embargo, percibirán una fuerte presencia de otro mundo y deberán hacer una tirada de PERSPICACIA. Quien falle debe tirar en la tabla de Terror, mientras que quienes tengan éxito ganarán un Punto de Voluntad extra. Con una tirada de LEYENDAS, pueden recordar viejos mitos de dioses de la naturaleza parcialmente olvidados que se presentan en forma de arbustos en llamas o cadáveres." 
  },
  32: { 
    book: "Book of Beasts", 
    page: "138", 
    title: "CLARO MÁGICO", 
    description: "De repente os encontráis en un claro resplandeciente donde los árboles circundantes están adornados con plumas y campanas de viento. El tintineo débil y etéreo de las campanas es tan hermoso como inquietante, y varios de los árboles tienen símbolos arcaicos tallados en la corteza. Una tirada exitosa de LEYENDAS identifica los símbolos como runas druídicas Maha, y las aventureras hechiceras pueden sentir instintivamente la antigua magia irradiando del claro. Cada aventurera que pase la noche en el claro (haga Campamento) ganará un Punto de Voluntad extra." 
  },
  33: { 
    book: "Book of Beasts", 
    page: "138", 
    title: "EL TRONO DE PIEDRA POSEÍDO", 
    description: "Un antiguo pero aún majestuoso trono de piedra se alza en una pequeña elevación cercana. Está parcialmente cubierto de espesas espinas y hay una profunda grieta zigzagueando por su respaldo. Siete escalones tallados en la piedra conducen al trono, modestamente decorado. Sus reposabrazos terminan en rostros monstruosos rugientes y en la parte superior del respaldo agrietado hay dos cimitarras cruzadas bajo una corona estilizada. El trono de piedra perteneció a un señor orco que gobernó la zona hace muchas generaciones. Si un aventurero se sienta en el trono desgastado por el clima, el señor orco se materializará como un fantasma. Lleno de rabia no muerta y envidia de los vivos, ataca ferozmente a quien se atrevió a mancillar su alto asiento. Pero la ira del no muerto disminuye si se alejan del trono. Con un poco de adulación, incluso puede ser persuadido para relatar una leyenda sobre las antiguas Tierras Prohibidas, adornada con fanfarronadas orcas sobre cráneos enemigos aplastados y gloriosas borracheras (usa los atributos de Fantasma)." 
  },
  34: { 
    book: "Book of Beasts", 
    page: "139", 
    title: "LOS SEPULTUREROS ALEGRES", 
    description: "El viento trae una melodía alegre desde un lugar cercano. Alguien está cantando ahí fuera, con más entusiasmo que habilidad. Pronto escucháis que proviene de un pequeño coro de voces alegres pero poco musicales. Las pocas palabras que podéis distinguir tratan sobre hazañas y logros de goblins. El sonido se acerca y pronto notáis a tres alegres goblins pavoneándose por el terreno. Llevan palas grandes y mochilas a reventar, pero parecen no tener equipo de combate. Las aventureras se han topado con los hermanos goblin Plump, Kolk y Hekate, que van de camino a un pueblo cercano para buscar empleo como sepultureros. Son alegres, valientes y extrovertidos. Si son atacados se defenderán con trucos sucios, pero si todo transcurre pacíficamente, ofrecerán ardilla asada e hidromiel. Hekate afirma ser buena con los no muertos y su secreto es una reliquia familiar: un dedo de goblin momificado con una larga garra negra. Según ella, perteneció a su bisabuela nigromante. Si superan una tirada opuesta de MANIPULACIÓN frente a la PERSPICACIA de Hekate, pueden persuadirlos para que vendan el dedo por D6 monedas de oro. El dedo contiene recuerdos ectoplásmicos y otorga la habilidad nigromántica de comunicarse con los muertos (como el conjuro de Rango 1), costando un Punto de Voluntad por uso." 
  },
  35: { 
    book: "Book of Beasts", 
    page: "140", 
    title: "LA BATALLA FEROZ", 
    description: "Lo primero que notáis son las aves carroñeras dando vueltas con avidez en un lugar más adelante. Hay tantas que forman una pequeña nube de plumas negras y malos presagios. Entonces lo escucháis. Metal chocando contra metal, el ritmo profundo de tambores, rugidos de rabia y dolor. Pendones coloridos y estandartes de guerra ondean sobre las copas de los árboles. Las aventureras han tropezado con una feroz escaramuza entre orcos beligerantes del clan Isir y una división de enanos Meromannios del ejército del señor de la guerra Tormund (unos 50 guerreros por bando). Ambos bandos están consumidos por la sed de sangre y es extremadamente peligroso acercarse. Quienes interfieran se arriesgan a ser atacados por ambos bandos. Si registran los cadáveres en las afueras del campo de batalla, pueden tirar dos veces en la tabla de Hallazgos Valiosos Transportados, pero se arriesgan a ser capturados por prebostes de ambos bandos que patrullan buscando saqueadores." 
  },
  36: { 
    book: "Book of Beasts", 
    page: "140", 
    title: "EL NÁUFRAGO", 
    description: "De repente veis grandes cantidades de tablones rotos y otros escombros flotando cerca de la superficie del agua. La madera parece resistente y bellamente decorada, pero está rota en pedazos y llena de extraños cortes, posiblemente de un pico gigante. Flotando en medio del desastre hay cajas llenas de paja y grandes barriles de roble con manzanas confitadas, arenque fermentado y otras delicias. La cabeza mojada y barbuda de un hombre asoma desde uno de los barriles: «Oh, gente decente en el gran azul, ¿puedo pediros que me echéis una mano? Os pagaré generosamente por ayudarme a salir de este aprieto». El hombre es Permodius Pen, el único superviviente de una balandra noble atacada por un calamar gigante. Es el consejero del Duque Gottfried (familia real alisea). Si lo rescatan, les dejará quedarse con los barriles de comida (valorados en 4D6 monedas de plata) y prometerá hablar bien de ellas al Duque. Es muy reservado sobre su misión diplomática, pero menciona al rey enano Turik y una \"alianza contra la chusma demoníaca\"." 
  }
};
