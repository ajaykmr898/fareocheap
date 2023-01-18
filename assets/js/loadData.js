// Scroll Top
$(document).ready(function () {
    initializePage();
    scrollButton();
    datepicker('#depDate1');
    datepicker('#depDate2');
    datepicker('#arrDate2');
});

function initializePage() {
    setRecomended();
    setOffers();
    setDestinations();
    setRoutes();
    setTestimonials();
    setDate();

    initializeFormFromTo();
    initializeFormOneRoundAndPassengersNumber();
    initializeEnquireNow();
    initializeContactUsEvent();
}

function initializeFormFromTo() {
    let data = [
    '"AZR - Touat-Cheikh Sidi Mohamed Belkebir Airport"',
    '"ALG - Houari Boumediene Airport"',
    '"AAE - Rabah Bitat Airport"',
    '"BLJ - Batna Airport"',
    '"BJA - Soummam Airport"',
    '"BSK - Biskra Airport"',
    '"CFK - Chlef International Airport"',
    '"CZL - Mohamed Boudiaf International Airport"',
    '"HME - Oued Irara Airport"',
    '"GJL - Jijel Ferhat Abbas Airport"',
    '"ORN - Oran Es Senia Airport"',
    '"QSF - Ain Arnat Airport"',
    '"TMR - Tamanrasset Airport"',
    '"TLM - Zenata – Messali El Hadj Airport"',
    '"HBE - Borg El Arab Airport"',
    '"ALY - El Nouzha Airport"',
    '"ATZ - Assiut Airport"',
    '"ASW - Aswan International Airport"',
    '"CAI - Cairo International Airport"',
    '"AAC - El Arish International Airport"',
    '"DBB - El Alamein International Airport"',
    '"HRG - Hurghada International Airport"',
    '"LXR - Luxor International Airport"',
    '"RMF - Marsa Alam International Airport"',
    '"MUH - Mersa Matruh International Airport"',
    '"SKV - St. Catherine International Airport"',
    '"SSH - Sharm El Sheikh International Airport"',
    '"HMB - Sohag International Airport"',
    '"TCP - Taba International Airport"',
    '"BEN - Benina International Airport"',
    '"SEB - Sabha Airport"',
    '"TIP - Tripoli International Airport"',
    '"MJI - Mitiga International Airport"',
    '"AGA - Agadir–Al Massira Airport"',
    '"CMN - Mohammed V International Airport"',
    '"FEZ - Fès–Saïs Airport"',
    '"RAK - Marrakesh Menara Airport"',
    '"NDR - Nador International Airport"',
    '"OUD - Angads Airport"',
    '"RBA - Rabat–Salé Airport"',
    '"TNG - Tangier Ibn Battouta Airport"',
    '"TTU - Sania Ramel Airport"',
    '"VIL - Dakhla Airport"',
    '"EUN - Hassan I Airport"',
    '"KRT - Khartoum International Airport"',
    '"PZU - Port Sudan New International Airport"',
    '"DJE - Djerba–Zarzis International Airport"',
    '"NBE - Enfidha–Hammamet International Airport"',
    '"MIR - Monastir Habib Bourguiba International Airport"',
    '"SFA - Sfax–Thyna International Airport"',
    '"TBJ - Tabarka–Aïn Draham International Airport"',
    '"TOE - Tozeur–Nefta International Airport"',
    '"TUN - Tunis–Carthage International Airport"',
    '"COO - Cadjehoun Airport"',
    '"BOY - Bobo Dioulasso Airport"',
    '"OUA - Thomas Sankara International Airport Ouagadougou"',
    '"BVC - Aristides Pereira International Airport"',
    '"SID - Amílcar Cabral International Airport"',
    '"RAI - Nelson Mandela International Airport"',
    '"VXE - Cesária Évora Airport"',
    '"ABJ - Félix-Houphouët-Boigny International Airport"',
    '"BJL - Banjul International Airport"',
    '"ACC - Kotoka International Airport"',
    '"KMS - Kumasi International Airport"',
    '"TKD - Takoradi Airport"',
    '"NYI - Sunyani Airport"',
    '"HZO - Ho Airport"',
    '"WZA - Wa Airport"',
    '"TML - Tamale Airport"',
    '"CKY - Conakry International Airport"',
    '"OXB - Osvaldo Vieira International Airport"',
    '"BQE - Bubaque Airport"',
    '"ROB - Roberts International Airport"',
    '"BKO - Modibo Keita International Airport"',
    '"NKC - Nouakchott–Oumtounsy International Airport"',
    '"NDB - Nouadhibou International Airport"',
    '"ATR - Atar International Airport"',
    '"NIM - Diori Hamani International Airport"',
    '"ABV - Nnamdi Azikiwe International Airport"',
    '"CBQ - Margaret Ekpo International Airport"',
    '"ABB - Asaba International Airport"',
    '"KAN - Mallam Aminu Kano International Airport"',
    '"LOS - Murtala Muhammed International Airport"',
    '"PHC - Port Harcourt International Airport"',
    '"ENU - Akanu Ibiam International Airport"',
    '"SKO - Sadiq Abubakar III International Airport"',
    '"HLE - Saint Helena Airport"',
    '"DSS - Blaise Diagne International Airport"',
    '"FNA - Lungi International Airport"',
    '"LFW - Lomé–Tokoin International Airport"',
    '"LAD - Quatro de Fevereiro Airport"',
    '"SDD - Lubango Airport"',
    '"DLA - Douala International Airport"',
    '"NSI - Yaoundé Nsimalen International Airport"',
    '"BGF - Bangui MPoko International Airport"',
    '"NDJ - NDjamena International Airport"',
    '"GOM - Goma International Airport"',
    '"FIH - Ndjili Airport"',
    '"FKI - Kisangani Bangoka International Airport"',
    '"FBM - Lubumbashi International Airport"',
    '"BZV - Maya-Maya Airport"',
    '"PNR - Agostinho-Neto International Airport"',
    '"SSG - Malabo International Airport"',
    '"MVB - MVengue El Hadj Omar Bongo Ondimba International Airport"',
    '"LBV - Léon-Mba International Airport"',
    '"POG - Port-Gentil International Airport"',
    '"TMS - São Tomé International Airport"',
    '"GBE - Sir Seretse Khama International Airport"',
    '"MUB - Maun Airport"',
    '"FRW - Francistown International Airport"',
    '"BBK - Kasane Airport"',
    '"SHO - King Mswati III International Airport"',
    '"MSU - Moshoeshoe I International Airport"',
    '"WDH - Hosea Kutako International Airport"',
    '"WVB - Walvis Bay Airport"',
    '"CPT - Cape Town International Airport"',
    '"DUR - King Shaka International Airport"',
    '"JNB - O. R. Tambo International Airport"',
    '"HLA - Lanseria International Airport"',
    '"MQP - Kruger Mpumalanga International Airport"',
    '"BFN - Bram Fischer International Airport"',
    '"ELS - East London Airport"',
    '"BJM - Bujumbura International Airport"',
    '"HAH - Prince Said Ibrahim International Airport"',
    '"JIB - Djibouti–Ambouli International Airport"',
    '"ASM - Asmara International Airport"',
    '"ADD - Addis Ababa Bole International Airport"',
    '"DIR - Dire Dawa Airport"',
    '"EDL - Eldoret International Airport"',
    '"MBA - Moi International Airport"',
    '"KIS - Kisumu International Airport"',
    '"NBO - Jomo Kenyatta International Airport"',
    '"TNR - Ivato International Airport"',
    '"DIE - Arrachart Airport"',
    '"MJN - Amborovy Airport"',
    '"NOS - Fascene Airport"',
    '"TMM - Toamasina Airport"',
    '"FTU - Tôlanaro Airport"',
    '"TLE - Toliara Airport"',
    '"BLZ - Chileka International Airport"',
    '"LLW - Lilongwe International Airport"',
    '"MRU - Sir Seewoosagur Ramgoolam International Airport"',
    '"DZA - Dzaoudzi–Pamandzi International Airport"',
    '"MPM - Maputo International Airport"',
    '"BEW - Beira Airport"',
    '"INH - Inhambane Airport"',
    '"APL - Nampula Airport"',
    '"POL - Pemba Airport"',
    '"TET - Chingozi Airport"',
    '"VNX - Vilankulo Airport"',
    '"RUN - Roland Garros Airport"',
    '"KGL - Kigali International Airport"',
    '"SEZ - Seychelles International Airport"',
    '"BSA - Bosaso Airport"',
    '"GBY - Abdullahi Yusuf Airport"',
    '"GGR - Garowe Airport"',
    '"HGA - Hargeisa Airport"',
    '"KMU - Kismayo Airport"',
    '"MGQ - Aden Adde International Airport"',
    '"JUB - Juba International Airport"',
    '"ARK - Arusha Airport"',
    '"DAR - Julius Nyerere International Airport"',
    '"JRO - Kilimanjaro International Airport"',
    '"MWZ - Mwanza Airport"',
    '"ZNZ - Abeid Amani Karume International Airport"',
    '"RUA - Arua Airport"',
    '"EBB - Entebbe International Airport"',
    '"ULU - Gulu Airport"',
    '"LVI - Harry Mwanga Nkumbula International Airport"',
    '"LUN - Kenneth Kaunda International Airport"',
    '"NLA - Simon Mwansa Kapwepwe International Airport"',
    '"HRE - Robert Gabriel Mugabe International Airport"',
    '"VFA - Victoria Falls Airport"',
    '"BUQ - Joshua Mqabuko Nkomo International Airport"',
    '"AXA - Clayton J. Lloyd International Airport"',
    '"ANU - V. C. Bird International Airport"',
    '"AUA - Queen Beatrix International Airport"',
    '"NAS - Lynden Pindling International Airport"',
    '"CCZ - Chub Cay International Airport"',
    '"GGT - Exuma International Airport"',
    '"FPO - Grand Bahama International Airport"',
    '"RSD - Rock Sound International Airport"',
    '"MHH - Marsh Harbour International Airport[1]"',
    '"BGI - Grantley Adams International Airport"',
    '"EIS - Terrance B. Lettsome International Airport"',
    '"BON - Flamingo International Airport"',
    '"EUX - F. D. Roosevelt Airport"',
    '"SAB - Juancho E. Yrausquin Airport"',
    '"CYB - Charles Kirkconnell International Airport"',
    '"GCM - Owen Roberts International Airport"',
    '"CMW - Ignacio Agramonte International Airport"',
    '"CCC - Jardines del Rey Airport"',
    '"CYO - Vilo Acuña Airport"',
    '"CFG - Jaime González Airport"',
    '"HAV - José Martí International Airport"',
    '"HOG - Frank País Airport"',
    '"SNU - Abel Santamaría Airport"',
    '"SCU - Antonio Maceo Airport"',
    '"VRA - Juan Gualberto Gómez Airport"',
    '"CUR - Curaçao International Airport"',
    '"DOM - Douglas–Charles Airport"',
    '"BRX - María Montez International Airport"',
    '"LRM - La Romana International Airport"',
    '"PUJ - Punta Cana International Airport"',
    '"AZS - Samaná El Catey International Airport"',
    '"POP - Gregorio Luperón International Airport"',
    '"STI - Cibao International Airport"',
    '"SDQ - Las Américas International Airport"',
    '"GND - Maurice Bishop International Airport"',
    '"PTP - Pointe-à-Pitre International Airport"',
    '"CAP - Cap-Haïtien International Airport"',
    '"PAP - Toussaint Louverture International Airport"',
    '"KIN - Norman Manley International Airport"',
    '"MBJ - Sangster International Airport"',
    '"FDF - Martinique Aimé Césaire International Airport"',
    '"MNI - John A. Osborne Airport"',
    '"BQN - Rafael Hernández Airport"',
    '"SJU - Luis Muñoz Marín International Airport"',
    '"SBH - Gustaf III Airport"',
    '"SKB - Robert L. Bradshaw International Airport"',
    '"UVF - Hewanorra International Airport"',
    '"SVD - Argyle International Airport"',
    '"CIW - Canouan Airport"',
    '"SXM - Princess Juliana International Airport"',
    '"POS - Piarco International Airport"',
    '"TAB - A.N.R. Robinson International Airport"',
    '"PLS - Providenciales Airport"',
    '"STT - Cyril E. King Airport"',
    '"STX - Henry E. Rohlsen Airport"',
    '"BZE - Philip S. W. Goldson International Airport"',
    '"LIR - Daniel Oduber Quirós International Airport"',
    '"SJO - Juan Santamaría International Airport"',
    '"SAL - El Salvador International Airport"',
    '"FRS - Mundo Maya International Airport"',
    '"GUA - La Aurora International Airport"',
    '"LCE - Golosón International Airport"',
    '"RTB - Juan Manuel Gálvez International Airport"',
    '"SAP - Ramón Villeda Morales International Airport"',
    '"TGU - Toncontín International Airport"',
    '"XPL - Comayagua International Airport"',
    '"MGA - Augusto C. Sandino International Airport"',
    '"BEF - Bluefields Airport"',
    '"RNI - Corn Island Airport"',
    '"BOC - Bocas del Toro Isla Colón International Airport"',
    '"DAV - Enrique Malek International Airport"',
    '"PAC - Albrook Marcos A. Gelabert International Airport"',
    '"BLB - Panama Pacifico International Airport"',
    '"PTY - Tocumen International Airport"',
    '"RIH - Scarlett Martínez International Airport"',
    '"BDA - L.F. Wade International Airport"',
    '"YXX - Abbotsford International Airport"',
    '"YYC - Calgary International Airport"',
    '"YEG - Edmonton International Airport"',
    '"YFC - Fredericton International Airport"',
    '"YQX - Gander International Airport"',
    '"YHZ - Halifax Stanfield International Airport"',
    '"YHM - John C. Munro Hamilton International Airport"',
    '"YLW - Kelowna International Airport"',
    '"YKF - Region of Waterloo International Airport"',
    '"YXU - London International Airport"',
    '"YQM - Greater Moncton Roméo LeBlanc International Airport"',
    '"YUL - Montréal–Trudeau International Airport"',
    '"YOW - Ottawa Macdonald–Cartier International Airport"',
    '"YQB - Québec City Jean Lesage International Airport"',
    '"YQR - Regina International Airport"',
    '"YXE - Saskatoon John G. Diefenbaker International Airport"',
    '"YYT - St. Johns International Airport"',
    '"YYZ - Toronto Pearson International Airport"',
    '"YVR - Vancouver International Airport"',
    '"YYJ - Victoria International Airport"',
    '"YXY - Erik Nielsen Whitehorse International Airport"',
    '"YQC - Windsor International Airport"',
    '"YWG - Winnipeg James Armstrong Richardson International Airport"',
    '"SFJ - Kangerlussuaq Airport"',
    '"GOH - Nuuk Airport"',
    '"JAV - Ilulissat Airport"',
    '"UAK - Narsarsuaq Airport"',
    '"ACA - Acapulco International Airport"',
    '"AGU - Aguascalientes International Airport"',
    '"CUN - Cancún International Airport"',
    '"CUU - Chihuahua International Airport"',
    '"CME - Ciudad del Carmen International Airport"',
    '"CZM - Cozumel International Airport"',
    '"CUL - Culiacán International Airport"',
    '"DGO - Durango International Airport"',
    '"GDL - Miguel Hidalgo y Costilla Guadalajara International Airport"',
    '"HMO - Hermosillo International Airport"',
    '"HUX - Bahías de Huatulco International Airport"',
    '"ZIH - Ixtapa-Zihuatanejo International Airport"',
    '"BJX - Bajío International Airport"',
    '"LTO - Loreto International Airport"',
    '"SJD - Los Cabos International Airport"',
    '"ZLO - Playa de Oro International Airport"',
    '"MZT - Mazatlán International Airport"',
    '"MID - Mérida International Airport"',
    '"MEX - Mexico City International Airport"',
    '"NLU - Felipe Ángeles International Airport"',
    '"MTY - Monterrey International Airport"',
    '"MLM - General Francisco Mujica International Airport"',
    '"OAX - Oaxaca International Airport"',
    '"PBC - Puebla International Airport"',
    '"PXM - Puerto Escondido International Airport"',
    '"PVR - Licenciado Gustavo Díaz Ordaz International Airport"',
    '"QRO - Querétaro Intercontinental Airport"',
    '"REX - General Lucio Blanco International Airport"',
    '"SLW - Saltillo Airport"',
    '"SLP - San Luis Potosí International Airport"',
    '"TAM - Tampico International Airport"',
    '"TIJ - Tijuana International Airport"',
    '"TLC - Toluca International Airport"',
    '"TRC - Torreón International Airport"',
    '"TGZ - Tuxtla Gutiérrez International Airport"',
    '"UPN - Uruapan International Airport"',
    '"VER - Veracruz International Airport"',
    '"VSA - Villahermosa International Airport"',
    '"ZCL - Zacatecas International Airport"',
    '"FSP - Saint-Pierre Airport"',
    '"AKC - Akron Executive Airport"',
    '"ALB - Albany International Airport"',
    '"ABQ - Albuquerque International Sunport"',
    '"ANC - Ted Stevens Anchorage International Airport"',
    '"ATW - Appleton International Airport"',
    '"ATL - Hartsfield–Jackson Atlanta International Airport"',
    '"ACY - Atlantic City International Airport"',
    '"AUS - Austin–Bergstrom International Airport"',
    '"BWI - Baltimore/Washington International Airport"',
    '"BGR - Bangor International Airport"',
    '"BLI - Bellingham International Airport"',
    '"BHM - Birmingham–Shuttlesworth International Airport"',
    '"BOI - Boise Airport"',
    '"BOS - Logan International Airport"',
    '"BUF - Buffalo Niagara International Airport"',
    '"CLT - Charlotte Douglas International Airport"',
    '"CHS - Charleston International Airport"',
    '"CVG - Cincinnati/Northern Kentucky International Airport"',
    '"CLE - Cleveland Hopkins International Airport"',
    '"CMH - John Glenn Columbus International Airport"',
    '"LCK - Rickenbacker International Airport"',
    '"DFW - Dallas/Fort Worth International Airport"',
    '"DAY - Dayton International Airport"',
    '"DEN - Denver International Airport"',
    '"DSM - Des Moines International Airport"',
    '"DTW - Detroit Metropolitan Airport"',
    '"ELP - El Paso International Airport"',
    '"FAI - Fairbanks International Airport"',
    '"FLL - Fort Lauderdale–Hollywood International Airport"',
    '"RSW - Southwest Florida International Airport"',
    '"FAT - Fresno Yosemite International Airport"',
    '"GRR - Gerald R. Ford International Airport"',
    '"GRB - Green Bay–Austin Straubel International Airport"',
    '"GSO - Piedmont Triad International Airport"',
    '"MDT - Harrisburg International Airport"',
    '"BDL - Bradley International Airport"',
    '"ITO - Hilo International Airport"',
    '"HNL - Daniel K. Inouye International Airport"',
    '"IAH - George Bush Intercontinental Airport"',
    '"HOU - William P. Hobby Airport"',
    '"HSV - Huntsville International Airport"',
    '"IND - Indianapolis International Airport"',
    '"JAN - Jackson–Medgar Wiley Evers International Airport"',
    '"JAX - Jacksonville International Airport"',
    '"JNU - Juneau International Airport"',
    '"MCI - Kansas City International Airport"',
    '"KTN - Ketchikan International Airport"',
    '"EYW - Key West International Airport"',
    '"KOA - Kona International Airport"',
    '"TYS - McGhee Tyson Airport"',
    '"LAL - Lakeland Linder International Airport"',
    '"LAN - Capital Region International Airport"',
    '"LAS - Harry Reid International Airport"',
    '"LIT - Clinton National Airport"',
    '"LAX - Los Angeles International Airport"',
    '"SDF - Louisville Muhammad Ali International Airport"',
    '"MLB - Melbourne Orlando International Airport"',
    '"MEM - Memphis International Airport"',
    '"MIA - Miami International Airport"',
    '"MAF - Midland International Air and Space Port"',
    '"MKE - General Mitchell International Airport"',
    '"MSP - Minneapolis–Saint Paul International Airport"',
    '"MYR - Myrtle Beach International Airport"',
    '"BNA - Nashville International Airport"',
    '"MSY - Louis Armstrong New Orleans International Airport"',
    '"JFK - John F. Kennedy International Airport"',
    '"LGA - LaGuardia Airport"',
    '"EWR - Newark Liberty International Airport"',
    '"SWF - Stewart International Airport"',
    '"ORF - Norfolk International Airport"',
    '"OAK - Oakland International Airport"',
    '"OKC - Will Rogers World Airport"',
    '"OMA - Eppley Airfield"',
    '"ONT - Ontario International Airport"',
    '"SNA - John Wayne Airport"',
    '"MCO - Orlando International Airport"',
    '"SFB - Orlando Sanford International Airport"',
    '"PSP - Palm Springs International Airport"',
    '"ECP - Northwest Florida Beaches International Airport"',
    '"PNS - Pensacola International Airport"',
    '"PHL - Philadelphia International Airport"',
    '"PHX - Phoenix Sky Harbor International Airport"',
    '"AZA - Phoenix–Mesa Gateway Airport"',
    '"PIT - Pittsburgh International Airport"',
    '"PWM - Portland International Jetport"',
    '"PDX - Portland International Airport"',
    '"PVD - Rhode Island T. F. Green International Airport"',
    '"RAC - Batten International Airport"',
    '"RDU - Raleigh–Durham International Airport"',
    '"RNO - Reno–Tahoe International Airport"',
    '"RIC - Richmond International Airport"',
    '"RST - Rochester International Airport"',
    '"ROC - Greater Rochester International Airport"',
    '"RFD - Chicago Rockford International Airport"',
    '"SMF - Sacramento International Airport"',
    '"SLC - Salt Lake City International Airport"',
    '"SAT - San Antonio International Airport"',
    '"SBD - San Bernardino International Airport"',
    '"SAN - San Diego International Airport"',
    '"SFO - San Francisco International Airport"',
    '"SJC - San Jose International Airport"',
    '"SRQ - Sarasota–Bradenton International Airport"',
    '"SAV - Savannah/Hilton Head International Airport"',
    '"LKE - Kenmore Air Harbor Seaplane Base"',
    '"BFI - King County International Airport"',
    '"SEA - Seattle–Tacoma International Airport"',
    '"SBM - Sheboygan County Memorial Airport"',
    '"PAE - Paine Field"',
    '"GEG - Spokane International Airport"',
    '"STL - St. Louis Lambert International Airport"',
    '"PIE - St. Pete–Clearwater International Airport"',
    '"SYR - Syracuse Hancock International Airport"',
    '"TLH - Tallahassee International Airport"',
    '"TPA - Tampa International Airport"',
    '"TUS - Tucson International Airport"',
    '"TUL - Tulsa International Airport"',
    '"DCA - Ronald Reagan Washington National Airport**"',
    '"IAD - Dulles International Airport"',
    '"PBI - Palm Beach International Airport"',
    '"AVP - Wilkes-Barre/Scranton International Airport"',
    '"ILM - Wilmington International Airport"',
    '"EZE - Ministro Pistarini International Airport"',
    '"AEP - Aeroparque Jorge Newbery"',
    '"BRC - San Carlos de Bariloche Airport"',
    '"COR - Ingeniero Aeronáutico Ambrosio L.V. Taravella International Airport"',
    '"MDZ - Governor Francisco Gabrielli International Airport"',
    '"IGR - Cataratas del Iguazú International Airport"',
    '"RES - Resistencia International Airport"',
    '"RGL - Piloto Civil Norberto Fernández International Airport"',
    '"USH - Ushuaia – Malvinas Argentinas International Airport"',
    '"LPB - El Alto International Airport"',
    '"VVI - Viru Viru International Airport"',
    '"CBB - Jorge Wilstermann International Airport"',
    '"AJU - Santa Maria Airport"',
    '"BEL - Val de Cães International Airport"',
    '"CNF - Tancredo Neves International Airport"',
    '"BVB - Boa Vista International Airport"',
    '"BSB - Brasília International Airport"',
    '"VCP - Viracopos International Airport"',
    '"CGR - Campo Grande International Airport"',
    '"CGB - Marechal Rondon International Airport"',
    '"CWB - Afonso Pena International Airport"',
    '"FLN - Hercílio Luz International Airport"',
    '"FOR - Pinto Martins International Airport"',
    '"IGU - Foz do Iguaçu International Airport"',
    '"GYN - Santa Genoveva Airport"',
    '"JPA - Presidente Castro Pinto International Airport"',
    '"MCZ - Zumbi dos Palmares International Airport"',
    '"MAO - Eduardo Gomes International Airport"',
    '"NAT - Greater Natal International Airport"',
    '"PNZ - Petrolina Airport"',
    '"POA - Salgado Filho Porto Alegre International Airport"',
    '"PVH - Governador Jorge Teixeira de Oliveira International Airport"',
    '"REC - Guararapes International Airport"',
    '"RBR - Rio Branco International Airport"',
    '"GIG - Rio de Janeiro/Galeão International Airport"',
    '"SDU - Santos Dumont Airport"',
    '"SSA - Deputado Luís Eduardo Magalhães International Airport"',
    '"SLZ - Marechal Cunha Machado International Airport"',
    '"CGH - São Paulo–Congonhas Airport"',
    '"GRU - São Paulo/Guarulhos International Airport"',
    '"THE - Teresina Airport"',
    '"UDI - Uberlândia Airport"',
    '"VIX - Eurico de Aguiar Salles Airport"',
    '"ANF - Andrés Sabella Gálvez International Airport"',
    '"CCP - Carriel Sur International Airport"',
    '"PMC - El Tepual International Airport"',
    '"PUQ - Presidente Carlos Ibáñez del Campo International Airport"',
    '"SCL - Arturo Merino Benítez International Airport"',
    '"AXM - El Edén International Airport"',
    '"BAQ - Ernesto Cortissoz International Airport"',
    '"BOG - El Dorado International Airport"',
    '"BGA - Palonegro International Airport"',
    '"BUN - Gerardo Tobar López Airport"',
    '"CLO - Alfonso Bonilla Aragón International Airport"',
    '"CTG - Rafael Núñez International Airport"',
    '"CUC - Camilo Daza International Airport"',
    '"IBE - Perales Airport"',
    '"IPI - San Luis Airport"',
    '"FLA - Gustavo Artunduaga Paredes Airport"',
    '"LET - Alfredo Vásquez Cobo International Airport"',
    '"MCJ - Jorge Isaacs Airport"',
    '"MZL - La Nubia Airport"',
    '"MDE - José María Córdova International Airport"',
    '"MVP - Fabio Alberto León Bentley Airport"',
    '"MTR - Los Garzones Airport"',
    '"NVA - Benito Salas Airport"',
    '"PSO - Antonio Nariño Airport"',
    '"PEI - Matecaña International Airport"',
    '"PPN - Guillermo León Valencia Airport"',
    '"UIB - El Caraño Airport"',
    '"RCH - Almirante Padilla Airport"',
    '"ADZ - Gustavo Rojas Pinilla International Airport"',
    '"TLU - Golfo de Morrosquillo Airport"',
    '"TCO - La Florida Airport"',
    '"SMR - Simón Bolívar International Airport"',
    '"CZU - Las Brujas Airport"',
    '"VUP - Alfonso López Pumarejo Airport"',
    '"VVC - La Vanguardia Airport"',
    '"EYP - El Alcaraván Airport"',
    '"CUE - Mariscal Lamar International Airport"',
    '"ESM - Carlos Concha Torres International Airport"',
    '"GYE - José Joaquín de Olmedo International Airport"',
    '"ETR - Santa Rosa International Airport"',
    '"MEC - Eloy Alfaro International Airport"',
    '"UIO - Mariscal Sucre International Airport"',
    '"TUA - Teniente Coronel Luis a Mantilla International Airport"',
    '"MPN - RAF Mount Pleasant"',
    '"CAY - Cayenne – Félix Eboué Airport"',
    '"GEO - Cheddi Jagan International Airport"',
    '"ASU - Silvio Pettirossi International Airport"',
    '"AGT - Guaraní International Airport"',
    '"AQP - Rodríguez Ballón International Airport"',
    '"CUZ - Alejandro Velasco Astete International Airport"',
    '"LIM - Jorge Chávez International Airport"',
    '"PBM - Johan Adolf Pengel International Airport"',
    '"MVD - Carrasco International Airport"',
    '"PDP - Capitán de Corbeta Carlos A. Curbelo International Airport"',
    '"RVY - Rivera International Airport"',
    '"CCS - Simón Bolívar International Airport"',
    '"MAR - La Chinita International Airport"',
    '"VLN - Arturo Michelena International Airport"',
    '"SCO - Aktau Airport"',
    '"AKX - Aktobe International Airport"',
    '"ALA - Almaty International Airport"',
    '"GUW - Atyrau Airport"',
    '"KGF - Karaganda Airport"',
    '"KOV - Kokshetau Airport"',
    '"KSN - Kostanay Airport"',
    '"KZO - Kyzylorda Airport"',
    '"NQZ - Nursultan Nazarbayev International Airport"',
    '"URA - Oral Ak Zhol Airport"',
    '"UKK - Oskemen Airport"',
    '"PWQ - Pavlodar Airport"',
    '"PPK - Petropavl Airport"',
    '"PLX - Semey Airport"',
    '"CIT - Shymkent Airport"',
    '"DMB - Taraz Airport"',
    '"FRU - Manas International Airport"',
    '"IKU - Issyk-Kul International Airport"',
    '"XXX - Karakol International Airport"',
    '"OSS - Osh Airport"',
    '"KQT - Bokhtar International Airport"',
    '"DYU - Dushanbe Airport"',
    '"LBD - Khujand Airport"',
    '"TJU - Kulob Airport"',
    '"ASB - Ashgabat Airport"',
    '"TAZ - Daşoguz Airport"',
    '"MYP - Mary International Airport"',
    '"KRW - Turkmenbashi International Airport"',
    '"CRZ - Turkmenabat International Airport"',
    '"AZN - Andizhan Airport"',
    '"BHK - Bukhara International Airport"',
    '"FEG - Fergana International Airport"',
    '"KSQ - Karshi Airport"',
    '"NMA - Namangan Airport"',
    '"NVI - Navoi International Airport"',
    '"NCU - Nukus Airport"',
    '"SKD - Samarkand International Airport"',
    '"TAS - Islam Karimov Tashkent International Airport"',
    '"TMJ - Termez Airport"',
    '"UGC - Urgench International Airport"',
    '"FNJ - Pyongyang International Airport"',
    '"AXT - Akita Airport"',
    '"AOJ - Aomori Airport"',
    '"FUK - Fukuoka Airport"',
    '"HKD - Hakodate Airport"',
    '"KOJ - Kagoshima Airport"',
    '"KMQ - Komatsu Airport"',
    '"HIJ - Hiroshima Airport"',
    '"KKJ - Kitakyushu Airport"',
    '"NGS - Nagasaki Airport"',
    '"OKA - Naha Airport"',
    '"NGO - Chubu Centrair International Airport"',
    '"KIJ - Niigata Airport"',
    '"OIT - Oita Airport"',
    '"OKJ - Okayama Airport"',
    '"KIX - Kansai International Airport"',
    '"CTS - New Chitose Airport"',
    '"SDJ - Sendai Airport"',
    '"FSZ - Shizuoka Airport"',
    '"HND - Haneda Airport"',
    '"NRT - Narita International Airport"',
    '"ULN - Chinggis Khaan International Airport"',
    '"BAV - Baotou Donghe Airport"',
    '"BHY - Beihai Fucheng Airport"',
    '"PEK - Beijing Capital International Airport"',
    '"PKX - Beijing Daxing International Airport"',
    '"CGQ - Changchun Longjia International Airport"',
    '"CSX - Changsha Huanghua International Airport"',
    '"CZX - Changzhou Benniu International Airport"',
    '"CTU - Chengdu Shuangliu International Airport"',
    '"TFU - Chengdu Tianfu International Airport"',
    '"CKG - Chongqing Jiangbei International Airport"',
    '"DLC - Dalian Zhoushuizi International Airport"',
    '"DDG - Dandong Langtou Airport"',
    '"DAT - Datong Yungang Airport"',
    '"DNH - Dunhuang Mogao International Airport"',
    '"ENH - Enshi Xujiaping Airport"',
    '"FOC - Fuzhou Changle International Airport"',
    '"KOW - Ganzhou Huangjin Airport"',
    '"CAN - Guangzhou Baiyun International Airport"',
    '"KWL - Guilin Liangjiang International Airport"',
    '"KWE - Guiyang Longdongbao International Airport"',
    '"HAK - Haikou Meilan International Airport"',
    '"HGH - Hangzhou Xiaoshan International Airport"',
    '"HRB - Harbin Taiping International Airport"',
    '"HFE - Hefei Xinqiao International Airport"',
    '"HEK - Heihe Aihui Airport"',
    '"HET - Hohhot Baita International Airport"',
    '"HIA - Huaian Lianshui International Airport"',
    '"TXN - Huangshan Tunxi International Airport"',
    '"HLD - Hulunbuir Hailar Airport"',
    '"JMU - Jiamusi Dongjiao Airport"',
    '"SWA - Jieyang Chaoshan International Airport"',
    '"TNA - Jinan Yaoqiang International Airport"',
    '"KMG - Kunming Changshui International Airport"',
    '"LHW - Lanzhou Zhongchuan International Airport"',
    '"LXA - Lhasa Gonggar Airport"',
    '"LYG - Lianyungang Baitabu Airport"',
    '"LJG - Lijiang Sanyi International Airport"',
    '"LYI - Linyi Qiyang Airport"',
    '"LYA - Luoyang Beijiao Airport"',
    '"LUM - Dehong Mangshi Airport"',
    '"NZH - Manzhouli Xijiao Airport"',
    '"MXZ - Meixian Airport"',
    '"MDG - Mudanjiang Hailang International Airport"',
    '"KHN - Nanchang Changbei International Airport"',
    '"NKG - Nanjing Lukou International Airport"',
    '"NNG - Nanning Wuxu International Airport"',
    '"NTG - Nantong Xingdong International Airport"',
    '"NGB - Ningbo Lishe International Airport"',
    '"DSN - Ordos Ejin Horo International Airport"',
    '"TAO - Qingdao Jiaodong International Airport"',
    '"BPE - Qinhuangdao Beidaihe Airport"',
    '"NDG - Qiqihar Sanjiazi Airport"',
    '"JJN - Quanzhou Jinjiang International Airport"',
    '"SYX - Sanya Phoenix International Airport"',
    '"SHA - Shanghai Hongqiao International Airport"',
    '"PVG - Shanghai Pudong International Airport"',
    '"SHE - Shenyang Taoxian International Airport"',
    '"SZX - Shenzhen Baoan International Airport"',
    '"SJW - Shijiazhuang Zhengding International Airport"',
    '"TYN - Taiyuan Wusu International Airport"',
    '"TSN - Tianjin Binhai International Airport"',
    '"UCB - Ulanqab Jining Airport"',
    '"URC - Ürümqi Diwopu International Airport"',
    '"WXN - Wanzhou Wuqiao Airport"',
    '"WEH - Weihai Dashuibo Airport"',
    '"WNZ - Wenzhou Yongqiang Airport"',
    '"WUH - Wuhan Tianhe International Airport"',
    '"WUX - Sunan Shuofang International Airport"',
    '"WUS - Wuyishan Airport"',
    '"XMN - Xiamen Gaoqi International Airport"',
    '"XIY - Xian Xianyang International Airport"',
    '"XNN - Xining Caojiabao International Airport"',
    '"WUT - Xinzhou Wutaishan Airport"',
    '"JHG - Xishuangbanna Gasa International Airport"',
    '"XUZ - Xuzhou Guanyin Airport"',
    '"YNZ - Yancheng Nanyang Airport"',
    '"YTY - Yangzhou Taizhou International Airport"',
    '"YNJ - Yanji Airport"',
    '"YNT - Yantai Penglai International Airport"',
    '"YIH - Yichang Sanxia Airport"',
    '"INC - Yinchuan Hedong International Airport"',
    '"YIW - Yiwu Airport"',
    '"YCU - Yuncheng Guangong Airport"',
    '"DYG - Zhangjiajie Hehua Airport"',
    '"ZHA - Zhanjiang Wuchuan Airport"',
    '"CGO - Zhengzhou Xinzheng International Airport"',
    '"ZUH - Zhuhai Jinwan Airport"',
    '"ZYI - Zunyi Xinzhou Airport"',
    '"HKG - Hong Kong International Airport"',
    '"MFM - Macau International Airport"',
    '"HUN - Hualien Airport"',
    '"KHH - Kaohsiung International Airport"',
    '"RMQ - Taichung International Airport"',
    '"TNN - Tainan Airport"',
    '"TSA - Taipei Songshan Airport"',
    '"TPE - Taoyuan International Airport"',
    '"PUS - Gimhae International Airport"',
    '"TAE - Daegu International Airport"',
    '"CJU - Jeju International Airport"',
    '"GMP - Gimpo International Airport"',
    '"ICN - Incheon International Airport"',
    '"CJJ - Cheongju International Airport"',
    '"MWX - Muan International Airport"',
    '"YNY - Yangyang International Airport"',
    '"CGP - Shah Amanat International Airport"',
    '"DAC - Shahjalal International Airport"',
    '"ZYL - Osmani International Airport"',
    '"PBH - Paro Airport"',
    '"IXA - Maharaja Bir Bikram Airport"',
    '"AMD - Sardar Vallabhbhai Patel International Airport"',
    '"ATQ - Sri Guru Ram Dass Jee International Airport"',
    '"BLR - Kempegowda International Airport"',
    '"BBI - Biju Patnaik Airport"',
    '"MAA - Chennai International Airport"',
    '"CJB - Coimbatore International Airport"',
    '"DEL - Indira Gandhi International Airport"',
    '"GOI - Dabolim Airport"',
    '"GAY - Gaya Airport"',
    '"GAU - Lokpriya Gopinath Bordoloi International Airport"',
    '"HYD - Rajiv Gandhi International Airport"',
    '"IMF - Imphal Airport"',
    '"IDR - Devi Ahilya Bai Holkar Airport"',
    '"JAI - Jaipur International Airport"',
    '"CNN - Kannur International Airport"',
    '"COK - Cochin International Airport"',
    '"CCU - Netaji Subhas Chandra Bose International Airport"',
    '"CCJ - Calicut International Airport"',
    '"LKO - Chaudhary Charan Singh Airport"',
    '"IXM - Madurai Airport"',
    '"IXE - Mangalore International Airport"',
    '"BOM - Chhatrapati Shivaji Maharaj International Airport"',
    '"NAG - Dr. Babasaheb Ambedkar International Airport"',
    '"PNQ - Pune Airport"',
    '"IXR - Birsa Munda Airport"',
    '"IXB - Bagdogra Airport"',
    '"SXR - Sheikh ul-Alam International Airport"',
    '"STV - Surat Airport"',
    '"TRV - Trivandrum International Airport"',
    '"TIR - Tirupati International Airport"',
    '"TRZ - Tiruchirappalli International Airport"',
    '"BDQ - Vadodara Airport"',
    '"VNS - Lal Bahadur Shastri Airport"',
    '"VGA - NTR Amaravati International Airport"',
    '"VTZ - Visakhapatnam International Airport"',
    '"MLE - Velana International Airport"',
    '"GAN - Gan International Airport"',
    '"HAQ - Hanimaadhoo International Airport"',
    '"VAM - Villa International Airport Maamigili"',
    '"NMF - Maafaru International Airport"',
    '"KTM - Tribhuvan International Airport"',
    '"BWA - Gautam Buddha International Airport"',
    '"PKR - Pokhara Regional International Airport"',
    '"BHV - Bahawalpur Airport"',
    '"LYP - Faisalabad International Airport"',
    '"GWD - Gwadar International Airport"',
    '"ISB - Islamabad International Airport"',
    '"KHI - Jinnah International Airport"',
    '"LHE - Allama Iqbal International Airport"',
    '"MUX - Multan International Airport"',
    '"PEW - Bacha Khan International Airport"',
    '"UET - Quetta International Airport"',
    '"RYK - Shaikh Zayed International Airport"',
    '"SKT - Sialkot International Airport"',
    '"TUK - Turbat International Airport"',
    '"CMB - Bandaranaike International Airport"',
    '"RML - Ratmalana Airport"',
    '"HRI - Mattala Rajapaksa International Airport"',
    '"JAF - Jaffna International Airport"',
    '"BWN - Brunei International Airport"',
    '"PNH - Phnom Penh International Airport"',
    '"REP - Siem Reap International Airport"',
    '"KOS - Sihanouk International Airport"',
    '"DIL - Presidente Nicolau Lobato International Airport"',
    '"BTJ - Sultan Iskandar Muda International Airport"',
    '"BDO - Husein Sastranegara International Airport"',
    '"BDJ - Syamsudin Noor International Airport"',
    '"BTH - Hang Nadim International Airport"',
    '"DPS - Ngurah Rai International Airport"',
    '"HLP - Halim Perdanakusuma International Airport"',
    '"CGK - Soekarno–Hatta International Airport"',
    '"KOE - El Tari International Airport"',
    '"UPG - Sultan Hasanuddin International Airport"',
    '"MDC - Sam Ratulangi International Airport"',
    '"LOP - Lombok International Airport"',
    '"KNO - Kualanamu International Airport"',
    '"PDG - Minangkabau International Airport"',
    '"PLM - Sultan Mahmud Badaruddin II International Airport"',
    '"PKU - Sultan Syarif Kasim II International Airport"',
    '"SRG - Jenderal Ahmad Yani International Airport"',
    '"SUB - Juanda International Airport"',
    '"SOC - Adisumarmo International Airport"',
    '"TRK - Juwata International Airport"',
    '"YIA - Yogyakarta International Airport"',
    '"LPQ - Luang Prabang International Airport"',
    '"PKZ - Pakse International Airport"',
    '"ZVK - Savannakhet Airport"',
    '"VTE - Wattay International Airport"',
    '"AOR - Sultan Abdul Halim Airport"',
    '"IPH - Sultan Azlan Shah Airport"',
    '"JHB - Senai International Airport"',
    '"KBR - Sultan Ismail Petra Airport"',
    '"BKI - Kota Kinabalu International Airport"',
    '"KUL - Kuala Lumpur International Airport"',
    '"SZB - Sultan Abdul Aziz Shah Airport"',
    '"TGG - Sultan Mahmud Airport"',
    '"KUA - Sultan Haji Ahmad Shah Airport"',
    '"KCH - Kuching International Airport"',
    '"LGK - Langkawi International Airport"',
    '"PEN - Penang International Airport"',
    '"MDL - Mandalay International Airport"',
    '"RGN - Yangon International Airport"',
    '"NYT - Naypyidaw International Airport"',
    '"BSO - Basco Airport"',
    '"LLC - Cagayan North International Airport"',
    '"CEB - Mactan–Cebu International Airport"',
    '"CRK - Clark International Airport"',
    '"DVO - Francisco Bangoy International Airport"',
    '"GES - General Santos International Airport"',
    '"ILO - Iloilo International Airport"',
    '"KLO - Kalibo International Airport"',
    '"LAO - Laoag International Airport"',
    '"MNL - Ninoy Aquino International Airport"',
    '"TAG - Bohol–Panglao International Airport"',
    '"PPS - Puerto Princesa International Airport"',
    '"SFS - Subic Bay International Airport"',
    '"ZAM - Zamboanga International Airport"',
    '"SIN - Changi Airport"',
    '"XSP - Seletar Airport"',
    '"BKK - Suvarnabhumi Airport"',
    '"DMK - Don Mueang International Airport"',
    '"CNX - Chiang Mai International Airport"',
    '"CEI - Chiang Rai International Airport"',
    '"UTP - U-Tapao International Airport"',
    '"HDY - Hat Yai International Airport"',
    '"KBV - Krabi International Airport"',
    '"HKT - Phuket International Airport"',
    '"URT - Surat Thani International Airport"',
    '"USM - Samui Airport"',
    '"UTH - Udon Thani International Airport"',
    '"DAD - Da Nang International Airport"',
    '"HAN - Noi Bai International Airport"',
    '"SGN - Tan Son Nhat International Airport"',
    '"VCA - Can Tho International Airport"',
    '"HPH - Cat Bi International Airport"',
    '"HUI - Phu Bai International Airport"',
    '"PQC - Phu Quoc International Airport"',
    '"CXR - Cam Ranh International Airport"',
    '"VCL - Chu Lai Airport"',
    '"VDO - Van Don International Airport"',
    '"KBL - Kabul International Airport"',
    '"HEA - Herat International Airport"',
    '"KDH - Kandahar International Airport"',
    '"MZR - Mazar-i-Sharif International Airport"',
    '"BAH - Bahrain International Airport"',
    '"ABD - Abadan International Airport"',
    '"AWZ - Ahvaz International Airport"',
    '"AJK - Arak International Airport"',
    '"ADU - Ardabil Airport"',
    '"PGU - Persian Gulf Airport"',
    '"BND - Bandar Abbas International Airport"',
    '"XBJ - Birjand International Airport"',
    '"BUZ - Bushehr Airport"',
    '"GBT - Gorgan International Airport"',
    '"HDM - Hamadan International Airport"',
    '"IIL - Ilam Airport"',
    '"IFN - Isfahan International Airport"',
    '"KER - Ayatollah Hashemi Rafsanjani Airport"',
    '"KSH - Shahid Ashrafi Esfahani Airport"',
    '"KIH - Kish Airport"',
    '"ZBR - Chabahar Konarak Airport"',
    '"LFM - Lamerd Airport"',
    '"LRR - Larestan International Airport"',
    '"MHD - Mashhad International Airport"',
    '"GSM - Qeshm International Airport"',
    '"RAS - Rasht Airport"',
    '"SRY - Dasht-e Naz Airport"',
    '"SYZ - Shiraz International Airport"',
    '"TBZ - Tabriz International Airport"',
    '"IKA - Imam Khomeini International Airport"',
    '"THR - Mehrabad International Airport"',
    '"OMH - Urmia Airport"',
    '"AZD - Shahid Sadooghi Airport"',
    '"ZAH - Zahedan Airport"',
    '"NJF - Al Najaf International Airport"',
    '"BGW - Baghdad International Airport"',
    '"BSR - Basra International Airport"',
    '"EBL - Erbil International Airport"',
    '"OSM - Mosul International Airport"',
    '"XNH - Nasiriyah Airport"',
    '"ISU - Sulaimaniyah International Airport"',
    '"ETM - Ramon Airport"',
    '"HFA - Haifa Airport"',
    '"TLV - Ben Gurion Airport"',
    '"AQJ - King Hussein International Airport"',
    '"AMM - Queen Alia International Airport"',
    '"KWI - Kuwait International Airport"',
    '"BEY - Beirut–Rafic Hariri International Airport"',
    '"MCT - Muscat International Airport"',
    '"SLL - Salalah International Airport"',
    '"OHS - Sohar International Airport"',
    '"DOH - Hamad International Airport"',
    '"AHB - Abha International Airport"',
    '"HOF - Al-Ahsa International Airport"',
    '"AJF - Al Jouf Airport"',
    '"ELQ - Prince Naif bin Abdulaziz International Airport"',
    '"DMM - King Fahd International Airport"',
    '"HAS - Hail International Airport"',
    '"JED - King Abdulaziz International Airport"',
    '"GIZ - Jizan Regional Airport"',
    '"MED - Prince Mohammad bin Abdulaziz International Airport"',
    '"EAM - Najran Domestic Airport"',
    '"RUH - King Khalid International Airport"',
    '"TUU - Tabuk Regional Airport"',
    '"TIF - Taif Regional Airport"',
    '"YNB - Yanbu Airport"',
    '"ALP - Aleppo International Airport"',
    '"DAM - Damascus International Airport"',
    '"LTK - Bassel Al-Assad International Airport"',
    '"KAC - Qamishli Airport"',
    '"AUH - Abu Dhabi International Airport"',
    '"AAN - Al Ain International Airport"',
    '"DWC - Al Maktoum International Airport"',
    '"DXB - Dubai International Airport"',
    '"RKT - Ras Al Khaimah International Airport"',
    '"SHJ - Sharjah International Airport"',
    '"ADE - Aden International Airport"',
    '"SAH - Sanaa International Airport"',
    '"GXF - Seiyun Airport"',
    '"BHX - Birmingham Airport"',
    '"BOH - Bournemouth Airport"',
    '"BRS - Bristol Airport"',
    '"CWL - Cardiff Airport"',
    '"MME - Durham Tees Valley Airport"',
    '"EMA - East Midlands Airport"',
    '"EXT - Exeter International Airport"',
    '"LBA - Leeds Bradford International Airport"',
    '"LPL - Liverpool John Lennon Airport"',
    '"LCY - London City Airport"',
    '"LGW - Gatwick Airport"',
    '"LHR - Heathrow Airport"',
    '"LTN - Luton Airport"',
    '"SEN - London Southend Airport"',
    '"STN - London Stansted Airport"',
    '"MAN - Manchester Airport"',
    '"NCL - Newcastle Airport"',
    '"NQY - Newquay Cornwall Airport"',
    '"NWI - Norwich International Airport"',
    '"SOU - Southampton Airport"',
    '"ABZ - Aberdeen Airport"',
    '"EDI - Edinburgh Airport"',
    '"GLA - Glasgow International Airport"',
    '"PIK - Glasgow Prestwick Airport"',
    '"INV - Inverness Airport"',
    '"BFS - Belfast International Airport"',
    '"BHD - George Best Belfast City Airport"',
    '"LDY - City of Derry Airport"',
    '"ANR - Antwerp International Airport"',
    '"BRU - Brussels Airport"',
    '"CRL - Brussels South Charleroi Airport"',
    '"LGG - Liège Airport"',
    '"OST - Ostend–Bruges International Airport"',
    '"AJA - Ajaccio Napoleon Bonaparte Airport"',
    '"BIA - Poretta Airport"',
    '"BVA - Beauvais–Tillé Airport"',
    '"EGC - Bergerac Dordogne Périgord Airport"',
    '"BZR - Béziers Cap dAgde Airport"',
    '"BIQ - Biarritz Pays Basque Airport"',
    '"BOD - Bordeaux–Mérignac Airport"',
    '"BES - Brest Bretagne Airport"',
    '"CCF - Carcassonne Airport"',
    '"XCR - Châlons Vatry Airport"',
    '"CMF - Chambéry Airport"',
    '"DNR - Dinard–Pleurtuit–Saint-Malo Airport"',
    '"FSC - Figari–Sud Corse Airport"',
    '"GNB - Alpes–Isère Airport"',
    '"LRH - La Rochelle – Île de Ré Airport"',
    '"LIL - Lille Airport"',
    '"LIG - Limoges – Bellegarde Airport"',
    '"LYS - Lyon–Saint Exupéry Airport"',
    '"MRS - Marseille Provence Airport"',
    '"BSL - EuroAirport Basel Mulhouse Freiburg"',
    '"NTE - Nantes Atlantique Airport"',
    '"NCE - Nice Côte dAzur Airport"',
    '"FNI - Nîmes–Alès–Camargue–Cévennes Airport"',
    '"CDG - Charles de Gaulle Airport"',
    '"ORY - Orly Airport"',
    '"PUF - Pau Pyrénées Airport"',
    '"PGF - Perpignan–Rivesaltes Airport"',
    '"PIS - Poitiers–Biard Airport"',
    '"RDZ - Rodez–Aveyron Airport"',
    '"EBU - Saint-Étienne–Bouthéon Airport"',
    '"SXB - Strasbourg Airport"',
    '"TLN - Toulon–Hyères Airport"',
    '"TLS - Toulouse–Blagnac Airport"',
    '"TUF - Tours Val de Loire Airport"',
    '"GIB - Gibraltar International Airport"',
    '"ACI - Alderney Airport"',
    '"GCI - Guernsey Airport"',
    '"JER - Jersey Airport"',
    '"ORK - Cork Airport"',
    '"DUB - Dublin Airport"',
    '"KIR - Kerry Airport"',
    '"NOC - Ireland West Airport"',
    '"SNN - Shannon Airport"',
    '"IOM - Isle of Man Airport"',
    '"LUX - Findel Airport"',
    '"AMS - Amsterdam Airport Schiphol"',
    '"EIN - Eindhoven Airport"',
    '"GRQ - Groningen Airport Eelde"',
    '"MST - Maastricht Aachen Airport"',
    '"RTM - Rotterdam The Hague Airport"',
    '"GRZ - Graz Airport"',
    '"KLU - Klagenfurt Airport"',
    '"INN - Innsbruck Airport"',
    '"LNZ - Linz Airport"',
    '"SZG - Salzburg Airport"',
    '"VIE - Vienna International Airport"',
    '"BRQ - Brno–Tuřany Airport"',
    '"KLV - Karlovy Vary Airport"',
    '"OSR - Leoš Janáček Airport Ostrava"',
    '"PRG - Václav Havel Airport Prague"',
    '"PED - Pardubice Airport"',
    '"FKB - Karlsruhe/Baden-Baden Airport"',
    '"BER - Berlin Brandenburg Airport"',
    '"BRE - Bremen Airport"',
    '"CGN - Cologne/Bonn Airport"',
    '"DTM - Dortmund Airport"',
    '"DUS - Düsseldorf Airport"',
    '"FRA - Frankfurt Airport"',
    '"HHN - Frankfurt-Hahn Airport"',
    '"MLH - EuroAirport Basel–Mulhouse–Freiburg/BSL/EAP"',
    '"FDH - Friedrichshafen Airport"',
    '"HAM - Hamburg Airport"',
    '"HAJ - Hannover Airport"',
    '"LEJ - Leipzig/Halle Airport"',
    '"LBC - Lübeck Airport"',
    '"FMM - Memmingen Airport"',
    '"MUC - Munich Airport"',
    '"NUE - Nuremberg Airport"',
    '"STR - Stuttgart Airport"',
    '"NRN - Weeze Airport"',
    '"BUD - Budapest Ferenc Liszt International Airport"',
    '"DEB - Debrecen International Airport"',
    '"SOB - Hévíz-Balaton Airport"',
    '"QGY - Győr-Pér International Airport"',
    '"QPJ - Pécs-Pogány International Airport"',
    '"BTS - Bratislava Airport"',
    '"KSC - Košice International Airport"',
    '"PZY - Piešťany Airport"',
    '"TAT - Poprad-Tatry Airport"',
    '"SLD - Sliač Airport"',
    '"ILZ - Žilina Airport"',
    '"BSL - EuroAirport Basel Mulhouse Freiburg"',
    '"BRN - Bern Airport"',
    '"GVA - Geneva Airport"',
    '"LUG - Lugano Airport"',
    '"ACH - St. Gallen–Altenrhein Airport"',
    '"ZRH - Zurich Airport"',
    '"BZG - Bydgoszcz Ignacy Jan Paderewski Airport"',
    '"GDN - Gdańsk Lech Wałęsa Airport"',
    '"KTW - Katowice Airport"',
    '"KRK - Kraków John Paul II International Airport"',
    '"LUZ - Lublin Airport"',
    '"LCJ - Łódź Władysław Reymont Airport"',
    '"POZ - Poznań–Ławica Airport"',
    '"RZE - Rzeszów–Jasionka Airport"',
    '"SZZ - Solidarity Szczecin–Goleniów Airport"',
    '"WAW - Warsaw Chopin Airport"',
    '"WMI - Warsaw Modlin Airport"',
    '"WRO - Copernicus Airport Wrocław"',
    '"BWK - Brač Airport"',
    '"DBV - Dubrovnik Airport"',
    '"LSZ - Lošinj Airport"',
    '"OSI - Osijek Airport"',
    '"PUY - Pula Airport"',
    '"RJK - Rijeka Airport"',
    '"SPU - Split Airport"',
    '"ZAD - Zadar Airport"',
    '"ZAG - Zagreb Airport"',
    '"LCA - Larnaca International Airport"',
    '"PFO - Paphos International Airport"',
    '"ECN - Ercan International Airport"',
    '"ATH - Athens International Airport"',
    '"EFL - Kefalonia Island International Airport"',
    '"CHQ - Chania International Airport"',
    '"JKH - Chios Island National Airport"',
    '"CFU - Corfu International Airport"',
    '"HER - Heraklion International Airport"',
    '"KLX - Kalamata International Airport"',
    '"AOK - Karpathos Island National Airport"',
    '"KVA - Kavala International Airport"',
    '"KGS - Kos International Airport"',
    '"JMK - Mykonos Airport"',
    '"MJT - Mytilene International Airport"',
    '"PVK - Aktion National Airport"',
    '"RHO - Rhodes International Airport"',
    '"SMI - Samos International Airport"',
    '"JTR - Santorini (Thira) International Airport"',
    '"JSI - Skiathos International Airport"',
    '"SKU - Skyros Island National Airport"',
    '"SKG - Thessaloniki Airport"',
    '"VOL - Nea Anchialos National Airport"',
    '"ZTH - Zakynthos International Airport"',
    '"AHO - Fertilia Airport"',
    '"AOI - Ancona Airport"',
    '"BRI - Palese Airport"',
    '"BGY - Orio al Serio Airport"',
    '"BLQ - Bologna Airport"',
    '"VBS - Brescia Airport"',
    '"BDS - Brindisi Airport"',
    '"CAG - Cagliari Airport"',
    '"CTA - Fontanarossa Airport"',
    '"CUF - Cuneo Levaldigi Airport"',
    '"FLR - Peretola Airport"',
    '"GOA - Cristoforo Colombo Airport"',
    '"SUF - Lamezia Terme Airport"',
    '"LIN - Linate Airport"',
    '"MXP - Milan Malpensa Airport"',
    '"NAP - Naples International Airport"',
    '"OLB - Costa Smeralda Airport"',
    '"PMO - Palermo Airport"',
    '"PMF - Giuseppe Verdi Airport"',
    '"PEG - San Egidio Airport"',
    '"PSR - Abruzzo Airport"',
    '"PSA - Galileo Galilei Airport"',
    '"RMI - Federico Fellini Airport"',
    '"FCO - Leonardo da Vinci–Fiumicino Airport"',
    '"CIA - Rome Ciampino Airport"',
    '"TPS - Vincenzo Florio Airport"',
    '"TRS - Friuli Venezia Giulia Airport"',
    '"TRN - Caselle Airport"',
    '"VCE - Venice Marco Polo Airport"',
    '"VRN - Verona Villafranca Airport"',
    '"MLA - Malta International Airport"',
    '"BYJ - Beja Airport"',
    '"FAO - Faro Airport"',
    '"FNC - Madeira Airport"',
    '"PXO - Porto Santo Airport"',
    '"LIS - Lisbon Airport"',
    '"OPO - Francisco Sá Carneiro Airport"',
    '"PDL - João Paulo II Airport"',
    '"TER - Lajes Airport"',
    '"LJU - Ljubljana Jože Pučnik Airport"',
    '"MBX - Maribor Edvard Rusjan Airport"',
    '"POW - Portorož Airport"',
    '"LCG - A Coruña Airport"',
    '"ALC - Alicante–Elche Miguel Hernández Airport"',
    '"LEI - Almería Airport"',
    '"OVD - Asturias Airport"',
    '"BCN - Josep Tarradellas Barcelona–El Prat Airport"',
    '"BIO - Bilbao Airport"',
    '"CDT - Castellón–Costa Azahar Airport"',
    '"FUE - Fuerteventura Airport"',
    '"GRO - Girona-Costa Brava Airport"',
    '"LPA - Gran Canaria Airport"',
    '"GRX - Federico García Lorca Granada Airport"',
    '"HSK - Huesca-Pirineos Airport"',
    '"IBZ - Ibiza Airport"',
    '"XRY - Jerez Airport"',
    '"SPC - La Palma Airport"',
    '"ACE - Lanzarote Airport"',
    '"ILD - Alguaire Airport"',
    '"MAD - Madrid-Barajas Airport"',
    '"AGP - Málaga Airport"',
    '"MAH - Menorca Airport"',
    '"RMU - Región de Murcia International Airport"',
    '"PMI - Palma de Mallorca Airport"',
    '"PNA - Pamplona Airport"',
    '"REU - Reus Airport"',
    '"SDR - Santander Airport"',
    '"SCQ - Santiago de Compostela Airport"',
    '"SVQ - Seville Airport"',
    '"TFN - Tenerife North–Ciudad de La Laguna Airport"',
    '"TFS - Tenerife South Airport"',
    '"VLC - Valencia Airport"',
    '"VLL - Valladolid Airport"',
    '"VGO - Vigo–Peinador Airport"',
    '"VIT - Vitoria Airport"',
    '"ZAZ - Zaragoza Airport"',
    '"TIA - Tirana International Airport Nënë Tereza"',
    '"KFZ - Kukës International Airport Zayed"',
    '"EVN - Zvartnots International Airport"',
    '"LWN - Shirak Airport"',
    '"GYD - Heydar Aliyev International Airport"',
    '"KVD - Ganja International Airport"',
    '"NAJ - Nakhchivan Airport"',
    '"GBB - Qabala International Airport"',
    '"LLK - Lankaran International Airport"',
    '"ZTU - Zaqatala International Airport"',
    '"GNA - Hrodna Airport"',
    '"GME - Gomel Airport"',
    '"MSQ - Minsk International Airport"',
    '"BNX - Banja Luka International Airport"',
    '"SJJ - Sarajevo International Airport"',
    '"TZL - Tuzla International Airport"',
    '"OMO - Mostar International Airport"',
    '"BOJ - Burgas Airport"',
    '"PDV - Plovdiv Airport"',
    '"SOF - Sofia Airport"',
    '"VAR - Varna Airport"',
    '"XXX - Ambrolauri Airport"',
    '"BUS - Batumi International Airport"',
    '"KUT - Kutaisi International Airport"',
    '"XXX - Queen Tamar Airport"',
    '"XXX - Natakhtari Airfield"',
    '"SUI - Sukhumi Babushara Airport"',
    '"TBS - Tbilisi International Airport"',
    '"PRN - Pristina International Airport"',
    '"KIV - Chișinău International Airport"',
    '"ARW - Arad International Airport"',
    '"BCM - George Enescu International Airport"',
    '"BAY - Maramureș Airport"',
    '"OTP - Henri Coandă International Airport|"',
    '"BBU - Aurel Vlaicu International Airport"',
    '"CLJ - Cluj-Napoca International Airport"',
    '"CND - Mihail Kogălniceanu International Airport"',
    '"CRA - Craiova International Airport"',
    '"IAS - Iași International Airport"',
    '"OMR - Oradea International Airport"',
    '"SUJ - Satu Mare International Airport"',
    '"SBZ - Sibiu International Airport"',
    '"SCV - Suceava International Airport"',
    '"TGM - Târgu Mureș International Airport"',
    '"TSR - Timișoara Traian Vuia International Airport"',
    '"TGD - Podgorica Airport"',
    '"TIV - Tivat Airport"',
    '"OHD - Ohrid St. Paul the Apostle Airport"',
    '"SKP - Skopje International Airport"',
    '"ABA - Abakan International Airport"',
    '"DYR - Ugolny Airport"',
    '"AAQ - Anapa Airport"',
    '"ARH - Talagi Airport"',
    '"ASF - Narimanovo Airport"',
    '"BAX - Barnaul Airport"',
    '"EGO - Belgorod International Airport"',
    '"BQS - Ignatyevo Airport"',
    '"BTK - Bratsk Airport"',
    '"BZK - Bryansk International Airport"',
    '"CSY - Cheboksary International Airport"',
    '"CEK - Chelyabinsk Airport"',
    '"CEE - Cherepovets Airport"',
    '"HTA - Chita-Kadala International Airport"',
    '"ESL - Elista Airport"',
    '"IKT - Irkutsk Airport"',
    '"GRV - Grozny Airport"',
    '"KGD - Khrabrovo Airport"',
    '"KZN - Kazan Airport"',
    '"KHV - Khabarovsk Novy Airport"',
    '"KXK - Komsomolsk-on-Amur Airport"',
    '"KRR - Pashkovsky Airport"',
    '"KJA - Yemelyanovo International Airport"',
    '"URS - Kursk Vostochny Airport"',
    '"GDX - Sokol Airport"',
    '"MQF - Magnitogorsk International Airport"',
    '"MCX - Uytash Airport"',
    '"MRV - Mineralnye Vody Airport"',
    '"DME - Domodedovo International Airport"',
    '"SVO - Sheremetyevo International Airport"',
    '"VKO - Vnukovo Airport"',
    '"MMK - Murmansk Airport"',
    '"NAL - Nalchik Airport"',
    '"NJC - Nizhnevartovsk Airport"',
    '"NBC - Begishevo Airport"',
    '"GOJ - Strigino Airport"',
    '"NOZ - Spichenkovo Airport"',
    '"OVB - Tolmachevo Airport"',
    '"OMS - Omsk Tsentralny Airport"',
    '"REN - Orenburg Tsentralny Airport"',
    '"OSW - Orsk Airport"',
    '"PEE - Perm International Airport"',
    '"PES - Petrozavodsk Airport"',
    '"PVS - Provideniya Bay Airport"',
    '"PKC - Yelizovo Airport"',
    '"PKV - Pskov Airport"',
    '"ROV - Platov International Airport"',
    '"LED - Pulkovo Airport"',
    '"KUF - Samara Kurumoch Airport"',
    '"GSV - Saratov Gagarin Airport"',
    '"AER - Sochi International Airport"',
    '"STW - Stavropol Shpakovskoye Airport"',
    '"SGC - Surgut International Airport"',
    '"SCW - Syktyvkar Airport"',
    '"TOF - Bogashevo Airport"',
    '"TJM - Roshchino International Airport"',
    '"UUD - Baikal International Airport"',
    '"ULV - Ulyanovsk Baratayevka Airport"',
    '"UFA - Ufa International Airport"',
    '"VVO - Vladivostok International Airport"',
    '"OGZ - Beslan Airport"',
    '"VOG - Volgograd International Airport"',
    '"VOZ - Voronezh International Airport"',
    '"YKS - Yakutsk Airport"',
    '"IAR - Tunoshna Airport"',
    '"SVX - Koltsovo International Airport"',
    '"UUS - Yuzhno-Sakhalinsk Airport"',
    '"BEG - Belgrade Nikola Tesla Airport"',
    '"INI - Niš Constantine the Great Airport"',
    '"KVO - Morava Airport"',
    '"ADA - Şakirpaşa Airport"',
    '"GZP - Gazipaşa Airport"',
    '"ESB - Esenboğa International Airport"',
    '"AYT - Antalya Airport"',
    '"BJV - Milas–Bodrum Airport"',
    '"YEI - Yenişehir Airport"',
    '"DLM - Dalaman Airport"',
    '"DNZ - Denizli Çardak Airport"',
    '"DIY - Diyarbakır Airport"',
    '"EZS - Elazığ Airport"',
    '"GZT - Oğuzeli Airport"',
    '"IST - Istanbul Airport"',
    '"SAW - Sabiha Gökçen International Airport"',
    '"ADB - Adnan Menderes Airport"',
    '"ASR - Erkilet Airport"',
    '"KYA - Konya Airport"',
    '"KZR - Zafer Airport"',
    '"MLX - Erhaç Airport"',
    '"NAV - Kapadokya Airport"',
    '"SZF - Samsun-Çarşamba Airport"',
    '"TZX - Trabzon Airport"',
    '"ONQ - Zonguldak Airport"',
    '"CWC - Chernivtsi International Airport"',
    '"DNK - Dnipro International Airport"',
    '"IFO - Ivano-Frankivsk International Airport"',
    '"HRK - Kharkiv International Airport"',
    '"KWG - Kryvyi Rih International Airport"',
    '"KBP - Boryspil International Airport"',
    '"IEV - Kyiv International Airport"',
    '"LWO - Lviv Danylo Halytskyi International Airport"',
    '"NLV - Mykolaiv International Airport"',
    '"ODS - Odesa International Airport"',
    '"PLV - Poltava Airport"',
    '"SIP - Simferopol International Airport"',
    '"UDJ - Uzhhorod International Airport"',
    '"OZH - Zaporizhzhia International Airport"',
    '"AAL - Aalborg Airport"',
    '"AAR - Aarhus Airport"',
    '"BLL - Billund Airport"',
    '"CPH - Copenhagen Airport"',
    '"TLL - Lennart Meri Tallinn Airport"',
    '"TAY - Tartu Airport"',
    '"EPU - Pärnu Airport"',
    '"FAE - Vágar Airport"',
    '"MHQ - Mariehamn Airport"',
    '"HEL - Helsinki-Vantaa Airport"',
    '"KTT - Kittilä Airport"',
    '"KUO - Kuopio Airport"',
    '"KAO - Kuusamo Airport"',
    '"LPP - Lappeenranta Airport"',
    '"OUL - Oulu Airport"',
    '"RVN - Rovaniemi Airport"',
    '"SVL - Savonlinna Airport"',
    '"TMP - Tampere–Pirkkala Airport"',
    '"TKU - Turku Airport"',
    '"VAA - Vaasa Airport"',
    '"AEY - Akureyri Airport"',
    '"EGS - Egilsstaðir Airport"',
    '"KEF - Keflavik International Airport"',
    '"RKV - Reykjavík Airport"',
    '"RIX - Riga International Airport"',
    '"VNT - Ventspils International Airport"',
    '"KUN - Kaunas Airport"',
    '"PLQ - Palanga International Airport"',
    '"SQQ - Šiauliai International Airport"',
    '"VNO - Vilnius Airport"',
    '"AES - Ålesund Airport"',
    '"BGO - Bergen Airport"',
    '"BOO - Bodø Airport"',
    '"HAU - Haugesund Airport"',
    '"KRS - Kristiansand Airport, Kjevik"',
    '"KSU - Kristiansund Airport, Kvernberget"',
    '"OSL - Oslo Airport, Gardermoen"',
    '"TRF - Sandefjord Airport, Torp"',
    '"SVG - Stavanger Airport"',
    '"TOS - Tromsø Airport"',
    '"TRD - Trondheim Airport"',
    '"GOT - Göteborg Landvetter Airport"',
    '"LLA - Luleå Airport"',
    '"MMX - Malmö Airport"',
    '"NRK - Norrköping Airport"',
    '"OSD - Åre Östersund Airport"',
    '"ARN - Stockholm Arlanda Airport"',
    '"BMA - Stockholm Bromma Airport"',
    '"NYO - Stockholm Skavsta Airport"',
    '"VST - Stockholm Västerås Airport"',
    '"SDL - Sundsvall–Timrå Airport"',
    '"UME - Umeå Airport"',
    '"VXO - Växjö Airport"',
    '"VBY - Visby Airport"',
    '"PPG - Pago Pago International Airport"',
    '"ADL - Adelaide Airport"',
    '"BNE - Brisbane Airport"',
    '"BME - Broome International Airport"',
    '"CNS - Cairns Airport"',
    '"CBR - Canberra Airport"',
    '"DRW - Darwin International Airport"',
    '"AVV - Avalon Airport"',
    '"OOL - Gold Coast Airport"',
    '"HBA - Hobart Airport"',
    '"MEL - Melbourne Airport"',
    '"NTL - Newcastle Airport[42]"',
    '"PER - Perth Airport"',
    '"PHE - Port Hedland International Airport"',
    '"MCY - Sunshine Coast Airport[43]"',
    '"SYD - Sydney Airport"',
    '"TSV - Townsville Airport"',
    '"XCH - Christmas Island Airport"',
    '"CCK - Cocos (Keeling) Islands Airport"',
    '"RAR - Rarotonga Airport"',
    '"IPC - Mataveri International Airport"',
    '"NAN - Nadi International Airport"',
    '"SUV - Nausori International Airport"',
    '"PPT - Faaa International Airport"',
    '"GUM - Antonio B. Won Pat International Airport"',
    '"CXI - Cassidy International Airport"',
    '"TRW - Bonriki International Airport"',
    '"KWA - Bucholz Army Airfield"',
    '"MAJ - Marshall Islands International Airport"',
    '"TKK - Chuuk International Airport"',
    '"KSA - Kosrae International Airport"',
    '"PNI - Pohnpei International Airport"',
    '"YAP - Yap International Airport"',
    '"INU - Nauru International Airport"',
    '"NOU - La Tontouta International Airport"',
    '"AKL - Auckland Airport"',
    '"CHC - Christchurch Airport"',
    '"DUD - Dunedin Airport"',
    '"ZQN - Queenstown Airport"',
    '"WLG - Wellington Airport"',
    '"NLK - Norfolk Island Airport"',
    '"ROP - Rota International Airport"',
    '"SPN - Saipan International Airport"',
    '"TIQ - Tinian International Airport"',
    '"IUE - Niue International Airport"',
    '"ROR - Roman Tmetuchl International Airport"',
    '"POM - Jacksons International Airport"',
    '"HGU - Mount Hagen Airport"',
    '"APW - Faleolo International Airport"',
    '"HIR - Honiara International Airport"',
    '"TBU - Fuaʻamotu International Airport"',
    '"VAV - Vavaʻu International Airport"',
    '"FUN - Funafuti International Airport"',
    '"SON - Santo-Pekoa International Airport"',
    '"VLI - Bauerfield International Airport"',
    '"FUT - Pointe Vele Airport"',
    '"WLS - Hihifo Airport"',];
    let content = '';
    data.map(el => {
        content += `<option value=${el}>`;
    });
    $('#datalistOptions').append(content);
}

