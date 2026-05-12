/* ══════════════════════════════════════════════════════
   ASEAN LITERATURE — Cultural Heritage Portal
   main.js  (no cursor effect)
   ══════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   COUNTRY DATA
   ══════════════════════════════════════════════ */
const countries = [
  {
    id: 'cambodia', name: 'Cambodia', tagline: 'The Land of the Khmer',
    flag: 'https://flagcdn.com/w160/kh.png',
    photo: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=70',
    funFacts: [
      { icon: '🏛️', text: '<strong>Angkor Wat</strong> is the world\'s largest religious monument — 402 acres built in the 12th century requiring an estimated 300,000 workers and 6,000 elephants.' },
      { icon: '💀', text: '<strong>90% of Cambodia\'s artists</strong> perished during the Khmer Rouge genocide (1975–79). The regime specifically targeted intellectuals, artists, and anyone wearing glasses.' },
      { icon: '🐍', text: '<strong>Cambodia\'s founding myth</strong> involves a prince marrying a Naga princess — the Naga king drank back the ocean to create the land of Cambodia as a wedding gift.' },
      { icon: '🎭', text: '<strong>Apsara dance</strong> was revived from near-extinction — only 30 master dancers survived the Khmer Rouge. Each hand gesture (mudra) encodes specific narrative meaning.' }
    ],
    society: {
      text: 'Cambodian society bears the profound scars of the Khmer Rouge genocide (1975–1979), which killed an estimated 2 million people and systematically destroyed Cambodia\'s intellectual and artistic class. Buddhist concepts of karma and merit guide social behaviour.',
      image: 'https://images.unsplash.com/photo-1567538993938-9a17e29b9a0d?w=600&q=60',
      bullets: ['Khmer Rouge genocide 1975–79 — near-annihilation of Cambodian culture', 'Buddhist karma and dharma as core social framework', 'Strong family-based economy in rural Cambodia', 'Respect for elders (bong/bong srei) deeply embedded in daily life']
    },
    tradition: {
      text: 'Classical Cambodian arts rank among Southeast Asia\'s greatest treasures — the Apsara dance, the pin peat orchestra, and the large-scale Sbek Thom shadow puppet theatre.',
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=60',
      bullets: ['Apsara dance — UNESCO heritage, revived after Khmer Rouge', 'Angkor Wat — world\'s largest religious structure (12th century)', 'Sbek Thom — monumental shadow puppetry performed at temple festivals', 'Khmer classical ballet — intricate hand gestures encoding narrative meaning']
    },
    religion: {
      text: 'Theravada Buddhism is the state religion, practised by 95% of Cambodians. Angkor Wat was originally built as a Hindu temple dedicated to Vishnu before its gradual conversion to Buddhism.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=60',
      bullets: ['Theravada Buddhism — 95% of the population', 'Ancient Hindu heritage visibly preserved at the Angkor complex', 'Neak ta — protective territorial ancestor spirits', 'Monks played a crucial role in post-genocide healing and education']
    },
    politics: {
      text: 'Cambodia\'s modern history is dominated by the Khmer Rouge and decades of single-party rule. The Paris Peace Accords (1991) and UNTAC administration led to multiparty elections, but democracy remains fragile.',
      image: 'https://images.unsplash.com/photo-1561065465-0c84ef68f5d4?w=600&q=60',
      bullets: ['Khmer Rouge "Year Zero" — deliberate destruction of Cambodian civilization', 'UNTAC 1992–93 — UN transitional authority and first multiparty elections', 'ECCC — Extraordinary Chambers prosecuting Khmer Rouge leadership', 'Hun Sen — prime minister 1985–2023, one of the world\'s longest-serving leaders']
    },
    literary: {
      text: 'Classical Khmer literature includes the Reamker (Khmer Ramayana), court poetry, and Buddhist moral tales. An estimated 90% of Cambodia\'s artists perished in the genocide.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=60',
      folktale: {
        title: 'The Legend of Preah Thong and Neang Neak',
        text: 'Long ago, a prince named Preah Thong was shipwrecked on an island in the sea, where he encountered a beautiful Naga princess — daughter of the serpent king of the underworld. They fell deeply in love and were wed. The Naga king, moved by his daughter\'s happiness, blessed their union: he drank back the ocean\'s waters to reveal the land beneath, creating the kingdom of Cambodia from the sea floor itself. Preah Thong became its first king, and Neang Neak its first queen.',
        moral: 'Moral: Cambodia\'s very identity emerges from the union of heaven and earth, human and divine. The nation\'s foundation is love — and the transformation of chaos into civilization.'
      }
    },
    thennow: {
      then: 'The Khmer Empire (9th–15th century) produced extraordinary literature, art, and architecture. Classical court literature celebrated divine kingship and the Hindu-Buddhist cosmos.',
      now: 'Cambodia\'s literary revival is slow but genuine. A generation of young Khmer writers grapples with the genocide\'s legacy — many writing in English or French, having grown up in the diaspora.'
    }
  },

  {
    id: 'laos', name: 'Laos', tagline: 'Land of a Million Elephants',
    flag: 'https://flagcdn.com/w160/la.png',
    photo: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=70',
    funFacts: [
      { icon: '💣', text: '<strong>The most bombed country per capita</strong> in history — over 2 million tons of bombs dropped during the Vietnam War era. Up to 30% failed to detonate and still kill people today.' },
      { icon: '🎵', text: '<strong>The Khene</strong>, a bamboo mouth organ, produces sound by both inhaling and exhaling — making it possible to play continuous notes without pausing to breathe.' },
      { icon: '🌺', text: '<strong>The Baci ceremony</strong> involves tying 32 white strings around a person\'s wrists — one for each of the 32 khuan (spirits) of the body — to keep them anchored during life transitions.' },
      { icon: '📜', text: '<strong>Lao Sinxay</strong>, the national epic, has over 25,000 stanzas and is entirely original — not derived from Indian epics — one of ASEAN\'s most independent literary creations.' }
    ],
    society: {
      text: 'Laos is a landlocked Buddhist nation of great natural beauty. Society is organized around the monastery, the village, and the extended family — a hierarchical social order valuing communal harmony above individual ambition.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=60',
      bullets: ['Boun (merit festivals) — organize the social and agricultural calendar', 'Highland minorities: Hmong, Akha, Khmu maintain distinct traditions', 'Buddhist monastery as the center of community education', 'Baw pen nyang ("no worries") — a defining cultural philosophy of equanimity']
    },
    tradition: {
      text: 'Lao cultural traditions are closely related to those of northern Thailand — both peoples share Tai ancestry and Theravada Buddhist faith. The golden stupa Pha That Luang in Vientiane is the supreme national symbol.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=60',
      bullets: ['Khene — bamboo mouth organ, UNESCO intangible heritage', 'Lam Luang — classical sung narrative theatre tradition', 'Boun Pi Mai — Lao New Year (April), celebrated with water and flower rituals', 'Luang Prabang — UNESCO world heritage city of temples and French colonial streetscapes']
    },
    religion: {
      text: 'Nearly 65% of the Lao population practises Theravada Buddhism. Alongside Buddhism, phi (spirit) worship remains profoundly embedded in daily life.',
      image: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?w=600&q=60',
      bullets: ['Theravada Buddhism — state religion under the Lao PDR', 'Phi (spirit) worship practised alongside and beneath Buddhist ritual', 'Baci ceremony — calling back the 32 khouane of the body at life\'s milestones', 'Tak bat (almsgiving) — monks receive morning food offerings from laypeople daily']
    },
    politics: {
      text: 'Laos was a French protectorate until 1953, then endured devastating bombing during the Vietnam War. The Pathet Lao came to power in 1975, establishing the Lao PDR — one of the world\'s remaining one-party communist states.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=60',
      bullets: ['Lao PDR — one of the world\'s few remaining communist states', 'Secret War and UXO — unexploded ordnance from US bombing still kills today', 'French colonial legacy endures in architecture, cuisine, and legal tradition', 'Careful economic liberalization since the 1990s — tourism now a major industry']
    },
    literary: {
      text: 'Lao classical literature includes the Phra Lak Phra Lam (Lao Ramayana), the Sinxay epic, and the vast Nithan oral tale tradition. The Lao script, derived from ancient Khmer, facilitated a rich Buddhist manuscript culture.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=60',
      folktale: {
        title: 'The Rice Spirit and the Grateful Farmer',
        text: 'In the days before the first harvest, the rice spirit Phi Khao had not yet descended to bless the paddy fields. A farmer named Oun prayed for three days and three nights, offering incense, sticky rice, and garlands of flowers. On the third night, a luminous figure appeared in the mist — the spirit of the grain, dressed in white, surrounded by golden light. She told Oun: "You have honored me with patience and a pure heart. Your village\'s rice will grow tall and sweet."',
        moral: 'Moral: Patience, sincerity, and gratitude are rewarded by nature\'s abundance. The relationship between humans and the living land is sacred — maintained through ritual, prayer, and humility.'
      }
    },
    thennow: {
      then: 'Classical Laos produced Buddhist manuscript literature inscribed on palm leaves, housed in monastery libraries. The Phra Lak Phra Lam was recited at royal festivals in elaborate theatrical form.',
      now: 'Contemporary Laos has a small but growing generation of young writers, largely publishing online or within diaspora communities in France, Australia, and the United States.'
    }
  },

  {
    id: 'indonesia', name: 'Indonesia', tagline: 'Bhinneka Tunggal Ika — Unity in Diversity',
    flag: 'https://flagcdn.com/w160/id.png',
    photo: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=70',
    funFacts: [
      { icon: '🏝️', text: '<strong>17,000+ islands</strong>, 270 million people, 700+ distinct languages — Indonesia is the world\'s most linguistically and geographically diverse nation. Java alone has more people than Russia.' },
      { icon: '🎭', text: '<strong>Wayang kulit performances</strong> last all night from dusk to dawn. The dalang (puppeteer) must memorize thousands of verses, operate puppets, direct the orchestra, and perform multiple character voices simultaneously.' },
      { icon: '📚', text: '<strong>Pramoedya Ananta Toer</strong> dictated his Buru Quartet aloud to fellow prisoners who memorized the entire novel — because paper was forbidden on Buru Island prison.' },
      { icon: '👑', text: '<strong>The Minangkabau</strong> of West Sumatra are the world\'s largest matrilineal society (6 million people). Property and clan names pass exclusively through the mother\'s line.' }
    ],
    society: {
      text: 'Indonesian society is famously diverse — 270 million people across 17,000 islands, speaking over 700 distinct languages. Gotong royong (mutual cooperation) is the foundational social philosophy.',
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=60',
      bullets: ['Gotong royong — communal cooperation and mutual aid as national philosophy', 'Diverse ethnic groups: Javanese, Sundanese, Balinese, Batak, Dayak, and 700+ more', 'Pancasila — state philosophy of five principles including unity and social justice', 'Minangkabau of West Sumatra: the world\'s largest matrilineal society']
    },
    tradition: {
      text: 'Indonesia possesses one of the world\'s richest artistic traditions. Wayang kulit, batik textile art, Balinese gamelan, and the Kecak dance are all inscribed on UNESCO\'s Intangible Cultural Heritage list.',
      image: 'https://images.unsplash.com/photo-1464808322410-1a934aab61e5?w=600&q=60',
      bullets: ['Wayang kulit — shadow puppetry narrating Hindu epic stories across all-night performances', 'Batik — UNESCO-recognized wax-resist dyeing art with hundreds of regional patterns', 'Gamelan — bronze percussion orchestra whose music is integral to ritual life', 'Barong dance (Bali) — ritual combat between the forces of good and evil']
    },
    religion: {
      text: 'Indonesia has the world\'s largest Muslim population (~230 million), yet the state is not constitutionally Islamic. Bali maintains unique Hinduism. Java\'s Kejawen tradition blends Islam, Hinduism, Buddhism, and animism.',
      image: 'https://images.unsplash.com/photo-1566475955657-0d9f2c4f5c1e?w=600&q=60',
      bullets: ['Largest Muslim population in the world (~230 million)', 'Agama Hindu Dharma — Balinese Hinduism, distinctly Indonesian in character', 'Kejawen — Javanese syncretic spiritual tradition blending multiple faiths', 'Buddhism present in Indonesia since the Srivijaya empire (7th century CE)']
    },
    politics: {
      text: 'Indonesia\'s political history spans Hindu-Buddhist kingdoms, 350 years of Dutch colonial rule, Japanese occupation, independence in 1945, and the 1998 Reformasi democratic transition.',
      image: 'https://images.unsplash.com/photo-1561065465-0c84ef68f5d4?w=600&q=60',
      bullets: ['Independence declared August 17, 1945 — Sukarno and Hatta read the proclamation', 'Suharto\'s New Order 1966–1998 — authoritarian development era', 'Reformasi 1998 — student-led democratic revolution, fall of Suharto', 'World\'s third-largest democracy and largest Muslim-majority democracy today']
    },
    literary: {
      text: 'Indonesian literature spans Sanskrit-influenced Kawi, Malay-language Hikayat epics, colonial-era journalism, and the post-independence Angkatan 45. Pramoedya Ananta Toer was nominated four times for the Nobel Prize.',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=60',
      folktale: {
        title: 'Malin Kundang — The Cursed Son',
        text: 'Malin Kundang was a poor boy who left his widowed mother to seek fortune at sea. Through hard work, he became a wealthy merchant captain. When his ship returned home, his old mother ran to embrace him on the beach. But Malin, ashamed of her poverty before his crew and wife, denied her: "I have no mother! This woman is a stranger!" His mother wept and cursed him: "If you are truly my son — may you turn to stone!" A storm rose instantly. The ship was wrecked. And Malin Kundang was turned to stone on the beach — where the rock formation still stands at Air Manis, West Sumatra.',
        moral: 'Moral: Filial piety is the most sacred bond. To deny one\'s mother — especially out of pride — is the gravest betrayal. Wealth built on shame cannot stand.'
      }
    },
    thennow: {
      then: 'Ancient Indonesian literature existed in Sanskrit and Old Javanese (Kawi). The Nagarakretagama (1365 CE) documented the Majapahit Empire in exquisite verse. Oral traditions carried wisdom across the archipelago.',
      now: 'Contemporary Indonesian literature addresses social justice, gender equality, and post-Suharto freedom. Authors like Dee Lestari blend science fiction with Javanese mysticism. Indonesian horror cinema and webtoons reach millions globally.'
    }
  },

  {
    id: 'singapore', name: 'Singapore', tagline: 'Majulah Singapura — Onward Singapore',
    flag: 'https://flagcdn.com/w160/sg.png',
    photo: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=70',
    funFacts: [
      { icon: '🦁', text: '<strong>Singapore was named after a mythical lion</strong> — but lions never lived on the island. The founding prince likely saw a Javan rhino or tiger, which he misidentified. The name Singapura ("Lion City") stuck for 700+ years.' },
      { icon: '🗣️', text: '<strong>Singlish</strong> was officially discouraged for decades, yet spawned a vibrant literary movement. Poets now write intentionally in Singlish as an act of cultural reclamation.' },
      { icon: '🏠', text: '<strong>80% of Singaporeans</strong> live in government-built HDB public housing — deliberately integrated by racial quota to prevent ethnic enclaves, shaping literature about managed multiculturalism.' },
      { icon: '📝', text: '<strong>Singapore has four official languages</strong>: English, Mandarin, Malay, and Tamil — producing four distinct literary communities with entirely different canons within one tiny city-state.' }
    ],
    society: {
      text: 'Singapore is a city-state of extraordinary social engineering — a multiracial society (Chinese 74%, Malay 13%, Indian 9%) governed under a stable, meritocratic, and tightly managed system.',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=600&q=60',
      bullets: ['Multiracial social compact maintained through the CMIO framework', 'Kiasu culture — intense, sometimes anxious orientation toward achievement', 'HDB public housing — 80% of population, deliberately integrated by racial quota', 'Four official languages: English, Mandarin, Malay, and Tamil']
    },
    tradition: {
      text: 'Singapore\'s cultural traditions are a vivid kaleidoscope — Malay Hari Raya celebrations, Chinese New Year gatherings, Tamil Thaipusam processions, and the unique multicultural Peranakan heritage all coexist within one city.',
      image: 'https://images.unsplash.com/photo-1621685938981-b4d6dfbfe68e?w=600&q=60',
      bullets: ['Peranakan (Baba-Nyonya) — unique and celebrated Sino-Malay cultural heritage', 'Chingay Parade — multicultural street procession on a grand scale', 'Wayang (Chinese opera) performances at temples and community festivals', 'Thaipusam — Tamil Hindu procession of devotion and endurance']
    },
    religion: {
      text: 'Singapore is profoundly religiously diverse — Buddhism and Taoism practiced by the Chinese community, Islam by the Malay community, Hinduism by the Indian community, and a large Christian minority cuts across all ethnic groups.',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=60',
      bullets: ['Buddhism and Taoism — practised by the Chinese majority community', 'Christianity — 19%, cutting across ethnic lines', 'Islam — 16%, identified with the Malay community', 'Hinduism — practised by the Tamil Indian community']
    },
    politics: {
      text: 'Singapore has been governed by the People\'s Action Party without interruption since 1959. Its transformation from a trading port with no natural resources to one of the world\'s wealthiest nations is studied globally.',
      image: 'https://images.unsplash.com/photo-1595434091143-b375ebe5aca9?w=600&q=60',
      bullets: ['Lee Kuan Yew — founding father and prime minister 1959–1990', 'PAP dominance — single-party governance from 1959 to the present', 'Defamation laws and "Out of Bounds markers" shape the limits of literary freedom', 'Global hub for finance, trade, biomedical research, and regional diplomacy']
    },
    literary: {
      text: 'Singapore\'s literature exists simultaneously in four languages. Edwin Thumboo is considered the father of Singapore English poetry. The Singlish literary voice has produced writers like Alfian Sa\'at and Cyril Wong.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=60',
      folktale: {
        title: 'Sang Nila Utama and the White Lion',
        text: 'In the 13th century, a Srivijayan prince named Sang Nila Utama sailed near the island of Temasek when a great storm threatened his vessel. His advisors told him to lighten the ship — and he threw his crown into the heaving sea. The storm ceased instantly. Coming ashore, he glimpsed through the jungle\'s edge a creature unlike any he had seen: large as a horse, red-bodied, black-headed, white-breasted, moving with power and grace. His minister told him: "My lord, this is a singa — a lion." Sang Nila Utama named the island Singapura and declared it the seat of his new kingdom.',
        moral: 'Moral: Great nations are founded on vision — on seeing potential where others see only jungle. Singapore\'s very name is a testament to the power of wonder, and the courage to name possibility into being.'
      }
    },
    thennow: {
      then: 'Singapore before the 20th century was a Malay fishing village, then a British colonial trading port. Early literary voices emerged from Peranakan Chinese writers and Malay-language newspapers.',
      now: 'Contemporary Singapore literature is globally connected, multilingual, and increasingly confident. Joanne Leow, Amanda Lee Koe, and Balli Kaur Jaswal have gained significant international recognition.'
    }
  },

  {
    id: 'malaysia', name: 'Malaysia', tagline: 'Malaysia Truly Asia',
    flag: 'https://flagcdn.com/w160/my.png',
    photo: 'https://images.unsplash.com/photo-1508009603885-50cf7c9c13cf?w=800&q=70',
    funFacts: [
      { icon: '🦌', text: '<strong>Sang Kancil</strong> (the mousedeer) is Malaysia\'s most beloved folk hero — a tiny, clever animal who regularly outwits crocodiles, tigers, and elephants. Southeast Asia\'s equivalent of Brer Rabbit.' },
      { icon: '📜', text: '<strong>The Hikayat Hang Tuah</strong> contains the famous line "Takkan Melayu hilang di dunia" (The Malays shall never vanish from the earth) — still quoted in Malaysian political speeches today.' },
      { icon: '🎭', text: '<strong>Mak yong</strong>, Malaysia\'s ancient sacred dance-drama, was banned in Kelantan under Islamic law in 1990 — yet simultaneously recognized as UNESCO Intangible Heritage in 2005.' },
      { icon: '🍚', text: '<strong>Nasi lemak</strong> — coconut rice wrapped in banana leaf — appears in Malaysian literature as a symbol of home and cultural belonging, written about with intense nostalgia by diaspora authors worldwide.' }
    ],
    society: {
      text: 'Malaysian society is a complex multicultural mosaic — Malay (bumiputera), Chinese, Indian, and indigenous Orang Asli communities coexisting under a constitutional monarchy.',
      image: 'https://images.unsplash.com/photo-1565618754657-a4f8b9c36f2d?w=600&q=60',
      bullets: ['Bumiputera policy — affirmative action programs for the ethnic Malay majority', 'Muhibbah — intercommunal goodwill as a cherished if contested national value', 'Diverse festivals: Hari Raya, Chinese New Year, Deepavali — all public holidays', 'Bahasa Malaysia as the sole official and unifying national language']
    },
    tradition: {
      text: 'Malay cultural traditions centre on adat (customary law), wayang kulit shadow puppetry, mak yong sacred dance-drama, silat (a martial art with deep spiritual dimensions), and the pantun — a four-line poetic form.',
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&q=60',
      bullets: ['Pantun — four-line Malay poetic form that influenced global folk poetry traditions', 'Mak yong — UNESCO-recognized sacred dance-drama of the Kelantan court', 'Silat — Malay martial art combining combat technique with spiritual practice', 'Dikir barat — competitive call-and-response oral poetry from Kelantan']
    },
    religion: {
      text: 'Islam is the official religion of Malaysia and is legally and culturally identified with Malay ethnicity. Non-Malay citizens are formally guaranteed freedom of religion.',
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=60',
      bullets: ['Islam — official religion, constitutionally linked to Malay ethnic identity', 'Buddhism and Taoism — practised by the substantial Chinese community', 'Hinduism — the faith of the Tamil Malaysian community', 'Sufi orders historically shaped the character of Malay Islamic spiritual practice']
    },
    politics: {
      text: 'Malaysia gained independence from Britain on 31 August 1957. The defining national trauma was the May 13, 1969 racial riots, which reshaped Malaysian politics and led to ambitious affirmative action programs.',
      image: 'https://images.unsplash.com/photo-1620332372374-f108c53d2e03?w=600&q=60',
      bullets: ['Independence August 31, 1957 — "Merdeka!" declared in Kuala Lumpur', 'May 13, 1969 racial riots — the formative national trauma that reshaped governance', 'Mahathir era (1981–2003, 2018–2020) — rapid modernization and political crackdowns', 'Sedition Act and other laws continue to constrain literary and political speech']
    },
    literary: {
      text: 'The Malay literary tradition stretches from the Hikayat Hang Tuah (a 16th-century warrior epic) and the Sejarah Melayu (Malay Annals) to modern novels, poetry, and drama. Usman Awang is Malaysia\'s beloved national poet laureate.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=60',
      folktale: {
        title: 'Sang Kancil dan Buaya — The Mousedeer and the Crocodiles',
        text: 'Sang Kancil, the small but supremely clever mousedeer, needed urgently to cross a river full of hungry crocodiles. Instead of running or hiding, the bold little deer trotted right to the water\'s edge and called out: "O great crocodiles! The Raja himself has sent me on urgent business. I have been commanded to count all of you for a royal census. Please line up in a straight row from this bank all the way to the other shore!" The vain crocodiles, enormously flattered to receive royal attention, arranged themselves obediently in a long row. Sang Kancil hopped briskly across their heads and backs, counting aloud — until he safely reached the far bank. Then he turned back and laughed: "You foolish crocodiles! There is no census! I needed only to cross the river!"',
        moral: 'Moral: Wit and cleverness reliably triumph over brute strength and vanity. The humble can outwit the powerful through intelligence and the courage to act boldly on a good idea.'
      }
    },
    thennow: {
      then: 'Classical Malay literature was produced in the royal courts of Melaka and Johor. Professional storytellers performed Hikayat narratives and Syair rhymed verse for noble audiences. The Jawi script was the sole medium of all Malay literary production.',
      now: 'Contemporary Malaysian literature exists simultaneously in Malay, English, Mandarin, and Tamil. Hanna Alkaf\'s internationally published YA fiction and the vibrant spoken word scene in Kuala Lumpur represent Malaysia\'s literary present.'
    }
  }
];

