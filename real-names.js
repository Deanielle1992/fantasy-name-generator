const splitterAfter = new Splitter(VOWELS, true, "after")
const splitterBefore = new Splitter(VOWELS, true, "before")
const titleSplitterAfter = new Splitter([" ", "the ", "of ", "for ", "in ", "an ", "and ", "a ", "or ", "from " ], true, "after")
const titleSplitterBefore = new Splitter([" ", " the", " of", " for", " in", " an", " and", " a", " or", " from" ], true, "before")

// Filters are:
//  ConsonantsPatternsFilter
//  VowelsPatternsFilter
//  RepeatedLettersFilter
//  UniquenessFilter
//  NameLengthFilter
//  CapitalizeFilter

const standardFilters = [
    RepeatedLettersFilter,
    ConsonantsPatternsFilter,
    VowelsPatternsFilter,
    UniquenessFilter,
    NameLengthFilter,
    CapitalizeFilter
]

const RealNamesGroups = []

RealNamesGroups.push(
    {
	label: "Traditional Celtic names",
	nameSets: [
	    {
		// http://www.namenerds.com/scottish/gaelicdude.html
		column: "left",
		label: "Scottish male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Ailde","Ailean","Ailpein","Airril","Amhalghaidh","Angaidh","Aodh","Aodhagan","Aodhan","Aoidhean","Aonghas","Aonghasan","Armadal","Art","Artagan","Artair","Athairne","Baodan","Baoithein","Barra","Bearach","Bearchan","Beatan","Beathan","Beisdean","Blàr","Blàthan","Boisil","Bran","Branan","Brandubh","Breandan","Breannan","Brian","Brianan","Cailean","Cairbre","Caireall","Camran","Caoilte","Caorall","Carmag","Catan","Cathal","Cathalan","Cè","Ceallach","Cesan","Ciaran","Coinneach","Coireall","Coll","Colla","Còmhall","Còmhan","Conall","Conan","Conchar","Conn","Corc","Cormag","Cosgrach","Cuirealan","Curadan","Dàn","Diarmad","Diocail","Dobharcu","Dolaidh","Dòmhnallaidh","Dòmhnallan","Donaidh","Donnach","Donnan","Donnchadh","Donnchaidh","Donnghail","Drostan","Dubh","Dubhagan","Dubhshìth","Dubhthach","Dùghall","Dùghlas","Duibhne","Dunlèibhe","Eachainn","Eachann","Eacharn","Eadan","Earc","Earnan","Eircheard","Eochagan","Eochaidh","Eògan","Eoghanan","Eòghann","Eòghnaidh","Eònan","Eòran","Failbhe","Faolagan","Faolan","Fearchar","Feargan","Fearghas","Finnean","Fìonan","Fionghan","Fionn","Fionnchan","Fionnghal","Fionnlagan","Fionnlagh","Fionntan","Flaithbheartach","Flannagan","Fotadh","Friseal","Gabhran","Garbhan","Gilleanndrais","Gilleasbachan","Gilleasbaig","Gilleasp","Gilleathain","Gillebhrìghde","Gillechrìosd","Gilliosa","Gòrdan","Gormal","Guaire","Guinnein","Guirmean","Hùisdean","Iùrnan","Lachaidh","Lachann","Lachlainn","Lachlann","Laise","Latharn","Luag","Lulach","Macbeatha","Machar","Macrath","Madadh","Manachan","Maoilios","Maoldòmhnaich","Maolmoire","Maolsneachta","Maon","Mariubhe","Moireach","Muireach","Muireachan","Mungan","Murchadh","Murdaigean","Naoghas","Naoise","Naomhan","Neachdainn","Neas","Neasan","Niall","Niallghas","Nilidh","Ninean","Ninnidh","Odhran","Oisean","Oisian","Onchu","Osgar","Rodachan","Rodaidh","Ròidh","Roithridh","Rònan","Ros","Ruairidh","Ruarachan","Scotaidh","Sealbhach","Searc","Sèitheach","Sionn","Sòlas","Suibhne","Taog","Taraghlan","Taran","Teàrlach","Teàrlaidh","Torradan","Truinnean","Uallas","Ualraig","Uisdean"
		       ]
	    },
	    {
		// source: http://www.namenerds.com/scottish/gaelic.html
		column: "right",
		label: "Scottish female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Beathag","Borgach","Brianag","Brìghde","Caitir","Caoimhe","Caointiorn","Ceana","Ceanag","Dearbhail","Dearshul","Doileag","Dolidh","Eamhhair","Eimhir","Eithne","Fionnaghal","Fionnghuala","Gormal","Gràinne","Greudach","Latharna","Malamhìn","Malmhìn","Meadhbh","Mòr","Mòrag","Mordag","Muireall","Mùirne","Oighrig","Ròs","Seàrlaid","Sidheag","Sìleas","Slàine","Slàinidh","Slàinte","Sorcha","Teàrlag","Una",
		       ]
	    },

	    {
		// source: http://www.namenerds.com/irish/trad.html
		column: "left",
		label: "Irish male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Maon","Miach","Séighín","Éimhín","Fachtna","Feidhlim","Ailbhe","Beag","Bearach","Cathán","Ceallach","Eirnín","Flann","Gormán","Naoise","Coinneach","Abbán","Aibhne","Ailill","Aimhirghin","Ainbheartach","Ainníleas","Anamcha","Aodh","Aodhán","Aonghus","Bairrfhionn","Baoth","Bardán","Beagán","Breacán","Breasal","Brion","Brocc","Brógán","Buadhach","Cairbre","Cairell","Calbhach","Caoimhín","Cass","Cassair","Cassán","Cathal","Cathaír","Cearbhall","Cian","Ciarán","Cillian","Cináed","Coinneach","Colmán","Comhghall","Conall","Conchobhar","Conlaodh","Conn","Conán","Cormac","Curnán","Cuán","Cúmhaí","Daigh","Daighre","Daimhín","Dallán","Deaglán","Deasmumhnach","Diarmaid","Domhnall","Donnchadh","Dubhaltach","Dubhgall","Dubhghlas","Dáire","Ealadha","Earnán","Eoghan","Faolán","Fearchar","Feardorcha","Fearghal","Fearghus","Fechín","Fiachra","Fial","Finnseach","Finnén","Fionn","Fionnbharr","Fionntán","Garbhán","Gilleagán","Giolla","Chríst","Glaisne","Gobán","Gormghiolla","Iarfhlaith","Iarlugh","Iobhar","Iomchadh","Irial","Labhraidh","Labhrás","Lachtna","Lachtnán","Laisrén","Laoidheach","Laoire","Lasair","Leannán","Lochlann","Lomán","Lonán","Lorcán","Lughaidh","Mac","Nisse","Mac","Táil","Mael","Íosa","Maeleachlainn","Mainchín","Maine","Maolán","Marcán","Meallán","Mel","Mochta","Molaisse","Morann","Muircheartach","Muireadhach","Murchadh","Murchú","Naithí","Naomhán","Neasán","Niall","Niallán","Nuadha","Odhrán","Oilithir","Oilleóg","Oillill","Oillín","Oisín","Olcán","Onchú","Orthanach","Osgar","Osán","Robhartach","Ross","Ruaidhrí","Ruarc","Ríoghán","Ríordán","Rónán","Rúadhán","Samhradhán","Scannal","Scannlán","Scoithín","Scolaí","Scáthach","Seachlann","Seanchán","Seanán","Siollán","Sléibhín","Somhairle","Suibhne","Sárán","Sé","Séadhna","Síoda","Tadhg","Taichleach","Tanaí","Tassach","Teimhnín","Tighearnach","Tighearnán","Tiobraide","Toirdhealbhach","Tomaltach","Torcán","Torna","Treasach","Tuama","Tuathal","Tíreachán","Tóla","Tómmán","Uaithne","Uallachán","Uallgarg","Ultán","Urard","Ádhamhnán","Áinle","Ámhra","Ánrothán","Éamonn","Éanna","Ógán","Ólchobhar"
		       ]
	    },
	    {
		// source: http://www.namenerds.com/irish/trad.html
		column: "right",
		label: "Irish female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Aillean","Ainnir","Aithche","Ana","Aodhamair","Aodnait","Aoibheann","Aoibhegréine","Aoife","Banbha","Blinne","Bláthnaid","Bláthín","Bríghid","Brónach","Báine","Bébhinn","Caoilfhionn","Caoimhe","Ceara","Ciar","Clíodhna","Dairinn","Damhnait","Dearbhail","Deirbhile","Deirdre","Dunfhlaith","Dáirine","Dáirinn","Eadan","Easnadh","Echna","Eibhear","Eithne","Fainche","Feidhelm","Feme","Fianait","Fionnait","Fionnghuala","Fionúir","Féthnaid","Geiléis","Gobnait","Gormlaith","Grian","Gráinne","Laoise","Lasairfhiona","Liamhain","Life","Luiseach","Líadan","Líobhan","Marga","Meadhbh","Meallá","Moinnine","Moncha","Muadhnait","Muireann","Muirgheal","Muirne","Muirín","Móirne","Mór","Naomh","Neacht","Neamhain","Neasa","Niamh","Nuala","Nárbhflaith","Osnait","Rathnait","Ríofach","Ríona","Róinseach","Róisín","Rónnad","Rós","Rúadhnait","Sadhbh","Saorla","Saraid","Scoithniamh","Scoth","Scothnait","Searc","Sláine","Sorcha","Suaibhseach","Suanach","Sárnait","Séanait","Síomha","Taillte","Teafa","Teamhair","Treasa","Tuamnait","Tuathla","Tuileach","Tuilelaith","Téide","Uaine","Uaine","Uainionn","Uallach","Uasal","Áine","Áinfean","Álmhath","Éibhleann","Éile","Éirne","Émer","Étaín","Íde","Íonait","Órlaith","Órnait","Úna","Maon","Miach","Séighín","Éimhín","Fachtna","Feidhlim","Ailbhe","Beag","Bearach","Cathán","Ceallach","Eirnín","Flann","Gormán","Naoise","Coinneach"
		       ]
	    },
	    {
		// source: http://www.namenerds.com/welsh/trad2.html
		column: "left",
		label: "Welsh male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Adda","Addaon","Adeon","Aedd","Aeddan","Aelhearn","Aelwyn","Aeron","Afagddu","Afallon","Afan","Alan","Alaw","Alawn","Alban","Aldith","Aldryd","Alec","Aled","Alun","Alwyn","Amaethon","Amlodd","Anarawd","Andreas","Aneirin","Angwyn","Anhun","Arawn","Arial","Arianwyn","Arnallt","Arofan","Aron","Arthen","Arthfael","Arthgen","Arthur","Arwel","Arwyn","Asaff","Aurfryn","Auryn","Awen","Awsten","Baeddan","Baglan","Barri","Barti","Bedaws","Bedwyn","Bedivere","Bedwyn","Bedwyr","Berddig","Bergam","Berwyn","Bevan","Beuno","Beynon","Bleddyn","Bledig","Bledri","Blwchfardd","Boreugwyn","Brân","Branwaladr","Breichiawl","Brice","Brioc","Brochfael","Brychan","Bryn","Brynllyn","Brynmor","Bryngwyn","Brython","Cadell","Cadfael","Cadog","Cadwaladr","Cadwallon","Cadwgan","Caerwyn","Caradog","Carwyn","Caswallon","Cawrdaf","Cecil","Cedrych","Cei","Ceinfryn","Ceiriog","Celyn","Celynen","Cennydd","Ceredig","Ceri","Cewydd","Cian","Cledwyn","Clwyd","Clydai","Clydno","Coel","Collen","Colwyn","Conan","Conwy","Cospatrick","Craigfryn","Cranog","Crwys","Culhwch","Cunedda","Curig","Cyfeiliog","Cyffin","Cymro","Cynan","Cynddelw","Cyndeyrn","Cynddylan","Cynedda","Cynfab","Cynfarch","Cynfael","Cynfrig","Cynog","Cynon","Dafydd","Dai","Dedwydd","Deian","Deiniol","Delwyn","Derfel","Deri","Dewi","Dogmael","Dwyryd","Dyfri","Dylan","Ednyfed","Einion","Eirian","Eirwyn","Elffin","Elidir","Elis","Elwyn","Elystan","Emlyn","Emrys","Emyr","Evan","Fflamddwyn","Ffransis","Fychan","Gareth","Gawain","Geraint","Gerallt","Gethin","Gildas","Gilfaethwy","Glanmor","Glyn","Goronwy","Grigor","Gruffydd","Gwaednerth","Gwalchgwyn","Gwalchmai","Gwatcyn","Gwaun","Gwenlyn","Gwili","Gwilym","Gwion","Gwydderig","Gwyddno","Gwydion","Gwyn","Gwynfor","Gwythyr","Hafgan","Heddwyn","Heilyn","Heini","Hergest","Heulfryn","Heulyn","Huw","Hywel","Iago","Ianto","Idris","Idwal","Iestin","Ieuan","Ifan","Ifor","Illtyd","Ioan","Iolo","Iorweth","Lewys","Llew","Lloyd","Llyr","Llywarch","Llywelyn","Mabon","Macsen","Madog","Mael","Maelgwyn","Maelgwn","Maelmadog","Math","Mathonwy","Medrawd","Meical","Meilyr","Meirion","Meredudd","Merfyn","Meurig","Mihangel","Moelwyn","Morgan","Morien","Myrddin","Nudd","Owain","Pawl","Pedr","Peredur","Powel","Pryderi","Pwyll","Rhein","Rheinallt","Rhisiart","Rhodri","Rhun","Rhydderch","Rhydian","Rhydwyn","Rhys","Robat","Seiriol","Selwyn","Siarl","Siencyn","Simwnt","Sion","Sionyn","Sior","Steffan","Sulien","Sulwyn","Taliesin","Tegwyn","Teilo","Tewdwr","Tomos","Trefor","Trystan","Wyn","Ynyr"
		       ]
	    },
	    {
		// source: http://www.namenerds.com/welsh/trad1.html
		column: "right",
		label: "Welsh female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Addfwyn","Aderyn","Adlais","Adwen","Aelwen","Aerfen","Aeron","Aeronwen","Aeronwy","Afryl","Alaw","Aldyth","Alwen","Alys","Amranwen","Aneira","Anest","Angharad","Ann","Anna","Anwen","Annwr","Annwyl","Arddun","Arianell","Arianrhod","Arianwen","Arwen","Aurddolen","Auron","Awela","Awena","Banwen","Beca","Berwen","Bethan","Beti","Betrys","Blodeuedd","Blodwedd","Blodwen","Branwen","Brengwain","Briallen","Brisen","Bronmai","Bronwen","Brythonwen","Buddug","Cadi","Cain","Calan","Canaid","Caron","Caronwen","Carwen","Caryl","Carys","Catrin","Ceindeg","Ceindrych","Ceinfryn","Ceinwen","Ceirios","Ceri","Ceridwen","Cerys","Collwen","Creuddylad","Crisiant","Crystyn","Cyffin","Daron","Deilwen","Del","Delun","Delwen","Delyn","Delyth","Deris","Derwena","Deryn","Deryth","Dilwen","Dilys","Drudwen","Drysi","Dwyfor","Dwynwen","Dwyryd","Dwysan","Dyddanwy","Dyddgu","Dyfi","Ebrill","Edwy","Efa","Eigra","Eilir","Eilonwy","Eilwen","Eira","Eirian","Eirianwen","Eirianedd","Eiriol","Eirlys","Eirwen","Eirys","Elan","Elain","Elen","Elenid","Eleri","Elinor","Elisabeth","Elli","Elliw","Eluned","Enfys","Enid","Eos","Erin","Eryl","Esyllt","Ethni","Eurfron","Euron","Eurddolyn","Eurwen","Ewig","Faleiry","Fanw","Ffion","Fflur","Ffraid","Ffreuer","Fioled","Gaenor","Geinor","Generys","Glenda","Glenys","Glesni","Glynis","Goleubryd","Goleudydd","Grug","Gwawr","Gwawrddydd","Gwawrwen","Gwen","Gwenda","Gwenddydd","Gwendolen","Gwener","Gwenfair","Gwenfor","Gwenfrewi","Gwenfron","Gwenhwyfar","Gwenith","Gwenllian","Gwenlyn","Gwennan","Gwennant","Gwennol","Gwenol","Gwenydd","Gwenynan","Gwerful","Gwernen","Gwernfyl","Gwlithen","Gwyddelan","Gwyddfid","Gwladys","Gwylan","Gwylfai","Gwyneth","Gwynonwen","Haf","Hafgan","Hafren","Hafwen","Heddwen","Hedydd","Heini","Heledd","Heulwen","Heulyn","Hydref","Hywela","Iarlles","Idanwen","Ifanna","Ifanwy","Ilar","Iona","Ionor","Iorwen","Iseult","Ithela","Leri","Lili","Lilwen","Liwsi","Lleucu","Llian","Llinos","Llio","Lluan","Lodes","Lowri","Luned","Lyneth","Lynfa","Lynwen","Mabli","Madlen","Maelona","Maelorwen","Mai","Mair","Mallt","Manon","Marged","Medeni","Medi","Medwen","Mefin","Megan","Meinwen","Meirionwen","Melangell","Meleri","Meudwen","Modron","Modwen","Moelwen","Mold","Mona","Morforwyn","Morfudd","Morwen","Mwyndeg","Mwynen","Myfanwy","Nan","Nans","Nant","Nefyn","Nerys","Nest","Nia","Non","Olwen","Owena","Perl","Rebeca","Rhagnell","Rhedyn","Rhiain","Rhiangar","Rhiannon","Rhianwen","Rhianydd","Rhondda","Rhonwen","Rhosan","Rhoslyn","Rhunedd","Rosentyl","Rowena","Sara","Seirial","Seirian","Seren","Siân","Sidan","Sioned","Siriol","Siwan","Siwsan","Sulian","Sulwen","Surwen","Tafwys","Tangwen","Tangwystl","Tanwen","Taryn","Tegan","Tegeirian","Tegfedd","Tegwedd","Tegwen","Tegyd","Teiddwen","Teifi","Telaid","Teleri","Telyn","Tesni","Tirion","Tonwen","Tudful","Undeg","Wena","Wenhaf","Ynyra"
		       ]
	    },
	]
    },

    {
	label: "Traditional Germanic names",
	nameSets: [
	    {
		// source: http://www.infernaldreams.com/names/Europe/Medieval/Anglo_Saxon.htm
		column: "left",
		label: "Anglo-Saxon male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Acwald","Acwuld","Acwulf","Adalbert","Adelard","Adulf","Aedbald","Aedilbert","Aedilhum","Aedilhun","Aednoth","Aedwulf","Aefic","Aegelric","Aegenwulf","Aegheard","Aelbehrt","Aelbert","Aelffrith","Aelfgar","Aelfgeat","Aelfgiest","Aelfheah","Aelfhelm","Aelfhere","Aelfhun","Aelfmaer","Aelfnoth","Aelfred","Aelfric","Aelfsi","Aelfsige","Aelfstan","Aelfwald","Aelfwaru","Aelfwear","Aelfweard","Aelfwin","Aelfwine","Aelfwold","Aelred","Aelwin","Aembriht","Aenheri","Aescwig","Aescwine","Aethelbald","Aethelbehrt","Aethelbeorht","Aethelbert","Aethelbricht","Aetheldred","Aethelfrid","Aethelfrith","Aethelgar","Aethelhard","Aethelheah","Aethelheard","Aethelhelm","Aethelhere","Aethelhun","Aethelmaer","Aethelmod","Aethelmund","Aethelnoth","Aethelred","Aethelric","Aethelsige","Aethelstan","Aethelulf","Aethelwald","Aethelwalh","Aethelweah","Aethelweald","Aethelweard","Aethelwig","Aethelwin","Aethelwine","Aethelwold","Aethelwulf","Aethilheard","Aethilwald","Agilbert","Ahlfrith","Ailmar","Ailnoth","Ailred","Ailwin","Albold","Alcfrith","Alchere","Alchfrid","Alchfrith","Alchred","Alcred","Alcuin","Alden","Aldfrid","Aldfrith","Aldhelm","Aldhere","Aldhun","Aldred","Aldwulf","Aldwyn","Alfar","Alfgar","Alfric","Alfwaerd","Alfwine","Alfwold","Algar","Alhfrith","Alhhere","Alhmund","Alhstan","Alhwald","Alkmund","Allnut","Allric","Alnod","Alnoth","Aloc","Alphege","Alred","Alric","Aluuard","Alward","Alwin","Alwold","Alwyn","Alwyne","Andhere","Andhun","Angeltheow","Angenlaf","Angenmaer","Angenwit","Anlaf","Anselm","Ansfrid","Archibald","Arnulf","Ascferth","Aschere","Ashwin","Asulf","Athelheah","Athelmod","Athelric","Aylward","Aylwin","Badanoth","Badulf","Baegloc","Baeldaeg","Baerbald","Baerwald","Baldhere","Baldred","Baldric","Baldthryth","Baldwin","Baldwine","Baldwulf","Balther","Bardolph","Barduwulf","Beadumund","Beadured","Beaduric","Beadwheard","Beagmund","Beagnoth","Bealdwine","Beanburh","Beanstan","Bedfrith","Bedgeat","Bedhelm","Bedric","Bedwig","Behrtferth","Behrtwald","Beorcol","Beorhtel","Beorhtfrith","Beorhthelm","Beorhthere","Beorhtmaer","Beorhtmund","Beorhtnoth","Beorhtric","Beorhtsige","Beorhtstan","Beorhtweald","Beorhtwig","Beorhtwulf","Beornfred","Beornfrith","Beornheard","Beornhelm","Beornmod","Beornmund","Beornnoth","Beornoth","Beornred","Beornric","Beornstan","Beornwald","Beornward","Beornwulf","Beorthelm","Beorthmaer","Beorthwulf","Beorward","Beothuk","Beowulf","Bercthun","Berenwald","Berhtric","Berhtwald","Berhtwulf","Beric","Berihert","Bermund","Bernulf","Bernwini","Berthelm","Berthun","Bertram","Bertred","Bertulf","Bertwald","Berwulf","Berwyn","Bilfrith","Bilheard","Billfrid","Billfrith","Birstan","Blacwin","Blaecman","Blithhere","Blithweard","Bothelm","Botolph","Botsige","Botulf","Botwine","Botwulf","Bregowine","Brictric","Bridferth","Brifard","Brihteah","Brihthere","Brihtnoth","Brihtsige","Brihtwald","Brithnoth","Brithun","Brocwulf","Brunheard","Bruning","Brunloc","Brunweard","Brunwulf","Brychan","Bryning","Brynstan","Burchard","Burghal","Burgheard","Burghelm","Burghred","Burgred","Burgweard","Burgwine","Burgwulf","Burhhelm","Burhred","Burhtred","Byrhtferth","Byrhtnoth","Byrnhorn","Byrnstan","Byrnwold","Byrtferth","Caedmon","Caedwalla","Calemund","Calunoth","Cameleac","Cantwine","Carileph","Cathwulf","Ceadwalla","Ceadwealla","Ceafor","Ceawlin","Cenbeorht","Cenberet","Cenfirth","Cenfrith","Cenfus","Cenhelm","Cenhere","Cenred","Centweald","Centwine","Cenwalch","Cenwalh","Cenwulf","Ceolbald","Ceolbeald","Ceolfrid","Ceolfrih","Ceolfrith","Ceolheard","Ceolhelm","Ceolhere","Ceolmaer","Ceolmund","Ceolnoth","Ceolred","Ceolswith","Ceolwald","Ceolweald","Ceolweard","Ceolwulf","Ceonred","Ceowald","Cerdic","Ceredig","Clarembald","Coelfrid","Coenbehrt","Coengilsus","Coenhelm","Coenred","Coenwalh","Coenwulf","Coleman","Colman","Condede","Conewalch","Cuichelm","Cuthbald","Cuthbeorht","Cuthbert","Cuthburg","Cutheard","Cuthen","Cuthert","Cuthfrith","Cuthgils","Cuthheard","Cuthhelm","Cuthhere","Cuthman","Cuthred","Cuthsige","Cuthwin","Cuthwine","Cuthwulf","Cwenburg","Cwichelm","Cynebald","Cynebehrt","Cynebil","Cyneburg","Cynefrid","Cynegels","Cynegils","Cynegisl","Cyneheah","Cyneheard","Cynehelm","Cynehere","Cynelaf","Cynemaer","Cynemund","Cynered","Cynesige","Cynestan","Cyneswith","Cynewald","Cyneweard","Cynewulf","Cynferth","Cynfrith","Cynhelm","Cynibert","Cynidr","Cynred","Cynreow","Cynric","Cynsige","Cynwulf","Daedheah","Daegheard","Darwin","Delwyn","Deneheard","Denewulf","Deorlaf","Deorling","Deormod","Deormund","Deornoth","Deorsige","Deorwine","Deowuc","Derman","Digoth","Domgeat","Dreamwulf","Drithelm","Dryhthelm","Drythelm","Duceman","Dudemaer","Dudeman","Dunnere","Dunstan","Dycgbeorht","Eadbald","Eadbeald","Eadbehrt","Eadbeorht","Eadbert","Eadda","Eadfrid","Eadfrith","Eadger","Eadheard","Eadhed","Eadhelm","Eadhere","Eadlac","Eadmaer","Eadmer","Eadmod","Eadmund","Eadnod","Eadnoth","Eadred","Eadric","Eadsige","Eadstan","Eadulf","Eadwacer","Eadwald","Eadward","Eadweald","Eadweard","Eadwig","Eadwin","Eadwine","Eadwold","Eadwulf","Eadwyn","Eahfrid","Ealda","Ealdbehrt","Ealdbeorht","Ealdfrith","Ealdhelm","Ealdhere","Ealdred","Ealdwine","Ealdwulf","Ealfled","Ealgmund","Ealhelm","Ealhheard","Ealhhere","Ealhhun","Ealhmund","Ealhred","Ealhsige","Ealhstan","Ealhswith","Ealric","Eambald","Eanbald","Eanbeorht","Eanfrid","Eanfrith","Eanhere","Eanlac","Eanmaer","Eanred","Eansige","Eanulf","Eanwine","Eanwulf","Earcanwald","Earconbehrt","Earconbert","Eardnoth","Eardwul","Eardwulf","Earnmund","Earnwulf","Earpwald","Easterwine","Eastorwine","Ebrard","Ecgbald","Ecgbehrt","Ecgbert","Ecgfrith","Ecgheard","Ecghere","Ecgmund","Ecgred","Ecgric","Ecgtheow","Ecgwald","Ecgwine","Ecgwulf","Edric","Edward","Edwy","Eegelwin","Egbert","Egbin","Egbryht","Egelbert","Egelwin","Egferth","Egfrid","Egfrith","Egred","Egric","Egwine","Eilmund","Einhard","Ekbert","Ekkehard","Elfstan","Elphege","Elstan","Eluard","Eluric","Elwin","Elwyn","Engelard","Engelram","Eoforheard","Eoforich","Eoforweald","Eohhere","Eohric","Eomer","Eorcenbehrt","Eorconbeald","Eorconbehrt","Eorconweald","Eored","Eorkonweald","Eormenraed","Eormenread","Eorphere","Eorpwald","Eosterwine","Erconbert","Eric","Ermenred","Erminus","Ernulf","Erwald","Erwin","Esegar","Estmar","Estmund","Ethbin","Ethelred","Ethelric","Ethelsige","Eumer","Everard","Ewald","Eward","Ewias","Farman","Feleogild","Felgild","Feologild","Feolomaer","Feolugeld","Feolumaer","Flodwig","Folcheorht","Fordwin","Forthhere","Forthred","Forwin","Frealaf","Freawine","Fremund","Freodhoric","Freola","Freomund","Freothul","Freothulaf","Frigedag","Frithebert","Frithegod","Frithestan","Frithowulf","Frithugar","Frithugeorn","Frithugis","Frithulaf","Frithuwald","Fromund","Fulbert","Fullofaudes","Gaenbald","Gaenbeald","Gaenburh","Gaerwulf","Ganulf","Garbeorht","Garmund","Gebmund","Geldfrith","Geldhere","Geldwine","Gerbert","Germund","Gernebern","Gladwin","Gleawfrith","Godbert","Godefrid","Godfred","Godfrid","Godfrith","Godhelm","Godhere","Godhold","Goding","Godmaer","Godman","Godmann","Godmund","Godred","Godric","Godwald","Godwin","Godwine","Godwulf","Godwyn","Goldwin","Goldwine","Goodwin","Gosbeorht","Gosfrid","Graham","Grimbald","Grimbeald","Grimcytel","Grimwold","Gudram","Gumbeorht","Gumweald","Gundulf","Gunuert","Guthfrith","Guthhere","Guthlac","Guthlaf","Guthmaer","Guthred","Haeferic","Haemgils","Haemgisl","Haethbeorht","Harding","Hardred","Hardulph","Hardwin","Harhold","Hariulf","Harold","Hathcyn","Hathweald","Heahfrith","Heahhbeorht","Heahmund","Heahred","Heahstan","Healfdene","Heardbehrt","Heardinc","Heardred","Heardwulf","Heferth","Helmhead","Helmheard","Helpric","Hengest","Heorrenda","Heorstan","Heorulaf","Heorulf","Heorured","Heoruweald","Heoruwulf","Herbert","Herebeald","Herebeard","Herebehrt","Herebeorht","Herebert","Hereferth","Herefrid","Herefrith","Heregeard","Heregeorn","Heregils","Heregod","Herelaf","Hereman","Heremod","Herered","Hereric","Hereward","Hereweald","Herewulf","Heribert","Heriburg","Herimann","Hering","Herrig","Herward","Hethin","Hethor","Hewald","Hibald","Higbald","Hildebeorht","Hildwulf","Hincmar","Hiroc","Hleogar","Hlothere","Hlothhere","Holbert","Hondscio","Horik","Hothere","Hreodbeorht","Hrethbeorht","Hrethric","Hringhere","Hrothbeorht","Hrothgar","Hrothlaf","Hrothmaer","Hrothsige","Hrothwulf","Huaetberct","Hubert","Hughoc","Humbeald","Humbert","Humberth","Hunbald","Hunbeald","Hunbehrt","Hunbeorht","Hundine","Hunferth","Hunfirth","Hunfrith","Hunlaf","Hunsige","Hunstan","Hunwald","Hwaetbert","Hwaetmund","Hwaetsige","Hwitmann","Hybald","Hygbald","Hygebald","Hygebehrt","Hygebeorht","Hygelac","Hygered","Hylpric","Hynsige","Hythwalda","Iaenbeorht","Idhelm","Idmaer","Ielfgar","Ielfred","Iestyn","Ilfred","Ilhelm","Indulf","Ingeld","Ingilram","Inguburh","Ingulf","Ingulph","Ingwald","Ingweald","Ingwulf","Instio","Inwaer","Irminric","Itermon","Ithamar","Jaenbeorht","Jaenbert","Jambert","Jaruman","Jurmin","Kenelm","Kennald","Kenward","Lambert","Lambin","Lanfranc","Leavold","Leodbriht","Leodhere","Leodwald","Leofard","Leofgeat","Leofgiest","Leofheah","Leofhere","Leofing","Leofnoth","Leofred","Leofric","Leofsige","Leofstan","Leofwig","Leofwine","Leovenath","Letard","Leuthere","Liliwin","Lindhard","Litwin","Liudolf","Lulling","Madulf","Maegenfrith","Maerec","Maerheard","Maerleswein","Maethelgar","Maldred","Mansige","Mearcred","Medwin","Mensige","Merchelm","Merefin","Merehwit","Merewala","Merewald","Meriet","Mervin","Mildred","Morcar","Morkere","Norbert","Nordman","Norman","Northman","Nothelm","Nothhelm","Nothwulf","Odalric","Odard","Odbehrt","Odoacer","Oelfwine","Oeric","Oethelwald","Oftfor","Ohthere","Oidilwald","Ongentheow","Ordbehrt","Ordgar","Ordheah","Ordlaf","Ordmaer","Ordric","Ormar","Orped","Osbald","Osbeohrt","Osbeorn","Osbryht","Oscytel","Osegod","Osfrid","Osfrith","Osgar","Osgood","Oshern","Oslac","Oslaf","Oslafa","Osmaer","Osmer","Osmod","Osmund","Osred","Osric","Osulf","Osweald","Oswin","Oswine","Oswiu","Oswold","Oswudu","Oswuff","Oswulf","Oswy","Oswyn","Osyth","Oughtred","Pechthelm","Pecthelm","Peohtgils","Peohthelm","Peohtred","Peohtric","Peohtwine","Pilheard","Plechelm","Pleghelm","Plegmund","Radbod","Raedfrid","Raedwulf","Raegenhere","Ragener","Rahere","Randal","Randwulf","Ranulf","Redwald","Regenbald","Regengar","Regenhere","Regenmaer","Regenweald","Reginald","Regnheah","Regnhere","Rendel","Ribald","Ricbert","Richeard","Ricmaer","Ricmann","Ricsig","Ricsige","Robert","Roderic","Roderick","Rodney","Rodolph","Roger","Romund","Rumbald","Rumwald","Rumwold","Ryhrtwold","Sabehrt","Sabeorht","Sabert","Saebald","Saebehrt","Saebeorht","Saefugl","Saegar","Saegeat","Saeward","Saeweard","Saewig","Saewine","Saewulf","Saward","Sawin","Scenwulf","Scirheah","Scirheard","Seaxwulf","Seeman","Selewine","Selred","Selwyn","Sentwine","Sexbald","Sexfred","Sexhelm","Sexmund","Sexwulf","Sibert","Sibwine","Sideman","Siferth","Sigbert","Sigebald","Sigebehrt","Sigebert","Sigebryht","Sigeferth","Sigegar","Sigegeat","Sigehaeth","Sigeheah","Sigehelm","Sigehere","Sigelac","Sigered","Sigeric","Sigeweard","Sigewine","Sigewulf","Sighard","Sighere","Sigstein","Sired","Siward","Sledda","Snaroc","Sperling","Stidolph","Stigand","Stithbeorht","Stithwulf","Stronglic","Strongric","Swaebhard","Swaefheard","Swartcol","Swatreband","Sweartling","Swefred","Swetman","Swidbert","Swidhelm","Swithbert","Swithin","Swithulf","Swithun","Swithwulf","Tancred","Tatfrid","Tathere","Tating","Tatuini","Tatwine","Tatwulf","Teoweald","Teowulf","Thanchere","Theabul","Theobald","Theodbald","Theodbeald","Theodbeorht","Theodgar","Theodlac","Theodoric","Theodric","Theodulf","Thingfrith","Thorweald","Thraesfrith","Thruidred","Thrydwulf","Thrythbeorht","Thunor","Thurstan","Tidfrith","Tidhelm","Tidhere","Tidsige","Tidweald","Tidwulf","Tilbert","Tilhere","Tilman","Tilmund","Tilwald","Tondbehrt","Tondbert","Tondhere","Torhtsige","Torold","Torphin","Torthred","Tostig","Trumbehrt","Trumhere","Trumwin","Trumwine","Trygil","Tunbehrt","Tunbeorht","Tunbert","Tunfrith","Turbert","Turec","Turoc","Turold","Turstan","Uchtred","Ufegeat","Ulfbehrt","Ulfcytel","Ulfric","Ulfrid","Ulger","Unferth","Unlaf","Unwona","Urien","Uscfrea","Uxfrea","Vadir","Vifil","Waegdaeg","Waegmund","Waegstan","Waerbeald","Waerferth","Waerheard","Waermund","Waernoth","Walahfrid","Walden","Waldere","Waldhere","Waldwin","Walhhere","Wallding","Walstan","Wardlaw","Wardric","Wathsige","Watman","Wayland","Wealdhere","Wealdthaf","Wealdtheof","Wealhhere","Weidrek","Weland","Weohstan","Weohtgar","Weonard","Weorcgyth","Weorchaeth","Werferth","Werhard","Werheard","Wermund","Werwulf","Westerfalca","Wicbeorht","Wictgils","Wictred","Widmund","Widreth","Widsith","Widuc","Widukind","Wiergils","Wiermund","Wigbeald","Wigbeorht","Wigbeorn","Wigbert","Wigestan","Wigferth","Wigfrith","Wighard","Wigheard","Wighelm","Wighere","Wightgar","Wiglac","Wiglaf","Wigmaer","Wigmund","Wigod","Wigred","Wigric","Wigstan","Wigthegn","Wihtgar","Wihtgils","Wihthere","Wihtlac","Wihtlaeg","Wihtred","Wihtric","Wilbehrt","Wilbeorht","Wilbrord","Wilfram","Wilfrith","Wilgils","Wilgisl","Wilheard","Wilhere","Willehad","Willibrord","Wilmaer","Wilmund","Wilsiga","Wilsige","Wimund","Winebald","Winebeald","Winefrith","Winegar","Winelac","Winemaer","Winfirth","Winfrid","Winfrith","Winnibald","Winsige","Winstan","Winston","Wiohthere","Withergild","Withermund","Wlencing","Wolfeius","Wolnoth","Wolstan","Wraecwulf","Wuldric","Wuldwine","Wulfbeald","Wulfestan","Wulfferd","Wulffrith","Wulfgar","Wulfgeat","Wulfhad","Wulfheah","Wulfhelm","Wulfhere","Wulflaf","Wulfnoth","Wulfred","Wulfric","Wulfrid","Wulfrun","Wulfsige","Wulfsin","Wulfstan","Wulfthere","Wulfweard","Wulfwig","Wulgan","Wulmar","Wulpher","Wuscfrea","Wusfrea","Wyard","Wynbald","Wynfrid","Wynfrith","Wynhaeth","Wynsige","Wynstan","Yonwin","Yric",
		       ]
	    },
	    {
		// sosurce: http://www.infernaldreams.com/names/Europe/Medieval/Anglo_Saxon.htm
		column: "right",
		label: "Anglo-Saxon female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Adellufu","Adney","Aedilburh","Aegthryth","Aelfgifu","Aelfgyth","Aelflead","Aelfrun","Aelfthryth","Aelfwyn","Aelfwynn","Aelgifu","Aengifu","Aeschild","Aethelberga","Aethelburh","Aethelgifu","Aethelhild","Aethelhun","Aethelind","Aethelswith","Aethelthrith","Aethelthryd","Aethelthryth","Aethelu","Aethelwaru","Agenilda","Akelda","Alburga","Alchflead","Alchfrid","Aldreda","Alfild","Alfilda","Alfrun","Alfwen","Alhburg","Alkeld","Alkelda","Aluburg","Aluhburg","Arild","Athilda","Aylild","Aylyld","Baldehuia","Baldeth","Baldethiva","Baldguia","Baldhild","Baldith","Balethiva","Balthildis","Bathild","Beadohild","Beaduburg","Beaduthryth","Bealdthryth","Begild","Begilda","Beorhtwynn","Beornthryth","Beornwynn","Berchthild","Bertrade","Beyhild","Bilswith","Birghiva","Botild","Botilda","Botill","Bregeswith","Breguswith","Bricheve","Brichheve","Brichterith","Brichtled","Brichtrede","Brichtrethe","Bricteva","Bricthiua","Bricthled","Brictiua","Brictiva","Brictled","Brictuia","Brictwen","Brigthwyna","Brihctiua","Brihteue","Brihtgiua","Brihtiua","Brihtiue","Britheue","Britheva","Brithiva","Brithreth","Brithrethe","Brithwen","Burchwen","Burghwenna","Burgwenta","Burgwynn","Burwena","Burwenna","Cengifu","Ceolburh","Ceolfrith","Ceolwynn","Coenberg","Coenburg","Coenburga","Cuthburga","Cuthburh","Cuthfleda","Cwenburg","Cwenburh","Cwenthryth","Cyneburh","Cynedeall","Cynehild","Cyneswith","Cynethryth","Cynewise","Cyniburg","Cynwise","Denegifu","Denegyth","Derehild","Domneva","Eadburg","Eadburh","Eadgifu","Eadgyfu","Eadild","Eadwine","Eadwynn","Ealdgifu","Ealdgyth","Ealhburg","Ealhhild","Ealhswith","Ealhswuth","Eanburg","Eanflaed","Eanflead","Eanfled","Eanswida","Eanswith","Eanswitha","Eanswyth","Eanwin","Earcongota","Ecgwynn","Edild","Edilda","Ediltrudis","Edoma","Edusa","Edwen","Egefride","Einilda","Elfilda","Elfswitha","Enfleda","Engeled","Engeleis","Engeleisia","Engelieth","Engelise","Eorcengota","Eorcongota","Eormenburh","Eormengard","Eormengyth","Eormenhild","Eormenhilde","Ercongota","Erkengota","Ermenburga","Ermenhilda","Estrid","Estrith","Ethelhild","Eudelme","Everild","Everildis","Freawaru","Frethesant","Freware","Frigyth","Fritheswith","Frithugyth","Frithuswith","Garwynn","Gertrude","Gethwine","Godehese","Godelina","Goderun","Godgifu","Godgyth","Godlefe","Godrun","Godwyna","Goldberga","Goldcorn","Goldcorna","Goldeburga","Golderon","Goldhen","Goldrun","Goldyna","Guthild","Haunild","Heagyth","Heahburg","Heahgyth","Heahthryth","Heathuburg","Hehilde","Hendina","Herburga","Hereburg","Heregyth","Herelufu","Hereswith","Herewynn","Hermynhild","Hildeburg","Hildeburh","Hildelida","Hildelith","Hildilid","Hiltrude","Hounild","Hounilda","Hringwynn","Hrodwyn","Hrotsvitha","Hugeburc","Hunburg","Juthwara","Lefsued","Lefsuet","Leofgifu","Leofrun","Leoftaet","Leofwaru","Leofwynn","Maerwynn","Mildburh","Mildgyth","Mildoina","Mildthryth","Mindred","Modthryth","Osburga","Osburh","Osgifu","Osgyth","Oslafa","Osthryd","Osthryth","Quendreda","Rafenild","Rimilda","Rimilde","Ronilda","Roswitha","Rowena","Saeburg","Saegifu","Saethryd","Saethryth","Saewara","Saewynn","Saxleue","Sexhuie","Sidelufu","Sidwell","Sigegifu","Somerhild","Somerild","Stanfleda","Stanflede","Stangyth","Stanhild","Sunngifu","Sunnild","Theberga","Thedlef","Thedware","Theorigitha","Thurrieua","Tidhild","Tonild","Tortgith","Tortgyth","Touild","Touillda","Touilt","Turgiua","Uuordgiue","Vluerona","Waerblith","Waerburh","Waerhild","Wealhburh","Wealhtheow","Wendreda","Wenfleda","Wengeua","Wengewe","Wenyld","Weynild","Wicthiue","Wictieue","Wictiue","Wifrun","Wigburg","Wigswith","Wihtburh","Wilcum","Wilthryth","Winfred","Winfrith","Witburh","Withburga","Wiuerona","Wlanchild","Wlankild","Wlfrun","Wrtheve","Wrthiue","Wuderoua","Wulburg","Wulfgifu","Wulfhild","Wulflead","Wulfrun","Wulfthryth","Wulftrudis","Wulfwaru","Wulfwyn","Wulfwynn","Wychtleth","Wyneue","Wynflead","Wynyeue","Wyverun"
		       ]
	    },
	    
	    {
		// source: http://www.infernaldreams.com/names/Europe/Medieval/Franks.htm
		column: "left",
		label: "Frankish male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Abbo","Adalbert","Adaldag","Adalhard","Adelard","Aega","Agilbert","Agobard","Aigulf","Alberic","Allowin","Amalricus","Amand","Amator","Angegisis","Angilbart","Angilbert","Anno","Ansegisel","Anskar","Arbitio","Arbogast","Arbogastes","Arculf","Arnoul","Arnulf","Artaud","Asselin","Atacinus","Audoen","Audomar","Audoneus","Audramnus","Baugulf","Bauto","Bavo","Benild","Berchar","Berengar","Bernard","Berno","Bero","Bertelis","Berthaire","Bertin","Bertulf","Besso","Birinus","Blutmund","Boso","Bovo","Brice","Britius","Brocard","Bruno","Burchard","Butilin","Carloman","Cassyon","Ceufroy","Charibert","Charles","Cheldric","Childebert","Childebrand","Childeric","Chilperic","Chlodmer","Chlodowig","Chlotar","Chrodegang","Clodomir","Clotaire","Clothair","Clovis","Corbinian","Cyr","Cyricus","Dado","Dagobert","Dalfin","Dodo","Dreux","Drogo","Dudon","Ebbo","Ebroin","Ebrulf","Einhard","Emme","Emmeran","Engilbert","Enurchus","Erchinoald","Evroul","Evroult","Fardulf","Faro","Flodoard","Folcard","Folmar","Fredegar","Fridolin","Fridugis","Fulbert","Fulk","Fulrad","Gerbert","Gereon","Gerold","Gifemund","Giseler","Giso","Godobald","Godun","Goisfrid","Goscelin","Gouzlim","Gozbert","Gozolon","Grifo","Grimald","Grimbald","Gunthar","Guntramn","Hagen","Halinard","Hartmut","Helinand","Helisachar","Heribert","Hildebald","Hildebold","Hildeprand","Hilduin","Hincmar","Hlodver","Huebald","Humbert","Hunald","Imbert","Imninon","Jocelin","Lambert","Lanfranc","Laudus","Lebuin","Ledger","Leger","Leodegar","Letard","Leufred","Leufroy","Leutfrid","Leuthere","Liudhard","Liudolf","Lo","Lothar","Lul","Lull","Maiuel","Maixent","Majorian","Mallobaudes","Mansuetus","Maraulf","Marcoul","Matfrid","Mauger","Médard","Meginhard","Merobaudes","Merovech","Nithard","Norbert","Nordbert","Notker","Odger","Odo","Odulf","Omer","Orderic","Otker","Ouen","Ouus","Pacatian","Pair","Pancras","Panteleon","Pepin","Philibert","Piligrim","Pippin","Poppo","Puvis","Radigis","Ragnfred","Razo","Reginald","Reginar","Remi","Reolus","Richomer","Richomeres","Riquier","Rothad","Samo","Sergius","Sicho","Sigebert","Sigibert","Suger","Suidbert","Suidger","Syagrius","Tassilo","Taurin","Tescelin","Thankmar","Théodard","Theodoric","Theodulf","Theodulph","Theudebert","Theuderic","Theutgaud","Thierry","Thietmar","Turpin","Vedast","Vicelin","Vigor","Vulmar","Waiofar","Wala","Walaric","Waldolanus","Waltgaud","Wandregisel","Wandregisilus","Wandrille","Warmann","Werinbert","Wibert","Wichmann","Willehad","Willibald","Willibrord","Wulfram","Zwentibold",
		       ]
	    },
	    {
		// sosurce: http://www.infernaldreams.com/names/Europe/Medieval/Franks.htm
		column: "right",
		label: "Frankish female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Adallinda","Adaltrude","Adelheid","Alpaida","Alpais","Ansgard","Aubirge","Audofleda","Baldechildis","Basina","Begga","Berenga","Bertha","Bertrada","Burgundefara","Clothild","Eadgithu","Emma","Engelberga","Ermengard","Ermentrudis","Fara","Fastrada","Foy","Genofeva","Gersvinda","Gisela","Gudula","Gudule","Gundrada","Herleva","Hildegard","Hildegarde","Hildegund","Hiltrude","Hodierna","Ingeltrude","Ingeltrudis","Joveta","Liobsynde","Liutgarde","Madelgarde","Mechtild","Moschia","Nantechildis","Oda","Ogiva","Plectrudis","Radogund","Rosamund","Rothaide","Rotrude","Rotrudis","Ruothilde","Theodelinda","Theoderada","Theutberga","Waldrada",
		       ]
	    },
	    {
		// source: http://www.infernaldreams.com/names/Europe/Medieval/Goths.htm
		column: "left",
		label: "Gothic male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Ablabius","Achila","Agila","Agiwulf","Agriwulf","Aidoingus","Aithanarid","Alaric","Alatheus","Alaviv","Alica","Aligern","Alla","Amal","Amalaric","Ammius","Anagastes","Andagis","Anianus","Ansila","Ansis","Aoric","Apahida","Ardabur","Ardaric","Argaith","Ariaric","Arimir","Arius","Arnegliscus","Arvandus","Asbad","Aspar","Ataulf","Ataulph","Athalaric","Athanagild","Athanaric","Atharid","Athaulf","Babai","Badua","Baduila","Baza","Berig","Berimud","Berimund","Bessa","Bessas","Bessi","Beuca","Beucad","Bigelis","Bilimer","Borani","Braga","Brandila","Candac","Cannabas","Cannabaudes","Cethegus","Chindasuinth","Cniva","Cnivida","Colias","Crocus","Cunigast","Cunimund","Cyrila","Dubius","Duda","Ebermud","Eberwolf","Ebrimud","Edica","Eraric","Eriulf","Ermanaric","Ermelandus","Ervig","Euric","Eutharic","Farnobius","Fastida","Feletheus","Feva","Filimer","Flaccitheus","Fravitta","Fredegar","Fretela","Frideric","Fridigern","Frigeridus","Frithila","Fritigern","Gadaric","Gainas","Gaiseric","Galindo","Galindus","Gaut","Gauterit","Geberic","Gelimer","Gento","Gerung","Gesalec","Gesimund","Getica","Goar","Goddas","Godegisel","Godigisclus","Goiaricus","Gouththas","Gundehar","Gundiok","Gundobad","Gunteric","Gunthigis","Gutthikas","Hadubrand","Heldebald","Heldefredus","Heribrand","Hermangild","Hermenigild","Herminafrid","Hernegliscus","Hildebad","Hildebrand","Hilderic","Hilderith","Himnerith","Hisarna","Hulmul","Huml","Huneric","Hunigild","Hunimund","Hunulf","Hunumund","Ibba","Ildebad","Inna","Irnfried","Jordanes","Lagariman","Lampridius","Leovigild","Leuvibild","Livila","Marcomir","Modaharius","Modares","Munderic","Mundo","Namatius","Naulabates","Nidada","Niketas","Odoin","Odotheus","Odovacar","Ostrogotha","Osuin","Ovida","Patza","Radagaisus","Rausimod","Recared","Reccared","Recceswinth","Rechiar","Rechimund","Recitach","Rekitach","Remismund","Respa","Retemeris","Rhima","Ricimer","Rictiovarus","Rikiar","Roderic","Rodolf","Roduulf","Rudesind","Saba","Sadagares","Safrax","Salla","Sangiban","Sansalas","Saphrax","Sarus","Segeric","Selenas","Shapur","Sidimund","Sigeric","Sigesar","Sigibald","Sigismund","Sigisvult","Sindila","Sisbert","Sisebut","Sisenand","Soas","Suatrius","Sueridus","Sunericus","Sunnia","Tanais","Tanca","Teias","Teja","Tharuaro","Thela","Theodahad","Theodehad","Theodemer","Theoderic","Theoderid","Theodoric","Theodulf","Theudegisel","Theudegisklos","Theudis","Thidrek","Thiudimir","Thorismud","Thorismund","Thrasamund","Thrasaric","Thraustila","Totila","Tribigild","Tufa","Tuluin","Ulfilas","Unigild","Unila","Unimund","Uraias","Valamer","Valamir","Valaravans","Valia","Vandalarius","Vandil","Veduco","Vetericus","Vetranio","Videric","Vidigoia","Vidimir","Viliaris","Vinitharius","Visimar","Vithimiris","Vithmiris","Vitigis","Vittamar","Vultuulf","Wala","Walahmar","Wallia","Wamba","Wella","Winguric","Witige","Wittigis","Wittiza"
		       ]
	    },
	    {
		// sosurce: http://www.infernaldreams.com/names/Europe/Medieval/Goths.htm
		column: "right",
		label: "Gothic female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Amalasuintha","Amalberga","Amalfrida","Areagne","Chlotsuintha","Ereleuva","Erelieva","Gaatha","Giso","Glismoda","Gudeliva","Helchen","Hunila","Kriemhild","Matasuntha","Ostrogotho","Sunigilda","Sunilda","Theodananda","Thiudigotho","Vadamerca","Valdamerca","Wilgefortis",
		       ]
	    },
	    {
		// source: http://www.infernaldreams.com/names/Europe/Medieval/Norse.htm
		column: "left",
		label: "Norse male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Abi","Adalbrikt","Adalradr","Adalstein","Adils","Aegir","Aevar","Aflaeg","Agder","Agdir","Agger","Aghi","Agmund","Agmundr","Agnarr","Agne","Ake","Aki","Alaf","Aleifr","Ailaifr","Alfaster","Alfgautr","Algot","Algut","Alfgeir","Alfgeirr","Alfger","Alfr","Alf","Alfrim","Alfwald","Ali","Alkai","Alphege","Alrik","Alvis","Amund","Amunde","Amundi","An","Anakol","Andvett","Ansgar","Anulo","Anund","Anundr","Anurend","Api","Aram","Ardgar","Arlogh","Armod","Arnbjørn","Arinbjorn","Arunbjorn","Arne","Arni","Arn","Are","Ari","Arnfinn","Arnfinnr","Arngeir","Arngrim","Arnkel","Arnkell","Arnketil","Arkil","Arnlaug","Arnlaugr","Arnljot","Arnsten","Arnthorr","Arnor","Arndor","Andor","Arnulf","Arnvid","Arnwidr","Arva","Arwid","Asbiorn","Asbjorn","Abjørn","Asbrand","Asfrith","Asgaut","Asgautr","Asgeir","Asgeirr","Asger","Asgrim","Asi","Aesi","Esa","Esi","Asketill","Askel","Askell","Ask","Eskil","Aslak","Asmund","Asmundr","Asolf","Assar","Asser","Assur","Asuert","Asvald","Asvard","Aswarth","Aswith","Athulf","Atle","Atli","Atzer","Audbjorn","Audfinnr","Audgisli","Audi","Audolf","Audulfr","Audun","Aun","Auun","Avarr","Awair","Azer","Azur","Baegseg","Bagsecg","Baggi","Bakki","Bakr","Baldr","Baldur","Baldvini","Balki","Balle","Balli","Banke","Bard","Baard","Bardi","Bardr","Baug","Beinir","Beiti","Bekki","Belgr","Beli","Benesing","Bentein","Bergfinn","Bergljotur","Bergthor","Berse","Bersi","Biari","Bildr","Bili","Birghir","Byrghir","Birger","Borg","Borgar","Bork","Borkr","Byrghe","Byrie","Birning","Bjalfi","Bjarking","Bjarnar","Bjarni","Bjartmar","Bjorgolf","Bjorn","Biorn","Bern","Berner","Bjornolf","Bironulf","Blaeingr","Blann","Blesi","Bligr","Bodvar","Bodvarr","Bødvar","Bolle","Bolli","Bolverk","Borolf","Bosi","Botolf","Botulfr","Blotulffr","Bragi","Brand","Breidr","Broddi","Broddr","Brodir","Brondolf","Brotulfr","Bruni","Brusa","Bruse","Brusi","Bryndolf","Brynjolf","Brynju","Brynjulffr","Brynolff","Bue","Bui","Bugge","Bundi","Buti","Butr","Butti","Dag","Dagr","Dagfinn","Didrik","Dolgfinnr","Domalde","Domarr","Dote","Dunfjall","Durin","Dusi","Dyggve","Dyri","Edgierr","Egil","Eid","Eilaf","Elof","Eileifr","Eilif","Eilifr","Elf","Elif","Einar","Ejnar","Eindride","Eindridi","Endridi","Einraedi","Eirik","Erik","Ekbert","Eldgrim","Ellingr","Emmerik","Engelbrekt","Eowils","Erengisl","Erland","Erlend","Erling","Yrling","Ernmund","Esgar","Eydis","Eyiolfr","Eyjolf","Eymundr","Emund","Eyrar","Eystein","Eysteinn","Eyvald","Eyvind","Eyvindr","Evynd","Faraldr","Farle","Farmann","Faste","Festi","Faxi","Fili","Finnbogi","Finnleik","Finnulf","Finnur","Finn","Finnvid","Fleinn","Flic","Floki","Flosi","Fogl","Folke","Folki","Folkvardr","Folkvid","Forne","Forni","Fornjot","Fotr","Fraena","Franna","Frakki","Fredi","Freysteinn","Freyvid","Fridgeir","Fridleifr","Fridmund","Frithi","Fraethi","Frithugist","Frode","Frodi","Frosten","Frosti","Fyrkat","Gaddr","Gaedar","Gaetir","Gagni","Galli","Galti","Gamal","Gamall","Gamel","Gamli","Gardar","Gardi","Gauk","Gaukr","Goukr","Gaut","Gauti","Gouti","Gautvid","Geir","Geirfinn","Geirleif","Gerleff","Geirmund","Germund","Geirstein","Geirulfr","Geirolf","Geiti","Geitir","Gelli","Gellir","Gerske","Gert","Gest","Giertjof","Gikel","Gilli","Gisli","Gismund","Gissur","Gizur","Gjuki","Gladr","Glam","Glum","Gnorre","Gnupa","Godefred","Godfred","Guthfrith","Godrod","Goff","Gor","Gorm","Goslar","Gram","Grani","Grein","Grettir","Grimaldi","Grimalf","Grimar","Grimr","Grim","Grimkel","Grimkell","Grimolf","Grip","Gripr","Gris","Grjotgard","Groafeld","Gryffi","Gudberd","Gudbrand","Gudrand","Gudbrod","Gudkell","Gudlaug","Gudlaugr","Gudleif","Gudleik","Gudleikr","Gudmund","Gudmundr","Gudrik","Gudrod","Gudrodr","Gudrød","Gundvast","Gungnir","Gunnar","Gunni","Gunnbjorn","Gunnfrodr","Gunnlaug","Gunnolfr","Gunnulf","Gunulf","Gunnstein","Gunnvardr","Guthlac","Guthred","Guttorm","Guttormr","Guthorm","Gydur","Gyrd","Gyrdh","Gyrth","Gyriar","Haarek","Hadd","Haddr","Haemgisl","Haeng","Haeringr","Haesten","Haf","Hafr","Havvar","Hafgrim","Haflidi","Hafthi","Hagall","Hagbard","Hagbardr","Haisl","Hake","Haki","Hagi","Hakr","Hauk","Haukr","Hakon","Haakon","Haland","Halland","Haldor","Halldor","Hall","Halli","Hallfred","Hallgeir","Hallgrim","Hallkel","Hallmund","Hallstein","Hallvard","Halvardr","Halvdan","Halfdan","Haldan","Helfdan","Hamall","Hamr","Hamund","Harald","Harivald","Hardbein","Harthaknut","Hardicanute","Harek","Hariso","Haro","Hastein","Hasvir","Havard","Havardr","Havarr","Hervardr","Havgrímur","Havlock","Hedin","Heðinn","Hegg","Heggr","Heidar","Heimdall","Heimir","Heinrek","Heiti","Hekja","Helge","Helgi","Heming","Hemingr","Hemming","Her","Hergeirr","Herimann","Heriold","Heriolf","Herjolf","Herulf","Herlaug","Herlef","Herleif","Herlugh","Hermund","Heroth","Herrodr","Herstein","Hialmi","Hiarni","Hildiger","Hildiglum","Hildir","Hildulf","Hjalkar","Hjalmar","Hjalti","Hjarrandi","Hjor","Hjort","Hiortr","Hjorleif","Hiorleifr","Hjorvardr","Hlenni","Hlifolf","Lifolf","Hlodvir","Hldver","Hnaef","Hnef","Hanef","Hnaki","Hoðbroddr","Hoder","Hofn","Hogne","Hogni","Holdbodi","Holger","Hogar","Holmfast","Holvast","Holmgaut","Holmgeir","Holmger","Holmstein","Holti","Hord","Horic","Horik","Horkuldr","Horni","Horsa","Hoskuld","Hoskuldr","Hosvi","Hosvir","Hradi","Hrafn","Rafn","Hrafnkel","Hran","Hrane","Hrani","Hrapp","Hrappr","Hreidar","Hreider","Hrein","Hrifla","Hring","Hringr","Hroald","Hroaldr","Hrodgeir","Roar","Hrodni","Hrodulfr","Hrodwulfr","Hrokr","Hrolf","Hrolfr","Hrollaug","Hromund","Hromundr","Hrorekr","Hraerek","Rørek","Rorik","Hrossbjorn","Hrosskel","Hrunbogi","Hrut","Hryggr","Hrymr","Hubba","Hugin","Hund","Hundi","Hundolfr","Hunketill","Hunrodr","Iarund","Illugi","Inge","Ingi","Ingemar","Ingimar","Ingimund","Ingimundr","Ingmund","Ingjald","Ingialdr","Inglofr","Ingulfr","Ingolf","Inguar","Ingvar","Ingvarr","Ingwar","Hinguar","Yngvar","Yngvarr","Iofurr","Iokell","Iolfr","Ioli","Iorekr","Iorundr","Iri","Isi","Isleif","Isleifr","Isolfr","Iulfr","Ivak","Ivar","Ivarr","Iwar","Jamsgar","Jango","Jarl","Jarlabanke","Jatgeir","Joalf","Joar","Johar","Jobjørn","Jomar","Jønis","Jorund","Kadal","Kaerir","Kaeti","Kalf","Kalfr","Kalv","Kali","Kari","Karr","Karl","Karle","Karli","Karlsefni","Karulfr","Kati","Katr","Keikr","Ketilbiorn","Ketilbjørn","Ketilgrimr","Ketill","Kelli","Keti","Ketil","Ketilmund","Ketilvast","Kiallakr","Kilvert","Kjartan","Kjarval","Kjölbye","Kjotvi","Klakkr","Kleppr","Knud","Knut","Knutr","Cnut","Canute","Kodran","Kokul","Kolan","Kolbein","Kolbeinn","Kolbjørn","Kolfastr","Kolfr","Koli","Kolr","Kol","Kolskegg","Konal","Konofogur","Kori","Kormak","Kormakr","Kotkel","Krabbi","Kragge","Kraka","Kraki","Krakr","Kran","Kristrod","Krodo","Kupsi","Copsi","Laef","Lambi","Langlif","Lauur","Leidolf","Leif","Leifr","Leiknen","Leikr","Leistr","Leivur","Lifsten","Ljot","Lutr","Ljotolf","Loarr","Loden","Lodin","Lodmund","Logi","Logmann","Lopt","Lothen","Lulach","Luloecen","Lyting","Maans","Magni","Magnus","Mak","Makglave","Mallymkun","Malti","Mani","Manne","Manni","Mar","Margad","Marki","Melsnati","Midiungr","Miklof","Moddan","Modolf","Modolfr","Modsognir","Mord","Mordr","Modor","Modi","Mthir","Mugi","Mugin","Munan","Mundi","Myrkjartan","Naddod","Naddodd","Nafena","Nafni","Nannulf","Nari","Nate","Nefstein","Nessi","Njal","Nokkvi","Nor","Nordmadr","Notger","Notker","Odd","Oddi","Oddleif","Odinkar","Odkell","Ødvast","Odward","Ofeig","Ófeigr","Offe","Øgmund","Øgot","Ohthere","Ohtor","Olaf","Olav","Oleif","Olof","Olrik","Ølve","Olvir","Omar","Onäm","Ondott","Ongul","Onund","Ønundr","Öpir","Ordulf","Orgunleidi","Orlyg","Orm","Ormarr","Ormr","Orn","Ornr","Ornolf","Ørnulf","Oscytell","Otkell","Osferth","Ospak","Øssur","Osten","Osulf","Osvif","Othen","Othi","Otrygg","Ottar","Otir","Otti","Oyvind","Ozur","Ozurr","Pallig","Palling","Palne","Peningr","Radbard","Ragi","Wraghi","Ragnar","Ragni","Regin","Regner","Reyni","Ragnfast","Randulf","Randver","Raud","Raudr","Ref","Refr","Reginulfr","Riggall","Rimbert","Ring","Ringerike","Rodfos","Roginfred","Rognval","Rognvald","Røgnvald","Ragnall","Raegnald","Rollo","Runi","Runolf","Runolfr","Saebjorn","Saefari","Saemund","Sali","Salmund","Salmundr","Salte","Sam","Samr","Sandr","Saxe","Saxi","Saxulf","Scandlain","Scula","Serk","Sibba","Sidroc","Sigbjorn","Sigbiorn","Sigefred","Sicfrith","Sigeferth","Sigfast","Sigfus","Sigulf","Sigwulf","Sigolfr","Sighulf","Sighvat","Sigmund","Sigsteinn","Sigtrygg","Sigurd","Sirurd","Sigrod","Sigvald","Sigvaldi","Sindri","Singasven","Sirgadd","Sistryg","Sivid","Siward","Skakli","Skalti","Skamkel","Skapti","Skar","Skardi","Skarf","Skarphedin","Skeggi","Skial","Skidi","Skioldung","Skirnir","Skirr","Skjalg","Skjøld","Skjoldorf","Skopti","Skorri","Skrapi","Skrapr","Skroppa","Skrymir","Skuf","Skule","Skuli","Skumollfi","Skuti","Snaebjorn","Snaekol","Snaekolf","Snae-Ulf","Snaer","Sniallr","Snorre","Snorri","Snortr","Sokni","Solmund","Solsiskar","Sølve","Solvi","Sondulfr","Sorkvir","Sorli","Sorr","Soti","Soxulfr","Spiallbudi","Stari","Starkad","Starri","Steig","Steinbjorn","Steingrim","Steinkel","Stenkil","Steinn","Stein","Steinar","Steinolf","Steinthor","Steinvor","Stigandr","Stigandi","Storí","Storolf","Sturla","Stuv","Styr","Styrr","Styrbjørn","Styrkaar","Styrkar","Styrkarr","Styrmirr","Suaerkuir","Sudberdur","Sudreyar","Suidger","Sumarlidr","Sumarlidi","Summarliethi","Sumarr","Sune","Suni","Surt","Svadi","Svafar","Svafi","Svan","Svart","Svartlingr","Sveidi","Svein","Sven","Svend","Sveinbjorn","Sverre","Sverrir","Sverting","Swegen","Syr","Tandri","Teit","Teitr","Thambarsk","Thangbrand","Therir","Thialfi","Thidrandi","Thidranki","Thidrik","Thilfr","Thiodulfr","Thjodolf","Thjostar","Thjostolf","Thjostólfr","Thond","Thoralf","Thorarin","Thorberg","Thorbjorn","Thorbjørn","Thorbrand","Thord","Thordar","Thored","Torrad","Thorfast","Thurfastr","Thorfinn","Torfi","Thorfredr","Thurferth","Thurid","Thorgaut","Thorgeif","Thorgeir","Thorgeirr","Thurgar","Thorgest","Thorgil","Thorgils","Thorgisl","Thurgils","Thurgeis","Turgeis","Thorgrim","Thorhall","Thorhallur","Thorir","Thore","Thori","Thorri","Ture","Thorkel","Thorkeld","Thorkell","Thorketill","Thorketl","Thurkil","Torkell","Thorlac","Thorlak","Thurlak","Thorleifr","Thorleik","Thormod","Tormod","Thorn","Thororm","Thorstein","Torstein","Torsten","Thorulf","Thorulffr","Thorolf","Thorvald","Thorwald","Thorvid","Thostar","Thrain","Thrand","Thrandr","Thrond","Throst","Thrydrikr","Thrykki","Thyrne","Tindr","Tjodolv","Tjorvi","Tofi","Tufi","Toglos","Toke","Toki","Tola","Toli","Topi","Tupi","Toraldr","Torold","Taraldr","Toste","Tosti","Tostig","Trandil","Trelle","Trondelag","Tronde","Trygg","Tryggvi","Trygves","Tufkal","Tumi","Tuscar","Tyrkir","Ubba","Ubbi","Ukyrni","Ulf","Ulfr","Ulffr","Ulfar","Ufi","Ulfhaugr","Ulfkell","Ulfketel","Ulfketill","Ulfkil","Ulfljot","Uni","Urm","Vaerdalen","Vagn","Valbrand","Valgard","Vali","Valr","Valthjof","Vandil","Vandrad","Var","Vebjorn","Vebrand","Vedmundr","Vegeir","Veleif","Verland","Vermund","Vert","Vestein","Vésteinn","Vestgeir","Vestar","Vestnor","Vestuidi","Veturlidi","Vidfari","Vidkun","Vidkunn","Vifil","Vifill","Vig","Vigbjord","Vigibjord","Vigfus","Vigleikr","Vigmundr","Vigot","Vigrid","Vikar","Vikingr","Viljalmr","Vili","Vinandr","Vindr","Waels","Walram","Willibald","Yaroslav","Jaroslav",
		       ]
	    },
	    {
		// sosurce: http://www.infernaldreams.com/names/Europe/Medieval/Norse.htm
		column: "right",
		label: "Norse female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Aesa","Aese","Asa","Ása","Ase","Agnis","Aldis","Alfdis","Alfgifu","Elfgifu.Alfifa","Alfhildr","Alvild","Alfeid","Alof","Arnbjorg","Arnfrid","Arngunn","Arnkatla","Arnora","Arnthrud","Arnthrudr","Asdis","Asfrid","Asgard","Asgerd","Ásgerd","Aslaug","Asleif","Asny","Asta","Astrid","Astridr","Estrid","Estrith","Asvoor","Aud","Audbjorg","Audhild","Aundur","Baugeid","Bera","Bergljot","Bergthora","Besje","Bjadmunja","Bjadmynja","Bjartney","Bjorg","Biorg","Borghild","Bothild","Bóthild","Botilda","Boðvildr","Dageid","Dagna","Dagne","Dagny","Dalla","Disa","Dota","Dotta","Driva","Drott","Dyna","Edit","Edla","Ellisif","Ermingard","Ermingerd","Eyfura","Fastvi","Frakokk","Freya","Freyja","Freydis","Freygerd","Frida","Frideburg","Fridgerd","Frigga","Fylgja","Geira","Geyra","Geirlaug","Gerd","Gerlød","Gillaug","Ginnlaug","Gjaflaug","Goda","Goi","Gorm","Gum","Gøthid","Gragas","Grelauga","Grelud","Grima","Grimhild","Groa","Gudbjorg","Gudfinna","Gudfrid","Gudrid","Gudny","Gudrun","Gullaug","Gulli","Gunnborg","Gunnhild","Gunhild","Gunnhildr","Gunnlaug","Gunnor","Gunnvor","Gurith","Gurney","Gyda","Gyrd","Gyrid","Gytha","Halla","Hallbera","Hallberta","Halldis","Halldora","Hallfrid","Hallgerd","Hallgrim","Hallkatla","Hallveig","Hedinfrid","Hedvig","Helga","Helge","Herbjorg","Herborga","Hervor","Hetha","Hialp","Hildigunn","Hildigunnr","Hidegunr","Hildirid","Hildr","Hild","Hin","Hjördis","Herdis","Hlif","Liv","Hlodyn","Holmfrid","Holmfried","Hosvi","Hrafnhild","Rauenilde","Ravenild","Hrefna","Hrodny","Hugi","Hungerd","Hvarflod","Inga","Inge","Ingebjørg","Ingibjorg","Ingegerd","Ingegerdr","Ingigerd","Ingelborg","Ingeleth","Ingelieth","Ingemund","Ingerid","Ingeride","Ingerith","Ingerithe","Ingirid","Ingiridr","Ingreda","Ingrede","Ingrid","Ingrith","Ingunn","Inginn","Ingirun","Ingolv","Isgerd","Jaddvor","Jaldrud","Jodis","Jofrid","Joreid","Jorun","Jorunn","Kadlin","Katla","Catla","Ketiløy","Kraka","Kula","Ladoga","Langlif","Lathgertha","Liot","Ljót","Ljufa","Luta","Madrene","Maere","Mærita","Mærta","Magnhildr","Malmfrid","Malmury","Medana","Meregrota","Moeid","Nanna","Nanþdaring","Nidbjorg","Nud","Oddbjorg","Oddny","Odindis","Odindisa","Olof","Oluva","Olve","Ormhild","Osk","Ota","Ottkatla","Rafarta","Ragna","Ragnelf","Ragnheidr","Ragneid","Ragnhild","Ragnhildr","Ragenel","Ragenhild","Ragenild","Ragenild","Ragenilda","Raghnil","Reynilda","Rane","Rannveig","Reginleif","Rigware","Ringuar","Ringwar","Ryngewar","Ryngeware","Rogned","Rudda","Runa","Runild","Runill","Rusila","Saeunn","Salbjorg","Sela","Siegrith","Sigerith","Sigreda","Sigrid","Sifled","Sigga","Sigge","Signild","Signy","Sigrun","Sigvid","Sigvor","Sigyn","Sinna","Skaði","Snaefrid","Snofrid","Snøfrid","Sølva","Solveig","Solvor","Steinunn","Steinvor","Stikla","Sueuilda","Svala","Svanhild","Swanild","Swanilda","Swonild","Svanlaug","Sverra","Syflede","Thjodhild","Thjodhold","Thola","Tola","Thora","Thura","Thara","Thorbjorg","Thorborg","Thordis","Thorelf","Thorfinna","Thorfridr","Thorgerd","Thorgunna","Thorhalla","Thorhild","Thourild","Thurid","Thurild","Thorkatla","Thorlaug","Thorleif","Torleiva","Thorljot","Thorunn","Thorvor","Thorve","Thorvi","Thraslaug","Thrudr","Thyra","Thyre","Thyrrni","Thyrvi","Tjorven","Tjotta","Ulfheid","Ulfhild","Ulfhildr","Una","Unn","Uppsala","Valborg","Valgerd","Valgerdr","Vandrad","Vebjorg","Vendela","Vibrog","Vigdis","Visna","Ylwa","Yngvild","Yri","Yrsa",
		       ]
	    }
	]
    },

    {
	label: "Other traditional names",
	nameSets: [
	    {
		// source: https://www.nordicnames.de/wiki/Category:Finnish_Origin
		column: "left",
		label: "Finnish male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Aate","Aatos","Ahti","Aihe","Aikasarria","Aimo","Aito","Alku","Ano","Armas","Arm","Arpia","Arvo","Atro","Auvo","Ensio","Heimo","Helmi","Ilkka","Ilma","Ilo","Indu","Into","Jalo","Joukahainen","Joukkainen","Jousia","Jyry","Kaiho","Karhu","Kauko","Kaukomeli","Kauno","Keijo","Keimo","Kerkko","Kullervo","Kuu","Kuura","Lahja","Lappi","Lmmitty","Lyly","Mainio","Muisto","Myrsky","Nyyrikki","Oiva","Oma","Onerva","Onni","Orpo","Osma","Osmo","Otava","Otso","Paju","Peik","Pellervo","Pyry","Päiviö","Rem","Ritva","Runo","Seppo","Siro","Sisu","Sointu","Sulho","Sulo","Taisto","Taito","Tarmo","Tarvo","Tenho","Terho","Toimi","Toivo","Touko","Tuisku","Tuli","Ukko","Uljas","Urmas","Uko","Utu","Vaito","Valio","Valo","Varma","Veli","Vesa","Vieno","Viljo","Väinämöinn","Ylermi","Voitto",
		       ]
	    },

	    {
		// source: https://www.nordicnames.de/wiki/Category:Finnish_Origin
		column: "right",
		label: "Finnish female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Aallotar","Aamu","Aino","Airi","Anelma","Ansa","Aulikki","Helmi","Hilja","Hilkka","Hillervo","Hymy","Ihanelma","Ilo","Ilpotar","Ilta","Impi","Inari","Jippu","Kaarna","Kaiho","Kaino","Kaisla","Kaneli","Kanerva","Kastanja","Kaste","Kastehelmi","Kerttu","Kielo","Kirsimarja","Kukka","Kuu","Kuura","Kylli","Lahja","Laine","Lauha","Lempi","Louna","Lumi","Lumianna","Lumikukka","Lumisirkku","Lyly","Maire","Marja","Meimi","Merituuli","Merja","Mervi","Mielikki","Mielipäivä","Minttu","Muisto","Nuppu","Oiva","Oma","Onerva","Orvokki","Paju","Paula","Pihla","Pilvi","Pinja","Pulmu","Päivä","Pälvi","Raili","Raita","Rauha","Runo","Ruska","Sade","Saima","Sanelma","Satu","Sini","Sirkka","Sirkku","Siro","Sirpa","Sisko","Siviä","Soile","Soilikki","Sointu","Soiva","Solja","Sorea","Sulo","Suoma","Suvi","Suvituuli","Säde","Taika","Taimi","Tauno","Terhi","Terttu","Tiuku","Toini","Tuija","Tuike","Tuire","Tuisku","Tuli","Tuomi","Tuuli","Tyyni","Tähti","Ulpukka","Unelma","Usva","Utu","Valma","Vanamo","Varma","Vaula","Vellamo","Vieno","Vilja","Virpi","Virva","Vuokko",
		       ]
	    },

	    {
		// source: https://www.behindthename.com/names/gender/masculine/usage/japanese
		column: "left",
		label: "Japanese male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Akio","Akira","Aoi","Arata","Ayumu","Daichi","Daiki","Daisuke","Goro","Gorou","Hachiro","Hachirou","Haru","Haruka","Haruki","Haruto","Hayate","Hayato","Hibiki","Hideaki","Hideki","Hideyoshi","Hikaru","Hinata","Hiraku","Hiroki","Hiroshi","Hiroto","Ichiro","Ichirou","Isamu","Itsuki","Jiro","Jirou","Juro","Jurou","Kaede","Kaito","Kaoru","Katashi","Katsu","Katsuo","Katsuro","Katsurou","Kazuki","Kazuo","Ken","Ken'ichi","Kenji","Kenshin","Kenta","Kichiro","Kichirou","Kiyoshi","Kohaku","Kouki","Kouta","Kuro","Kurou","Kyo","Kyou","Makoto","Masaru","Michi","Minato","Minoru","Naoki","Naomi","Noboru","Nobu","Noburu","Nobuyuki","Nori","Osamu","Ren","Riku","Rikuto","Rin","Rokuro","Rokurou","Ryo","Ryoichi","Ryota","Ryou","Ryouichi","Ryouta","Ryuu","Ryuunosuke","Saburo","Saburou","Shichiro","Shichirou","Shin","Shinobu","Shiori","Shiro","Shirou","Sho","Shota","Shou","Shouhei","Shouta","Shun","Sora","Sota","Souma","Souta","Susumu","Taichi","Taiki","Takahiro","Takara","Takashi","Takehiko","Takeshi","Takuma","Takumi","Takuya","Taro","Tarou","Tsubasa","Yamato","Yasu","Yori","Yoshi","Yoshiro","Yoshirou","Youta","Yuki","Yuu","Yuudai","Yuuki","Yuuma","Yuuta","Yuuto",
		       ]
	    },

	    {
		// source: https://www.behindthename.com/names/gender/feminine/usage/japanese 
		column: "right",
		label: "Japanese female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Ai","Aiko","Aimi","Aina","Airi","Akane","Akemi","Aki","Akiko","Akira","Ami","Aoi","Asuka","Atsuko","Aya","Ayaka","Ayako","Ayame","Ayane","Ayano","Chihiro","Chika","Chikako","Chinatsu","Chiyo","Chiyoko","Cho","Chou","Chouko","Emi","Etsuko","Hana","Hanae","Hanako","Haru","Haruka","Haruko","Haruna","Hibiki","Hikari","Hikaru","Hina","Hinata","Hiroko","Hitomi","Honoka","Hoshi","Hoshiko","Hotaru","Izumi","Junko","Kaede","Kanon","Kaori","Kaoru","Kasumi","Kazue","Kazuko","Keiko","Kiku","Kimiko","Kiyoko","Kohaku","Koharu","Kokoro","Kotone","Kumiko","Kyo","Kyou","Mai","Makoto","Mami","Manami","Mao","Mariko","Masami","Masuyo","Mayu","Megumi","Mei","Michi","Michiko","Midori","Miho","Mika","Miki","Miku","Minako","Minato","Minoru","Mio","Misaki","Mitsuko","Miu","Miyako","Miyu","Mizuki","Moe","Momoka","Momoko","Moriko","Nana","Nanako","Nanami","Naoko","Naomi","Natsuki","Natsuko","Natsumi","Noa","Noriko","Ran","Rei","Ren","Riko","Rin","Rina","Rio","Sachiko","Saki","Sakura","Sakurako","Satomi","Sayaka","Sayuri","Setsuko","Shinju","Shinobu","Shiori","Shizuka","Shun","Sora","Sumiko","Suzu","Suzume","Takako","Takara","Tamiko","Tomiko","Tomoko","Tomomi","Tsubaki","Tsubame","Tsubasa","Tsukiko","Ume","Umeko","Wakana","Yasu","Yoko","Yoshi","Yoshiko","Youko","Yua","Yui","Yuina","Yuki","Yukiko","Yuko","Yumi","Yumiko","Yuri","Yuu","Yuuka","Yuuki","Yuuko","Yuuna","Yuzuki",
		       ]
	    },
	]
    },


    
    {
	label: "Angels and Demons",
	nameSets: [
	    {
		// source: https://en.wikipedia.org/wiki/List_of_angels_in_theology
		column: "left",
		label: "Angels in Judaism and Christianity",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Abaddon","Adriel","Archangel","Ariel","Azazel","Azrael","Barachiel","Camael","Cassiel","Cherubiel","Cherubim","Daniel","Dumah","Eremiel","Gabriel","Gadreel","Hadraniel","Hahasiah","Haniel","Hashmal","Helel","Hesediel","Imamiah","Jegudiel","Jehoel","Jequn","Jerahmeel","Jophiel","Kamael","Kemuel","Khamael","Kushiel","Leliel","Lucifer","Mebahiah","Metatron","Michael","Muriel","Nanael","Netzach","Nithael","Ofaniel","Ophaniel","Pahaliah","Penemue","Poyel","Puriel","Qaphsiel","Raguel","Raphael","Raziel","Remiel","Rikbiel","Sachiel","Samael","Sandalphon","Sariel","Selaphiel","Seraphiel","Seraphim","Shamsiel","Simiel","Temeluchus","Tzadkiel","Tzaphkiel","Tzaphqiel","Tzaphqiel","Uriel","Uzziel","Vasiariah","Vehuel","Zachariel","Zadkiel","Zaphkiel","Zophiel"
		       ]
	    },
	    {
		// sosurce: https://en.wikipedia.org/wiki/List_of_angels_in_theology
		column: "right",
		label: "Angels in Islam",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Atid","Azazil","Azrael","Azrail","Dardail","Hafaza","Hamalat","Herut","Israfil","Jabril","Jibrail","Jibril","Jundullah","Malik","Marut","Mikail","Muaqqibat","Munkar","Nakir","Raqibun","Raqib","Ridwan","Zabaniah"
		       ]
	    }
	]
    },

    {
	label: "Geographical names",
	nameSets: [
	    {
		column: "right",
		label: "Countries",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Afghanistan","Albania","Algeria","Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua","Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia","Herzegovina","Botswana","Brazil","Brunei","Darussalam","Bulgaria","Burkina","Burundi","Cambodia","Cameroon","Canada","Chad","Chile","China","Cocos","Colombia","Comoros","Congo","Croatia","Cuba","Cyprus","Denmark","Djibouti","Dominica","Ecuador","Egypt","Salvador","Eritrea","Estonia","Ethiopia","Falkland","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Britain","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea","Kosovo","Kuwait","Kyrgyzstan","Lao","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Caledonia","Zealand","Nicaragua","Niger","Nigeria","Niue","Norway","Oman","Pakistan","Palau","Panama","Papua","Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Samoa","Arabia","Senegal","Serbia","Seychelles","Singapore","Slovakia","Slovenia","Somalia","Spain","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Tibet","Togo","Tokelau","Tonga","Trinidad","Tunisia","Turkey","Turkmenistan","Turks","Tuvalu","Uganda","Ukraine","Uruguay","Uzbekistan","Vanuatu","Vatican","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe",
		       ]
	    },
	    {
		column: "left",
		label: "Middle-earth regions",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Aman","Andrast","Andustar","Anfalas","Anórien","Araman","Arnor","Angmar","Arandor","Avathar","Beleriand","Belfalas","Bree","Calenardhon","Cuiviénen","Dagorlad","Dimbar","Dor Daedeloth","Dor-en-Ernil","Dor-lómin","Dorthonion","Dorwinion","Drúwaith Iaur","Dunland","Dûn","Eldamar","Emerië","Enedwaith","Eriador","Falas","Folde","Forlindon","Forodwaith","Forostar","Gondor","Gorgoroth","Harad","Harlindon","Harondor","Hildórien","Hithlum","Hyarrostar","Ithilien","Khand","Ladros","Lamedon","Lammoth","Lebennin","Lindon","Lithlad","Lossarnach","Lothlann","Minhiriath","Mittalmar","Naith","Mordor","Alalminórë","Araman","Ard-galen","Arvernie","Avathar","Nísimaldar","Núrn","Orrostar","Ossiriand","Parth Galen","Rhovanion","Rhûn","Rohan","Tol Eressëa","Tolfalas","Udûn","Umbar","Valinor",
		       ]
	    },
	    
	]
    },

    
    {
	label: "Experimantal",
	nameSets: [
	    {
		column: "left",
		label: "Old Polish male",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Barnim", "Bądzsław", "Bąsław", "Bdzigost", "Bedgost","Będzieciech", "Będzimir", "Będziemir", "Będziemirz", "Będomir", "Będzimysł", "Biecsław", "Biecław", "Biezdar", "Biezdziad","Biezpraw", "Brzezpraw", "Biezprzem", "Biezprzym", "Bezprym", "Biezstryj", "Biestryj", "Biezstryk", "Brzezstryk", "Brzestryk","Biezuj", "Biezwuj", "Biezrząd", "Blizbor", "Blizborz", "Bodzepor", "Bogdał", "Bogdaj", "Bogodał", "Bogdasz","Bogudan", "Bogodan", "Bogdan", "Bohdan", "Bodan", "Bogodar", "Bogudar", "Boguchwał", "Boguchał", "Bogufał","Bogofał", "Bogfał", "Bogchwał", "Bochwał", "Bofał", "Bogumił", "Bogomił", "Bogmił", "Bogomieł", "Bogumieł","Bogmieł", "Bogumysław", "Bogurad", "Bogured", "Bogusąd", "Bogusław", "Bogosław", "Bohusław", "Bogsław", "Bogwiedz","Bogwidza", "Bogowid", "Bolebor", "Boleczaj", "Boleczest", "Bolelut", "Bolemir", "Bolemysł", "Bolesław", "Bosław","Borzuj", "Borzywuj", "Borzygniew", "Borzgniew", "Borzymir", "Borzysław", "Borzywoj", "Borzuj", "Bożebor", "Bożeciech","Bożciech", "Bożydar", "Bożdar", "Bożysław", "Bracsław", "Bratomir", "Bratumił", "Bratomił", "Bratmił", "Bretomił","Bretmił", "Braturad", "Brodzisław", "Brocsław", "Barcsław", "Barcław", "Bronimir", "Bromir", "Bronisąd", "Bronisław","Bronsław", "Barnisław", "Brunisław", "Brosław", "Brzezdob", "Brzezdoma", "Budziboj", "Bojan", "Budzigniew", "Budzimir","Budzisław", "Budzsław", "Budziwoj", "Budźwoj", "Budziwuj", "Bygost", "Bytomir", "Chociebąd", "Chociebor", "Chociemir","Chocimier", "Chocimir", "Chocimirz", "Chociesław", "Chocsław", "Choroman", "Chwalibog", "Chwalimir", "Chalimir", "Chwalisław","Chalisław", "Ciechomir", "Ciechosław", "Ciecierad", "Ciecirad", "Cieciered", "Cieciurad", "Ciećrad", "Ciecimiar", "Cierpisław","Ciesław", "Cieszybor", "Cieszbor", "Cieszygor", "Cieszymir", "Cieszymiar", "Cieszymier", "Cieszmir", "Cieszmiar", "Cieszmier","Cieszymysł", "Cieszyrad", "Cieszysław", "Cirzpibog", "Czabor", "Czcirad", "Czcisław", "Cisław", "Czedrog", "Czesław","Czasław", "Czębor", "Częstobor", "Częsbor", "Częstogoj", "Częstomir", "Częstowoj", "Czścibor", "Czcibor", "Cibor","Czesbor", "Dadzbog", "Dalebor", "Dalibor", "Dalbor", "Daleborz", "Dalegor", "Dalemir", "Dalimir", "Dalemiar","Dalimiar", "Dalestryj", "Dalewin", "Dalwin", "Dargorad", "Derwan", "Długomił", "Dobiegniew", "Dobielut", "Dobiemiest","Dobiemir", "Dobiemiar", "Dobiemier", "Dobimir", "Dobiesław", "Dobosław", "Dobrobąd", "Dobrociech", "Dobrogost", "Dobrogoszcz","Dobromił", "Dobromir", "Dobromier", "Dobromysł", "Dobromysław", "Dobronieg", "Dobrosiodł", "Dobrosław", "Dobrowit", "Dobrowoj","Dobrutro", "Dobrzegniew", "Domaborz", "Domabor", "Domagniew", "Domamir", "Domiemir", "Domarad", "Domorad", "Domared","Domaradz", "Domasław", "Domosław", "Domastoj", "Domastryj", "Domasuł", "Domawuj", "Domauj", "Domażyr", "Drogodziej","Drogomił", "Dromił", "Drogomir", "Drogmir", "Dragomir", "Drahomir", "Drohomir", "Dargomier", "Drogomysł", "Drogoradz","Drogosław", "Dargosław", "Drogowit", "Drohobysz", "Drahobysz", "Dziebor", "Dzierżykraj", "Dzirżykraj", "Dzierżysław", "Dzirżysław","Dziersław", "Dzirsław", "Dziesław", "Dzisław", "Dzirżyterg", "Dzirżywuj", "Dziwigor", "Dziwisław", "Falibog", "Falibor","Falimir", "Falimirz", "Falisław", "Gardomir", "Gnierat", "Gniewomir", "Gniewomiar", "Gniewomier", "Gniemir", "Gniewosz","Godzimir", "Godzisław", "Godosław", "Godzsław", "Gocław", "Gorazd", "Gorzysław", "Gorsław", "Gosław", "Gostmił","Gostomysł", "Gościmir", "Gościmiar", "Gościrad", "Gościsław", "Gościwid", "Gościwit", "Gościwuj", "Grodzisław", "Grodzsław","Gromisław", "Grzymisław", "Grzymosław", "Grzymsław", "Grzmisław", "Grzysław", "Himisław", "Hodysław", "Hubysław", "Huniemir","Huniesław", "Imisław", "Izasław", "Izbor", "Izbygniew", "Izbylut", "Izbelut", "Jaczemir", "Jaczewoj", "Janisław","Jarogniew", "Jerogniew", "Jaromir", "Jaromiar", "Jeromiar", "Jeromier", "Jaropełk", "Jarosław", "Jerosław", "Jirosław","Jarostryj", "Jimisław", "Juniesław", "Jutrogost", "Jutrowoj", "Jutrowuj", "Kanimir", "Kanimier", "Kajmir", "Kalmir","Kanmił", "Kazimierz", "Kazimir", "Kazimirz", "Kazimiar", "Kazimier", "Kaźmir", "Kociebor", "Kociemir", "Kociemiar","Kociemier", "Kocimiar", "Kocimier", "Kocimir", "Koćmir", "Krzesąd", "Krzesimir", "Krzesisław", "Krzecsław", "Krzesław","Krzysław", "Krzywosąd", "Kwalimir", "Kwalisław", "Laliczaj", "Lasota", "Lech", "Lechosław", "Lederg", "Lelistryj","Lesław", "Leszek", "Lubgost", "Lubodrog", "Lubomir", "Lubomirz", "Lubomysł", "Luboradz", "Lubowid", "Ludomił","Ludmił", "Ludomir", "Ludomer", "Ludmar", "Ludosław", "Ludziwoj", "Lutobor", "Litobor", "Lutogniew", "Lutomir","Lutomiar", "Lutmiar", "Lutomysł", "Lutosław", "Lutsław", "Lucsław", "Łękomir", "Małobąd", "Małogost", "Małomir","Małostryj", "Małostryk", "Małowid", "Małowuj", "Manomir", "Markusław", "Masław", "Mezamir", "Męcimir", "Męcisław","Męcsław", "Męsław", "Miecisław", "Miecsław", "Miesław", "Mieczysław", "Miestwin", "Mieszko", "Miłobąd", "Miłobor","Miłobrat", "Miłochat", "Miłoczat", "Miłodrog", "Miłodziad", "Miłogost", "Miłgost", "Miłorad", "Miłosław", "Miełosław","Miłostryj", "Miłosz", "Miłowit", "Miłwit", "Miłowuj", "Minigniew", "Minogniew", "Mirogod", "Mirogniew", "Mironieg","Mirosław", "Misław", "Modlibog", "Modliboż", "Mojmir", "Mojsław", "Morzysław", "Mroczysław", "Mroczesław", "Mroczsław","Mrocsław", "Mrocław", "Mrosław", "Mszczuj", "Mścibor", "Mścigniew", "Mścisław", "Mściwoj", "Mszczujwoj", "Mściwuj","Mysław", "Myślibor", "Myślidar", "Myślimir", "Naczęmir", "Naczęmiar", "Naczęmier", "Naczęrad", "Naczęsław", "Nacsław","Nacław", "Naczęwoj", "Naczęwuj", "Nadar", "Nadbor", "Nadmir", "Nagod", "Namir", "Namysław", "Nasiębąd","Nasiębud", "Nasiębor", "Nasięgniew", "Nasław", "Nawoj", "Nawuj", "Nażyr", "Niebor", "Niecisław", "Niebylec","Niedabył", "Niedabysz", "Niedalic", "Niedał", "Niedan", "Niedaniec", "Niedoma", "Niedamir", "Niedomysł", "Niegodoma","Niegosław", "Niegowoj", "Niegrod", "Nielubiec", "Niemir", "Niemierz", "Niemironieg", "Niemoj", "Niemst", "Niemsta","Niemszczon", "Nienach", "Niepełka", "Nieprosz", "Nieprasz", "Nieproch", "Nieprzebąd", "Nieprzebud", "Nieprzebysz", "Nierad","Niered", "Nierod", "Niesąd", "Niesiebąd", "Niesiebud", "Niesiebor", "Niesiodł", "Niestek", "Niestoj", "Niesuł","Nietęg", "Nietubył", "Niewsza", "Niezamysł", "Nieznamir", "Nieznawuj", "Ninogniew", "Ninomysł", "Nowosiodł", "Objęsław","Ocięsław", "Odolan", "Okrzesław", "Osiębor", "Osięgniew", "Ostrobod", "Ostrogniew", "Ostrowod", "Pakosław", "Pełczybog","Pęcisław", "Pęcsław", "Pęcław", "Pęsław", "Pękosław", "Pomir", "Pomścibor", "Poznan", "Poznomir", "Prosimir","Przebąd", "Przebor", "Przedabog", "Przedbor", "Przedwor", "Przedmir", "Przezmir", "Przedpełk", "Przedpołk", "Przedsław","Przecsław", "Przecław", "Przesław", "Przedwoj", "Przedwuj", "Przemęt", "Przemił", "Przemieł", "Przemir", "Przemysł","Przemysław", "Przemyślibor", "Przezdoma", "Przezdziad", "Przezpraw", "Przezprzem", "Przyboj", "Przybor", "Przybygniew", "Przybylut","Przybymir", "Przybyrad", "Przybysław", "Przybywoj", "Przybywuj", "Przysnobor", "Przywit", "Racibor", "Raciborz", "Recibor","Racigniew", "Racimir", "Racimiar", "Racisław", "Racsław", "Racław", "Ratsław", "Recsław", "Recław", "Retsław","Resław", "Rasław", "Radociech", "Radogost", "Radomił", "Radomir", "Radomiar", "Radmir", "Radosław", "Redosław","Radsław", "Redsław", "Radosz", "Radost", "Radowit", "Radowuj", "Radsuł", "Radzim", "Rodomił", "Rodomieł","Rodsław", "Rocsław", "Rocław", "Rosław", "Rościgniew", "Rościsław", "Rzędzimir", "Rzędzisław", "Rzędziwoj", "Sambor","Szenbor", "Samogost", "Samosąd", "Sęczygniew", "Sędowin", "Sędzimir", "Sędomir", "Sędzisław", "Sędosław", "Sędziwoj","Sędowoj", "Sędźwoj", "Sudywoj", "Sędziwuj", "Siebąd", "Siebor", "Siabor", "Szabor", "Szebor", "Sieciebor","Sietbor", "Sieciech", "Sieciesław", "Siecsław", "Siecław", "Siesław", "Siedlewit", "Siemidrog", "Siemierz", "Siemił","Siemimił", "Siemmił", "Siemimysł", "Siemomysł", "Siemomysław", "Siemir", "Siemar", "Siemirad", "Siemisław", "Siemosław","Siemoradz", "Siemowit", "Siepraw", "Siestrzemił", "Siestrzewit", "Sięgniew", "Siężyr", "Sężyr", "Sirosław", "Sierosław","Sjęgniew", "Skarbimir", "Skarbimirz", "Skardmir", "Skamir", "Skarbisław", "Skaziczest", "Sławobor", "Sławociech", "Sławciech","Sławomir", "Sławomiar", "Sławosław", "Smysław", "Snowid", "Sobiebor", "Sobiemir", "Sobiemysł", "Sobierad", "Sobiesąd","Sobiesław", "Sobieżyr", "Spycigniew", "Spycimir", "Spyćmier", "Spyćmir", "Spyćmierz", "Spycisław", "Stanibor", "Stanimir","Stanisław", "Stasław", "Stojgniew", "Stoigniew", "Stogniew", "Stojsław", "Stoisław", "Stosław", "Tosław", "Stomir","Strachomir", "Strogobor", "Strogomir", "Stronisław", "Strosław", "Strzebor", "Strzedziwoj", "Strzeżymir", "Strzeżysław", "Strzedzsław", "Strzecsław", "Strzecław", "Strzesław", "Sulibor","Sulibrat", "Sulidziad", "Suligost", "Sulimir", "Sulimiar", "Sulmir", "Sulirad", "Sulisław", "Solisław", "Sulistryj","Suliwuj", "Swojsław", "Swosław", "Ścibor", "Świebąd", "Świebor", "Śwsiebor", "Świeborz", "Śwsieborz", "Świeciech","Świecław", "Świesław", "Świedarg", "Świelub", "Świegniew", "Śwsiegniew", "Świemił", "Świemir", "Świerad", "Świrad","Świętobor", "Świętomir", "Świętopełk", "Świętopałk", "Świętopełek", "Świętosław", "Święcesław", "Święcsław", "Święsław", "Tasław","Tatomir", "Tatomier", "Tatumir", "Tęgomir", "Toligniew", "Tolisław", "Tomił", "Tomir", "Tomisław", "Tosław","Trzebiebor", "Trzebiegost", "Trzebiemir", "Trzebiemiar", "Trzebiemier", "Trzebiemysł", "Trzebomysł", "Trzebiesław", "Trzebisław", "Trzebor", "Trzebowit", "Twardomir", "Twardosław", "Twardostoj","Tworzymir", "Tworzysław", "Ubysław", "Unieboż", "Uniebog", "Uniedrog", "Uniegost", "Uniemir", "Unimir", "Uniemysł","Unierad", "Unirad", "Uniesław", "Unisław", "Uniewit", "Uściwoj", "Wacław", "Warcisław", "Warcsław", "Warsław","Wędziemir", "Wielebor", "Wielebyt", "Wieledrog", "Wielimir", "Wielisław", "Wielesław", "Wielsław", "Wiercisław", "Wiesław","Więcemił", "Więcemir", "Więcemiar", "Więcemier", "Więcmier", "Więcerad", "Więcesław", "Więcsław", "Więcław", "Więsław","Wilkomir", "Wirciżyr", "Wirzchosław", "Wisław", "Witomir", "Witomysł", "Witosław", "Witsław", "Wicsław", "Wicław","Witosz", "Władysław", "Włodzimierz", "Włodzimir", "Włodzisław", "Włocsław", "Włocław", "Włościbor", "Właścibor", "Włościbyt","Włościwoj", "Wojbor", "Wojciech", "Wociech", "Wojemił", "Wojmir", "Wojsław", "Wojesław", "Wojisław", "Wosław","Wolebor", "Wolimir", "Wolemir", "Wolmir", "Wolisław", "Wolrad", "Wrocisław", "Wrocsław", "Wrosław", "Wrociwoj","Wszebąd", "Wszebor", "Wszabor", "Wświebor", "Wszeborz", "Wszeciech", "Wszegniew", "Wszemił", "Wszemir", "Wszemiar","Wszemysł", "Wszerad", "Wszesiodł", "Wszesuł", "Wszetopełk", "Wysław", "Wyszebor", "Wyszabor", "Wyszemir", "Wyszesław","Wyszetrop", "Wyszomir", "Wyszymir", "Zadar", "Zamir", "Zawisza", "Zbigniew", "Zbygniew", "Zbyhniew", "Zbrosław","Zbylut", "Zbelut", "Zbysław", "Zbywoj", "Zdamir", "Zdawuj", "Zdzibor", "Zdziebor", "Zdziczest", "Zdziebąd","Zdziebud", "Zdziegod", "Zdzigod", "Zdziegrod", "Zdzigrod", "Zdziemił", "Zdzierad", "Zdziesuł", "Zdziewit", "Zdziewuj","Zdziwuj", "Zdzimir", "Zdziemir", "Zdzisław", "Zdziesław", "Zdzistryj", "Zdziwoj", "Ziemomysł", "Ziemowit", "Znamir","Zwnisław", "Żegota", "Żelibor", "Żelibrat", "Żeligniew", "Żelimysł", "Żelisław", "Żerosław"
		       ]
	    },
	    {
		column: "right",
		label: "Old Polish female",
		splitters: [splitterAfter, splitterBefore],
		filters: standardFilters,
		names: ["Bądzsława","Biedziesława","Biecsława","Biecława","Biezdziadka","Bogdała","Bogdana","Bogna", "Boguchwała","Bogufała","Bogudać","Bogudarz","Bogodarzf","Bogumiła","Bogmiła","Bogusława", "Boguwłość","Bogowłość","Boguwola","Bohuwola","Bolemira","Bolesława","Bosława","Bożeciecha", "Bożena","Bratumiła","Bratomiła","Bratmiła","Bronisława","Budzisława","Chwalimira","Chwalisława", "Ciechosława","Ciecirada","Ciesława","Cieszysława","Cirzpisława","Czcibora","Cibora","Czasława", "Czesława","Czębira","Częstobrona","Częstowojna","Dadzboga","Dalebora","Dalewuja","Damroka", "Dąbrówka","Dobiegniewa","Dobiesława","Dobosława","Dobrawa","Dobrogniewa","Dobromiła","Dobromira", "Dobroniega","Dobrosława","Dobrochna","Dobrosułka","Dobrowieść","Dobrowoja","Dobrożyźń","Domaczaja", "Domasława","Drogomira","Drogosława","Dziadumiła","Dziesława","Dzisława","Dzirżysława","Dziersława", "Dzirsława","Falisława","Gniewosądka","Godzimira","Godzisława","Gosława","Gościrada","Gościsława", "Grodzisława","Grzymisława","Grzymsława","Hubysława","Imisława","Izbygniewa","Janczysława","Jarogniewa", "Jaromira","Jarosława","Jerosława","Kazimiera","Krzesisława","Krzesława","Lechosława","Lesława", "Lubomira","Ludomiła","Ludmiła","Ludzimiła","Ludźmiła","Ludomira","Lutosława","Małomira", "Mieczysława","Milena","Miłosława","Miłochna","Mirogniewa","Mironiega","Mirosława","Modliboga", "Mojmira","Morzysława","Mszczuja","Mścigniewa","Mścisława","Myślibora","Naczęsława","Nadzieja", "Nasława","Nawoja","Nawojka","Niedomira","Niedamirz","Niegosława","Nieluba","Niemiła", "Nieradka","Niesiebądka","Niesiebudka","Niestanka","Pakosława","Pęcisława","Pęcsława","Pęcława", "Pęsława","Pękosława","Pężyrka","Przeborka","Przedsława","Przecsława","Przecława","Przesława", "Przemysława","Przezprawa","Przybycześć","Przybysława","Racisława","Racsława","Racława","Ratsława", "Recsława","Recława","Retsława","Rasława","Radomiła","Radosława","Radsława","Redsława", "Radochna","Radzisława","Rosława","Rościsława","Rzepicha","Samboja","Sędzisława","Siabora", "Szabora","Szebora","Sieciesława","Siecsława","Siecława","Siesława","Sięgniewa","Sirosława", "Sjęgniewa","Skarbimira","Sława","Sławobora","Sławomira","Smysława","Sobiesława","Stanisława", "Stojsława","Stoisława","Stronisława","Strzeżysława","Strzesława","Suligniewa","Sulisława","Ścibora", "Świebora","Świętomira","Świętosława","Święcsława","Święsława","Świętożyźń","Tolisława","Tomiła", "Tomira","Tomisława","Tosława","Trzebiesława","Trzebosława","Tworzysława","Ubysława","Uniesława", "Unisława","Wacława","Wielisława","Wieńczysława","Wiesława","Więcesława","Więcsława","Więcława", "Wirzchosława","Wisława","Witosława","Władysława","Włodzimira","Włościsława","Wojciecha","Wociecha", "Wojsława","Wojesława","Wolisława","Wrocisława","Wrocsława","Wszebora","Wszemiła","Wyszeniega", "Wyszesława","Wysława","Zbigniewa","Zbygniewa","Zbysława","Zdzisława","Zdziesława","Zwnisława", "Żelisława","Żyrborka","Żyrosława","Żywia"
		       ]
	    },
	    {
		column: "left",
		label: "Fantasy titles",
		splitters: [titleSplitterAfter, titleSplitterBefore],
		filters: standardFilters,
		names: [      "7th Dragon",
			      "Act of War",
			      "Adventure Rock",
			      "Age of Wonders",
			      "The Wizard's Throne",
			      "Age of Wonders",
			      "Shadow Magic",
			      "Guard",
			      "Air",
			      "Demon Hunters",
			      "Among the Sleep",
			      "Anvil of Dawn",
			      "The Engagement on Desert",
			      "Odyssey",
			      "Armageddon",
			      "Knights",
			      "The Secret",
			      "Battle for the Kingdom",
			      "The Dragon Slayer",
			      "The Corruption",
			      "The Black Fortress",
			      "Escape from the Pit",
			      "A Legend of Golden Axe",
			      "The Banner Saga",
			      "The Bard's Tale",
			      "The Destiny Knight",
			      "Thief of Fate",
			      "Battle Master",
			      "Beyond Divinity",
			      "Beyond the Labyrinth",
			      "Black Crypt",
			      "Black Sigil: Blade of the Exiled",
			      "Blade Master",
			      "Blade the Warrior",
			      "Blades of Vengeance",
			      "Blazing Dragons",
			      "An Epic Dwarven Tale",
			      "Book of Potions",
			      "Book of Spells",
			      "The Book of Unwritten Tales",
			      "The Book of Unwritten Tales",
			      "The Critter Chronicles",
			      "Brain Lord",
			      "Brave",
			      "Brigandine",
			      "Brothers",
			      "A Tale of Two Sons",
			      "Cardinal Syn",
			      "Castle of Deceit",
			      "A Tale of Two Sisters",
			      "Chaos Code",
			      "Chaos Legion",
			      "Chaos Seed",
			      "Chaos World",
			      "The Battle of Wizards",
			      "Kings and Castles",
			      "Chronicles of the Sword",
			      "Chronomaster",
			      "Citadel of the Dead",
			      "Clan of Champions",
			      "Clash of Clans",
			      "Class of Heroes",
			      "Claw",
			      "Clear",
			      "The Mystery of Mathra",
			      "Puzzle of the Pyramid",
			      "Code of Princess",
			      "Confrontation",
			      "Conquest of Elysium",
			      "Crimson Alliance",
			      "Crystal Warriors",
			      "Curse of Enchantia",
			      "Curse of the Azure Bonds",
			      "Inferno",
			      "The Dark Eye",
			      "Dark Kingdom",
			      "Dark Law",
			      "Meaning of Death",
			      "Darker Realms",
			      "Deep Down",
			      "Stormlord",
			      "Demon Gaze",
			      "Devil Kings",
			      "Devil May Cry",
			      "Die by the Sword",
			      "Disciples",
			      "Dark Prophecy",
			      "Renaissance",
			      "Sacred Lands",
			      "Cursed Memories",
			      "When the Birds Fly South",
			      "Whispers Under Ground",
			      "The Whitby Witches",
			      "Whortle's Hope",
			      "Why Kings and Queens Don't Wear Crowns",
			      "Wielding a Red Sword",
			      "Wild Blood",
			      "Wild Energy",
			      "The Wind Boy",
			      "Wind Rider's Oath",
			      "Windhaven",
			      "Winds of Fury",
			      "Wings of Wrath",
			      "Winter Rose",
			      "Winter's Heart",
			      "Wish You Were Here",
			      "Witches' Brew",
			      "The Witches",
			      "With a Tangled Skein",
			      "The Wizard and the Witch",
			      "Wizard at Large",
			      "The Wizard in the Woods",
			      "The Wizard in Wonderland",
			      "The Wizard Knight",
			      "A Wizard of Earthsea",
			      "Wizard's First Rule",
			      "Wolf Brother",
			      "The Wolf Leader",
			      "Wolf Queen",
			      "Wolf Star Rise",
			      "Wolf Tower",
			      "Wolf Wing",
			      "Wolfblade",
			      "Wolfskin",
			      "The Wonderful Visit",
			      "The Wood Beyond the World",
			      "The Woods Out Back",
			      "Rise of the Horde",
			      "World's End",
			      "The Woven Path",
			      "Wrath of a Mad God",
			      "The Wyrmling Horde",
			      "The Wyvern's Spur",
			      "The Year of Our War",
			      "Yellow Men Sleep",
			      "The Yellow Silk",
			      "The Book of Dreams",
			      
		       ]
	    },
	]
    }
    
    
    
)
