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
    description: "Un rugido agónico resuena a través de la naturaleza, doblando árboles y ramas con su onda de sonido y sacudiendo la misma tierra bajo vuestros pies. Al acercaros a investigar, un inconfundible olor a sangre y fluidos corporales pica en la nariz. Hay una bestia inmensa sufriendo un dolor inmenso no muy lejos. Se trata de una mantícora hembra en pleno parto. Está debilitada y vulnerable, pero un macho sobreprotector acecha en las sombras, listo para destrozar a cualquiera que se acerque. Si las aventureras matan a los adultos o esperan a que se vayan, pueden robar un cachorro de mantícora recién nacido que podría ser entrenado." 
  },
  2: { 
    book: "Book of Beasts", 
    page: "124", 
    title: "LA PALOMA MUERTA", 
    description: "En el suelo frente a vosotras yace un pájaro muerto con sus alas grises moteadas extendidas. La causa de la muerte es un dardo negro clavado en su pecho. Un pequeño tubo de cobre está atado a una de las patas del pájaro. Dentro hay un pergamino enrollado, sellado con cera roja, pero sin ningún símbolo. El pergamino contiene un mensaje cifrado o un mapa a una guarida local. Las aventureras pueden intentar tirar LEYENDAS para descifrar el mensaje, lo cual les indicaría la ubicación de un tesoro. Sin embargo, el asesino de la paloma, un cazarrecompensas o un espía enemigo, está rastreando a su presa y aparecerá poco después, reclamando que el mensaje le pertenece." 
  },
  3: { 
    book: "Book of Beasts", 
    page: "125", 
    title: "EL HOMBRE DE LA JAULA DE HIERRO", 
    description: "Una enorme jaula de hierro negro cuelga de un árbol muerto. Se puede vislumbrar paja y huesos de prisioneros anteriores a través de los barrotes oxidados. En medio del desastre está sentado un hombre demacrado y de aspecto salvaje. Parece absorto limpiándose las uñas con el dedo de un esqueleto, pero de repente levanta la vista y estira los brazos hacia vosotras en un gesto implorante. El hombre de la barba asilvestrada se presenta como Ambrosius Klack, el «espadachín más apuesto y hábil de Ravenland», encarcelado por un usurpador debido a un malentendido amoroso. Si le abren la jaula (ROBAR), les enseñará el camino a un árbol hueco donde guarda un tesoro (tira en Hallazgos Valiosos)." 
  },
  4: { 
    book: "Book of Beasts", 
    page: "126", 
    title: "EL MURO DE GARMAR", 
    description: "Una estructura desmoronada emerge de repente del terreno. Son los restos de una antigua muralla, mucho más alta que un ogro bien alimentado, erigiéndose silenciosa y misteriosamente sobre el paisaje. Muchos de sus bloques de piedra están erosionados y cubiertos de musgo y enredaderas. A pesar de los estragos del tiempo, está claro que antaño fue una poderosa fortificación destinada a mantener a raya los horrores de las Tierras Prohibidas. Si el grupo pasa un rato explorando la ruina de 500 metros, encontrarán la entrada a uno de los sótanos de la torre de vigilancia, donde hay D6 raciones de comida rancia pero aún comestible y una vieja arma alisea de calidad." 
  },
  5: { 
    book: "Book of Beasts", 
    page: "126", 
    title: "EL HUEVO PERDIDO", 
    description: "Algo liso y moteado asoma en el suelo, detrás de unos montones de tierra cavada apresuradamente. Podría ser el cuero cabelludo calvo de un goblin al acecho, pero al acercaros veis que se trata de un enorme huevo incrustado en paja en el fondo de un pozo profundo. El huevo es tan grande como un escudo y sorprendentemente pesado. Pertenece a un reptil monstruoso (como un basilisco o un dracosierpe). Si deciden llevárselo, será extremadamente valioso, pero la madre rastreará su olor incansablemente. Si lo rompen y lo cocinan, alimentará a todo el grupo durante un día completo y otorgará 1 Punto de Voluntad a quien coma." 
  },
  6: { 
    book: "Book of Beasts", 
    page: "127", 
    title: "TALLAS EN LA ROCA", 
    description: "Imponentes imágenes de monstruos, bestias y criaturas humanoides se pueden ver por toda una pared de roca cercana. Alguien ha tallado o pintado con un color rojo sangre que se ha secado y vuelto de un tono cobrizo por el sol y la lluvia. Si el grupo las estudia y supera una tirada de LEYENDAS, se darán cuenta de que no son simples dibujos, sino instrucciones que revelan las debilidades de un monstruo local específico. Puedes tirar en la tabla de Monstruos Aleatorios. La próxima vez que las aventureras se enfrenten a esa bestia en particular, podrán hacer sus tiradas de ataque con un +1 gracias al conocimiento adquirido." 
  },
  7: { 
    book: "Book of Beasts", 
    page: "127", 
    title: "EL DIOS OLVIDADO", 
    description: "La silueta de una enorme criatura humanoide se eleva desde el terreno. Es tan alta como varios hombres, pero al acercaros os dais cuenta de que está tallada en un enorme bloque de granito. El rostro tiene un único ojo grande y su gran boca abierta está llena de dientes aserrados. Los orcos locales adoran a este dios olvidado. Si las aventureras le ofrecen un tributo de carne cruda o sangre en su boca de piedra, recibirán la bendición del dios (tirarán con un dado extra en su próxima prueba de PELEA). Si intentan vandalizar la estatua, caerá una maldición sobre ellas y perderán un dado en sus próximas tres tiradas de ataque." 
  },
  8: { 
    book: "Book of Beasts", 
    page: "128", 
    title: "EL ÁRBOL VIVIENTE", 
    description: "Un majestuoso roble se eleva hacia el cielo en una pequeña colina cercana. El árbol parece robusto y lleno de vida. Bajo sus abundantes hojas hay un claro que invita a acampar. Sin embargo, este no es un roble común: es un Ent ancestral que ha echado raíces para descansar. Si las aventureras acampan a sus pies, el árbol usará su magia para protegerlas; el grupo sanará un punto extra de daño a cualquier atributo durante el descanso y no serán atacadas por monstruos menores. Pero si encienden fuego muy cerca de las raíces o cortan sus ramas, el Ent despertará enfurecido y las atacará." 
  },
  9: { 
    book: "Book of Beasts", 
    page: "128", 
    title: "LA CACERÍA SALVAJE", 
    description: "Un joven con ropas salpicadas de sangre salta repentinamente al camino frente a vosotras. Por un breve momento, os mira con ojos aterrorizados, sin aliento y agarrándose el costado ensangrentado. Al segundo siguiente, se precipita hacia la maleza. El sonido de los ladridos de los sabuesos rompe el aire, y tras él cabalgan figuras con armaduras oxidadas y caballos no muertos. Es la legendaria Cacería Salvaje, un grupo de demonios de la Niebla de Sangre que persiguen a sus presas por pura diversión. Las aventureras deben ocultarse inmediatamente (tirada de SIGILO). Si son detectadas, la Cacería fijará su atención en ellas." 
  },
  10: { 
    book: "Book of Beasts", 
    page: "129", 
    title: "UNA GUARDIA DE PIEDRA", 
    description: "La silueta de una figura humanoide se puede vislumbrar en la densa vegetación. La figura no responde cuando le habláis. Al acercaros, descubrís que es la estatua de un guerrero de la antigüedad, desgastada por el clima pero aún asombrosamente detallada, con un rostro congelado en una expresión de absoluto terror. Quien supere LEYENDAS o SUPERVIVENCIA entenderá que no es una estatua, sino una persona convertida en piedra. Un basilisco o una gorgona ronda por el hexágono. Encontrar esto sirve como advertencia y da al grupo la oportunidad de prepararse o huir en la dirección contraria." 
  },
  11: { 
    book: "Book of Beasts", 
    page: "129", 
    title: "PIEDRA RÚNICA ENANA", 
    description: "Una gran roca tallada con runas sobresale de la tierra en una colina cercana. Las runas, de tono rojizo, están rodeadas por elaborados lazos que parecen colas de dragón. Son runas enanas que pueden ser leídas superando una tirada de LEYENDAS: «Tyrmyr hijo de Grundhir, señor del Gran Salón de la Cascada de la Montaña, erigió este monumento para que el mundo tema y admire por siempre su varonil matanza de la escoria de Herrumbre en la gran guerra». Las aventureras enanas que descansen aquí durante un turno recuperarán todos sus atributos al máximo." 
  },
  12: { 
    book: "Book of Beasts", 
    page: "130", 
    title: "RASTROS DE BABA EN LA VEGETACIÓN", 
    description: "Hilos brillantes de una secreción babosa se extienden por el terreno. Cubren las piedras, la hierba y el musgo. Al examinarlos con SUPERVIVENCIA, el grupo descubrirá que es baba de basilisco (o criatura monstruosa) y que es altamente venenosa. Tocar la baba sin guantes fuerza una tirada de resistencia inmediata contra Veneno Paralizante (Potencia 6). Sin embargo, si la recogen con cuidado, pueden extraer D6 dosis de veneno para aplicar en sus armas." 
  },
  13: { 
    book: "Book of Beasts", 
    page: "130", 
    title: "CAMPO DE BATALLA CUBIERTO DE MALEZA", 
    description: "Un antiguo campo de batalla se abre en el paisaje como una herida de malos recuerdos. El campo está cubierto de hierba salvaje, con calaveras sonrientes empaladas en picas que sobresalen de la vegetación. Si las aventureras deciden dedicar un Cuarto de Día entero a EXPLORAR minuciosamente los restos, pueden tirar dos veces en la tabla de Hallazgos Valiosos Transportados, además de encontrar D66 monedas (tira 1D6: 1-3 cobre, 4-5 plata, 6 oro). Sin embargo, remover tantos cadáveres antiguos atrae la atención de Gules o carroñeros." 
  },
  14: { 
    book: "Book of Beasts", 
    page: "131", 
    title: "EL ESQUELETO EN EL ÁRBOL", 
    description: "Vuestros ojos cansados se topan con una visión ominosa: un esqueleto envuelto en harapos andrajosos cuelga de un árbol. Su cabeza está inclinada antinaturalmente, y una pesada cadena de hierro le rodea el cuello a modo de soga. Alrededor de sus pies de hueso hay una pequeña caja de madera. Si retiran la cadena, el espíritu del nigromante Mortelius Quidom se materializará como Fantasma y atacará. Si no la retiran y en su lugar fuerzan la caja, encontrarán D6 Puntos de Voluntad atrapados en gemas oscuras o un pergamino." 
  },
  15: { 
    book: "Book of Beasts", 
    page: "131", 
    title: "VIEJO POZO", 
    description: "Un pozo antiguo y parcialmente cubierto de maleza se asoma entre la densa vegetación. No tiene polea, pero el cubo y la tapa de madera yacen podridos cerca. En la oscuridad, cuatro metros más abajo, brillan pequeñas chispas. Si un aventurero desciende (requiere MOVERSE), encontrará varios esqueletos de animales que cayeron, pero también un anillo mágico o un Hallazgo Valioso. Ojo: podría haber una serpiente venenosa o enjambre de insectos usando el pozo húmedo como nido." 
  },
  16: { 
    book: "Book of Beasts", 
    page: "132", 
    title: "LA MESA DE PIEDRA DE LOS DIOSES", 
    description: "Una gran mesa de piedra se alza entre unos árboles cercanos. Es una construcción impresionante de granito y mármol. Alrededor de su superficie, se aprecian símbolos arcaicos de los viejos dioses. El Caminante Nocturno está posicionado en el extremo, junto con Lamento, Flujo y Arcilla. Cualquier aventurero que reze u ofrezca un sacrificio de valor sobre la mesa de piedra será bendecido por uno de los dioses: la próxima vez que quede Destrozado, podrá curar un punto crítico automáticamente de forma milagrosa." 
  },
  17: { 
    book: "Book of Beasts", 
    page: "132", 
    title: "UN MANJAR ORCO", 
    description: "Bajo un grupo de árboles en la penumbra crecen hongos de un metro de altura. Sus sombreros con forma de embudo son de color azul pálido, espolvoreados con un negro hollín. Un éxito en SUPERVIVENCIA revelará que se trata de 'Orejassorcas', un raro manjar muy apreciado por los orcos. Pueden recolectar D6 grandes raciones de estas setas. Si se las comen, curarán 1 Punto de daño a Fuerza, y si se las ofrecen como regalo a un grupo de orcos, se ganarán su respeto y amistad casi instantáneamente." 
  },
  18: { 
    book: "Book of Beasts", 
    page: "133", 
    title: "EL MAESTRO CERVECERO MISERABLE", 
    description: "El silencio se rompe por un fuerte sollozo, seguido de varios estornudos húmedos. Tras un tronco caído está el enano Horgal, un maestro cervecero cuyo carro de hidromiel fue saqueado por bandidos u orcos. Llora la pérdida de su valioso 'Zumo de Montaña'. Si el grupo le ofrece escoltarlo y recuperar los barriles (un breve desvío), los bandidos estarán demasiado borrachos para luchar bien. Como recompensa, Horgal les entregará un barril de hidromiel curativa (D6 dosis que curan atributos en combate)." 
  }
};