/* ══════════════════════════════════════════════
   MAGAZINE CARD SETS
   ══════════════════════════════════════════════ */
const cardSets = {
  literary: [
    { id: 'oral',     cls: 'wide',   img: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&q=60', tag: 'Theme',           title: 'Oral Tradition & Epic Poetry',          text: 'From the Lao Sinxay to the Malay Hikayat, oral epics form the bedrock of ASEAN storytelling — passing wisdom across generations through rhythm, verse, and the living voice of the storyteller.' },
    { id: 'colonial', cls: '',       img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=60', tag: 'Historical Period', title: 'Colonial & Resistance Literature',       text: 'Under Dutch, British, and French rule, writers became revolutionaries. Pramoedya Ananta Toer\'s Buru Quartet stands as a monument of Southeast Asian literary resistance.' },
    { id: 'myths',    cls: 'narrow', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=60', tag: 'Genre',            title: 'Mythology & Folklore',                  text: 'Folktales involving spirits (phi, neak ta, diwatas) reveal how Southeast Asians understood the cosmos — blending animism, Hinduism, Buddhism, and Islam into vivid story.' },
    { id: 'modern',   cls: 'xwide',  img: 'https://images.unsplash.com/photo-1517770413964-df8ca61194a6?w=600&q=60', tag: 'Modern Era',       title: 'Contemporary & Diaspora Writing',       text: 'Modern ASEAN authors navigate identity, urbanization, and globalization — writing in Malay, Indonesian, Khmer, Lao, and English, reaching global audiences while rooted in local soil.' },
    { id: 'poetry',   cls: '',       img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=60', tag: 'Form',             title: 'Poetic Forms: Pantun, Kavi & More',     text: 'The Malay pantun, Javanese macapat, Khmer court verse — each tradition developed sophisticated poetic forms encoding philosophy, romance, and moral teaching within strict formal constraints.' },
    { id: 'themes',   cls: 'narrow', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=60', tag: 'Themes',           title: 'Recurring Literary Themes',             text: 'Loyalty, exile, nature\'s power, and the sacred feminine recur across ASEAN literature — binding vastly different cultures through shared human preoccupations.' }
  ],
  cultural: [
    { id: 'shadow',    cls: 'xwide',  img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=60', tag: 'Performing Arts', title: 'Shadow Theatre — Wayang & Sbek Thom', text: 'Among the oldest narrative art forms on Earth — all-night performances narrating Hindu epics through intricately cut leather puppets and flickering lamplight.' },
    { id: 'dance',     cls: 'narrow', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=60', tag: 'Dance',           title: 'Classical Dance Traditions',          text: 'Cambodian Apsara, Balinese Kecak, and Lao classical ballet share divine origin stories, temple connections, and fingertip vocabulary encoding complex narratives.' },
    { id: 'music',     cls: '',       img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=60', tag: 'Music',           title: 'Gamelan, Khene & Pin Peat',           text: 'Bronze gong orchestras, bamboo mouth organs, and pin peat court ensembles — each ASEAN musical tradition carries centuries of tuning systems, ritual protocols, and tonal philosophies.' },
    { id: 'textiles',  cls: 'wide',   img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=60', tag: 'Visual Arts',     title: 'Batik, Ikat & Silk Weaving',          text: 'Indonesia\'s UNESCO-recognized batik, Cambodia\'s silk ikat, and Malaysia\'s songket brocade — textile arts encoding cosmological maps, social rank, and regional identity in every thread.' }
  ],
  religious: [
    { id: 'buddhism', cls: 'wide',   img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=60', tag: 'Buddhism',  title: 'Theravada Buddhism — Cambodia & Laos', text: 'The most ancient surviving school of Buddhism shapes daily life in Cambodia and Laos — from morning almsgiving to the monastery as center of education and community life.' },
    { id: 'islam',    cls: '',       img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=60', tag: 'Islam',     title: 'Islam in Malaysia & Indonesia',        text: 'Indonesia has the world\'s largest Muslim population (230 million), yet is not an Islamic state. Malaysia\'s Islam is constitutionally linked to Malay ethnic identity.' },
    { id: 'hinduism', cls: 'narrow', img: 'https://images.unsplash.com/photo-1566475955657-0d9f2c4f5c1e?w=600&q=60', tag: 'Hinduism',  title: 'Hindu Heritage Across ASEAN',          text: 'Angkor Wat was built as a Hindu temple before its conversion to Buddhism. Bali\'s Agama Hindu Dharma and Java\'s Kejawen reflect Hinduism\'s deep roots across the region.' },
    { id: 'animism',  cls: 'xwide',  img: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?w=600&q=60', tag: 'Animism',   title: 'Spirit Worlds — Phi, Neak Ta & Diwata', text: 'Beneath the formal world religions, animist spirit beliefs persist across all five nations. Lao phi, Cambodian neak ta, and spirits inhabit rivers, forests, rice fields, and household shrines.' }
  ],
  social: [
    { id: 'family',    cls: '',       img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=60', tag: 'Family Structure', title: 'Extended Family & Kinship Networks', text: 'The extended family is the primary social unit across all five nations. Indonesian gotong royong, Malay muhibbah, and Cambodian clan loyalty emphasize the collective over the individual.' },
    { id: 'rites',     cls: 'wide',   img: 'https://images.unsplash.com/photo-1531107369768-2e6b66e45b53?w=600&q=60', tag: 'Rites of Passage', title: 'Marriage, Birth & Death Traditions', text: 'Marriage is a communal, spiritual, and economic event far larger than two individuals. Elaborate ceremonies and days-long celebrations reflect the social weight these transitions carry.' },
    { id: 'hierarchy', cls: 'narrow', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=60', tag: 'Social Structure', title: 'Hierarchy, Status & Deference',      text: 'Social hierarchy is expressed through language (Javanese speech levels, Malay honorifics), seating, gift-giving protocols, and the treatment of royalty in literature.' },
    { id: 'gender',    cls: 'xwide',  img: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=60', tag: 'Gender & Society', title: 'Gender Roles in Literature & Life',  text: 'From fierce Malay warrior epics to the matrilineal Minangkabau and Singapore\'s contemporary women writers — literary archetypes reflect and increasingly challenge gender roles.' }
  ]
};

/* ══════════════════════════════════════════════
   FUN FACT DATA (cards on topic pages)
   ══════════════════════════════════════════════ */
const factData = {
  oral:      { eyebrow: 'Literary Analysis',   title: 'Oral Tradition & Epic Poetry',      facts: [{ icon: '🎙️', text: '<strong>The Hikayat Hang Tuah</strong> was performed by penglipur lara — "soothers of sorrow" — who could recite from memory for days without rest.' }, { icon: '📯', text: '<strong>The Lao Sinxay</strong> epic has over 25,000 stanzas and is entirely original — not derived from Indian or Chinese epics.' }, { icon: '🌙', text: '<strong>Cambodian Lpœk narrative poems</strong> were recited during moonlit nights by farmers to ease the tedium of manual work.' }, { icon: '🏯', text: '<strong>The Malay Hikayat tradition</strong> was originally performed only in royal courts — the stories were considered so powerful that commoners hearing them was thought to be spiritually dangerous.' }] },
  colonial:  { eyebrow: 'Historical Period',    title: 'Colonial & Resistance Literature',  facts: [{ icon: '✍️', text: '<strong>Pramoedya Ananta Toer</strong> dictated his Buru Quartet aloud to fellow prisoners who memorized the entire text — paper was forbidden on Buru Island.' }, { icon: '🗞️', text: '<strong>The Malay press of the early 1900s</strong> used newspaper poetry and editorials to organize anti-colonial sentiment.' }, { icon: '🎓', text: '<strong>The Angkatan 45</strong> (Generation of \'45) deliberately broke from Dutch-influenced literary style, using raw everyday language.' }, { icon: '⚖️', text: '<strong>Jose Rizal\'s Noli Me Tangere</strong> (1887) was so threatening that merely owning a copy was punishable by death.' }] },
  myths:     { eyebrow: 'Genre',                title: 'Mythology & Folklore',              facts: [{ icon: '🐉', text: '<strong>Naga serpents</strong> appear in the mythology of every ASEAN nation — as creators, protectors, and ancestors.' }, { icon: '👻', text: '<strong>Phi spirits</strong> (Laos) number in the hundreds — there are specific spirits for rivers, rice fields, doorways, crossroads, and individual trees.' }, { icon: '🌾', text: '<strong>Rice soul (semangat padi)</strong> beliefs mean that rice must be harvested with small knives hidden in the palm — so the rice soul doesn\'t "see" the blade.' }, { icon: '🎪', text: '<strong>Shadow puppet stories</strong> in Indonesia and Malaysia can only end at dawn — ending before sunrise means the spirits invoked will not return to their world.' }] },
  modern:    { eyebrow: 'Modern Era',            title: 'Contemporary & Diaspora Writing',   facts: [{ icon: '🌍', text: '<strong>Diaspora literature</strong> has become the dominant voice of contemporary Cambodian writing — most published Cambodian authors live in France, the US, or Australia.' }, { icon: '📱', text: '<strong>Indonesia\'s Wattpad community</strong> has over 90 million readers — making Indonesian digital fiction one of the largest literary communities on Earth.' }, { icon: '🎬', text: '<strong>Rithy Panh</strong>, Cambodia\'s most celebrated filmmaker, spent 30 years documenting the Khmer Rouge genocide. His documentary "The Missing Picture" won at Cannes.' }, { icon: '🏅', text: '<strong>Hanna Alkaf</strong> (Malaysia) wrote "The Weight of Our Sky," becoming the first Malaysian novel shortlisted for the Carnegie Medal.' }] },
  poetry:    { eyebrow: 'Literary Form',         title: 'Poetic Forms: Pantun & More',       facts: [{ icon: '🎭', text: '<strong>The pantun</strong> (Malay four-line poem) influenced global folk poetry — the European "pantoum" form derives directly from it.' }, { icon: '⚖️', text: '<strong>Javanese macapat poetry</strong> uses at least 11 distinct meters, each associated with specific life stages.' }, { icon: '🏛️', text: '<strong>Khmer court poetry</strong> inscribed on Angkor temple walls uses a Sanskrit-derived meter system so complex that modern scholars took decades to decode it.' }, { icon: '🎵', text: '<strong>Lao khap</strong> (improvised sung poetry) is performed as a competitive duel between two singers — trading verses in real time, judged by wit, speed, and wordplay.' }] },
  themes:    { eyebrow: 'Themes',                title: 'Recurring Literary Themes',         facts: [{ icon: '⚓', text: '<strong>Exile and return</strong> is the most universal theme in ASEAN literature — from the Ramayana\'s forest exile to modern diaspora novels.' }, { icon: '🌊', text: '<strong>The sea</strong> in ASEAN literature is almost always both threat and gateway — the source of trade, conquest, and cultural mixing.' }, { icon: '👸', text: '<strong>The sacred feminine</strong> appears across all ASEAN mythologies — rice goddesses, serpent queens, and celestial nymphs.' }, { icon: '🤝', text: '<strong>Loyalty to ruler versus loyalty to ethics</strong> is the great moral tension of classical ASEAN literature.' }] },
  shadow:    { eyebrow: 'Performing Arts',       title: 'Shadow Theatre',                    facts: [{ icon: '🎭', text: '<strong>A wayang kulit dalang</strong> must master 200+ puppet characters, multiple vocal styles, orchestral cues, improvised comedy, and Sanskrit invocations.' }, { icon: '☀️', text: '<strong>Wayang performances end at dawn</strong> — ending before sunrise is considered spiritually catastrophic.' }, { icon: '💀', text: '<strong>Sbek Thom puppets</strong> (Cambodia) are up to 3 meters tall and require two performers each. Only 20 such puppets survived the Khmer Rouge.' }, { icon: '📿', text: '<strong>The puppets are considered sacred</strong> in Java — they are never stepped over, must be stored head higher than feet, and receive offerings of incense before performances.' }] },
  dance:     { eyebrow: 'Dance',                 title: 'Classical Dance Traditions',        facts: [{ icon: '💃', text: '<strong>Apsara dance training</strong> begins at age 6 and takes a minimum of 10 years — the curriculum includes 4,500 distinct gestures.' }, { icon: '🔥', text: '<strong>The Kecak dance</strong> (Bali) has no instruments — the entire musical accompaniment is 200+ men chanting "cak-cak-cak" in interlocking rhythms.' }, { icon: '🌺', text: '<strong>Cambodian Apsara dance</strong> was revived by recording every remaining master dancer on film — movements were reconstructed frame-by-frame.' }, { icon: '🏯', text: '<strong>Lao classical ballet</strong> was the exclusive art of the royal court until 1975, when the communist revolution abolished the monarchy.' }] },
  music:     { eyebrow: 'Music',                 title: 'Gamelan, Khene & Pin Peat',         facts: [{ icon: '🎼', text: '<strong>Balinese and Javanese gamelan</strong> use different tuning systems — each orchestra is tuned to match its specific set, making instruments incompatible across ensembles.' }, { icon: '🎋', text: '<strong>The Lao khene</strong> produces sound through free-vibrating metal reeds in bamboo pipes — the player can produce multiple notes simultaneously.' }, { icon: '🐘', text: '<strong>Cambodian pin peat orchestras</strong> traditionally played only for royal ceremonies and religious rituals.' }, { icon: '🌀', text: '<strong>Gamelan music operates on cyclical time</strong> — pieces are organized in nested cycles of 4, 8, 16, and 32 beats, reflecting Buddhist/Hindu cosmic time.' }] },
  textiles:  { eyebrow: 'Visual Arts',           title: 'Batik, Ikat & Silk Weaving',        facts: [{ icon: '🎨', text: '<strong>Indonesian batik</strong> uses over 3,000 distinct patterns — many specific to particular cities, royal families, or ceremonies.' }, { icon: '🕷️', text: '<strong>Batik-making is meditative</strong> — master batik makers apply hot wax in patterns handed down for centuries. A single sarong can take 6 months to complete.' }, { icon: '🐛', text: '<strong>Cambodian silk ikat</strong> (hol fabric) uses a technique where thread is dyed before weaving — the design only emerges as threads are assembled on the loom.' }, { icon: '👑', text: '<strong>Malaysian songket</strong> fabric, woven with real gold and silver thread, was historically reserved exclusively for royalty.' }] },
  buddhism:  { eyebrow: 'Buddhism',              title: 'Theravada Buddhism',                facts: [{ icon: '🌅', text: '<strong>Tak bat (almsgiving)</strong> in Luang Prabang has been practiced every morning at 5am for over 600 years.' }, { icon: '📚', text: '<strong>Until the 20th century</strong>, Buddhist monasteries were the only schools in Cambodia and Laos — every boy spent at least one rainy season as a monk.' }, { icon: '🧘', text: '<strong>Theravada Buddhism</strong> teaches that merit accumulated in this life determines rebirth conditions — making generosity simultaneously spiritual and strategic.' }, { icon: '💀', text: '<strong>The Khmer Rouge specifically targeted monks</strong> — nearly all 65,000 monks in Cambodia were killed or forced to disrobe during 1975–79.' }] },
  islam:     { eyebrow: 'Islam',                 title: 'Islam in Malaysia & Indonesia',     facts: [{ icon: '🕌', text: '<strong>Indonesian Islam is famously syncretic</strong> — the Javanese practice of Kejawen blends Islamic prayer with Hindu-Buddhist ancestor veneration and animist spirit offerings.' }, { icon: '📖', text: '<strong>The Hikayat</strong> tradition was written in Jawi (Arabic-script Malay) — Islam gave Malay literature a new script, new theological themes, and new court patronage.' }, { icon: '🌙', text: '<strong>Hari Raya Aidilfitri</strong> in Malaysia and Indonesia generates the largest annual human migration in the world — millions returning to ancestral villages.' }, { icon: '⚖️', text: '<strong>In Malaysia, leaving Islam</strong> is legally impossible for Malay Muslims under state syariah law — religious identity is constitutionally entangled with ethnic identity.' }] },
  hinduism:  { eyebrow: 'Hinduism',              title: 'Hindu Heritage Across ASEAN',       facts: [{ icon: '🏛️', text: '<strong>Angkor Wat was built as a Hindu temple</strong> dedicated to Vishnu in the 12th century — the largest Hindu temple ever built.' }, { icon: '🌺', text: '<strong>Balinese Hinduism</strong> evolved in complete isolation from India for 500 years, developing unique gods, calendars, and temple architecture.' }, { icon: '🎭', text: '<strong>The Ramayana</strong> is performed across all five ASEAN nations — as shadow puppets, dance-drama, court ballet, and modern film.' }, { icon: '🐍', text: '<strong>The Naga (divine serpent)</strong> of Hindu mythology became the founding ancestor of Cambodia and the temple guardian of Laos.' }] },
  animism:   { eyebrow: 'Animism',               title: 'Spirit Worlds',                     facts: [{ icon: '🌳', text: '<strong>Every mature tree</strong> in Lao and Cambodian tradition has a resident phi (spirit) — cutting one without proper ceremony causes illness or bad luck.' }, { icon: '🌾', text: '<strong>Rice soul (semangat padi)</strong> beliefs mean that rice must be harvested with small knives hidden in the palm — so the rice soul doesn\'t "see" the blade approaching.' }, { icon: '🏠', text: '<strong>Spirit houses (San Phra Phum)</strong> stand outside nearly every home in Cambodia and Laos — miniature residences for the territorial spirit.' }, { icon: '👶', text: '<strong>The Lao Baci ceremony</strong> is performed at births, deaths, weddings, illnesses, departures, and returns — tying white threads around wrists to keep a person\'s 32 khouane anchored in the body.' }] },
  family:    { eyebrow: 'Family Structure',      title: 'Extended Family & Kinship',         facts: [{ icon: '🤝', text: '<strong>Gotong royong</strong> (Indonesia) literally means "carrying a burden together" — the entire community turns out voluntarily to build a neighbor\'s house or harvest a crop.' }, { icon: '👑', text: '<strong>The Minangkabau of West Sumatra</strong> pass land, houses, clan names, and inheritance exclusively through the female line.' }, { icon: '🙏', text: '<strong>The concept of "face" (maruah in Malay)</strong> means that family shame is communal shame — a single member\'s disgrace affects the entire extended family\'s social standing.' }, { icon: '🎊', text: '<strong>Malaysian weddings</strong> can last up to 5 days and involve the entire kampung (village) — cooking, decorating, and hosting together.' }] },
  rites:     { eyebrow: 'Rites of Passage',      title: 'Marriage, Birth & Death',           facts: [{ icon: '💍', text: '<strong>Indonesian adat marriage</strong> involves bride price (sinamot) negotiations between families that can last days and involve the exchange of hundreds of items.' }, { icon: '🔥', text: '<strong>Balinese cremation ceremonies</strong> (ngaben) are joyful public celebrations — the body is burned in an elaborate tower carried by hundreds of men running in circles.' }, { icon: '🌺', text: '<strong>Cambodian name-giving ceremonies</strong> involve a monk selecting an auspicious name based on the child\'s birth time, day, and horoscope.' }, { icon: '🎭', text: '<strong>Malaysian mak andam</strong> (bridal preparers) spend up to a week on traditional bride preparation — threading facial hair, applying henna, and teaching a ritualized "bashful" gait.' }] },
  hierarchy: { eyebrow: 'Social Structure',      title: 'Hierarchy, Status & Deference',     facts: [{ icon: '🗣️', text: '<strong>Javanese has five distinct speech registers</strong> — using the wrong register when speaking to a social superior is a serious breach.' }, { icon: '👑', text: '<strong>In classical Malay literature</strong>, the sultan carries divine authority (daulat) — opposition to royal will is cosmologically disordered.' }, { icon: '🏛️', text: '<strong>Cambodian court language</strong> had specific vocabularies for royalty that commoners never used — the king even died differently (a royal death word versus a commoner\'s).' }, { icon: '🎁', text: '<strong>Gift-giving protocols</strong> across ASEAN encode social hierarchy precisely — who gives what, how it is presented, and whether opened immediately all communicate relative social rank.' }] },
  gender:    { eyebrow: 'Gender & Society',      title: 'Gender Roles in Literature & Life', facts: [{ icon: '💪', text: '<strong>The Rani Dunung</strong> warrior queens of ancient Sumatra were documented by Arab traders — female rulers who led armies in the 8th–10th centuries CE.' }, { icon: '✍️', text: '<strong>Singapore\'s most celebrated contemporary authors</strong> are predominantly women — Amanda Lee Koe, Balli Kaur Jaswal, and Joanne Leow lead a new generation.' }, { icon: '🎭', text: '<strong>In classical Javanese wayang</strong>, the most refined and morally complex characters are almost always female.' }, { icon: '⚖️', text: '<strong>Malaysia\'s Musawah movement</strong> (founded 2009) uses Islamic jurisprudence to argue for gender equality within Islam — rewriting religious texts as tools of women\'s liberation.' }] }
};

/* ══════════════════════════════════════════════
   RENDER FLAGS
   ══════════════════════════════════════════════ */
function renderFlags() {
  document.getElementById('flagsGrid').innerHTML = countries.map(c => `
    <div class="flag-tile">
      <div class="flag-image-wrap" id="flag-${c.id}" draggable="true"
        ondragstart="handleDragStart(event,'${c.id}')"
        ondragover="handleDragOver(event)"
        ondragleave="handleDragLeave(event)"
        ondrop="handleDrop(event,'${c.id}')">
        <img src="${c.flag}" alt="${c.name} flag">
      </div>
      <div class="tile-name">${c.name}</div>
      <div class="tile-tagline">${c.tagline}</div>
      <div class="tile-actions">
        <button class="tile-btn tile-btn-secondary" onclick="showCountryFacts('${c.id}')">✨ Facts</button>
        <button class="tile-btn tile-btn-primary"   onclick="openCountry('${c.id}')">Explore →</button>
      </div>
    </div>`).join('');
}

/* ══════════════════════════════════════════════
   RENDER MAGAZINE CARDS
   ══════════════════════════════════════════════ */
function renderCards(setKey, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = cardSets[setKey].map(c => `
    <div class="mag-card${c.cls ? ' ' + c.cls : ''}" onclick="openFacts('${c.id}')">
      <img class="mag-card-img" src="${c.img}" alt="${c.title}" onerror="this.style.display='none'">
      <div class="mag-card-body">
        <div class="mag-card-tag">${c.tag}</div>
        <div class="mag-card-title">${c.title}</div>
        <div class="mag-card-text">${c.text}</div>
      </div>
      <span class="mag-card-cta">Fun Facts</span>
    </div>`).join('');
}

/* ══════════════════════════════════════════════
   PAGE NAVIGATION
   ══════════════════════════════════════════════ */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.remove('active'));

  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => {
    if (n.getAttribute('onclick')?.includes(`'${id}'`)) n.classList.add('active');
  });
  document.querySelectorAll('.mobile-nav-btn').forEach(b => {
    if (b.getAttribute('onclick')?.includes(`'${id}'`)) b.classList.add('active');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════════════════════════
   DRAG & DROP
   ══════════════════════════════════════════════ */
let draggedId = null;

function handleDragStart(e, id) {
  draggedId = id;
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => { document.getElementById(`flag-${id}`)?.classList.add('dragging'); }, 0);
}
function handleDragOver(e)  { e.preventDefault(); e.currentTarget.classList.add('drop-target'); }
function handleDragLeave(e) { e.currentTarget.classList.remove('drop-target'); }
function handleDrop(e, targetId) {
  e.preventDefault();
  e.currentTarget.classList.remove('drop-target');
  document.querySelectorAll('.flag-image-wrap').forEach(f => f.classList.remove('dragging', 'drop-target'));
  if (draggedId && draggedId !== targetId) showComparison(draggedId, targetId);
  draggedId = null;
}
document.addEventListener('dragend', () => {
  document.querySelectorAll('.flag-image-wrap').forEach(f => f.classList.remove('dragging', 'drop-target'));
});

/* ══════════════════════════════════════════════
   COMPARISON MODAL
   ══════════════════════════════════════════════ */
function showComparison(idA, idB) {
  const a = countries.find(c => c.id === idA);
  const b = countries.find(c => c.id === idB);
  if (!a || !b) return;

  const rows = [
    { label: 'Motto',        va: a.tagline,                                  vb: b.tagline },
    { label: 'Religion',     va: a.religion.bullets[0],                      vb: b.religion.bullets[0] },
    { label: 'Social Value', va: a.society.bullets[0],                       vb: b.society.bullets[0] },
    { label: 'Tradition',    va: a.tradition.bullets[0],                     vb: b.tradition.bullets[0] },
    { label: 'Folktale',     va: a.literary.folktale.title,                  vb: b.literary.folktale.title },
    { label: 'Politics',     va: a.politics.bullets[0],                      vb: b.politics.bullets[0] },
    { label: 'History',      va: a.thennow.then.substring(0, 120) + '…',    vb: b.thennow.then.substring(0, 120) + '…' }
  ];

  document.getElementById('compareBody').innerHTML = `
    <div class="compare-flags">
      <div>
        <img class="compare-flag-img" src="${a.flag}" alt="${a.name}">
        <div class="compare-flag-name">${a.name}</div>
      </div>
      <div class="compare-vs">VS</div>
      <div>
        <img class="compare-flag-img" src="${b.flag}" alt="${b.name}">
        <div class="compare-flag-name">${b.name}</div>
      </div>
    </div>
    <table class="compare-table">
      <thead>
        <tr><th>Category</th><th>${a.name}</th><th>${b.name}</th></tr>
      </thead>
      <tbody>
        ${rows.map(r => `<tr><td class="lbl">${r.label}</td><td>${r.va}</td><td>${r.vb}</td></tr>`).join('')}
      </tbody>
    </table>
    <div class="compare-tales">
      <div class="compare-tales-label">✦ Featured Folktales — Moral Teachings</div>
      <div class="compare-tales-grid">
        <div>
          <div class="compare-tale-title">${a.name}: ${a.literary.folktale.title}</div>
          <div class="compare-tale-moral">${a.literary.folktale.moral}</div>
        </div>
        <div>
          <div class="compare-tale-title">${b.name}: ${b.literary.folktale.title}</div>
          <div class="compare-tale-moral">${b.literary.folktale.moral}</div>
        </div>
      </div>
    </div>`;

  document.getElementById('compareModal').classList.add('open');
}

function closeCompare() { document.getElementById('compareModal').classList.remove('open'); }
document.getElementById('compareModal').addEventListener('click', function (e) { if (e.target === this) closeCompare(); });

/* ══════════════════════════════════════════════
   FUN FACTS MODAL
   ══════════════════════════════════════════════ */
let curFacts = [], curPage = 0;

function showCountryFacts(id) {
  const c = countries.find(x => x.id === id);
  if (!c) return;
  curFacts = c.funFacts;
  curPage  = 0;
  document.getElementById('factEyebrow').textContent = `Fun Facts · ${c.name}`;
  document.getElementById('factTitle').textContent   = `${c.name} — Did You Know?`;
  renderFactPage();
  document.getElementById('factModal').classList.add('open');
}

function openFacts(key) {
  const d = factData[key];
  if (!d) return;
  curFacts = d.facts;
  curPage  = 0;
  document.getElementById('factEyebrow').textContent = d.eyebrow;
  document.getElementById('factTitle').textContent   = d.title;
  renderFactPage();
  document.getElementById('factModal').classList.add('open');
}

function renderFactPage() {
  const perPage = 2;
  const total   = Math.ceil(curFacts.length / perPage);
  const slice   = curFacts.slice(curPage * perPage, (curPage + 1) * perPage);

  document.getElementById('factBody').innerHTML = slice.map(f => `
    <div class="fact-row">
      <span class="fact-row-icon">${f.icon}</span>
      <span class="fact-row-text">${f.text}</span>
    </div>`).join('');

  document.getElementById('factFoot').innerHTML = `
    <button class="fact-nav-btn" onclick="moveFact(-1)" ${curPage === 0 ? 'disabled' : ''}>← Prev</button>
    <div class="fact-pip-row">
      ${Array.from({ length: total }, (_, i) =>
        `<div class="fact-pip${i === curPage ? ' on' : ''}" onclick="goFact(${i})"></div>`
      ).join('')}
    </div>
    <button class="fact-nav-btn" onclick="moveFact(1)" ${curPage >= total - 1 ? 'disabled' : ''}>Next →</button>`;
}

function moveFact(d) { curPage += d; renderFactPage(); }
function goFact(i)   { curPage  = i; renderFactPage(); }
function closeFacts() { document.getElementById('factModal').classList.remove('open'); }
document.getElementById('factModal').addEventListener('click', function (e) { if (e.target === this) closeFacts(); });

/* ══════════════════════════════════════════════
   COUNTRY PAGE — BUILD & RENDER
   ══════════════════════════════════════════════ */
function openCountry(id) {
  const c = countries.find(x => x.id === id);
  if (!c) return;

  const bl = arr => arr.map(b => `<li>${b}</li>`).join('');

  function buildTab(key, heading, text, img, bullets, isFirst) {
    return `
      <div id="tab-${key}-${c.id}" class="c-tab-content${isFirst ? ' active' : ''}">
        <div class="c-tab-main">
          <h3>${heading}</h3>
          <p>${text}</p>
          <ul class="c-bullets">${bullets}</ul>
        </div>
        <div class="c-tab-side">
          <img class="c-tab-img" src="${img}" alt="${heading}" onerror="this.style.display='none'">
          <div class="c-side-note">${heading} · ${c.name}</div>
        </div>
      </div>`;
  }

  document.getElementById('countryContent').innerHTML = `
    <div class="c-hero">
      <div class="c-hero-img">
        <img src="${c.photo}" alt="${c.name}" onerror="this.style.display='none'">
      </div>
      <div class="c-hero-text">
        <div class="c-tagline">Southeast Asia · Cultural Heritage</div>
        <h2>${c.name}</h2>
        <div class="c-sub">${c.tagline}</div>
      </div>
    </div>

    <div class="c-tab-nav">
      <button class="c-tab-btn active"  onclick="switchTab(event,'society','${c.id}')">Society</button>
      <button class="c-tab-btn"         onclick="switchTab(event,'tradition','${c.id}')">Tradition</button>
      <button class="c-tab-btn"         onclick="switchTab(event,'religion','${c.id}')">Religion</button>
      <button class="c-tab-btn"         onclick="switchTab(event,'politics','${c.id}')">Politics</button>
      <button class="c-tab-btn"         onclick="switchTab(event,'literary','${c.id}')">Literature</button>
      <button class="c-tab-btn"         onclick="switchTab(event,'thennow','${c.id}')">Then vs Now</button>
    </div>

    ${buildTab('society',   'Society & Social Structure', c.society.text,   c.society.image,   bl(c.society.bullets),   true)}
    ${buildTab('tradition', 'Cultural Traditions',        c.tradition.text, c.tradition.image, bl(c.tradition.bullets), false)}
    ${buildTab('religion',  'Religious Influences',       c.religion.text,  c.religion.image,  bl(c.religion.bullets),  false)}
    ${buildTab('politics',  'Politics & History',         c.politics.text,  c.politics.image,  bl(c.politics.bullets),  false)}

    <div id="tab-literary-${c.id}" class="c-tab-content">
      <div class="c-tab-main">
        <h3>Literary Analysis</h3>
        <p>${c.literary.text}</p>
      </div>
      <div class="c-tab-side">
        <img class="c-tab-img" src="${c.literary.image}" alt="Literature of ${c.name}" onerror="this.style.display='none'">
        <div class="c-side-note">Literary tradition · ${c.name}</div>
      </div>
      <div class="c-folktale">
        <div class="c-folktale-label">Folktale</div>
        <div>
          <div class="c-folktale-title">${c.literary.folktale.title}</div>
          <div class="c-folktale-text">${c.literary.folktale.text}</div>
          <div class="c-folktale-moral">${c.literary.folktale.moral}</div>
        </div>
      </div>
    </div>

    <div id="tab-thennow-${c.id}" class="c-tab-content">
      <div class="c-thennow">
        <div class="c-then">
          <div class="c-era-label">Then — Traditional ${c.name}</div>
          <div class="c-era-text">${c.thennow.then}</div>
        </div>
        <div class="c-now">
          <div class="c-era-label">Now — Contemporary ${c.name}</div>
          <div class="c-era-text">${c.thennow.now}</div>
        </div>
      </div>
    </div>`;

  showPage('countryPage');
}

function switchTab(e, tab, cid) {
  document.querySelectorAll(`[id^="tab-"][id$="-${cid}"]`).forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.c-tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-${tab}-${cid}`)?.classList.add('active');
  e.currentTarget.classList.add('active');
}

/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */
renderFlags();
renderCards('literary',  'literary-cards');
renderCards('cultural',  'cultural-cards');
renderCards('religious', 'religious-cards');
renderCards('social',    'social-cards');