function initializeFormOneRoundAndPassengersNumber() {
    $('.oneOrRound1').hide();
    $('.oneOrRound').click( function(e) {
        e.preventDefault();
        let selected = $(this).attr('aria-controls');
        if (selected.includes('one')) {
            $('.oneOrRound1').show();
            $('.oneOrRound2').hide();
        } else {
            $('.oneOrRound1').hide();
            $('.oneOrRound2').show();
        }
    });
    
    $('.passengers').change(function(e) {
        let content = '';
        e.preventDefault();
        content = parseInt($('#adultNum').val().trim()) + parseInt($('#childNum').val().trim()) + parseInt($('#infanNumt').val().trim());
        $('.passengersNum').html('- ' + content);
    });
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isPhone(phone) {
  var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  return regex.test(phone);
}


function initializeEnquireNow() {
     $('.enquire-now').click( function(e) {
        e.preventDefault();
        let email = $('#email').val().trim();
        let phone = $('#phone').val().trim();
        let depFrom = $('#depFrom').val().trim();
        let arrTo = $('#arrTo').val().trim();

        let selectedOne = $('.oneOrRound1').is(":visible");
        let chose = '';
        let depArrDate = '';
        if (selectedOne) {
            chose = 'One Way';
            depArrDate = $('#depDate1').val().trim();
        } else {
            chose = 'Round Trip';
            depArrDate = $('#depDate2').val().trim() + ' - ' + $('#arrDate2').val().trim();
        }

        let adultNum = $('#adultNum').val().trim();
        let childNum = $('#childNum').val().trim();
        let infantNum = $('#infanNumt').val().trim();
        let total = parseInt($('#adultNum').val().trim()) + parseInt($('#childNum').val().trim()) + parseInt($('#infanNumt').val().trim());

        let classMode = $('#class_mode').prop('checked');
        let stopMode = $('#stop_mode').prop('checked');
        let classType = 'Economy'; 
        if (classMode) {
            classType = 'Premium';
        }
        let stopType = 'Stop';
        if (stopMode) {
            stopType = 'Non Stop';
        }

        if ((isEmail(email) || isPhone(phone)) && depFrom && arrTo && 
            ((selectedOne && depArrDate.length > 10) || (!selectedOne && depArrDate.length > 20)) &&
            total > 0 && classType && stopType) {
            swal(
                "Are you sure?",
                "Want to receive tickets prices within filled dates?",
                 "warning", 
                {
                    cancel: true,
                    buttons: {
                        cancel: true,
                        ok: {
                            text: 'Ok'
                        }
                    }
                }
            ).then((result) => {
                if (result === 'ok') {
                    sendMail(email, phone, depFrom, arrTo, depArrDate, adultNum, childNum, infantNum, stopType, classType, chose);
                    swal({
                        title: "Please wait...",
                        text: "while sending your request to our customer service",
                        icon: "warning",
                        closeOnEsc: false,
                        closeOnClickOutside: false,
                        buttons: false,
                    });
                }
            });
        } else {
            swal(
                "Form not complete",
                "Please fill all the fields to proceed",
                 "warning", 
                {
                    button: "Ok"
                }
            );
        }
    });
}

function initializeContactUsEvent() {
    $('.contact-us').click( function(e) {
        e.preventDefault();
        window.location.href = '#';
    });
}

function setRecomended() {
    let data = [
        {a: 'Best Deal 2', b: 'The Montcalm At Brewery London City 2', c: 'Westminster Borough, London 2', d: '4.8', e: 'Exceptional 2', f: '3,014 reviews', g: 'Starting from US$72', h: 'assets/images/recommended/offers02.png'},
        {a: 'Best Deal 3', b: 'The Montcalm At Brewery London City 3', c: 'Westminster Borough, London 3', d: '4.7', e: 'Exceptional 3', f: '3,015 reviews', g: 'Starting from US$73', h: 'assets/images/recommended/offers03.png'},
        {a: 'Best Deal 4', b: 'The Montcalm At Brewery London City 4', c: 'Westminster Borough, London 4', d: '4.6', e: 'Exceptional 4', f: '3,016 reviews', g: 'Starting from US$74', h: 'assets/images/recommended/offers04.png'},
        {a: 'Best Deal 5', b: 'The Montcalm At Brewery London City 5', c: 'Westminster Borough, London 5', d: '4.5', e: 'Exceptional 5', f: '3,017 reviews', g: 'Starting from US$75', h: 'assets/images/recommended/offers01.png'}
    ];
    let content = '';
    data.map(el => {
        content += `<div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div class="card-wrap">
                <div class="con-img-wrap m-auto">
                    <img src=${el.h} class="img-fluid mx-auto d-block"
                        alt="product picture">
                    <div class="offer-tag  bg-info">${el.a}</div>
                    <span class="wishlist-tag"><i class="bi bi-heart"></i></span>
                </div>
                <div class="con-wrap mt-4">
                    <h2 class="fs-6 mt-4 fw-bold text-truncate">${el.b}</h2>
                    <p class="mb-2 theme-text-accent-two small">${el.c}</p>
                    <div class="d-flex bottom mb-2">
                        <div class="rating-cover">
                            <span class="p-1 small rounded-1 bg-danger theme-text-white">${el.d}</span>
                            <span class="me-2 small theme-text-accent-one">${el.e}</span>
                            <span class="small">${el.f}</span>
                        </div>
                    </div>
                    <p class="mb-0 theme-text-accent-one">${el.g}</p>
                </div>
            </div>
        </div>`;
    });

    $('.recomended-section').append(content);
}

function setOffers() {
    let data = [{a: 'Things to do on trip', b: 'Learn More', c: 'product01'}, {a: 'Enjoy Summer Deals', b: 'View Deal', c: 'product02'}];
    let content = '';
    data.map(el => {
        content += `
        <div class="col-12 col-md-6 mb-3 mb-md-0 overflow-hidden hoverShine">
            <div class="box ${el.c}">
                <div class="content">
                    <p class="fs-1 theme-heading theme-text-white mb-4">${el.a}</p>
                    <div class="custom-button">
                        <a href="javascript:void(0)" class="btn btn-shop small">
                            ${el.b}
                            <i class="bi bi-arrow-up-right fs-6 ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
    });
    $('.offers-section').append(content);
}

function setDestinations() {
    let data = [
        {a: 'assets/images/destinations/destination01.jpg', b: 'Hawai', c: '12,683 Hotels'},
        {a: 'assets/images/destinations/destination02.jpg', b: 'Turkey', c: 'product02'},
        {a: 'assets/images/destinations/destination03.jpg', b: 'Australia', c: '12,683 Hotels'},
        {a: 'assets/images/destinations/destination04.jpg', b: 'Rome', c: '12,683 Hotels'},
        {a: 'assets/images/destinations/destination05.jpg', b: 'London', c: '12,683 Hotels'},
        {a: 'assets/images/destinations/destination06.jpg', b: 'Zealand', c: '12,683 Hotels'},
        {a: 'assets/images/destinations/destination07.jpg', b: 'Paris', c: '12,683 Hotels'},
    ];
    let content = '';
    data.map(el => {
        content += `<div class="col-12 col-lg-3">
        <div class="theme-bg-white mb-5">
            <div class="row g-0 align-items-center">
                <div class="col-4 col-xxl-2 overflow-hidden rounded-circle">
                    <div class="overflow-hidden">
                        <figure class="mb-0 img-effect">
                            <img src=${el.a} class="img-fluid" alt="flight-destination" title="flight-destination">
                        </figure>
                    </div>
                </div>
                <div class="col-8 col-xxl-10">
                    <div
                        class="mt-2 mt-xxl-0 ps-3 d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-column">
                            <span class="d-flex fs-6">${el.b}</span>
                            <span class="d-flex small fw-normal theme-text-accent-one">${el.c}</span>
                        </div>
                        <div class="d-flex">
                            <a href="#" class="link-btn"><span><i class="bi bi-arrow-up-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    });
    $('.destination-section').append(content);
    
}

function setRoutes() {
    let data = [
        {a: 'assets/images/icons/1.png', b: '14:00', c: '4h 05m- Nonstop', d: 'LHR', e: 'assets/images/icons/2.png', f: '15:00', g: 'ABD', h: '2h 00m- Nonstop', i: '17:00', j: 'AEH', k: 'US$934', l: '16 deals', m: 'View Deal'}, 
        {a: 'assets/images/icons/3.png', b: '14:00', c: '4h 05m- Nonstop', d: 'LHR', e: 'assets/images/icons/4.png', f: '15:00', g: 'ABD', h: '2h 00m- Nonstop', i: '17:00', j: 'AEH', k: 'US$934', l: '16 deals', m: 'View Deal'}, 
        {a: 'assets/images/icons/5.png', b: '14:00', c: '4h 05m- Nonstop', d: 'LHR', e: 'assets/images/icons/1.png', f: '15:00', g: 'ABD', h: '2h 00m- Nonstop', i: '17:00', j: 'AEH', k: 'US$934', l: '16 deals', m: 'View Deal'}, 
        {a: 'assets/images/icons/2.png', b: '14:00', c: '4h 05m- Nonstop', d: 'LHR', e: 'assets/images/icons/3.png', f: '15:00', g: 'ABD', h: '2h 00m- Nonstop', i: '17:00', j: 'AEH', k: 'US$934', l: '16 deals', m: 'View Deal'}, 
    ];
    let content = '';
    data.map(el => {
        content += `<div class="col-12 mb-3">
        <div class="p-3 theme-border-radius border">
            <div class="row justify-content-between align-items-center">
                <div class="col-xl-4 col-lg-6">
                    <div class="row align-items-center">
                        <div class="col-sm-auto">
                            <img class="size-40" src=${el.a} alt="image">
                        </div>
                        <div class="col">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <div class="fs-6">${el.b}</div>
                                    <div class="small theme-text-accent-one">DEL</div>
                                </div>
                                <div class="col text-center">
                                    <div class="flightLine">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div class="small theme-text-accent-two">${el.c}</div>
                                </div>
                                <div class="col-auto">
                                    <div class="fs-6">22:00</div>
                                    <div class="small theme-text-accent-one">${el.d}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 my-5 my-lg-0">
                    <div class="row align-items-center">
                        <div class="col-sm-auto">
                            <img class="size-40" src=${el.e} alt="image">
                        </div>
                        <div class="col">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <div class="fs-6">${el.f}</div>
                                    <div class="small theme-text-accent-one">${el.g}</div>
                                </div>
                                <div class="col text-center">
                                    <div class="flightLine">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div class="small theme-text-accent-two">${el.h}</div>
                                </div>
                                <div class="col-auto">
                                    <div class="fs-6">${el.i}</div>
                                    <div class="small theme-text-accent-one">${el.j}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="d-flex justify-content-between">
                        <div class="me-4">
                            <div class="fs-6">${el.k}</div>
                            <div class="small theme-text-accent-one">${el.l}</div>
                        </div>
                        <a href="#" class="theme-btn-outline p-2">
                            ${el.m} <i class="bi bi-arrow-up-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    });
    $('.routes-section').append(content);
}

function setTestimonials() {
    let data = [
        {a: 'Hotel Equatorial Jwelqc', b: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore sunt explicabo."`, c: 'assets/images/customer/avatar01.png', d: 'Client Johna', e: 'Expert Guide'},
        {a: 'Holiday Places ptx', b: `"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."`, c: 'assets/images/customer/avatar02.png', d: 'Courtney Henry', e: 'Water Coolers'},
        {a: 'Flight Wdaatorial Melaka', b: `"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."`, c: 'assets/images/customer/avatar03.png', d: 'Mustafa Ahamad', e: 'Travel World'}
    ];
    let content = '';
    data.map(el => {
        content += `<div class="col-12 col-lg-4 position-relative">
        <div class="client-con p-5 mt-5 mt-lg-0 theme-box-shadow">
            <h4 class="mb-3 fs-6 theme-text-primary">${el.a}</h4>
            <p class="mb-0 theme-text-accent-two lh-lg small">${el.b}</p>
            <div class="d-flex flex-column justify-content-center mt-3 pt-3 border-top">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <figure class="mb-0 avatar">
                            <img src=${el.c} class="img-fluid"
                                alt="client review">
                        </figure>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <span class="mt-2 theme-text-accent-one">${el.d}</span>
                        <p class="mb-0 theme-text-accent-two small">${el.e}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    });
    $('.testimonials-section').append(content);
    
}

function setDate() {
    document.getElementById('copyright-year').innerHTML = `${new Date().getFullYear()} FairoCheap All rights reserved.`;
}

function scrollButton() {
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
            ScrollTop.removeClass("active");
        } else {
            ScrollTop.addClass("active");
        }
    });
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
}

function sendMail(email, phone, depFrom, arrTo, depArrDate, adultNum, childNum, infantNum, stopType, classType, oneWayRound) {
    var data = {
        service_id: 'service_anfkdec',
        template_id: 'template_px4i2lf',
        user_id: 'm9YvzMj0HDLG1qHK_',
        template_params: {
            email,
            phone,
            depFrom,
            arrTo,
            depArrDate,
            adultNum,
            childNum,
            infantNum,
            stopType,
            classType,
            oneWayRound
        }
    };
    console.log(data);

    /*$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        swal(
            "Thanks - Request sent",
            "Our customer service will reply to you as soon as possible",
             "success", 
            {
                button: "Ok"
            }
        ).then((result) => {
            let elements = document.getElementsByTagName("input");
            for (let ii=0; ii < elements.length; ii++) {
              if (elements[ii].type == "text") {
                elements[ii].value = "";
              }
            }
        });
    }).fail(function(error) {
        swal(
            "Oops...",
            "There was a problem with our services. Retry later.",
             "error", 
            {
                button: "Close"
            }
        );
    });*/
}

function defaultFunc() {
    let data = [{a: 'Things to do on trip', b: 'Learn More', c: 'product01'}, {a: 'Enjoy Summer Deals', b: 'View Deal', c: 'product02'}];
    let content = '';
    data.map(el => {
        content += `
        <div class="col-12 col-md-6 mb-3 mb-md-0 overflow-hidden hoverShine">
        </div>`;
    });
    $('.offers-section').append(content);
}