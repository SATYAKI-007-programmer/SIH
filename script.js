const HERITAGE_DATA = [
{"state": "Andaman and Nicobar Islands", "district": "South Andaman", "name": "Cellular Jail", "category": "Memorial", "notes": "Colonial-era prison for freedom fighters"},
{"state": "Andhra Pradesh", "district": "Tirupati", "name": "Tirumala Venkateswara Temple", "category": "Mandir", "notes": "One of the world's richest temples"},
{"state": "Andhra Pradesh", "district": "Visakhapatnam", "name": "Simhachalam Temple", "category": "Mandir", "notes": "Narasimha shrine"},
{"state": "Assam", "district": "Kamrup Metropolitan", "name": "Kamakhya Temple", "category": "Mandir", "notes": "Shakti Peetha shrine, Guwahati"},
{"state": "Assam", "district": "Sivasagar", "name": "Rang Ghar", "category": "Monument", "notes": "Ahom-era amphitheatre"},
{"state": "Bihar", "district": "Gaya", "name": "Mahabodhi Temple, Bodh Gaya", "category": "Mandir", "notes": "Site of Buddha's enlightenment, UNESCO site"},
{"state": "Bihar", "district": "Nalanda", "name": "Nalanda University Ruins", "category": "Monument", "notes": "Ancient university, UNESCO site"},
{"state": "Bihar", "district": "Patna", "name": "Golghar", "category": "Monument", "notes": "Colonial-era granary"},
{"state": "Chhattisgarh", "district": "Bastar", "name": "Danteshwari Temple", "category": "Mandir", "notes": "Shakti Peetha shrine, Jagdalpur"},
{"state": "Delhi", "district": "Central Delhi", "name": "Jama Masjid", "category": "Monument", "notes": "Mughal-era congregational mosque near Chandni Chowk"},
{"state": "Delhi", "district": "East Delhi", "name": "Akshardham Temple", "category": "Mandir", "notes": "Modern temple complex"},
{"state": "Delhi", "district": "New Delhi", "name": "India Gate", "category": "Memorial", "notes": "War memorial for WWI Indian soldiers"},
{"state": "Delhi", "district": "New Delhi", "name": "Rajghat", "category": "Memorial", "notes": "Mahatma Gandhi's cremation site"},
{"state": "Delhi", "district": "New Delhi", "name": "Red Fort", "category": "Monument", "notes": "Mughal-era fort, UNESCO World Heritage Site"},
{"state": "Delhi", "district": "North Delhi", "name": "St. James' Church", "category": "Church", "notes": "Delhi's oldest church, near Kashmiri Gate"},
{"state": "Delhi", "district": "North West Delhi", "name": "Roshanara Bagh & Tomb", "category": "Monument", "notes": "Mughal garden and tomb of Princess Roshanara"},
{"state": "Delhi", "district": "South Delhi", "name": "Humayun's Tomb", "category": "Monument", "notes": "Mughal tomb, UNESCO World Heritage Site"},
{"state": "Delhi", "district": "South Delhi", "name": "Lotus Temple", "category": "Other", "notes": "Bahá'í House of Worship"},
{"state": "Delhi", "district": "South Delhi", "name": "Qutub Minar", "category": "Monument", "notes": "Tallest brick minaret, UNESCO site"},
{"state": "Delhi", "district": "South East Delhi", "name": "Hazrat Nizamuddin Dargah", "category": "Other", "notes": "Sufi shrine of Nizamuddin Auliya"},
{"state": "Delhi", "district": "South West Delhi", "name": "Chhatarpur Temple", "category": "Mandir", "notes": "Large modern temple complex dedicated to Durga"},
{"state": "Goa", "district": "North Goa", "name": "Basilica of Bom Jesus", "category": "Church", "notes": "UNESCO site, relics of St. Francis Xavier"},
{"state": "Goa", "district": "North Goa", "name": "Se Cathedral", "category": "Church", "notes": "Largest church in Asia"},
{"state": "Gujarat", "district": "Ahmedabad", "name": "Sabarmati Ashram", "category": "Memorial", "notes": "Mahatma Gandhi's residence"},
{"state": "Gujarat", "district": "Devbhoomi Dwarka", "name": "Dwarkadhish Temple", "category": "Mandir", "notes": "Krishna temple, Char Dham site"},
{"state": "Gujarat", "district": "Gir Somnath", "name": "Somnath Temple", "category": "Mandir", "notes": "First among the twelve Jyotirlingas"},
{"state": "Gujarat", "district": "Mehsana", "name": "Modhera Sun Temple", "category": "Monument", "notes": "11th-century sun temple"},
{"state": "Gujarat", "district": "Narmada", "name": "Statue of Unity", "category": "Memorial", "notes": "World's tallest statue, Sardar Patel"},
{"state": "Gujarat", "district": "Patan", "name": "Rani ki Vav", "category": "Monument", "notes": "Stepwell, UNESCO World Heritage Site"},
{"state": "Haryana", "district": "Kurukshetra", "name": "Brahma Sarovar", "category": "Mandir", "notes": "Sacred tank tied to the Mahabharata"},
{"state": "Himachal Pradesh", "district": "Kangra", "name": "Jwalamukhi Temple", "category": "Mandir", "notes": "Shakti Peetha shrine"},
{"state": "Himachal Pradesh", "district": "Shimla", "name": "Christ Church, Shimla", "category": "Church", "notes": "One of North India's oldest churches"},
{"state": "Jammu and Kashmir", "district": "Reasi", "name": "Vaishno Devi Temple", "category": "Mandir", "notes": "Major pilgrimage cave shrine"},
{"state": "Jammu and Kashmir", "district": "Srinagar", "name": "Shankaracharya Temple", "category": "Mandir", "notes": "Hilltop Shiva temple"},
{"state": "Jharkhand", "district": "Deoghar", "name": "Baidyanath Temple", "category": "Mandir", "notes": "Jyotirlinga shrine"},
{"state": "Karnataka", "district": "Ballari", "name": "Hampi (Virupaksha Temple)", "category": "Mandir", "notes": "Vijayanagara ruins, UNESCO site"},
{"state": "Karnataka", "district": "Hassan", "name": "Belur Chennakeshava Temple", "category": "Mandir", "notes": "Hoysala-era temple"},
{"state": "Karnataka", "district": "Hassan", "name": "Halebidu Hoysaleswara Temple", "category": "Mandir", "notes": "Hoysala-era temple"},
{"state": "Karnataka", "district": "Mysuru", "name": "Mysore Palace", "category": "Monument", "notes": "Wodeyar dynasty royal residence"},
{"state": "Karnataka", "district": "Vijayapura", "name": "Gol Gumbaz", "category": "Monument", "notes": "Adil Shahi mausoleum with giant dome"},
{"state": "Kerala", "district": "Ernakulam", "name": "Santa Cruz Basilica", "category": "Church", "notes": "Portuguese-era basilica"},
{"state": "Kerala", "district": "Ernakulam", "name": "St. Francis Church, Kochi", "category": "Church", "notes": "One of the oldest European churches in India"},
{"state": "Kerala", "district": "Thiruvananthapuram", "name": "Padmanabhaswamy Temple", "category": "Mandir", "notes": "Vishnu shrine, notably wealthy temple"},
{"state": "Ladakh", "district": "Kargil", "name": "Kargil War Memorial, Drass", "category": "Memorial", "notes": "1999 Kargil War memorial"},
{"state": "Ladakh", "district": "Leh", "name": "Leh Palace", "category": "Monument", "notes": "Former royal palace"},
{"state": "Madhya Pradesh", "district": "Chhatarpur", "name": "Khajuraho Group of Temples", "category": "Mandir", "notes": "UNESCO World Heritage Site"},
{"state": "Madhya Pradesh", "district": "Gwalior", "name": "Gwalior Fort", "category": "Monument", "notes": "Hilltop fort complex"},
{"state": "Madhya Pradesh", "district": "Niwari", "name": "Orchha Temples & Cenotaphs", "category": "Mandir", "notes": "Bundela-era temple and palace complex"},
{"state": "Madhya Pradesh", "district": "Raisen", "name": "Sanchi Stupa", "category": "Monument", "notes": "Buddhist stupa, UNESCO World Heritage Site"},
{"state": "Madhya Pradesh", "district": "Ujjain", "name": "Mahakaleshwar Temple", "category": "Mandir", "notes": "Jyotirlinga shrine to Shiva"},
{"state": "Maharashtra", "district": "Ahilyanagar", "name": "Ahmednagar Fort", "category": "Monument", "notes": "16th-century Nizam Shahi fort"},
{"state": "Maharashtra", "district": "Ahmednagar", "name": "Shirdi Sai Baba Temple", "category": "Mandir", "notes": "Major pilgrimage shrine"},
{"state": "Maharashtra", "district": "Akola", "name": "Narnala Fort", "category": "Monument", "notes": "Hill fort in the Melghat forest range"},
{"state": "Maharashtra", "district": "Amravati", "name": "Chikhaldara Hills", "category": "Mountain", "notes": "Hill station in the Satpura range, part of Melghat"},
{"state": "Maharashtra", "district": "Beed", "name": "Kankaleshwar Temple", "category": "Mandir", "notes": "12th-century Shiva temple on a stepped platform"},
{"state": "Maharashtra", "district": "Buldhana", "name": "Lonar Crater Lake", "category": "Mountain", "notes": "Meteor-impact crater lake, a rare geological heritage site"},
{"state": "Maharashtra", "district": "Chandrapur", "name": "Tadoba Hills", "category": "Mountain", "notes": "Forested hills within Tadoba-Andhari Tiger Reserve"},
{"state": "Maharashtra", "district": "Chhatrapati Sambhajinagar", "name": "Ajanta Caves", "category": "Monument", "notes": "Buddhist caves, UNESCO site"},
{"state": "Maharashtra", "district": "Chhatrapati Sambhajinagar", "name": "Bibi Ka Maqbara", "category": "Monument", "notes": "Mughal-era mausoleum modelled on the Taj Mahal"},
{"state": "Maharashtra", "district": "Chhatrapati Sambhajinagar", "name": "Ellora Caves", "category": "Monument", "notes": "Rock-cut temples, UNESCO site"},
{"state": "Maharashtra", "district": "Dharashiv", "name": "Tuljabhavani Temple", "category": "Mandir", "notes": "Shakti Peetha shrine at Tuljapur"},
{"state": "Maharashtra", "district": "Gondia", "name": "Nagzira Wildlife Sanctuary", "category": "Mountain", "notes": "Forested sanctuary in eastern Maharashtra"},
{"state": "Maharashtra", "district": "Hingoli", "name": "Aundha Nagnath Temple", "category": "Mandir", "notes": "One of the twelve Jyotirlinga shrines"},
{"state": "Maharashtra", "district": "Jalgaon", "name": "Patnadevi Temple", "category": "Mandir", "notes": "Hill-set shrine in the Satpura foothills"},
{"state": "Maharashtra", "district": "Kolhapur", "name": "Mahalakshmi Temple, Kolhapur", "category": "Mandir", "notes": "Shakti Peetha shrine"},
{"state": "Maharashtra", "district": "Kolhapur", "name": "Panhala Fort", "category": "Monument", "notes": "Hill fort associated with Chhatrapati Shivaji"},
{"state": "Maharashtra", "district": "Mumbai City", "name": "Afghan Church", "category": "Church", "notes": "St. John the Evangelist Church"},
{"state": "Maharashtra", "district": "Mumbai City", "name": "Gateway of India", "category": "Monument", "notes": "Colonial-era arch monument"},
{"state": "Maharashtra", "district": "Mumbai City", "name": "Haji Ali Dargah", "category": "Other", "notes": "Islamic shrine on an islet off Worli"},
{"state": "Maharashtra", "district": "Mumbai Suburban", "name": "Kanheri Caves", "category": "Monument", "notes": "Ancient Buddhist rock-cut caves in Sanjay Gandhi National Park"},
{"state": "Maharashtra", "district": "Mumbai Suburban", "name": "Mount Mary Church", "category": "Church", "notes": "Basilica of Our Lady of the Mount"},
{"state": "Maharashtra", "district": "Nagpur", "name": "Deekshabhoomi", "category": "Monument", "notes": "Buddhist monument marking B. R. Ambedkar's conversion"},
{"state": "Maharashtra", "district": "Nanded", "name": "Hazur Sahib Nanded", "category": "Gurdwara", "notes": "One of the five Takhts of Sikhism"},
{"state": "Maharashtra", "district": "Nandurbar", "name": "Toranmal Hills", "category": "Mountain", "notes": "Hill station in the Satpura range"},
{"state": "Maharashtra", "district": "Nashik", "name": "Pandavleni Caves", "category": "Monument", "notes": "Ancient rock-cut Buddhist caves"},
{"state": "Maharashtra", "district": "Nashik", "name": "Trimbakeshwar Temple", "category": "Mandir", "notes": "One of the twelve Jyotirlinga shrines"},
{"state": "Maharashtra", "district": "Palghar", "name": "Vasai Fort", "category": "Monument", "notes": "Portuguese-era coastal fort"},
{"state": "Maharashtra", "district": "Pune", "name": "Shaniwar Wada", "category": "Monument", "notes": "Fortified Peshwa-era palace"},
{"state": "Maharashtra", "district": "Pune", "name": "Sinhagad Fort", "category": "Mountain", "notes": "Hill fort overlooking the Sahyadri range"},
{"state": "Maharashtra", "district": "Raigad", "name": "Elephanta Caves", "category": "Monument", "notes": "Rock-cut caves, UNESCO World Heritage Site"},
{"state": "Maharashtra", "district": "Raigad", "name": "Raigad Fort", "category": "Mountain", "notes": "Hill fort that served as Chhatrapati Shivaji's capital"},
{"state": "Maharashtra", "district": "Ratnagiri", "name": "Ganpatipule Temple", "category": "Mandir", "notes": "Coastal Ganesh shrine"},
{"state": "Maharashtra", "district": "Satara", "name": "Kaas Plateau", "category": "Mountain", "notes": "Seasonal wildflower plateau, UNESCO-linked biodiversity site"},
{"state": "Maharashtra", "district": "Satara", "name": "Sajjangad Fort", "category": "Mountain", "notes": "Hill fort and samadhi site of Samarth Ramdas"},
{"state": "Maharashtra", "district": "Sindhudurg", "name": "Sindhudurg Fort", "category": "Monument", "notes": "Sea fort built by Chhatrapati Shivaji"},
{"state": "Maharashtra", "district": "Solapur", "name": "Vitthal Rukmini Temple, Pandharpur", "category": "Mandir", "notes": "Major Varkari pilgrimage shrine"},
{"state": "Maharashtra", "district": "Thane", "name": "Tungareshwar Hills", "category": "Mountain", "notes": "Forested hill range near Vasai"},
{"state": "Maharashtra", "district": "Wardha", "name": "Sevagram Ashram", "category": "Memorial", "notes": "Mahatma Gandhi's ashram and residence"},
{"state": "Manipur", "district": "Imphal West", "name": "Imphal War Cemetery", "category": "Memorial", "notes": "Commonwealth WWII war cemetery"},
{"state": "Nagaland", "district": "Kohima", "name": "Kohima War Cemetery", "category": "Memorial", "notes": "Commonwealth WWII war cemetery"},
{"state": "Odisha", "district": "Khordha", "name": "Lingaraj Temple", "category": "Mandir", "notes": "Kalinga-style Shiva temple, Bhubaneswar"},
{"state": "Odisha", "district": "Puri", "name": "Jagannath Temple", "category": "Mandir", "notes": "Site of the annual Rath Yatra"},
{"state": "Odisha", "district": "Puri", "name": "Konark Sun Temple", "category": "Monument", "notes": "UNESCO World Heritage Site"},
{"state": "Puducherry", "district": "Puducherry", "name": "Sacred Heart Basilica", "category": "Church", "notes": "Notre Dame des Anges"},
{"state": "Punjab", "district": "Amritsar", "name": "Golden Temple", "category": "Gurdwara", "notes": "Harmandir Sahib, holiest Sikh shrine"},
{"state": "Punjab", "district": "Amritsar", "name": "Jallianwala Bagh", "category": "Memorial", "notes": "1919 massacre memorial"},
{"state": "Punjab", "district": "Rupnagar", "name": "Anandpur Sahib", "category": "Gurdwara", "notes": "Sikh holy city and gurdwara complex"},
{"state": "Rajasthan", "district": "Ajmer", "name": "Ajmer Sharif Dargah", "category": "Other", "notes": "Sufi shrine of Moinuddin Chishti"},
{"state": "Rajasthan", "district": "Ajmer", "name": "Brahma Temple, Pushkar", "category": "Mandir", "notes": "Rare temple dedicated to Brahma"},
{"state": "Rajasthan", "district": "Chittorgarh", "name": "Chittorgarh Fort", "category": "Monument", "notes": "Largest fort in India, UNESCO site"},
{"state": "Rajasthan", "district": "Jaipur", "name": "Amber Fort", "category": "Monument", "notes": "Hilltop fort, UNESCO site"},
{"state": "Rajasthan", "district": "Jaipur", "name": "City Palace, Jaipur", "category": "Monument", "notes": "Royal residence complex"},
{"state": "Rajasthan", "district": "Jaipur", "name": "Hawa Mahal", "category": "Monument", "notes": "Palace of Winds"},
{"state": "Rajasthan", "district": "Jaipur", "name": "Jantar Mantar, Jaipur", "category": "Monument", "notes": "Astronomical observatory, UNESCO site"},
{"state": "Rajasthan", "district": "Jaisalmer", "name": "Jaisalmer Fort", "category": "Monument", "notes": "Living fort, UNESCO site"},
{"state": "Rajasthan", "district": "Jodhpur", "name": "Mehrangarh Fort", "category": "Monument", "notes": "One of India's largest forts"},
{"state": "Rajasthan", "district": "Udaipur", "name": "City Palace, Udaipur", "category": "Monument", "notes": "Lake-side royal palace"},
{"state": "Sikkim", "district": "East Sikkim", "name": "Rumtek Monastery", "category": "Other", "notes": "Major Tibetan Buddhist monastery"},
{"state": "Tamil Nadu", "district": "Chengalpattu", "name": "Shore Temple, Mahabalipuram", "category": "Monument", "notes": "UNESCO World Heritage Site"},
{"state": "Tamil Nadu", "district": "Chennai", "name": "San Thome Basilica", "category": "Church", "notes": "Built over the tomb of St. Thomas"},
{"state": "Tamil Nadu", "district": "Chennai", "name": "St. Andrew's Kirk", "category": "Church", "notes": "Scottish colonial-era church"},
{"state": "Tamil Nadu", "district": "Madurai", "name": "Meenakshi Amman Temple", "category": "Mandir", "notes": "Dravidian-style temple complex"},
{"state": "Tamil Nadu", "district": "Nagapattinam", "name": "Velankanni Basilica", "category": "Church", "notes": "Our Lady of Good Health shrine"},
{"state": "Tamil Nadu", "district": "Thanjavur", "name": "Brihadeeswarar Temple", "category": "Mandir", "notes": "Chola-era temple, UNESCO site"},
{"state": "Telangana", "district": "Hyderabad", "name": "Charminar", "category": "Monument", "notes": "16th-century mosque-monument"},
{"state": "Telangana", "district": "Hyderabad", "name": "Golconda Fort", "category": "Monument", "notes": "Qutb Shahi-era fort"},
{"state": "Telangana", "district": "Hyderabad", "name": "Statue of Equality", "category": "Memorial", "notes": "Statue of Ramanujacharya"},
{"state": "Uttar Pradesh", "district": "Agra", "name": "Agra Fort", "category": "Monument", "notes": "Mughal fort, UNESCO World Heritage Site"},
{"state": "Uttar Pradesh", "district": "Agra", "name": "Fatehpur Sikri", "category": "Monument", "notes": "Mughal capital city ruins, UNESCO site"},
{"state": "Uttar Pradesh", "district": "Agra", "name": "Taj Mahal", "category": "Monument", "notes": "UNESCO World Heritage Site"},
{"state": "Uttar Pradesh", "district": "Ayodhya", "name": "Hanuman Garhi", "category": "Mandir", "notes": "Hilltop Hanuman shrine overlooking Ayodhya"},
{"state": "Uttar Pradesh", "district": "Ayodhya", "name": "Ram Mandir", "category": "Mandir", "notes": "Temple to Lord Rama"},
{"state": "Uttar Pradesh", "district": "Bahraich", "name": "Dargah Syed Salar Masud", "category": "Other", "notes": "Major regional Sufi shrine"},
{"state": "Uttar Pradesh", "district": "Balrampur", "name": "Devi Patan Temple", "category": "Mandir", "notes": "Shakti Peetha shrine near the Nepal border"},
{"state": "Uttar Pradesh", "district": "Banda", "name": "Kalinjar Fort", "category": "Mountain", "notes": "Ancient hill fort in the Vindhya range"},
{"state": "Uttar Pradesh", "district": "Barabanki", "name": "Dewa Sharif Dargah", "category": "Other", "notes": "Sufi shrine of Haji Waris Ali Shah"},
{"state": "Uttar Pradesh", "district": "Chitrakoot", "name": "Kamadgiri Hill", "category": "Mountain", "notes": "Sacred hill associated with Lord Rama's exile"},
{"state": "Uttar Pradesh", "district": "Ghazipur", "name": "Cornwallis Memorial", "category": "Memorial", "notes": "Colonial-era monument to Lord Cornwallis"},
{"state": "Uttar Pradesh", "district": "Gorakhpur", "name": "Gorakhnath Temple", "category": "Mandir", "notes": "Major Nath-sect pilgrimage shrine"},
{"state": "Uttar Pradesh", "district": "Jaunpur", "name": "Jaunpur Fort", "category": "Monument", "notes": "Sharqi-era fort on the Gomti river"},
{"state": "Uttar Pradesh", "district": "Jhansi", "name": "Jhansi Fort", "category": "Monument", "notes": "19th-century fort associated with Rani Lakshmibai"},
{"state": "Uttar Pradesh", "district": "Kanpur Nagar", "name": "Bithoor", "category": "Monument", "notes": "Ancient town linked to the Ramayana and 1857 uprising"},
{"state": "Uttar Pradesh", "district": "Kaushambi", "name": "Kaushambi Ruins", "category": "Monument", "notes": "Ancient Buddhist city with an Ashokan pillar"},
{"state": "Uttar Pradesh", "district": "Kheri", "name": "Dudhwa Hills", "category": "Mountain", "notes": "Forested reserve on the Nepal terai border"},
{"state": "Uttar Pradesh", "district": "Kushinagar", "name": "Kushinagar Stupa", "category": "Monument", "notes": "Site of Buddha's Mahaparinirvana, major Buddhist pilgrimage site"},
{"state": "Uttar Pradesh", "district": "Lalitpur", "name": "Deogarh Dashavatara Temple", "category": "Mandir", "notes": "Gupta-era temple, one of India's earliest Hindu stone temples"},
{"state": "Uttar Pradesh", "district": "Lucknow", "name": "Bara Imambara", "category": "Monument", "notes": "18th-century Nawabi architecture"},
{"state": "Uttar Pradesh", "district": "Lucknow", "name": "Shaheed Smarak", "category": "Memorial", "notes": "Martyrs' memorial"},
{"state": "Uttar Pradesh", "district": "Mathura", "name": "Banke Bihari Temple, Vrindavan", "category": "Mandir", "notes": "Major Krishna shrine in Vrindavan"},
{"state": "Uttar Pradesh", "district": "Mathura", "name": "Krishna Janmabhoomi Temple", "category": "Mandir", "notes": "Birthplace shrine of Krishna"},
{"state": "Uttar Pradesh", "district": "Meerut", "name": "Shaheed Smarak, Meerut", "category": "Memorial", "notes": "Marks the start of the 1857 uprising"},
{"state": "Uttar Pradesh", "district": "Mirzapur", "name": "Vindhyavasini Temple", "category": "Mandir", "notes": "Shakti Peetha shrine on the Ganges"},
{"state": "Uttar Pradesh", "district": "Prayagraj", "name": "Allahabad Fort & Sangam", "category": "Monument", "notes": "Akbar-era fort at the confluence of the Ganga and Yamuna"},
{"state": "Uttar Pradesh", "district": "Prayagraj", "name": "Anand Bhawan", "category": "Memorial", "notes": "Nehru family residence-museum"},
{"state": "Uttar Pradesh", "district": "Sant Kabir Nagar", "name": "Kabir Samadhi, Maghar", "category": "Memorial", "notes": "Shrine marking the saint-poet Kabir's resting place"},
{"state": "Uttar Pradesh", "district": "Shravasti", "name": "Shravasti Buddhist Ruins", "category": "Monument", "notes": "Ancient monastic site linked to Buddha's teachings"},
{"state": "Uttar Pradesh", "district": "Siddharthnagar", "name": "Kapilvastu Ruins", "category": "Monument", "notes": "Ruins linked to the Buddha's childhood home"},
{"state": "Uttar Pradesh", "district": "Sitapur", "name": "Naimisharanya", "category": "Mandir", "notes": "Ancient pilgrimage site linked to Puranic legend"},
{"state": "Uttar Pradesh", "district": "Sonbhadra", "name": "Kaimur Hills", "category": "Mountain", "notes": "Plateau and hill range on the UP-Bihar-MP border"},
{"state": "Uttar Pradesh", "district": "Varanasi", "name": "Kashi Vishwanath Temple", "category": "Mandir", "notes": "Jyotirlinga shrine to Shiva"},
{"state": "Uttar Pradesh", "district": "Varanasi", "name": "Sarnath", "category": "Monument", "notes": "Site of Buddha's first sermon, with an Ashokan pillar and Dhamek Stupa"},
{"state": "Uttarakhand", "district": "Chamoli", "name": "Badrinath Temple", "category": "Mandir", "notes": "Vishnu shrine, Char Dham site"},
{"state": "Uttarakhand", "district": "Haridwar", "name": "Har Ki Pauri", "category": "Mandir", "notes": "Sacred ghat on the Ganges"},
{"state": "Uttarakhand", "district": "Rudraprayag", "name": "Kedarnath Temple", "category": "Mandir", "notes": "Jyotirlinga shrine, Char Dham site"},
{"state": "West Bengal", "district": "Alipurduar", "name": "Buxa Hills & Jayanti", "category": "Mountain", "notes": "Forested hills bordering Bhutan, part of Buxa Tiger Reserve"},
{"state": "West Bengal", "district": "Bankura", "name": "Bishnupur Terracotta Temples", "category": "Mandir", "notes": "Malla-dynasty terracotta temple cluster, including Rasmancha"},
{"state": "West Bengal", "district": "Birbhum", "name": "Shantiniketan", "category": "Monument", "notes": "Cultural campus founded by Rabindranath Tagore, UNESCO site"},
{"state": "West Bengal", "district": "Birbhum", "name": "Tarapith Temple", "category": "Mandir", "notes": "Shakti Peetha and major Tantric pilgrimage site"},
{"state": "West Bengal", "district": "Cooch Behar", "name": "Cooch Behar Palace", "category": "Monument", "notes": "Victor Jubilee Palace, former royal residence"},
{"state": "West Bengal", "district": "Dakshin Dinajpur", "name": "Bangarh Archaeological Site", "category": "Monument", "notes": "Ancient fortified settlement mound"},
{"state": "West Bengal", "district": "Darjeeling", "name": "Darjeeling Hills & Tiger Hill", "category": "Mountain", "notes": "Himalayan hill station with views of Kangchenjunga"},
{"state": "West Bengal", "district": "Darjeeling", "name": "St. Andrew's Church, Darjeeling", "category": "Church", "notes": "Colonial-era Anglican church"},
{"state": "West Bengal", "district": "Hooghly", "name": "Bandel Basilica", "category": "Church", "notes": "Basilica of the Holy Rosary, Portuguese-era church"},
{"state": "West Bengal", "district": "Hooghly", "name": "Hooghly Imambara", "category": "Monument", "notes": "19th-century riverside Imambara"},
{"state": "West Bengal", "district": "Howrah", "name": "Belur Math", "category": "Mandir", "notes": "Headquarters of the Ramakrishna Mission"},
{"state": "West Bengal", "district": "Howrah", "name": "Howrah Bridge", "category": "Monument", "notes": "Cantilever bridge landmark"},
{"state": "West Bengal", "district": "Jalpaiguri", "name": "Dooars Hills & Chapramari", "category": "Mountain", "notes": "Forested foothills of the eastern Himalayas"},
{"state": "West Bengal", "district": "Jhargram", "name": "Jhargram Raj Palace", "category": "Monument", "notes": "Former royal residence of the Jhargram Raj estate"},
{"state": "West Bengal", "district": "Kalimpong", "name": "Kalimpong Hills", "category": "Mountain", "notes": "Himalayan hill town near the Teesta valley"},
{"state": "West Bengal", "district": "Kalimpong", "name": "Zang Dhok Palri Phodang", "category": "Other", "notes": "Tibetan Buddhist monastery"},
{"state": "West Bengal", "district": "Kolkata", "name": "Kalighat Kali Temple", "category": "Mandir", "notes": "Shakti Peetha shrine on the Hooghly's bank"},
{"state": "West Bengal", "district": "Kolkata", "name": "St. Paul's Cathedral", "category": "Church", "notes": "Anglican cathedral"},
{"state": "West Bengal", "district": "Kolkata", "name": "Victoria Memorial", "category": "Memorial", "notes": "Marble memorial hall and museum"},
{"state": "West Bengal", "district": "Malda", "name": "Gaur & Pandua Ruins", "category": "Monument", "notes": "Ruins of medieval Bengal Sultanate capitals"},
{"state": "West Bengal", "district": "Murshidabad", "name": "Hazarduari Palace", "category": "Monument", "notes": "Nawab's palace with a thousand doors"},
{"state": "West Bengal", "district": "Nadia", "name": "ISKCON Temple, Mayapur", "category": "Mandir", "notes": "Major Vaishnava pilgrimage and temple complex"},
{"state": "West Bengal", "district": "North 24 Parganas", "name": "Dakshineswar Kali Temple", "category": "Mandir", "notes": "19th-century Kali temple on the Hooghly"},
{"state": "West Bengal", "district": "Paschim Bardhaman", "name": "Kalyaneshwari Temple", "category": "Mandir", "notes": "Shakti temple near Barakar"},
{"state": "West Bengal", "district": "Paschim Medinipur", "name": "Karnagarh Ruins", "category": "Monument", "notes": "Ruins of an old zamindari capital"},
{"state": "West Bengal", "district": "Purba Bardhaman", "name": "Kalna Temple Complex", "category": "Mandir", "notes": "108 Shiva temples arranged in concentric circles"},
{"state": "West Bengal", "district": "Purba Medinipur", "name": "Digha Coastline", "category": "Mountain", "notes": "Popular Bay of Bengal coastal stretch"},
{"state": "West Bengal", "district": "Purulia", "name": "Ayodhya Hills", "category": "Mountain", "notes": "Hill range in the Chota Nagpur plateau"},
{"state": "West Bengal", "district": "South 24 Parganas", "name": "Sundarbans", "category": "Mountain", "notes": "World's largest mangrove forest, UNESCO World Heritage Site"},
{"state": "West Bengal", "district": "Uttar Dinajpur", "name": "Kulik Bird Sanctuary", "category": "Mountain", "notes": "One of Asia's largest heronries"}
];

