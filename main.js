/* ══════════════════════════════════════════════════════
   ASEAN LITERATURE — Cultural Heritage Portal
   main.js
   ══════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   COUNTRY DATA  (Cambodia · Laos · Indonesia · Singapore · Malaysia)
   ══════════════════════════════════════════════ */
const countries = [
  /* ────────────────────── CAMBODIA ────────────────────── */
  {
    id: 'cambodia',
    name: 'Cambodia',
    tagline: 'The Land of the Khmer',
    flag: 'https://flagcdn.com/w160/kh.png',
    photo: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=70',
    society: {
      text: 'Cambodian society bears the profound scars of the Khmer Rouge genocide (1975–1979), which killed an estimated 2 million people — nearly a quarter of the population — and systematically destroyed Cambodia\'s intellectual and artistic class. Recovery has been slow but steady. Buddhist concepts of karma and merit guide social behaviour. Family networks remain the primary social safety net in both urban and rural Cambodia.',
      image: 'https://images.unsplash.com/photo-1567538993938-9a17e29b9a0d?w=600&q=60',
      bullets: [
        'Khmer Rouge genocide 1975–79 — near-annihilation of Cambodian culture',
        'Buddhist karma and dharma as core social framework',
        'Strong family-based economy in rural Cambodia',
        'Respect for elders (bong/bong srei) deeply embedded in daily life'
      ]
    },
    tradition: {
      text: 'Classical Cambodian arts rank among Southeast Asia\'s greatest treasures — the Apsara dance (celestial nymph dance derived from Angkor temple carvings), the pin peat orchestra, and the large-scale Sbek Thom shadow puppet theatre. Angkor Wat — the world\'s largest religious monument — embodies the artistic ambition of the Khmer Empire. Traditional crafts include silk weaving, silverwork, and stone carving.',
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=60',
      bullets: [
        'Apsara dance — UNESCO heritage, painstakingly revived after Khmer Rouge',
        'Angkor Wat — world\'s largest religious structure (12th century)',
        'Sbek Thom — monumental shadow puppetry performed at temple festivals',
        'Khmer classical ballet — intricate hand gestures encoding narrative meaning'
      ]
    },
    religion: {
      text: 'Theravada Buddhism is the state religion, practised by 95% of Cambodians. Before Buddhism, the Khmer Empire was deeply Hindu — Angkor Wat was originally built as a Hindu temple dedicated to Vishnu in the 12th century before its gradual conversion to Buddhism. Ancestor spirits (neak ta) and animist beliefs persist alongside formal Buddhism, woven into agricultural rituals and healing ceremonies throughout rural Cambodia.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=60',
      bullets: [
        'Theravada Buddhism — 95% of the population',
        'Ancient Hindu heritage visibly preserved at the Angkor complex',
        'Neak ta — protective territorial ancestor spirits',
        'Monks played a crucial role in post-genocide healing and community education'
      ]
    },
    politics: {
      text: 'Cambodia\'s modern history is dominated by the shadow of the Khmer Rouge and decades of single-party rule under Hun Sen. The Paris Peace Accords (1991) and the UNTAC administration led to multiparty elections, but democracy remains fragile. The Extraordinary Chambers in the Courts of Cambodia (ECCC) has pursued justice for Khmer Rouge crimes. Literature and personal testimony about the genocide — by Loung Ung, Vaddey Ratner, and others — represent Cambodia\'s collective effort to process unimaginable trauma.',
      image: 'https://images.unsplash.com/photo-1561065465-0c84ef68f5d4?w=600&q=60',
      bullets: [
        'Khmer Rouge "Year Zero" — deliberate destruction of Cambodian civilization',
        'UNTAC 1992–93 — UN transitional authority and first multiparty elections',
        'ECCC — Extraordinary Chambers prosecuting Khmer Rouge leadership',
        'Hun Sen — prime minister 1985–2023, one of the world\'s longest-serving leaders'
      ]
    },
    literary: {
      text: 'Classical Khmer literature includes the Reamker (Khmer Ramayana), court poetry, and Buddhist moral tales. The Khmer Rouge deliberately targeted artists, writers, and intellectuals — an estimated 90% of Cambodia\'s artists perished in the genocide. The recovery of Cambodian literature is itself a profound subject of historical and literary importance. Survivor testimonies have become the most urgent form of contemporary Cambodian writing.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=60',
      folktale: {
        title: 'The Legend of Preah Thong and Neang Neak',
        text: 'Long ago, a prince named Preah Thong was shipwrecked on an island in the sea, where he encountered a beautiful Naga princess, Neang Neak — daughter of the serpent king of the underworld. They fell deeply in love and were wed. The Naga king, moved by his daughter\'s happiness, blessed their union with a mighty gift: he drank back the ocean\'s waters to reveal the land beneath, creating the kingdom of Cambodia from the sea floor itself. Preah Thong became its first king, and Neang Neak, the Naga princess, became its first queen. This is why the Cambodian people say they are descended from the union of human and serpent — of heaven above and the sacred waters below.',
        moral: 'Moral: Cambodia\'s very identity emerges from the union of heaven and earth, human and divine, foreign and indigenous. The nation\'s foundation is love — and the transformation of water into land, of chaos into civilization.'
      }
    },
    thennow: {
      then: 'The Khmer Empire (9th–15th century) produced extraordinary literature, art, and architecture. Classical court literature celebrated divine kingship and the Hindu-Buddhist cosmos. Temple inscriptions recorded history, scripture, and royal decrees. The oral tradition of Lpœk narrative poems survived in rural villages through centuries of warfare and upheaval.',
      now: 'Cambodia\'s literary revival is slow but genuine. A generation of young Khmer writers is grappling with the genocide\'s legacy — though many write in English or French, having grown up in the diaspora. NGOs and cultural organizations work urgently to document surviving oral traditions before the last elders pass away. Cambodian cinema — particularly the documentary films of Rithy Panh — has brought the nation\'s story to global audiences.'
    }
  },

  /* ────────────────────── LAOS ────────────────────── */
  {
    id: 'laos',
    name: 'Laos',
    tagline: 'Land of a Million Elephants',
    flag: 'https://flagcdn.com/w160/la.png',
    photo: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=70',
    society: {
      text: 'Laos is a landlocked Buddhist nation of great natural beauty and cultural quiet. The Lao Loum (lowland Lao) form the dominant ethnic group alongside the Lao Theung and the Lao Soung highland minorities. Society is organized around the monastery, the village, and the extended family — a gentle, hierarchical social order that values communal harmony above individual ambition. Boun (merit-making festivals) organize the communal life of every village through the seasons.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=60',
      bullets: [
        'Boun (merit festivals) — organize the social and agricultural calendar',
        'Highland minorities: Hmong, Akha, Khmu maintain entirely distinct traditions',
        'Buddhist monastery as the center of community education and social life',
        'Baw pen nyang ("no worries") — a defining cultural philosophy of equanimity'
      ]
    },
    tradition: {
      text: 'Lao cultural traditions are closely related to those of northern Thailand — both peoples share common Tai ancestry and Theravada Buddhist faith. The golden stupa Pha That Luang in Vientiane is the supreme national symbol. Lam Luang (classical sung theatre) and the khene bamboo mouth organ (UNESCO Intangible Heritage) are uniquely and distinctively Lao. The royal city of Luang Prabang, a UNESCO World Heritage site, preserves classical Lao architecture and monastic tradition in remarkable completeness.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=60',
      bullets: [
        'Khene — bamboo mouth organ, UNESCO intangible heritage',
        'Lam Luang — classical sung narrative theatre tradition',
        'Boun Pi Mai — Lao New Year (April), celebrated with water and flower rituals',
        'Luang Prabang — UNESCO world heritage city of temples and French colonial streetscapes'
      ]
    },
    religion: {
      text: 'Nearly 65% of the Lao population practises Theravada Buddhism. The That Luang Great Stupa in Vientiane is considered the most sacred monument in Laos, a symbol of national sovereignty and Buddhist faith. Alongside Buddhism, phi (spirit) worship remains profoundly embedded in daily life — spirits of rivers, mountains, rice fields, and households are propitiated through regular offerings. The Baci ceremony (sou khouane — calling back the 32 spirits of the body) is performed at all major life transitions from birth to death.',
      image: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?w=600&q=60',
      bullets: [
        'Theravada Buddhism — state religion under the Lao PDR',
        'Phi (spirit) worship practised alongside and beneath Buddhist ritual',
        'Baci ceremony — calling back the 32 khouane (spirits) of the body at life\'s milestones',
        'Tak bat (almsgiving) — monks receive morning food offerings from laypeople daily'
      ]
    },
    politics: {
      text: 'Laos was a French protectorate until 1953, then endured devastating bombing during the Vietnam War — the most heavily bombed country per capita in world history, with over 2 million tons of bombs dropped. The Pathet Lao came to power in 1975, establishing the Lao People\'s Democratic Republic — one of the world\'s remaining one-party communist states. Political literature is tightly controlled; traditional folk literature and Buddhist texts remain the primary surviving literary voices within the country\'s borders.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=60',
      bullets: [
        'Lao PDR — one of the world\'s few remaining communist states',
        'Secret War and UXO — unexploded ordnance from US bombing still kills today',
        'French colonial legacy endures in architecture, cuisine, and legal tradition',
        'Careful economic liberalization since the 1990s — tourism now a major industry'
      ]
    },
    literary: {
      text: 'Lao classical literature includes the Phra Lak Phra Lam (Lao Ramayana), the Sinxay epic (a uniquely Lao heroic narrative poem), and the vast Nithan oral tale tradition passed between generations by storytellers. The Lao script, derived from ancient Khmer, facilitated a rich Buddhist manuscript culture stored in monastery libraries. Contemporary Lao literature is sparse — censorship, limited publishing infrastructure, and emigration have challenged literary development within the country.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=60',
      folktale: {
        title: 'The Rice Spirit and the Grateful Farmer',
        text: 'In the days before the first harvest, the rice spirit Phi Khao had not yet descended to bless the paddy fields. A farmer named Oun prayed for three days and three nights by his terraced fields, offering incense, sticky rice, and garlands of flowers. On the third night, a luminous figure appeared in the mist — the spirit of the grain, dressed in white, her presence surrounded by a warm golden light. She told Oun: "You have honored me with patience and a pure heart. Your village\'s rice will grow tall and sweet." She bent to the first stalk of rice and whispered to it — and by morning, every stalk in the valley had doubled in height. From that day forward, the village held a Boun Khao Padap Din (rice spirit festival) each harvest season to honor her unending gift.',
        moral: 'Moral: Patience, sincerity, and gratitude are rewarded by nature\'s abundance. The relationship between humans and the living land is sacred — maintained through ritual, prayer, and the humility to ask for what one needs.'
      }
    },
    thennow: {
      then: 'Classical Laos produced Buddhist manuscript literature inscribed on palm leaves, carefully housed in monastery libraries called haw tai. The Phra Lak Phra Lam was recited at royal festivals in elaborate theatrical form. Village oral traditions — nithan folk stories and khap improvised sung poetry — were the literature of the common people, passed down through generations by memory alone.',
      now: 'Contemporary Laos has a small but growing generation of young writers — largely publishing online or within the diaspora communities of France, Australia, and the United States. Within Laos itself, Buddhist temple publications and government-approved narratives dominate. The challenge of preserving minority language literatures — Hmong, Khmu, and dozens of others — is urgent and largely unmet.'
    }
  },

  /* ────────────────────── INDONESIA ────────────────────── */
  {
    id: 'indonesia',
    name: 'Indonesia',
    tagline: 'Bhinneka Tunggal Ika — Unity in Diversity',
    flag: 'https://flagcdn.com/w160/id.png',
    photo: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=70',
    society: {
      text: 'Indonesian society is famously diverse — 270 million people spread across 17,000 islands, speaking over 700 distinct languages. The national motto "Bhinneka Tunggal Ika" (Unity in Diversity) reflects this reality with striking accuracy. Gotong royong (mutual cooperation) is the foundational social philosophy. Social organization varies enormously — from the patrilineal Batak of North Sumatra to the matrilineal Minangkabau of West Sumatra, and the caste-influenced Balinese of Bali.',
      image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=60',
      bullets: [
        'Gotong royong — communal cooperation and mutual aid as national philosophy',
        'Diverse ethnic groups: Javanese, Sundanese, Balinese, Batak, Dayak, and 700+ more',
        'Pancasila — state philosophy of five principles including unity and social justice',
        'Minangkabau of West Sumatra: the world\'s largest matrilineal society'
      ]
    },
    tradition: {
      text: 'Indonesia possesses one of the world\'s richest and most diverse artistic traditions. Wayang kulit (shadow puppetry), batik textile art, Balinese gamelan music, and the Kecak fire-and-trance dance are all inscribed on UNESCO\'s Intangible Cultural Heritage list. The Javanese royal courts of Yogyakarta and Surakarta preserved and patronized classical arts over centuries, producing refinements in music, dance, poetry, and puppetry that remain living traditions today.',
      image: 'https://images.unsplash.com/photo-1464808322410-1a934aab61e5?w=600&q=60',
      bullets: [
        'Wayang kulit — shadow puppetry narrating Hindu epic stories across all-night performances',
        'Batik — UNESCO-recognized wax-resist dyeing art with hundreds of regional patterns',
        'Gamelan — bronze percussion orchestra whose music is integral to ritual life',
        'Barong dance (Bali) — ritual combat between the forces of good and evil'
      ]
    },
    religion: {
      text: 'Indonesia has the world\'s largest Muslim population (~230 million), yet the state is not constitutionally Islamic — it is founded on Pancasila, officially recognizing six religions. Bali maintains a unique and vibrant form of Hinduism (Agama Hindu Dharma). Java\'s Kejawen tradition blends Islam, Hinduism, Buddhism, and animism into a syncretic spiritual outlook. Religious syncretism is perhaps the defining feature of Indonesian spiritual life.',
      image: 'https://images.unsplash.com/photo-1566475955657-0d9f2c4f5c1e?w=600&q=60',
      bullets: [
        'Largest Muslim population in the world (~230 million)',
        'Agama Hindu Dharma — Balinese Hinduism, distinctly Indonesian in character',
        'Kejawen — Javanese syncretic spiritual tradition blending multiple faiths',
        'Buddhism present in Indonesia since the Srivijaya empire (7th century CE)'
      ]
    },
    politics: {
      text: 'Indonesia\'s political history spans magnificent Hindu-Buddhist kingdoms (Majapahit, Srivijaya), 350 years of Dutch colonial rule, Japanese occupation during WWII, and independence proclaimed on 17 August 1945 by Sukarno and Hatta. Sukarno\'s "Guided Democracy" and Suharto\'s authoritarian New Order (1966–1998) were followed by Reformasi — a democratic transition that opened the country to political pluralism, free press, and regional autonomy.',
      image: 'https://images.unsplash.com/photo-1561065465-0c84ef68f5d4?w=600&q=60',
      bullets: [
        'Independence declared August 17, 1945 — Sukarno and Hatta read the proclamation',
        'Suharto\'s New Order 1966–1998 — authoritarian development era, economic growth with repression',
        'Reformasi 1998 — student-led democratic revolution, fall of Suharto',
        'World\'s third-largest democracy and largest Muslim-majority democracy today'
      ]
    },
    literary: {
      text: 'Indonesian literature spans Sanskrit-influenced Kawi literature of the Javanese courts, Malay-language Hikayat epic narratives, Dutch colonial-era journalism and fiction, and the post-independence Angkatan 45 (Generation of \'45). Pramoedya Ananta Toer, nominated four times for the Nobel Prize, wrote his masterwork Buru Quartet while imprisoned on Buru Island — dictating the novels aloud to fellow political prisoners who memorized them before paper was available.',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=60',
      folktale: {
        title: 'Malin Kundang — The Cursed Son',
        text: 'Malin Kundang was a poor boy who left his widowed mother to seek fortune at sea. Through hard work and fortunate winds, he became a wealthy merchant captain and married a noblewoman. When his ship returned to his home shore years later, his old mother — ragged and overcome with joy — ran to embrace him on the beach. But Malin, ashamed of her poverty in front of his fine crew and beautiful wife, denied her before all who watched: "I have no mother! This woman is a stranger!" His mother wept with a broken heart, and with the last of her strength, she raised her hands to the sky and cursed him: "If you are truly my son — may you turn to stone!" A black storm rose instantly from the calm sea. The ship was wrecked in moments. And Malin Kundang was turned to stone upon the beach of Air Manis, West Sumatra — where the rock formation shaped like a kneeling man still stands today.',
        moral: 'Moral: Filial piety is the most sacred bond. To deny one\'s mother — especially before others, out of pride — is the gravest betrayal a person can commit. Wealth and status built on shame cannot stand.'
      }
    },
    thennow: {
      then: 'Ancient Indonesian literature existed in Sanskrit and Old Javanese (Kawi). The Nagarakretagama (1365 CE) documented the Majapahit Empire in exquisite verse. Oral traditions — including the pantun and parikan poetic forms — carried wisdom, courtship, and philosophy between generations across the archipelago\'s thousands of communities.',
      now: 'Contemporary Indonesian literature addresses social justice, gender equality, religious identity, and post-Suharto freedom. Authors like Dee Lestari blend science fiction with Javanese mysticism. Indonesian horror cinema and webtoons reach millions of readers and viewers globally. The literary magazine Tempo and digital platforms have democratized Indonesian writing, giving voice to voices that could never have been published under Suharto.'
    }
  },

  /* ────────────────────── SINGAPORE ────────────────────── */
  {
    id: 'singapore',
    name: 'Singapore',
    tagline: 'Majulah Singapura — Onward Singapore',
    flag: 'https://flagcdn.com/w160/sg.png',
    photo: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=70',
    society: {
      text: 'Singapore is a city-state of extraordinary social engineering — a multiracial society (Chinese 74%, Malay 13%, Indian 9%) governed under a stable, meritocratic, and tightly managed system. The CMIO (Chinese-Malay-Indian-Other) racial classification framework shapes housing policy, school admissions, and political representation. Kiasu (fear of missing out or of losing) is a widely recognized cultural trait, driving the intense competitive achievement that characterizes Singaporean life.',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=600&q=60',
      bullets: [
        'Multiracial social compact maintained through the CMIO framework',
        'Kiasu culture — intense, sometimes anxious orientation toward achievement',
        'HDB public housing — 80% of population, deliberately integrated by racial quota',
        'Four official languages: English, Mandarin, Malay, and Tamil'
      ]
    },
    tradition: {
      text: 'Singapore\'s cultural traditions are a vivid kaleidoscope — Malay Hari Raya celebrations, Chinese New Year street gatherings, Tamil Thaipusam kavadi processions, and the unique multicultural Peranakan (Baba-Nyonya) heritage all coexist within one city. The Peranakan tradition — offspring of early Chinese immigrants who married local Malay women — produced a unique hybrid cuisine, fashion (the kebaya blouse), and household arts that are distinctly and proudly Singaporean.',
      image: 'https://images.unsplash.com/photo-1621685938981-b4d6dfbfe68e?w=600&q=60',
      bullets: [
        'Peranakan (Baba-Nyonya) — unique and celebrated Sino-Malay cultural heritage',
        'Chingay Parade — multicultural street procession on a grand scale',
        'Wayang (Chinese opera) performances at temples and community festivals',
        'Thaipusam — Tamil Hindu procession of devotion and endurance'
      ]
    },
    religion: {
      text: 'Singapore is profoundly religiously diverse — Buddhism and Taoism are practised by the Chinese community, Islam by the Malay community, Hinduism by the Indian community, and a large and growing Christian minority cuts across all ethnic groups. Religious harmony is an explicit government priority, maintained partly through the Maintenance of Religious Harmony Act. Despite — or perhaps because of — this careful management, Singapore\'s religious landscape is vibrant, sincere, and deeply personal.',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=60',
      bullets: [
        'Buddhism and Taoism — practised by the Chinese majority community',
        'Christianity — 19%, cutting across ethnic lines',
        'Islam — 16%, identified with the Malay community',
        'Hinduism — practised by the Tamil Indian community'
      ]
    },
    politics: {
      text: 'Singapore has been governed by the People\'s Action Party (PAP) without interruption since independence in 1959, initially under Lee Kuan Yew\'s visionary but authoritarian leadership. Singapore\'s transformation from a trading port with no natural resources to one of the world\'s wealthiest nations in a single generation is studied at business schools globally. Literature in Singapore must navigate strict defamation and sedition laws — Singaporean authors often self-censor or publish their most challenging work abroad.',
      image: 'https://images.unsplash.com/photo-1595434091143-b375ebe5aca9?w=600&q=60',
      bullets: [
        'Lee Kuan Yew — founding father and prime minister 1959–1990',
        'PAP dominance — single-party governance from 1959 to the present',
        'Defamation laws and "Out of Bounds markers" shape the limits of literary freedom',
        'Global hub for finance, trade, biomedical research, and regional diplomacy'
      ]
    },
    literary: {
      text: 'Singapore\'s literature exists simultaneously in four languages — English, Chinese (Mandarin), Malay, and Tamil — each with a distinct literary tradition and community. Edwin Thumboo is considered the father of Singapore English poetry. The Singlish (Singapore English creole) literary voice has produced writers like Alfian Sa\'at, Colin Goh, and Cyril Wong. Singapore\'s literature constantly and urgently wrestles with the question of national identity in a nation-state almost too young and too deliberately constructed to have authentic myths.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=60',
      folktale: {
        title: 'Sang Nila Utama and the White Lion',
        text: 'In the 13th century, a Srivijayan prince named Sang Nila Utama sailed near the island of Temasek when a great storm threatened his vessel. His advisors told him to lighten the ship — and he threw his crown into the heaving sea. The storm ceased instantly. Coming ashore on the island, he glimpsed through the jungle\'s edge a creature unlike any he had seen before: large as a horse, red-bodied, black-headed, white-breasted, moving with power and grace. His minister told him: "My lord, this is a singa — a lion. To see one on first landing is a sign of the greatest fortune." Though lions had never lived on that island (the creature was most likely a tiger or Javan rhino), Sang Nila Utama was so moved by the omen that he named the island Singapura — Lion City — and declared it the seat of his new kingdom on that very day.',
        moral: 'Moral: Great nations are founded on vision and interpretation — on seeing potential where others see only jungle. Singapore\'s very name is a testament to the power of a moment of wonder, and of the courage to name possibility into being.'
      }
    },
    thennow: {
      then: 'Singapore before the 20th century was a Malay fishing village, then a British colonial trading port of enormous strategic importance. Early literary voices emerged from Peranakan Chinese writers, Malay-language newspapers, and colonial-era journalism. The first generation of Singapore writers worked in the shadow of Malaysia and the colonial metropole — struggling to imagine a Singaporean literary identity at all.',
      now: 'Contemporary Singapore literature is globally connected, multilingual, and increasingly confident. The Singapore Writers Festival hosts international and local voices in conversation. Platforms like Ethos Books and Epigram publish local writers with growing international reach. Joanne Leow, Amanda Lee Koe, and Balli Kaur Jaswal have gained significant international recognition. The enduring challenge: how to write authentic, risk-taking stories in a nation that actively manages its own public narrative.'
    }
  },

  /* ────────────────────── MALAYSIA ────────────────────── */
  {
    id: 'malaysia',
    name: 'Malaysia',
    tagline: 'Malaysia Truly Asia',
    flag: 'https://flagcdn.com/w160/my.png',
    photo: 'https://images.unsplash.com/photo-1508009603885-50cf7c9c13cf?w=800&q=70',
    society: {
      text: 'Malaysian society is a complex and dynamic multicultural mosaic — Malay (bumiputera), Chinese, Indian, and indigenous Orang Asli communities coexisting under a constitutional monarchy. The social compact of 1957 independence balanced Malay political primacy with the economic roles of Chinese and Indian communities. The concept of kerukunan (inter-ethnic harmony) and muhibbah (goodwill between communities) are proclaimed national ideals, though ethnic and religious tensions periodically surface in public life and in literature.',
      image: 'https://images.unsplash.com/photo-1565618754657-a4f8b9c36f2d?w=600&q=60',
      bullets: [
        'Bumiputera policy — affirmative action programs for the ethnic Malay majority',
        'Muhibbah — intercommunal goodwill as a cherished if contested national value',
        'Diverse festivals: Hari Raya, Chinese New Year, Deepavali — all public holidays',
        'Bahasa Malaysia as the sole official and unifying national language'
      ]
    },
    tradition: {
      text: 'Malay cultural traditions centre on adat (customary law governing social behaviour), wayang kulit shadow puppetry, the mak yong sacred dance-drama, silat (a martial art with deep spiritual dimensions), and the pantun — a four-line poetic form that became the ancestor of the global "pantun" or "folk quatrain" tradition. Malaysia\'s remarkable cultural diversity means Chinese lion dances, Tamil Bharatanatyam classical dance, and Malay kompang drum ensembles are all equally and authentically part of the national cultural landscape.',
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&q=60',
      bullets: [
        'Pantun — four-line Malay poetic form that influenced global folk poetry traditions',
        'Mak yong — UNESCO-recognized sacred dance-drama of the Kelantan court',
        'Silat — Malay martial art combining combat technique with spiritual practice',
        'Dikir barat — competitive call-and-response oral poetry from Kelantan'
      ]
    },
    religion: {
      text: 'Islam is the official religion of Malaysia and is legally and culturally identified with Malay ethnicity — to be Malay in Malaysia is constitutionally defined as being Muslim. Non-Malay citizens are formally guaranteed freedom of religion, and Malaysia\'s Chinese community practises Buddhism, Taoism, and Christianity. The Indian community practises Hinduism and Sikhism. The tension between Malaysia as an Islamic state and as a pluralist democracy is a defining — and unresolved — theme in Malaysian politics, society, and literature.',
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=60',
      bullets: [
        'Islam — official religion, constitutionally linked to Malay ethnic identity',
        'Buddhism and Taoism — practised by the substantial Chinese community',
        'Hinduism — the faith of the Tamil Malaysian community',
        'Sufi orders historically shaped the character of Malay Islamic spiritual practice'
      ]
    },
    politics: {
      text: 'Malaysia gained independence from Britain on 31 August 1957 under Tunku Abdul Rahman — the nation\'s founding father. The defining national trauma was the May 13, 1969 racial riots, which reshaped Malaysian politics and led to the New Economic Policy\'s ambitious affirmative action programs. The Mahathir era (1981–2003 and briefly 2018–2020) brought rapid modernization alongside authoritarian governance. Modern Malaysian literature grapples with the limits of free speech, the challenges of multiracial democracy, and the legacy of decades of managed public discourse.',
      image: 'https://images.unsplash.com/photo-1620332372374-f108c53d2e03?w=600&q=60',
      bullets: [
        'Independence August 31, 1957 — "Merdeka!" declared in Kuala Lumpur',
        'May 13, 1969 racial riots — the formative national trauma that reshaped governance',
        'Mahathir era (1981–2003, 2018–2020) — rapid modernization, Petronas Towers, and political crackdowns',
        'Sedition Act and other laws continue to constrain literary and political speech'
      ]
    },
    literary: {
      text: 'The Malay literary tradition stretches from the Hikayat Hang Tuah (a 16th-century warrior epic celebrating loyalty to the sultan) and the Sejarah Melayu (Malay Annals, the finest prose work in classical Malay literature) to modern novels, poetry, and drama. Usman Awang ("Tongkat Warrant") is Malaysia\'s beloved national poet laureate. The Sulalatus Salatin (Malay Annals) is a masterwork blending history, mythology, and statecraft that shaped Malay political thought for centuries.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=60',
      folktale: {
        title: 'Sang Kancil dan Buaya — The Mousedeer and the Crocodiles',
        text: 'Sang Kancil, the small but supremely clever mousedeer, needed urgently to cross a river full of hungry and watchful crocodiles. Instead of running or hiding, the bold little deer trotted right to the water\'s edge and called out in his most important voice: "O great crocodiles! The Raja himself has sent me on urgent business. I have been commanded to count all of you for a royal census. Please line up in a straight row from this bank all the way to the other shore!" The vain crocodiles, enormously flattered to receive royal attention, arranged themselves obediently in a long, bobbing line across the river. Sang Kancil hopped briskly across their heads and backs, counting aloud with great ceremony — "One! Two! Three! Four!" — until he safely reached the far bank. Then he turned back and laughed with all his heart: "You foolish crocodiles! There is no census and there is no royal command. I needed only to cross the river. I thank you for your backs!" And he disappeared laughing into the forest.',
        moral: 'Moral: Wit and cleverness reliably triumph over brute strength and vanity. The humble and seemingly powerless can outwit the powerful through intelligence, quick thinking, and the courage to act boldly on a good idea.'
      }
    },
    thennow: {
      then: 'Classical Malay literature was produced in the royal courts of Melaka and Johor, where professional storytellers performed the Hikayat narratives and Syair rhymed verse for noble audiences. The Jawi script (Arabic-adapted alphabet) was the sole medium of all Malay literary production. Manuscripts were treasured court possessions, sometimes believed to carry spiritual power.',
      now: 'Contemporary Malaysian literature exists simultaneously in Malay, English, Mandarin, and Tamil — a quadrilingual literary landscape unique in the world. Hanna Alkaf\'s internationally published young adult fiction, the vibrant spoken word poetry scene in Kuala Lumpur, and experimental novelists like Amir Muhammad represent Malaysia\'s literary present. The government body Dewan Bahasa dan Pustaka actively promotes Malay-language literature while English-language writers increasingly gain international recognition and readership.'
    }
  }
];

