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
  }
};