(function(){
  const stateSelect = document.getElementById('state-select');
  const districtSelect = document.getElementById('district-select');
  const resultsArea = document.getElementById('results-area');
  const resultsTitle = document.getElementById('results-title');
  const resultsCount = document.getElementById('results-count');
  const resetBtn = document.getElementById('reset-btn');
  const mapElement = document.getElementById('heritage-map');
  const mapStatus = document.getElementById('map-status');

  if(!stateSelect) return;

  let heritageMap = null;
  let geocoder = null;
  let mapMarkers = [];
  let mapsReady = false;
  let pendingSites = [];

  function setMapStatus(message){
    if(mapStatus) mapStatus.textContent = message;
  }

  function clearMarkers(){
    mapMarkers.forEach(marker => marker.setMap(null));
    mapMarkers = [];
  }

  function placeSiteMarker(site){
    geocoder.geocode({ address: `${site.name}, ${site.district}, ${site.state}, India` }, (results, status) => {
      if(status !== 'OK' || !results[0]) return;
      const marker = new google.maps.Marker({
        map: heritageMap,
        position: results[0].geometry.location,
        title: site.name
      });
      const info = new google.maps.InfoWindow({
        content: `<strong>${site.name}</strong><br>${site.category}<br>${site.district}, ${site.state}`
      });
      marker.addListener('click', () => info.open({ map: heritageMap, anchor: marker }));
      mapMarkers.push(marker);
    });
  }

  function updateMap(sites){
    pendingSites = sites;
    if(!mapsReady) return;
    clearMarkers();
    if(!sites.length){
      setMapStatus('No sites are available for this selection.');
      return;
    }
    const visibleSites = sites.slice(0, 25);
    setMapStatus(`Mapping ${visibleSites.length} of ${sites.length} listed site${sites.length === 1 ? '' : 's'}.`);
    visibleSites.forEach(placeSiteMarker);
  }

  async function loadMap(){
    if(!mapElement) return;
    try{
      const configResponse = await fetch('/api/maps-config');
      const config = await configResponse.json();
      if(!configResponse.ok || !config.key) throw new Error('Maps key is not configured');

      window.initHeritageMap = () => {
        heritageMap = new google.maps.Map(mapElement, {
          center: { lat: 22.5937, lng: 78.9629 },
          zoom: 5,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true
        });
        geocoder = new google.maps.Geocoder();
        mapsReady = true;
        updateMap(pendingSites);
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(config.key)}&callback=initHeritageMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => setMapStatus('The map could not load. Check the Google Maps API key and enabled APIs.');
      document.head.appendChild(script);
    }catch(error){
      setMapStatus('The map is unavailable. Configure MAPS in Vercel environment variables.');
    }
  }

  const states = [...new Set(HERITAGE_DATA.map(d => d.state))].sort();
  states.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    stateSelect.appendChild(opt);
  });

  function populateDistricts(state){
    districtSelect.innerHTML = '';
    if(!state){
      districtSelect.disabled = true;
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = 'Select a state first…';
      districtSelect.appendChild(opt);
      return;
    }
    districtSelect.disabled = false;
    const allOpt = document.createElement('option');
    allOpt.value = '';
    allOpt.textContent = 'All districts in this state';
    districtSelect.appendChild(allOpt);
    const districts = [...new Set(HERITAGE_DATA.filter(d => d.state === state).map(d => d.district))].sort();
    districts.forEach(dist => {
      const opt = document.createElement('option');
      opt.value = dist;
      opt.textContent = dist;
      districtSelect.appendChild(opt);
    });
  }

  function render(){
    const state = stateSelect.value;
    const district = districtSelect.value;

    let filtered = HERITAGE_DATA;
    if(state) filtered = filtered.filter(d => d.state === state);
    if(district) filtered = filtered.filter(d => d.district === district);

    let title = 'All entries';
    if(state && district) title = district + ', ' + state;
    else if(state) title = state;
    resultsTitle.textContent = title;
    resultsCount.textContent = filtered.length + (filtered.length === 1 ? ' site' : ' sites');
    updateMap(filtered);

    resultsArea.innerHTML = '';

    if(filtered.length === 0){
      const empty = document.createElement('div');
      empty.className = 'finder-empty';
      empty.innerHTML = '<strong>No entries yet for this selection</strong>This district isn\'t in the current dataset. Try another district, or view all entries for the state.';
      resultsArea.appendChild(empty);
      return;
    }

    const list = document.createElement('div');
    list.className = 'site-list';
    filtered
      .slice()
      .sort((a,b) => a.district.localeCompare(b.district) || a.name.localeCompare(b.name))
      .forEach(site => {
        const item = document.createElement('div');
        item.className = 'site-item';
        const showDistrict = !district;
        item.innerHTML = `
          <div class="tag ${site.category}">${site.category}</div>
          <div>
            <h3>${site.name}</h3>
            <p>${site.notes}${showDistrict ? ' — ' + site.district + ', ' + site.state : ''}</p>
          </div>
        `;
        list.appendChild(item);
      });
    resultsArea.appendChild(list);
  }

  stateSelect.addEventListener('change', () => {
    populateDistricts(stateSelect.value);
    render();
  });
  districtSelect.addEventListener('change', render);
  resetBtn.addEventListener('click', () => {
    stateSelect.value = '';
    populateDistricts('');
    render();
  });

  populateDistricts('');
  render();
  loadMap();
})();