/* ══════════════════════════════════════════════
   PAGE NAVIGATION
   ══════════════════════════════════════════════ */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => {
    if (b.getAttribute('onclick') && b.getAttribute('onclick').includes(`'${id}'`)) {
      b.classList.add('active');
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════════════════════════
   RENDER FLAGS GRID
   ══════════════════════════════════════════════ */
function renderFlags() {
  const grid = document.getElementById('flagsGrid');
  grid.innerHTML = countries.map(c => `
    <div class="flag-card" id="fc-${c.id}">
      <div class="flag-btn"
        id="flag-${c.id}"
        draggable="true"
        ondragstart="handleDragStart(event,'${c.id}')"
        ondragover="handleDragOver(event)"
        ondragleave="handleDragLeave(event)"
        ondrop="handleDrop(event,'${c.id}')"
        title="Drag to compare · Click Explore to open">
        <img class="flag-img"
          src="${c.flag}"
          alt="${c.name} flag"
          onerror="this.src='https://via.placeholder.com/110x75/3d1f0a/e8c06a?text=${encodeURIComponent(c.name[0])}'">
      </div>
      <div class="flag-label">${c.name}</div>
      <button class="open-btn" onclick="openCountry('${c.id}')">Explore →</button>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════
   DRAG & DROP
   ══════════════════════════════════════════════ */
let draggedId = null;

function handleDragStart(e, id) {
  draggedId = id;
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => {
    const el = document.getElementById(`flag-${id}`);
    if (el) el.classList.add('dragging');
  }, 0);
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  e.currentTarget.classList.add('drop-target');
}

function handleDragLeave(e) {
  e.currentTarget.classList.remove('drop-target');
}

function handleDrop(e, targetId) {
  e.preventDefault();
  e.currentTarget.classList.remove('drop-target');
  document.querySelectorAll('.flag-btn').forEach(f => f.classList.remove('dragging', 'drop-target'));
  if (draggedId && draggedId !== targetId) {
    showComparison(draggedId, targetId);
  }
  draggedId = null;
}

document.addEventListener('dragend', () => {
  document.querySelectorAll('.flag-btn').forEach(f => f.classList.remove('dragging', 'drop-target'));
});

/* ══════════════════════════════════════════════
   COMPARISON MODAL
   ══════════════════════════════════════════════ */
function showComparison(idA, idB) {
  const a = countries.find(c => c.id === idA);
  const b = countries.find(c => c.id === idB);
  if (!a || !b) return;

  const rows = [
    { label: 'Official Tagline / Motto',  va: a.tagline,                   vb: b.tagline },
    { label: 'Primary Religion',          va: a.religion.bullets[0],       vb: b.religion.bullets[0] },
    { label: 'Key Social Value',          va: a.society.bullets[0],        vb: b.society.bullets[0] },
    { label: 'Cultural Tradition',        va: a.tradition.bullets[0],      vb: b.tradition.bullets[0] },
    { label: 'Featured Folktale',         va: a.literary.folktale.title,   vb: b.literary.folktale.title },
    { label: 'Political Landmark',        va: a.politics.bullets[0],       vb: b.politics.bullets[0] },
    { label: 'Historical Identity',       va: a.thennow.then.substring(0, 130) + '…', vb: b.thennow.then.substring(0, 130) + '…' }
  ];

  document.getElementById('compareBody').innerHTML = `
    <div class="compare-flags-row">
      <div>
        <img class="compare-flag-img" src="${a.flag}" alt="${a.name}">
        <div class="compare-country-name">${a.name}</div>
      </div>
      <div class="compare-vs">VS</div>
      <div>
        <img class="compare-flag-img" src="${b.flag}" alt="${b.name}">
        <div class="compare-country-name">${b.name}</div>
      </div>
    </div>

    <table class="compare-table">
      <thead>
        <tr>
          <th style="width:26%;">Category</th>
          <th style="width:37%;">${a.name}</th>
          <th style="width:37%;">${b.name}</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(r => `
          <tr>
            <td class="label-cell"><strong>${r.label}</strong></td>
            <td class="${r.label === 'Political Landmark' ? 'red-text' : ''}">
  ${r.va}
</td>

<td class="${r.label === 'Political Landmark' ? 'red-text' : ''}">
  ${r.vb}
</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div class="compare-folktales">
      <div class="compare-folktales-label"> <strong>📚 Featured Folktales — Moral Teachings </strong> </div>
      <div class="compare-folktales-grid">
        <div>
          <div class="compare-folktale-title">${a.name}: ${a.literary.folktale.title}</div>
          <div class="compare-folktale-moral">${a.literary.folktale.moral}</div>
        </div>
        <div>
          <div class="compare-folktale-title">${b.name}: ${b.literary.folktale.title}</div>
          <div class="compare-folktale-moral">${b.literary.folktale.moral}</div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('compareModal').classList.add('open');
}

function closeModal() {
  document.getElementById('compareModal').classList.remove('open');
}

document.getElementById('compareModal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

/* ══════════════════════════════════════════════
   COUNTRY PAGE — BUILD & RENDER
   ══════════════════════════════════════════════ */
function openCountry(id) {
  const c = countries.find(x => x.id === id);
  if (!c) return;

  const buildBullets = arr => arr.map(b => `<li>${b}</li>`).join('');

  const html = `
    <div class="country-hero">
      <img class="country-hero-flag" src="${c.photo}" alt="${c.name}"
        onerror="this.style.display='none'">
      <div class="country-hero-overlay"></div>
      <div class="country-hero-content">
        <h2>${c.name}</h2>
        <p>${c.tagline}</p>
      </div>
    </div>

    <div class="tab-nav">
      <button class="tab-btn active"  onclick="switchTab(event,'society','${c.id}')">🏘 Society</button>
      <button class="tab-btn"         onclick="switchTab(event,'tradition','${c.id}')">🎭 Tradition</button>
      <button class="tab-btn"         onclick="switchTab(event,'religion','${c.id}')">🕌 Religion</button>
      <button class="tab-btn"         onclick="switchTab(event,'politics','${c.id}')">⚖ Politics</button>
      <button class="tab-btn"         onclick="switchTab(event,'literary','${c.id}')">📜 Literature</button>
      <button class="tab-btn"         onclick="switchTab(event,'thennow','${c.id}')">⏳ Then vs Now</button>
    </div>

    <!-- SOCIETY -->
    <div id="tab-society-${c.id}" class="tab-content active">
      <img class="country-photo" src="${c.society.image}" alt="Society in ${c.name}"
        onerror="this.src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=60'">
      <div class="info-section">
        <h3>🏘 Society &amp; Social Structure</h3>
        <p>${c.society.text}</p>
        <ul>${buildBullets(c.society.bullets)}</ul>
      </div>
    </div>

    <!-- TRADITION -->
    <div id="tab-tradition-${c.id}" class="tab-content">
      <img class="country-photo" src="${c.tradition.image}" alt="Traditions of ${c.name}"
        onerror="this.src='https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=60'">
      <div class="info-section">
        <h3>🎭 Cultural Traditions</h3>
        <p>${c.tradition.text}</p>
        <ul>${buildBullets(c.tradition.bullets)}</ul>
      </div>
    </div>

    <!-- RELIGION -->
    <div id="tab-religion-${c.id}" class="tab-content">
      <img class="country-photo" src="${c.religion.image}" alt="Religion in ${c.name}"
        onerror="this.src='https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=60'">
      <div class="info-section">
        <h3>🕌 Religious Influences</h3>
        <p>${c.religion.text}</p>
        <ul>${buildBullets(c.religion.bullets)}</ul>
      </div>
    </div>

    <!-- POLITICS -->
    <div id="tab-politics-${c.id}" class="tab-content">
      <img class="country-photo" src="${c.politics.image}" alt="Politics of ${c.name}"
        onerror="this.src='https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&q=60'">
      <div class="info-section">
        <h3>⚖ Politics &amp; History</h3>
        <p>${c.politics.text}</p>
        <ul>${buildBullets(c.politics.bullets)}</ul>
      </div>
    </div>

    <!-- LITERARY -->
    <div id="tab-literary-${c.id}" class="tab-content">
      <img class="country-photo" src="${c.literary.image}" alt="Literature of ${c.name}"
        onerror="this.src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=60'">
      <div class="info-section">
        <h3>📜 Literary Analysis</h3>
        <p>${c.literary.text}</p>
      </div>
      <div class="folktale-box">
        <h4>✦ Featured Folktale</h4>
        <h5>${c.literary.folktale.title}</h5>
        <p>${c.literary.folktale.text}</p>
        <div class="folktale-moral">${c.literary.folktale.moral}</div>
      </div>
    </div>

    <!-- THEN VS NOW -->
    <div id="tab-thennow-${c.id}" class="tab-content">
      <div class="info-section">
        <h3>⏳ Cultural Evolution: Then &amp; Now</h3>
      </div>
      <div class="then-now-grid">
        <div class="then-box">
          <h4>📜 Then — Traditional ${c.name}</h4>
          <p>${c.thennow.then}</p>
        </div>
        <div class="now-box">
          <h4>💻 Now — Contemporary ${c.name}</h4>
          <p>${c.thennow.now}</p>
        </div>
      </div>
    </div>
  `;

  document.getElementById('countryContent').innerHTML = html;
  showPage('countryPage');
}

/* ── TAB SWITCHER ── */
function switchTab(e, tab, countryId) {
  document.querySelectorAll(`[id^="tab-"][id$="-${countryId}"]`)
    .forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn')
    .forEach(b => b.classList.remove('active'));

  const target = document.getElementById(`tab-${tab}-${countryId}`);
  if (target) target.classList.add('active');
  e.currentTarget.classList.add('active');
}

/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */
renderFlags();