// ---------- Chatbot widget ----------
(function(){
  const messagesEl = document.getElementById('chat-messages');
  const inputEl = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const hintEl = document.getElementById('chat-hint');
  if(!messagesEl) return;

  let history = [];

  function addMessage(text, cls){
    const div = document.createElement('div');
    div.className = 'chat-msg ' + cls;
    const p = document.createElement('p');
    p.textContent = text;
    div.appendChild(p);
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return div;
  }

  async function sendMessage(){
    const text = inputEl.value.trim();
    if(!text) return;
    inputEl.value = '';
    sendBtn.disabled = true;
    addMessage(text, 'chat-msg-user');
    const thinking = addMessage('Thinking…', 'chat-msg-bot');

    try{
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: history })
      });
      const data = await resp.json();
      thinking.remove();

      if(!resp.ok){
        addMessage(data.error || 'Something went wrong. Please try again.', 'chat-msg-error');
        return;
      }

      addMessage(data.reply, 'chat-msg-bot');
      history.push({ role: 'user', text: text });
      history.push({ role: 'assistant', text: data.reply });
      if(history.length > 12) history = history.slice(-12);
    } catch(err){
      thinking.remove();
      addMessage('Could not reach the assistant. Make sure GEMINI_API_KEY is configured in Vercel.', 'chat-msg-error');
    } finally {
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  sendBtn.addEventListener('click', sendMessage);
  inputEl.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') sendMessage();
  });
})();
