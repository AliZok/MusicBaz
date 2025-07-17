import { ref } from 'vue'
const storeSimple = ref({
  musicList: [
    {
      title: 'Universe',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Jurrivh-Universe-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Jurrivh - Universe (2024)/128k/01) Jurrivh - Universe.mp3',
      genre: 'relax',
      duration: '00:2:03'
    },
    {
      title: 'Øneheart',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/05/Oneheart-searching-for-you-2023.jpg',
      audio:
        'https://db.vmusic.ir/2023/05/Øneheart - searching for you (2023)/128k/Øneheart - searching for you.mp3',
      genre: 'relax',
      duration: '00:1:39'
    },
    {
      title: 'You can get lost among the good old movies',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Konstantin-Tyufyakin-Unnamed-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Konstantin Tyufyakin - Unnamed (2024)/128k/01) Konstantin Tyufyakin - You can get lost among the good old movies.mp3',
      genre: 'relax',
      duration: '00:2:25'
    },
    {
      title: 'Evolution',
      artist: 'Interplay Records',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Interplay-Records-Interplay-Radio-Episode-513-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Interplay Records - Interplay Radio Episode 513 (2024)/128k/03) Interplay Records - Evolution (Interplay 51).mp3',
      genre: 'electronic trance',
      duration: '00:3:40'
    },
    {
      title: 'Atlantis',
      artist: 'Interplay Records',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Interplay-Records-Interplay-Radio-Episode-513-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Interplay Records - Interplay Radio Episode 513 (2024)/128k/04) Interplay Records - Atlantis (Interplay 513).mp3',
      genre: 'electronic trance',
      duration: '00:3:04'
    },
    {
      title: 'Serotonin',
      artist: 'Interplay Records',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Interplay-Records-Interplay-Radio-Episode-513-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Interplay Records - Interplay Radio Episode 513 (2024)/128k/17) Interplay Records - Serotonin (Interplay 513).mp3',
      genre: 'electronic trance',
      duration: '00:4:10'
    },
    {
      title: 'Second Sunrise',
      artist: 'Global DJ Broadcast Weekly Drive 31',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Markus-Schulz-Global-DJ-Broadcast-Weekly-Drive-31-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Markus Schulz - Global DJ Broadcast Weekly Drive 31 (2024)/128k/01) Daxson - Second Sunrise (GDJB Weekly Drive 31).mp3',
      genre: 'electronic trance',
      duration: '00:4:01'
    },
    {
      title: 'Hagelslag ',
      artist: 'Global DJ Broadcast Weekly Drive 31',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Markus-Schulz-Global-DJ-Broadcast-Weekly-Drive-31-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Markus Schulz - Global DJ Broadcast Weekly Drive 31 (2024)/128k/02) ReOrder, First Effect - Hagelslag (GDJB Weekly Drive 31).mp3',
      genre: 'electronic trance',
      duration: ':'
    },

    {
      title: 'Atlantis',
      artist: 'Tycoos',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Tycoos-Future-Horizons-441-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Tycoos - Future Horizons 441 (2024)/128k/03) Tycoos - Atlantis (Future Horizons 441).mp3',
      genre: 'electronic trance',
      duration: ''
    },
    {
      title: 'Doost Daram Zendegi ro',
      artist: 'Sirvan',
      cover:
        'https://upmusics.com/wp-content/uploads/2017/07/Sirvan-Khosravi-Doost-Daram-Zendegiro.jpg',
      audio:
        'https://aod.musiciom.ir/Tracks/Songs/Sirvan%20Khosravi%20-%20Doost%20Daram%20Zendegiro%20(UpMusic).mp3?host=upmusics.com',
      genre: 'pop',
      duration: ''
    },
    {
      title: 'Tanha Nazar',
      artist: 'Sirvan',
      cover:
        'https://www.ganja2music.com/Image/Post/7.2019/Sirvan%20Khosravi%20-%20Tanha%20Nazar.jpg',
      audio:
        'https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Tanha%20Nazar%20(320).mp3',
      genre: 'pop electronic',
      duration: ''
    },
    {
      title: 'No Step On Wing',
      artist: 'Nils Frahm',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/03/Nils-Frahm-Empty-2020.jpg',
      audio:
        'https://dl.vmusic.ir//2020/03/Nils Frahm - Empty (2020)/128k/03) Nils Frahm - No Step On Wing - 2020.mp3',
      genre: 'relax piano ambient',
      duration: ''
    },
    {
      title: 'What I’ve Done',
      artist: 'LinkinPark',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yAY8vyC_ADH0A3tkOFqiDUBk5dVK3yUaRg&s',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/04/Linkin-Park-What-Ive-Done.mp3',
      genre: 'rock metal',
      duration: ''
    },
    {
      title: 'Breaking the Habit',
      artist: 'LinkinPark',
      cover: 'https://i1.sndcdn.com/artworks-000116080355-gatn8i-t500x500.jpg',
      audio:
        'https://dl.ememay.ir/Music/Linkin-Park/Papercuts/Breaking-the-Habit-Linkin-Park-320.mp3',
      genre: 'rock metal',
      star: 5,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    // {
    //     title: 'Abri',
    //     artist: 'Farvardin',
    //     cover: 'https://i1.sndcdn.com/artworks-JPQ7KL2kKbzxt59y-rDIPiw-t500x500.jpg',
    //     audio: 'https://cf-media.sndcdn.com/sTEmf0J8H8TO.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vc1RFbWYwSjhIOFRPLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzI0NTQxNDU1fX19XX0_&Signature=InCjE8zBPpbOat~UieLY1FxrMJG6BIeUF1691S7UVrL9bA2N4FtWrgIQeq~jKJkQJlyG-YP4gmCzy4Ovm31S57y514Xh4ChYOGNWTVyeZWU8b5tX8sYDOOiS03ESuITAkb4XA5rF73vkkBe9omV3puOPm8nR~j2jk0R0BFRCPu90bFV5-vfo7nOoZ4ZeVGkqeafqvjXPQmnzdqn-IGwtlcSL7eFKvE~U5Rs4ERSqSNmO4AWvQhnbAVvKjLV1IdJsn5o0RDRL6KyKLIfZgYjc6IGqwjBw33zbNGT-uHFiaFNoyloypl10lUHUgQ-hATInAtdhwZqdcaRsjCmFhRskPA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    //     genre: 'pop',
    // },
    {
      title: 'Buck dich',
      artist: 'Rammstein',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdCo_0hF5SiwaeLEhHVEbKs6rw3qGG-tePQ&s',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/03/Rammstein-Buck-dich.mp3',
      genre: 'rock metal',
      duration: ':'
    },
    {
      title: 'In the End',
      artist: 'LinkinPark',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwGBA3Zch4vi2eD2aEH_Cq136VyvxSQHHDA&s',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/04/Linkin-Park-In-the-End.mp3',
      genre: 'rock',
      duration: ':'
    },
    {
      title: 'Khanom Gol',
      artist: 'Ebi',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIfO_ydjF7ly2z_kVJOZt5ssTf1hODhSRuP-AS8eJGnTpOv5rFzP7ZpFzmIzrvwoXBbc&usqp=CAU',
      audio:
        'https://dl.shabamusic.com/Music/1402/09/19/Ebi - Khanom Gol (128).mp3',
      genre: 'nostalgy',
      duration: ':'
    },
    {
      title: 'You',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/01) Rostislav Khalikov - You.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Melody Box',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/02) Rostislav Khalikov - Melody Box.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Awakening',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/03) Rostislav Khalikov - Awakening.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Echo of the First Love',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/04) Rostislav Khalikov - Echo of the First Love.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Memories',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/05) Rostislav Khalikov - Memories.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Night Dream',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/07) Rostislav Khalikov - Night Dream.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Good Night',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/10) Rostislav Khalikov - Good Night.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Your Smile',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/16) Rostislav Khalikov - Your Smile.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Magical Woman',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/19) Rostislav Khalikov - Magical Woman.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'sahdana',
      artist: 'Ildio',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/ildio-sahdana-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/ildio - sahdana (2024)/128k/01) ildio - sahdana.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Surya namaskar',
      artist: 'Ildio',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/ildio-sahdana-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/ildio - sahdana (2024)/128k/02) ildio - surya namaskar.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    // {
    //     title: 'Maste Cheshat',
    //     artist: 'Farvardin',
    //     cover: 'https://i1.sndcdn.com/artworks-hgLIhtAvtsVE-0-t500x500.jpg',
    //     audio: 'https://cf-media.sndcdn.com/024Z8rUxjRF0.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMDI0WjhyVXhqUkYwLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzI0NTQ1MDk2fX19XX0_&Signature=EbcwBFiCvopzqG0ZbfKshq5UxnDsB-wXjAi85UyNylJOKL9jjQGoaf~rq9NWzPJq9TIAuos-LNEcGWA97nE9a-Ihnzv0PRJzIyQ1jXX~~RB6lPkHZn0kYSTJhd63n-XhI8mCcJlyFCnLrlF6IfIbDwqfZGlcNP4abTWmj1R7N64-MwbwGcaJq0ticLwQfGuI05G6H~5dbfnl6aeXqgWhYOLGQaWHEHBIaTZq9b06J0CozmOfW6xucCN938Sb04YKU9Q8xuvfg5VfkG1gZrrTPW674X9cpm6HHxdrzZGtTgOLeqMvvKiKxVyf4q37WBNAcftrN~gUNl~o4MkC4LDnMQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    //     genre: 'pop electronic',
    // },
    // {
    //     title: 'Never Alone',
    //     artist: 'Carbon & Lampé',
    //     cover: 'https://i1.sndcdn.com/artworks-MEy6VBgvP1BMdtsR-PPz8jA-t500x500.jpg',
    //     audio: 'https://cf-media.sndcdn.com/a2geNGn3kFjU.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vYTJnZU5HbjNrRmpVLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzI0NTQ1NDI5fX19XX0_&Signature=Ovq-Cfe9DwKhEaFLB2B3pTSFrcF6aWEZmJ46Ymrrj1VdKjuJ7d6771N03BigwOdLJxo~~6fLDeCDyPDIo4uGMUm0yDWNafLaMdTbbkI734BMq03Ntb7TFyMCbHwrVzCrzMyVg4QnSbIGnnBVcgtkOtMAT7hdwhQRXSv5WwetDFCe3dGRD8Q1aORhdfxmOBQCPCAbFgoidpC7LHKs0iaGlRoDjyc~TGXFoJpgLREJqJrBf1eg4kh7ozRbDJdmO7nXTZVSTOh~UKBvpo7ZN8rlsY1OjSQ9CnnQKecoYECR1mPfYV-qM3k-GPsoS-6C9e7~pCvsnGt3GSCPPKT1ePHpiA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    //     genre: 'electronic techno',
    // },
    // {
    //     title: 'All of my music is on Spotify',
    //     artist: 'Wind',
    //     cover: 'https://i1.sndcdn.com/artworks-000033182580-ja3l0t-t500x500.jpg',
    //     audio: 'https://cf-media.sndcdn.com/gfihOXhUVnpV.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vZ2ZpaE9YaFVWbnBWLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzI0NTQ1OTkyfX19XX0_&Signature=PIwhLXLr-DggbJJlF1X5JfnIZONkaxH2Z3pUudPk-a3b24IjPIALkJb0eiMrAIRLTLrC4agsWTRunK0akfAGG~FliCdq28KdIN6xA66DEBunZ2hslb06qmaka32VuRWa~Awm-vQtV5sqVG0LQ27AlWc9Gnm-FSdejUtUiGrZg~FyeI08Yde9loaMGG--8uJKRWwyVe4BovRTB~dxW5YzrNt5~m6Vgsebwt4u9qKC6Tw6MRz-fRzHAEndaa042yrjUsCAXFmxzPSUh7arvE2fbXt6A4Ri8HGIJJVNcPux6kHU2Gb5Dq7Ggb-cAgNfj4BNNAfrHRA4u44NMIc8tjntjg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    //     genre: 'relax piano',
    // },
    {
      title: 'The Love',
      artist: 'Florews',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Florews-Cinematic-Piano-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Florews - Cinematic Piano (2024)/128k/01) Florews - The Love.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Tension to Relief',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Various-Artists-Changes-Human-Stories-Factual-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Various Artists - Changes - Human Stories & Factual (2024)/128k/01) Theo Vidgen - Tension to Relief.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Struggle to Survival',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Various-Artists-Changes-Human-Stories-Factual-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Various Artists - Changes - Human Stories & Factual (2024)/128k/02) Isabella Catherine Lau - Struggle to Survival.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Expectation to Arrival',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Various-Artists-Changes-Human-Stories-Factual-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Various Artists - Changes - Human Stories & Factual (2024)/128k/03) Angus Thomas Nicholson - Expectation to Arrival.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Calm to Busy',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Various-Artists-Changes-Human-Stories-Factual-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Various Artists - Changes - Human Stories & Factual (2024)/128k/05) Chris Doney - Calm to Busy.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Introspective to Optimistic',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Various-Artists-Changes-Human-Stories-Factual-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Various Artists - Changes - Human Stories & Factual (2024)/128k/07) Joshua Benjamin Pacey - Introspective to Optimistic.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Pacha Mama',
      artist: 'Galardo',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/12/Galardo-Pacha-Mama-2020.jpg',
      audio:
        'https://dl.vmusic.ir/2020/12/Galardo - Pacha Mama (2020)/128k/Galardo - Pacha Mama.mp3',
      genre: 'house electronic',
      duration: ':'
    },
    {
      title: 'Middle Earth',
      artist: 'Meeting Molly',
      cover:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMWFhUXFxYXFxcWFRUWGBcYFxcWFhcVFxUYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0dHR0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABEEAABAwICBQkECAUEAQUAAAABAAIRAyESMQQFBkFREyIyYXGBkaHRorHB8BQjUlNyssLhFiRCYvEVM3OS0hc0Q4KD/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJhEBAAICAgMAAgEFAQAAAAAAAAERAhIDIRMxURRBcSIyQmGBFf/aAAwDAQACEQMRAD8A9g03TCwgAAyJv2qudaO4DzQteOh7fw/ErMNRIhjLKYlqO1w4bm+fqof6077LfP1WU5ygSrUMby0qmvnj+lvn6oDto6n2Ge16rNqoDlahznPL61Km09Qf0M9r1VZ+1lX7un7Xqs2oFUqNWoxhyy5M/rVftbVP/wAdP2vVN/FNX7un7XqsdlJFFNaqHK8paP8AFFX7un7XqmdtRV+7p+16rNdTUSxXpmpW6u1FX7un7Xqgu2oq/d0/a9VTqUkF9FaiXHLjiWg3air93T9r1RW7V1fu6fteqyuRSFFLSOKI9NqntVV+7p+16q0zamr93T9r1WDSoqyymszTthEw1f4pq/d0/a9UGptTV+7p+16qs2ihVKCnTWUTMDfxPV+7p+16p/4kq/d0/a9VV+jKL6K1bj4Y+LB2nq/d0/a9VH+KKv3dP2vVUXUVA0Vq2J4cfjQdtRV+7p+16oR2nq/d0/a9VSfTQhSVjJjLhxn9Lp2nq/d0/a9Ve1Jrl9as2m5jACHXGKbAneepYZoLY2SofzTOx/5Sm7H4uE9U6n6Kktb6Oks+Zr/z/wDSvr489v4fiVlkrT1/02/h+JWWvND7+UdoOTSpwoFW2KCeguCM8KBCrM4q7wq72q28IeFatznEFjFOEUMUXBLTRXeFHCjFqaEtnUAtUDTVgNT4VbTRXFJT5FWGMRcClrHGrMoovJo0JwEtvxwg1qXJI7Wogapa6KZpoNSmr5aoupq2zODNNJCNJX6lNMKK1blODONJOKCv8gjM0dNk8bJ5Ba+ydGNJZ2P/AClI6MtLZ6hFdp6nflKmU9N8fHWcOqwpKSdcH0ahia/HPb+H4lZZC1teDnt/D8SsyFSYDKjCIQmhLZoItQ3BHIUcN1bScVZ4UMK6XW+p2NaDTBnE0G5NnWGfXCPV1JRBYADdxB5x3McfeArbOrk1By6TT9BosD/qatgecOjlYziyR9L1RQZH1NV8/YJMdsuCWk4uRITQup0HQtEquLGseHASQ4kRBiM81LRNW6LULw1rpZYy5wvcWv1FW00cpCaF02l6iadHbUpg48LXESTitJgcd6NU2epufTDZDS1zn3JJjBAE5ZlLTSXMNCktx2j6K9rhTD2ObYOOJwcfE28M1W1BobKtQteJGEnMi8gbu1LXVlypNXQU9SM+kOaQeTDA4XO+wv2hyM/UtJhqPfPJtAhoJk2BN896lrrLnmIrVss1dRqtbUpBzRiAc0k5SAd5gwZzVbXOitp1A1ggYQc5vJHwSzVnwmIWzrfRKdJ1OGmDOISbgYcuGZVn/RmOc1zf9otk3Pdfv8ktdXNPYkxit6XgxHAIbuvM9d0NrVbZ1QbSRWU0RrURrVLXUIUle1Oz60dh9xQg1W9Vt+sHf7ilrGPbaTpJLDqwNaaXTe9oa8E4MUTeJImO5VC1cptfza9PCYLaYytm529vwVejtDWEAvkcYE+JCtEZfXVaVWDGlx/z1KvounteL80jOfeCsDS9MLyCTPzuCGM80pJl1k7wkM1y7TAzSqVbXJ8ZCtFvR3a5oird/NLRFndJribCJ3+SHR1tTimXOghznOGF1pD+q/SC84bXOd5+d6J9MebFxjtRnZ3unaXRfi/mKkEdEA4csuij6XrSi+IrvZH2Wuv2y1eeUycx+60dBmoHjEQWtluVzIAae2Y7YRLdDqrS6VKvUcXksLbOIcSSS0mQB27k+pdY06b6xe6A8y3muM3dwFswsTRdGxMDi9wJm26Mgb75B8kqNIVHljXPEOAMlpluMMJENEHnTv3qpbfra7a0UCx0loh7YIthAIkiDceSt1toKQqMLSS2HB0NcMM4cJgi+RyXHaNQbVkgvGEEkEh1oNwQBvgRG9T0IlzHOwPeQ5ohljzg8yeafs+aUbS6zQdYaNRkNquLXEujCYbP/wBZWVs9pbKVQueYGEjIm8tO4dSzNGcHF/1dQlgBwNgu6Qbfm7p4I+jU2vJHObEANd0sbui02GcFC26zXNPk2CediYHWPQa+ZmL2GXWiVNb0XmpTcTgcBDgDwAIiJzHBY1HQwQ2z+cJL/wCltyCTbIRJukzR2uwwHS5r3C4N2h1ow3nD5qLctWnrCjSY2nScXS8FziDYSJOV7CLJ9Pq6NVdiNVwMRZruJO9vWsV2jENxEEGYuOqUMIro9P0jR6uHFUcMM5Ndvji3qQW6axtB9MPMy4Ns67SbXiBaVy2ka3psIb0uOGCAif6rS+15FC18BTYFW0XTqb+i4TwNj3A5q41FiEwptUQpKLQgKt6t/wBwd/uVEFXNWH6wd/uQptJJJKNPJdrqg5VhOZpxllznblkMbLerq4+i39vdCirTINiyeyXu+e5Yuj0IJGYjyK1CTB9EmPns+Ks0zKLo9HDckER6pGmBlPFRaQdY3Ux4j4I1WhIKVFsjyVSgnN4J2szUjTjJEcEtmkQ3Iqxo9fDMZnDB4FrmvB8WhVqu7sTsKJS8dYkFxDWgEiBeGgNDQ0dwQ6WsQ12NjIJcC6XEkgOD8IsIBIHXZVy3gh4USl2hp4YeayAelLiSRBETFhectwUfpDMJbyZglpPP3tDgP6f7iqxanAVSkw4DGMBLXACMUEQ4OF46uCi7SXNaG0i6mAS44XmSSALkRlFu08UMmyU/PxRKXRrt5e1+Ftt1/tOceycRCenrwwOYCWtc2JI6QcJ9pUH8UGoLSi9tKrruG4Q3fPfEQsbSNLqVDznHsyHgjOg7kPACZCHZMpNjIyjsY3rRKFNSqOsYhLNQKjIF+48Ft6j1tjPJvPOjmn7Q/wDJYlVpc23hx71Qqc0gjEIvPA/BFjp6ME65PQ9qnWbUDSeNxPhke5WXbWAZ05PAO9Qs06XDo1c1X/uDv9xXF1NriTFOkM4l7j4kAZd6bUuuNKdWDaj2FpD5DW3Fja10pNoemfSWfbb/ANgkuO5d3D2SkjO6vthRPK0wTP1cGbjpO3lc/odGLXvlbLgPhHWF1W2dMmo2MsA7ek6FgBoLSfkEb1IdgqYza4AxOV+5E5EG3ejNpgkE3mx9VHBDhmd37eaoakwxB7PT3JhzSfMQpPMGO/58UWocTezMdXEIgbIMhSgFDZSczO43H1RTx3FAGpQ9EFgnuV4ttIzj3Kk4w6eIRmiBKk1sXUw2bqxyQhEoENCg5n+FYbT8UsHFClMsOdk4pSrPJwfnwUALwqUFg3fJQHtAsrhYZzg59qG6iZyjv+YUKA5K1s98IbacK4y3zx6k2lYdyFI6N1qNQQSh0KoGatim3M34otKOLdO+R4XCHpjJA6s53Si16QBi2/5lDqtlsYotvv3e5LKZ9fRMnDLtv2KOhuBIxZT3dvz/AIsNfzHNmDm3uuR7lSp0ry080m3V1Gfm6qUs0hGMZOibGMrrX2RqTpbHTBwvmxywG6y8FnEcIIzifgYse7NXtlKc6VTi1n368JnsSVp6fyw6v+37plm4n8PJqSw1SltYPrqfWyPacsKk2zge3vVTbTWNUVWDEegPzHfmucdp7ybudf8AuKkZdOs4V061rsIB7/I38lQbrWlPS38D5WWBik5kqZaD/V5GEtNXSO0ym6cLwczwt3oVPT6cSHgEHruFzzKDptfsmfBEdo5BALXCcrEeUSVbNW6deMLSMDpGUAQd1r2S0bWzDzXjBvBNx3kZd6xnaM8HeJMXODtHO7U1TR8JguHmR45Jaatxus6fRxjOxvFrZxH+EdtEVBLHCRumfBcyaW4X8D7lAtFiO3/HmlpOLrNHEW3hW3XErjaVUgnnkdYJlH0fWtVs88ntgjzEq2lOmDv8pOIz3+8LnP8AWqu8N8/VEGuCbFvgfhCWatxtUZHemLd4WRS1owgB0g9noiDWtMZGd9tyWlNQibj5P7qNRwhV2awY6MJv3jrUalUxLYzzsR4oUlhIzmY8UF9IhONIkXGQ3SO5EpOluUTvme5ClXBBzz3f4yWjoNRrgWuEEbuPXZCGjdZBtI39yM5kQ4dIeYRaRqaI0khp7uPYVmU2Qbg+nV2LSeYdIyNx37kWrRDxiHS3j7Q7OKLTNr6H/XTEtMW4HeI3LObLSWxaYyNhlK2KLsLiP6TmPce0IGn6NBxHomxOfeiUagG2bHOEi/8AU3h1iw8FobLaO36Y21occh9lwj4dywKTXNc2JLePDgF1OzrMVdpGZDu44T5GPmEkdtyLOrxCZZ+Gr9gpli26cHtvesz/AIx+Zy514kZepuSTK6LbSn9bT62fqKwH1edIG+QsYz075x/VIAbHFEuOv538Cp4YMm/GVOwb1knwtHmtWxQMGJRaVQg28bp8CQYUspKd/wC/vTucTeSoYFJqlrRyO7ssk5xPjM9fFEeG5Xy6plDDEtNTVrjKLzbrzHZKi0Wy8vijQYj35ppVs1NyeUZ79/kVB+UwO6QfAFHdWkXAECLDPtM3Q21SDPfcA+9LTULlGuN7TEk+9DHNdYiQcxcdoJHmrJGLOJnsnxsFVcxW0nEarpr5JxObiuQwkN8OKgNOdOciCIlwjrF896AZUIVZpfp6yqfaMdx94Kt0dZkNjPj0R4CAsZpTuqRvUtabdPWtQnm4bZE28Ti9y0DrQhsw0kXID2DvALp7oXIHSh29ydusC0yAZ8EOnV6XrAt6dNzQciZAy3SL7lLR9a0wQCcJzBPXx4fuuTOsDItlEXyjL3lFqa3c4YXPfG6SXRaLK2VDr6jmuMtIPEAgx+ykBaD0fcuR+nywNBZIiCGMBPaYmevej0dNqtyfzeu4ullN76JhPVu+EFbGyP8A7hs8H+OEg+K412sKxAEnjlnne26xFuCv7LaY/wClN5xyfYH+0qTkulvXMPUkud+nVPtHxCdY3hrwy5DbcfXM/wCP9TlzwYuh23P1zP8Aj/U5c8fnrWcfTtlHcmMZD5hSTKRGSrNHa5OCnapYUWjETCXJdqdoU0soN9MAwEi1FhKFLXUGCmxFGwJEdSWmoQKTQD1KRCC5WyjuI3lBqP4BPhSwJaUCSVAhGeAhELUMTATn8FEtU3NUSxVKQw7kJ87iFaDVFzQlmqm8lRxOO9W3diiGJaaq5Bj9k7K7m7+5GLFF9PqSylihps2cDHV82XQbK6Zi0mniMwHDdlhPFcuGdS0dmz/MN7HflKk+msfcPV/pVLh5tTrlsHb4n1SXF6KB20H1zP8Aj/U5c6ui21/3Wfg/U5YOEK4z0mUdmaSihqamEdoCTJQYCdo4KcpoS1NbeFMNCQYlhUspLAEzmAb1MGyGWpYYNSJGQzUsKRCAZYocmFZDN5QKgQoJ7QEJ10XDKiWLUSzMBcmmcxGaxMQraaq2BNh+clY5NM4JZqrFqZzbIjgo24paUGWZIbqZR4SlWylc0znCbCrJcVB7UtNVR5O73K9s4P5hvY78pQSxamzVL+Yb2O/KUnLpccbyh0+DrHz3pK19EPHySXn2erRn7aD61n4P1OWDC3dsh9az8H6nLFaFcZ6cp9mDUgCitapwrZQXJniptb8lSAUgllGhOGp8Km0KWtB4FINUyFE2SyjcmkSBkkSSokKhonNDc1GDSULSS1jS55DWgSSTAA4q2lIBvD3IjWDgo0CHAOaZBEgjIgiQZRSpaoOo9cIL2AKwWoLmJZQJKG7I2RoCYuFwraUpkJYVYLQoE8FdildTLZRWsTyBwTZKVsCfAjYxwTOqcAllAli0tmWH6Szsf+UrPLitDZl5+kt7H/lKzll1LWEf1Q7aDwKSXKFJebZ7dZZO2dP61n4P1OWE1q6vbWl9az8H6nLnxS6l0xnp4se4tXAUoReTUuTV2aoBrEZlNFYzqU2NnK6WUDgShXBTSNBLWlMtTYFdNFRNJLKVISwo2lAMY55ya1zjus0Em5tuXMaPtxoha1zy9mIuF2zhw4elhJzDgbTkVqImfTGWWOPuXRBqp64oB9Gq11gabwTnALTcDqVnTNPo0WcpUqAN3XkmxdAAuTANl5ztDthWrEtpfVUiCIgOc8GxxEgjuHiVrjxyynpjl5McI7dfshQLdDotcZMEnMxLicN8i2cJG4grZFJedau26rU3lzmU3NecTmgYL4WtLmuExOGbzcnJdfoe12iVY+tDDlFTm7gekbb4zVzwzibpOLl45iIv00XhDeCrGmVGUm4qj2sF7uMeHHuXPUNr9FJqhzsIY6Gm7uUbYYmgDjNuF1ziJn1Drlljj7lqGmoGkU1DXWi1HYW12EwDnGZgQTneLDiOK0TRSbj2sTE+meKSc04V40VA6OeClrSg9pQzSK0uQTGgrslMzAn5NX3UIQ3QN3xTYpUNNX9mW/zLLbnflKASOHktPZZ/8yzsf+UqZT1JHUur5I8Eld5RJeZ28k/Hz5tXtbX0o03GWuAu4PJJhxIwz0M8lnUNp9Kb0akHu92WazNMBkbrfFADF9mOPCIqnwvLnPdt3WW01fSKTaNRwgOxFwlpdbougwb37laftjpXJcjyjcgOUDTyoG/nTHfE9a5gmOMpY7ynjx+L5s/ro6G2GmMkcvMwZc1pNtw5tp3/AATai2mqaPTdTa8wXYp4ExMWtPvXO2UZSePGeqI5s4m7dzQ2xeJ51S/903txyCFU2pJFnVDxDnkjsEFchyxiPnsU+XOUC/zvWPDi6fk5fXUUdpnsdLHuaOG4jhdGdt9pFoIgZktaScupcgXEZgfFNypz+KeHH4n5Gf1o6w15pFc/W1XuGQEwIkm7Rbed3Us3AiF8xu7ZTsIIv710iK9OUzc9yGGnNRMoziN8qJjOLcT6K2lIyd6e4uPJOKg4QnDp/ZBEVTvnhvyTGTef3U8uKEB1e9Azh1LY0PTgabWOebTYyRe1u4AdyyccJY+xTLG1xy1np1lPayrTaGcqS0WFrgW35kIX8SPcJ5Z5Pa4fsFy5fKYHh89ax4cXX8jN2FHbGqxuHEHcC+58d6Do+2VVsDESGtwiwPe7i7rXMUnxuU2YSbyBHBrr9lrKeLH4efP66XTttK74wYWEHcJnqIcSFX0fa7SGtwudiuTigYrkmDNoG6AFhSwWz64I8pTOHCPNXx4eqSebku7bx2rqG0uI7Wg+MLV1Jt0+nVD8LTGLpNnMEf0m/wC64mD8wjaNJcAeHkk8WE/ojn5I/b0z/wBTqvAf9AkvPuR+Z/ZMsfj8Xw/K5lTSxcdnxVdaGmaO4njbiPigfQXjcPEe8LvblqrEJKzU0Vzd3mMlMaE4iQAe8T/hLKU08hWKmjFuY7pSGhuibR+ID3paUrYvm6QcrDdGJ6u0hM7Qn8OrpNKWUBi+c0ysN0JxyHmFF2iEK2lAAp5VhuiO/t/7N9VI6A+Jt4hLhalWxKRqGEcaDUzwjxB8gVF2hP8As+5S4WpANRSpFSOiu4eYS+iuG7zCrNmkhRIKI+i/h5pho7uF+5FuEQ8bxKi543BFdoruCR0N8TFuKdADTvRmvHZ3qP0d3DzS5A8PNKSMqSdh+SngfJUBo7vkpDR3cEo2SJHX4IXeicg75hNyLvkpROSQfKPoZGMX4+5VeRdwU6LCDKUbtaRxCdZ+PqCSmrPlXn9Jveo1el4e5JJZh1kLTuke34IQSSXSPUOGX90kr2hdF34Skks5+m+H+5Ef7jUV2Z70ySxLrH7/AJVG7+xKhvTpLc+nGPcJ6Lme73qFTPwSSU/bf+MJUemEej8fRJJZya4wKnT7vgVbfmPwt9wSSSf0uP7/AJPV6X/5j8oVc9J/afinSWcfTWfv/qdbPwVavn3pklvBz5AH5lQ4p0l1h5p9ibgnd8+CSSjZgmb8AmSRDDcmdmkkqyikkkiP/9k=',
      audio:
        'https://dl.vmusic.ir/2020/06/VA - Deep House Summer Essentials 2020 - EDM Comps (2020)/128k/03) Meeting Molly - Middle Earth - 2020.mp3',
      genre: 'house electronic',
      duration: ':'
    },
    {
      title: 'Perception',
      artist: 'Jay Fm',
      cover: 'https://f4.bcbits.com/img/a3517170947_65',
      audio:
        'https://dl.vmusic.ir/2020/06/VA - Deep House Summer Essentials 2020 - EDM Comps (2020)/128k/05) Jay Fm - Perception - 2020.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Exploring The Mind',
      artist: 'Ltn & Ghostbeat',
      cover:
        'https://i1.sndcdn.com/artworks-epjigeck4UQ56i7o-ALk1nA-t500x500.jpg',
      audio:
        'https://dl.vmusic.ir/2020/06/VA - Deep House Summer Essentials 2020 - EDM Comps (2020)/128k/09) Ltn & Ghostbeat - Exploring The Mind - 2020.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Obsession',
      artist: 'Jay Fm',
      cover: 'https://f4.bcbits.com/img/a3818425134_10.jpg',
      audio:
        'https://dl.vmusic.ir/2020/06/VA - Deep House Summer Essentials 2020 - EDM Comps (2020)/128k/16) Jay Fm - Obsession - 2020.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Dune (Mixed)',
      artist: 'Dekkai',
      cover:
        'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/66/5c/0a/665c0a17-081d-0aae-c983-24335a902e5d/cover.jpg/400x400bb.webp',
      audio:
        'https://dl.vmusic.ir/2020/06/VA - Colorize Ibiza 2020 mixed by Boxer (DJ MIX) (2020)/128k/03) Dekkai - Dune (Mixed) - 2020.mp3',
      genre: 'house electronic'
    },
    // {
    //     title: 'JOOF Radio 32',
    //     artist: 'John00Fleming',
    //     cover: 'https://i1.sndcdn.com/artworks-1T6wCUB1Wp3750cP-YdzegQ-t500x500.jpg',
    //     audio: 'https://s32.picofile.com/d/8478708426/ab25e8ba-cb54-406d-aba3-6baad6b584f1/John_00_Fleming_JOOF_Radio_32.mp3',
    //     genre: 'electronic house mix',
    // },
    // {
    //     title: 'The Art Of Sound Episode 12',
    //     artist: ' AFX',
    //     cover: 'https://i1.sndcdn.com/artworks-6ddxIsShG5jwBn8x-8TOatA-t500x500.jpg',
    //     audio: 'https://s32.picofile.com/d/8478707600/50389c93-cc84-4482-a784-a758c3c36025/The_Art_Of_Sound_Episode_12_With_AFX.mp3',
    //     genre: 'electronic house mix',
    // },
    // {
    //     title: 'Cry For You',
    //     artist: 'Andy Timmons',
    //     cover: 'https://forgottenguitar.com/wp-content/uploads/2015/11/screen-shot-2015-11-27-at-20-28-41.png',
    //     audio: 'https://s32.picofile.com/d/8478709018/dd12f0f7-ced3-4f7b-ae1a-05a36a1a4d49/11_Cry_For_You_live_.mp3',
    //     genre: 'rock guitar solo',
    // },
    // {
    //     title: 'Violet Hill',
    //     artist: 'Coldplay',
    //     cover: 'https://upload.wikimedia.org/wikipedia/en/2/27/Violethillcover.jpg',
    //     audio: 'https://s32.picofile.com/d/8478709042/957dbdec-9b13-47a6-a0b0-c7981a34b914/Coldplay_Violet_Hill.mp3',
    //     genre: 'rock',
    // },
    // {
    //     title: 'Rave Podcast 129 (September 2021)',
    //     artist: 'Daniel Lesden',
    //     cover: 'https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL2xnL2RhbmllbGxlc2Rlbi5qcGc_ZGF0ZVVwZGF0ZWQ9MTY2NzIwOTU1MzAwMA==',
    //     audio: 'https://s32.picofile.com/d/8478709126/48d2ea55-3c1d-41fe-90ba-1d0dc2515647/Daniel_Lesden_Rave_Podcast_129_September_2021_.mp3',
    //     genre: 'electronic trance techno mix rave',
    // },
    // {
    //     title: 'Rave Podcast 127 (July 2021)',
    //     artist: 'Daniel Lesden',
    //     cover: 'https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL2xnL2RhbmllbGxlc2Rlbi5qcGc_ZGF0ZVVwZGF0ZWQ9MTY2NzIwOTU1MzAwMA==',
    //     audio: 'https://s32.picofile.com/d/8478709384/cfea1500-6fb7-42f6-8117-b204400b1126/Daniel_Lesden_Rave_Podcast_127_July_2021_.mp3',
    //     genre: 'electronic trance techno mix rave',
    // },
    // {
    //     title: 'Rave Podcast 111 (March 2020)',
    //     artist: 'Daniel Lesden',
    //     cover: 'https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL2xnL2RhbmllbGxlc2Rlbi5qcGc_ZGF0ZVVwZGF0ZWQ9MTY2NzIwOTU1MzAwMA==',
    //     audio: 'https://s32.picofile.com/d/8478709618/3d8ac5ad-931f-4d65-851c-5323aa63c227/Rave_Podcast_111_March_2020_.mp3',
    //     genre: 'electronic trance techno mix rave',
    // },
    // {
    //     title: 'Fever',
    //     artist: 'Just Us',
    //     cover: '',
    //     audio: 'https://s32.picofile.com/d/8478709634/81594d98-452b-467d-8c47-0255be4942f4/Just_Us_Fever.mp3',
    //     genre: 'electronic house',
    // },
    {
      title: 'Afterglow',
      artist: 'Interplay Records',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Interplay-Records-Interplay-Radio-Episode-513-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Interplay Records - Interplay Radio Episode 513 (2024)/128k/06) Interplay Records - Afterglow (Interplay 513).mp3',
      genre: 'electronic techno'
    },

    {
      title: 'You can get lost among the good old movies',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Konstantin-Tyufyakin-Unnamed-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Konstantin Tyufyakin - Unnamed (2024)/128k/01) Konstantin Tyufyakin - You can get lost among the good old movies.mp3',
      genre: 'relax',
      duration: '00:2:25'
    },
    {
      title: 'Evolution',
      artist: 'Interplay Records',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Interplay-Records-Interplay-Radio-Episode-513-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Interplay Records - Interplay Radio Episode 513 (2024)/128k/03) Interplay Records - Evolution (Interplay 51).mp3',
      genre: 'electronic trance',
      duration: '00:3:40'
    },
    {
      title: 'Atlantis',
      artist: 'Interplay Records',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Interplay-Records-Interplay-Radio-Episode-513-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Interplay Records - Interplay Radio Episode 513 (2024)/128k/04) Interplay Records - Atlantis (Interplay 513).mp3',
      genre: 'electronic trance',
      duration: '00:3:04'
    },
    {
      title: 'Serotonin',
      artist: 'Interplay Records',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Interplay-Records-Interplay-Radio-Episode-513-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Interplay Records - Interplay Radio Episode 513 (2024)/128k/17) Interplay Records - Serotonin (Interplay 513).mp3',
      genre: 'electronic trance',
      duration: '00:4:10'
    },
    {
      title: 'Second Sunrise',
      artist: 'Global DJ Broadcast Weekly Drive 31',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Markus-Schulz-Global-DJ-Broadcast-Weekly-Drive-31-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Markus Schulz - Global DJ Broadcast Weekly Drive 31 (2024)/128k/01) Daxson - Second Sunrise (GDJB Weekly Drive 31).mp3',
      genre: 'electronic trance',
      duration: '00:4:01'
    },
    {
      title: 'Hagelslag ',
      artist: 'Global DJ Broadcast Weekly Drive 31',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Markus-Schulz-Global-DJ-Broadcast-Weekly-Drive-31-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Markus Schulz - Global DJ Broadcast Weekly Drive 31 (2024)/128k/02) ReOrder, First Effect - Hagelslag (GDJB Weekly Drive 31).mp3',
      genre: 'electronic trance',
      duration: ':'
    },
    {
      title: 'I Do It For You (Everything I Do)',
      artist: 'Bryan Adams',
      cover:
        '',
      audio:
        'https://ts2.tarafdari.com/contents/user6984/content-sound/36.bryan_adams_-_everything_i_do_i_do_it_for_you.mp3',
      genre: 'pop rock',
      duration: ''
    },
    {
      title: 'Atlantis',
      artist: 'Tycoos',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Tycoos-Future-Horizons-441-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Tycoos - Future Horizons 441 (2024)/128k/03) Tycoos - Atlantis (Future Horizons 441).mp3',
      genre: 'electronic trance',
      duration: ''
    },
    {
      title: 'Doost Daram Zendegi ro',
      artist: 'Sirvan',
      cover:
        'https://upmusics.com/wp-content/uploads/2017/07/Sirvan-Khosravi-Doost-Daram-Zendegiro.jpg',
      audio:
        'https://dls.music-fa.com/tagdl/downloads/Sirvan%20Khosravi%20-%20Doost%20Daram%20Zendegiro%20(128).mp3',
      genre: 'pop',
      duration: ''
    },
    {
      title: 'Tanha Nazar',
      artist: 'Sirvan',
      cover:
        'https://www.ganja2music.com/Image/Post/7.2019/Sirvan%20Khosravi%20-%20Tanha%20Nazar.jpg',
      audio:
        'https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Tanha%20Nazar%20(320).mp3',
      genre: 'pop electronic',
      duration: ''
    },
    {
      title: 'No Step On Wing',
      artist: 'Nils Frahm',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/03/Nils-Frahm-Empty-2020.jpg',
      audio:
        'https://dl.vmusic.ir//2020/03/Nils Frahm - Empty (2020)/128k/03) Nils Frahm - No Step On Wing - 2020.mp3',
      genre: 'relax piano ambient',
      duration: ''
    },
    {
      title: 'What I’ve Done',
      artist: 'LinkinPark',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yAY8vyC_ADH0A3tkOFqiDUBk5dVK3yUaRg&s',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/04/Linkin-Park-What-Ive-Done.mp3',
      genre: 'rock metal',
      duration: ''
    },
    // {
    //     title: 'Abri',
    //     artist: 'Farvardin',
    //     cover: 'https://i1.sndcdn.com/artworks-JPQ7KL2kKbzxt59y-rDIPiw-t500x500.jpg',
    //     audio: 'https://cf-media.sndcdn.com/sTEmf0J8H8TO.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vc1RFbWYwSjhIOFRPLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzI0NTQxNDU1fX19XX0_&Signature=InCjE8zBPpbOat~UieLY1FxrMJG6BIeUF1691S7UVrL9bA2N4FtWrgIQeq~jKJkQJlyG-YP4gmCzy4Ovm31S57y514Xh4ChYOGNWTVyeZWU8b5tX8sYDOOiS03ESuITAkb4XA5rF73vkkBe9omV3puOPm8nR~j2jk0R0BFRCPu90bFV5-vfo7nOoZ4ZeVGkqeafqvjXPQmnzdqn-IGwtlcSL7eFKvE~U5Rs4ERSqSNmO4AWvQhnbAVvKjLV1IdJsn5o0RDRL6KyKLIfZgYjc6IGqwjBw33zbNGT-uHFiaFNoyloypl10lUHUgQ-hATInAtdhwZqdcaRsjCmFhRskPA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    //     genre: 'pop',
    // },
    {
      title: 'Buck dich',
      artist: 'Rammstein',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdCo_0hF5SiwaeLEhHVEbKs6rw3qGG-tePQ&s',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/03/Rammstein-Buck-dich.mp3',
      genre: 'rock metal',
      duration: ':'
    },
    {
      title: 'In the End',
      artist: 'LinkinPark',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwGBA3Zch4vi2eD2aEH_Cq136VyvxSQHHDA&s',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/04/Linkin-Park-In-the-End.mp3',
      genre: 'rock',
      duration: ':'
    },
    {
      title: 'Somewhere I Belong',
      artist: 'LinkinPark',
      audio:
        'https://dl.ememay.ir/Music/Linkin-Park/Meteora-Bonus-Edition/Somewhere-I-Belong-Linkin-Park-320.mp3',
      cover: '',
      genre: 'rock ',
      duration: '',
      star: 4,
      reference: ''
    },
    {
      title: 'Khanom Gol',
      artist: 'Ebi',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIfO_ydjF7ly2z_kVJOZt5ssTf1hODhSRuP-AS8eJGnTpOv5rFzP7ZpFzmIzrvwoXBbc&usqp=CAU',
      audio:
        'https://dl.shabamusic.com/Music/1402/09/19/Ebi - Khanom Gol (128).mp3',
      genre: 'nostalgy',
      duration: ':'
    },

    {
      title: 'You',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/01) Rostislav Khalikov - You.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Melody Box',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/02) Rostislav Khalikov - Melody Box.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Awakening',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/03) Rostislav Khalikov - Awakening.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Echo of the First Love',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/04) Rostislav Khalikov - Echo of the First Love.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Memories',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/05) Rostislav Khalikov - Memories.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Night Dream',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/07) Rostislav Khalikov - Night Dream.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Good Night',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/10) Rostislav Khalikov - Good Night.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Your Smile',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/16) Rostislav Khalikov - Your Smile.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Magical Woman',
      artist: 'Rostislav Khalikov',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Rostislav-Khalikov-Waiting-for-a-Miracle-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Rostislav Khalikov - Waiting for a Miracle (2024)/128k/19) Rostislav Khalikov - Magical Woman.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'sahdana',
      artist: 'Ildio',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/ildio-sahdana-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/ildio - sahdana (2024)/128k/01) ildio - sahdana.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Surya namaskar',
      artist: 'Ildio',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/ildio-sahdana-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/ildio - sahdana (2024)/128k/02) ildio - surya namaskar.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    // {
    //     title: 'Maste Cheshat',
    //     artist: 'Farvardin',
    //     cover: 'https://i1.sndcdn.com/artworks-hgLIhtAvtsVE-0-t500x500.jpg',
    //     audio: 'https://cf-media.sndcdn.com/024Z8rUxjRF0.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMDI0WjhyVXhqUkYwLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzI0NTQ1MDk2fX19XX0_&Signature=EbcwBFiCvopzqG0ZbfKshq5UxnDsB-wXjAi85UyNylJOKL9jjQGoaf~rq9NWzPJq9TIAuos-LNEcGWA97nE9a-Ihnzv0PRJzIyQ1jXX~~RB6lPkHZn0kYSTJhd63n-XhI8mCcJlyFCnLrlF6IfIbDwqfZGlcNP4abTWmj1R7N64-MwbwGcaJq0ticLwQfGuI05G6H~5dbfnl6aeXqgWhYOLGQaWHEHBIaTZq9b06J0CozmOfW6xucCN938Sb04YKU9Q8xuvfg5VfkG1gZrrTPW674X9cpm6HHxdrzZGtTgOLeqMvvKiKxVyf4q37WBNAcftrN~gUNl~o4MkC4LDnMQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    //     genre: 'pop electronic',
    // },
    // {
    //     title: 'Never Alone',
    //     artist: 'Carbon & Lampé',
    //     cover: 'https://i1.sndcdn.com/artworks-MEy6VBgvP1BMdtsR-PPz8jA-t500x500.jpg',
    //     audio: 'https://cf-media.sndcdn.com/a2geNGn3kFjU.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vYTJnZU5HbjNrRmpVLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzI0NTQ1NDI5fX19XX0_&Signature=Ovq-Cfe9DwKhEaFLB2B3pTSFrcF6aWEZmJ46Ymrrj1VdKjuJ7d6771N03BigwOdLJxo~~6fLDeCDyPDIo4uGMUm0yDWNafLaMdTbbkI734BMq03Ntb7TFyMCbHwrVzCrzMyVg4QnSbIGnnBVcgtkOtMAT7hdwhQRXSv5WwetDFCe3dGRD8Q1aORhdfxmOBQCPCAbFgoidpC7LHKs0iaGlRoDjyc~TGXFoJpgLREJqJrBf1eg4kh7ozRbDJdmO7nXTZVSTOh~UKBvpo7ZN8rlsY1OjSQ9CnnQKecoYECR1mPfYV-qM3k-GPsoS-6C9e7~pCvsnGt3GSCPPKT1ePHpiA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    //     genre: 'electronic techno',
    // },
    // {
    //     title: 'All of my music is on Spotify',
    //     artist: 'Wind',
    //     cover: 'https://i1.sndcdn.com/artworks-000033182580-ja3l0t-t500x500.jpg',
    //     audio: 'https://cf-media.sndcdn.com/gfihOXhUVnpV.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vZ2ZpaE9YaFVWbnBWLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzI0NTQ1OTkyfX19XX0_&Signature=PIwhLXLr-DggbJJlF1X5JfnIZONkaxH2Z3pUudPk-a3b24IjPIALkJb0eiMrAIRLTLrC4agsWTRunK0akfAGG~FliCdq28KdIN6xA66DEBunZ2hslb06qmaka32VuRWa~Awm-vQtV5sqVG0LQ27AlWc9Gnm-FSdejUtUiGrZg~FyeI08Yde9loaMGG--8uJKRWwyVe4BovRTB~dxW5YzrNt5~m6Vgsebwt4u9qKC6Tw6MRz-fRzHAEndaa042yrjUsCAXFmxzPSUh7arvE2fbXt6A4Ri8HGIJJVNcPux6kHU2Gb5Dq7Ggb-cAgNfj4BNNAfrHRA4u44NMIc8tjntjg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ',
    //     genre: 'relax piano',
    // },
    {
      title: 'The Love',
      artist: 'Florews',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Florews-Cinematic-Piano-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Florews - Cinematic Piano (2024)/128k/01) Florews - The Love.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Tension to Relief',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Various-Artists-Changes-Human-Stories-Factual-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Various Artists - Changes - Human Stories & Factual (2024)/128k/01) Theo Vidgen - Tension to Relief.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Struggle to Survival',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Various-Artists-Changes-Human-Stories-Factual-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Various Artists - Changes - Human Stories & Factual (2024)/128k/02) Isabella Catherine Lau - Struggle to Survival.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Expectation to Arrival',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Various-Artists-Changes-Human-Stories-Factual-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Various Artists - Changes - Human Stories & Factual (2024)/128k/03) Angus Thomas Nicholson - Expectation to Arrival.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Calm to Busy',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Various-Artists-Changes-Human-Stories-Factual-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Various Artists - Changes - Human Stories & Factual (2024)/128k/05) Chris Doney - Calm to Busy.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Introspective to Optimistic',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Various-Artists-Changes-Human-Stories-Factual-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Various Artists - Changes - Human Stories & Factual (2024)/128k/07) Joshua Benjamin Pacey - Introspective to Optimistic.mp3',
      genre: 'relax piano',
      duration: ':'
    },
    {
      title: 'Pacha Mama',
      artist: 'Galardo',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/12/Galardo-Pacha-Mama-2020.jpg',
      audio:
        'https://dl.vmusic.ir/2020/12/Galardo - Pacha Mama (2020)/128k/Galardo - Pacha Mama.mp3',
      genre: 'house electronic',
      duration: ':'
    },
    {
      title: 'Middle Earth',
      artist: 'Meeting Molly',
      cover:
        'data:image/jpeg;base64,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',
      audio:
        'https://dl.vmusic.ir/2020/06/VA - Deep House Summer Essentials 2020 - EDM Comps (2020)/128k/03) Meeting Molly - Middle Earth - 2020.mp3',
      genre: 'house electronic',
      duration: ':'
    },
    {
      title: 'Perception',
      artist: 'Jay Fm',
      cover: 'https://f4.bcbits.com/img/a3517170947_65',
      audio:
        'https://dl.vmusic.ir/2020/06/VA - Deep House Summer Essentials 2020 - EDM Comps (2020)/128k/05) Jay Fm - Perception - 2020.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Exploring The Mind',
      artist: 'Ltn & Ghostbeat',
      cover:
        'https://i1.sndcdn.com/artworks-epjigeck4UQ56i7o-ALk1nA-t500x500.jpg',
      audio:
        'https://dl.vmusic.ir/2020/06/VA - Deep House Summer Essentials 2020 - EDM Comps (2020)/128k/09) Ltn & Ghostbeat - Exploring The Mind - 2020.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Obsession',
      artist: 'Jay Fm',
      cover: 'https://f4.bcbits.com/img/a3818425134_10.jpg',
      audio:
        'https://dl.vmusic.ir/2020/06/VA - Deep House Summer Essentials 2020 - EDM Comps (2020)/128k/16) Jay Fm - Obsession - 2020.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Dune (Mixed)',
      artist: 'Dekkai',
      cover:
        'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/66/5c/0a/665c0a17-081d-0aae-c983-24335a902e5d/cover.jpg/400x400bb.webp',
      audio:
        'https://dl.vmusic.ir/2020/06/VA - Colorize Ibiza 2020 mixed by Boxer (DJ MIX) (2020)/128k/03) Dekkai - Dune (Mixed) - 2020.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Luminous',
      artist: 'Tycoos, Deme3us',
      cover:
        'https://cloudinary-cdn.ffm.to/s--7QYXSxPT--/w_1108,h_1108,c_lfill/f_jpg/https%3A%2F%2Fimagestore.ffm.to%2Flink%2F33be0ebabb6ea6ed6bdfd1141f37602e.jpeg',
      audio:
        'https://dc.vmusic.ir/2024/05/Fitness & Workout Vol 26/128k/02) Tycoos, Deme3us - Luminous.mp3',
      genre: 'trance electronic'
    },
    // {
    //     title: 'JOOF Radio 32',
    //     artist: 'John00Fleming',
    //     cover: 'https://i1.sndcdn.com/artworks-1T6wCUB1Wp3750cP-YdzegQ-t500x500.jpg',
    //     audio: 'https://s32.picofile.com/d/8478708426/ab25e8ba-cb54-406d-aba3-6baad6b584f1/John_00_Fleming_JOOF_Radio_32.mp3',
    //     genre: 'electronic house mix',
    // },
    // {
    //     title: 'The Art Of Sound Episode 12',
    //     artist: ' AFX',
    //     cover: 'https://i1.sndcdn.com/artworks-6ddxIsShG5jwBn8x-8TOatA-t500x500.jpg',
    //     audio: 'https://s32.picofile.com/d/8478707600/50389c93-cc84-4482-a784-a758c3c36025/The_Art_Of_Sound_Episode_12_With_AFX.mp3',
    //     genre: 'electronic house mix',
    // },
    // {
    //     title: 'Cry For You',
    //     artist: 'Andy Timmons',
    //     cover: 'https://forgottenguitar.com/wp-content/uploads/2015/11/screen-shot-2015-11-27-at-20-28-41.png',
    //     audio: 'https://s32.picofile.com/d/8478709018/dd12f0f7-ced3-4f7b-ae1a-05a36a1a4d49/11_Cry_For_You_live_.mp3',
    //     genre: 'rock guitar solo',
    // },
    // {
    //     title: 'Violet Hill',
    //     artist: 'Coldplay',
    //     cover: 'https://upload.wikimedia.org/wikipedia/en/2/27/Violethillcover.jpg',
    //     audio: 'https://s32.picofile.com/d/8478709042/957dbdec-9b13-47a6-a0b0-c7981a34b914/Coldplay_Violet_Hill.mp3',
    //     genre: 'rock',
    // },
    // {
    //     title: 'Rave Podcast 129 (September 2021)',
    //     artist: 'Daniel Lesden',
    //     cover: 'https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL2xnL2RhbmllbGxlc2Rlbi5qcGc_ZGF0ZVVwZGF0ZWQ9MTY2NzIwOTU1MzAwMA==',
    //     audio: 'https://s32.picofile.com/d/8478709126/48d2ea55-3c1d-41fe-90ba-1d0dc2515647/Daniel_Lesden_Rave_Podcast_129_September_2021_.mp3',
    //     genre: 'electronic trance techno mix rave',
    // },
    // {
    //     title: 'Rave Podcast 127 (July 2021)',
    //     artist: 'Daniel Lesden',
    //     cover: 'https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL2xnL2RhbmllbGxlc2Rlbi5qcGc_ZGF0ZVVwZGF0ZWQ9MTY2NzIwOTU1MzAwMA==',
    //     audio: 'https://s32.picofile.com/d/8478709384/cfea1500-6fb7-42f6-8117-b204400b1126/Daniel_Lesden_Rave_Podcast_127_July_2021_.mp3',
    //     genre: 'electronic trance techno mix rave',
    // },
    // {
    //     title: 'Rave Podcast 111 (March 2020)',
    //     artist: 'Daniel Lesden',
    //     cover: 'https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL2xnL2RhbmllbGxlc2Rlbi5qcGc_ZGF0ZVVwZGF0ZWQ9MTY2NzIwOTU1MzAwMA==',
    //     audio: 'https://s32.picofile.com/d/8478709618/3d8ac5ad-931f-4d65-851c-5323aa63c227/Rave_Podcast_111_March_2020_.mp3',
    //     genre: 'electronic trance techno mix rave',
    // },
    // {
    //     title: 'Fever',
    //     artist: 'Just Us',
    //     cover: '',
    //     audio: 'https://s32.picofile.com/d/8478709634/81594d98-452b-467d-8c47-0255be4942f4/Just_Us_Fever.mp3',
    //     genre: 'electronic house',
    // },
    {
      title: 'Afterglow',
      artist: 'Interplay Records',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/07/Interplay-Records-Interplay-Radio-Episode-513-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/07/Interplay Records - Interplay Radio Episode 513 (2024)/128k/06) Interplay Records - Afterglow (Interplay 513).mp3',
      genre: 'electronic techno'
    },

    {
      title: 'Apex (Santiago Luna Remix)',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/01) Paul Thomas - Apex (Santiago Luna Remix).mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'Note to Self',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/03) Paul Thomas - Note to Self.mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'Infinite',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/04) Paul Thomas - Infinite.mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'Feel',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/05) Paul Thomas - Feel.mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'Weights',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/07) Paul Thomas - Weights.mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'The Sound of Aurora',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/13) Paul Thomas - The Sound of Aurora.mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'Light',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/15) Paul Thomas - Light.mp3',
      genre: 'electronic techno house'
    },
    {
      title: '',
      artist: '',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIFMTW0JZEpolmImjVTLHxBd15f5O-lD1lg&s',
      audio:
        'https://dc.vmusic.ir/2024/07/VA - Top Singles Vol. 16 (2024)/128k/01) Mark Eliyahu - Unite.mp3',
      genre: 'relax light'
    },
    {
      title: 'Beyond Reach',
      artist: 'Focus FL',
      cover:
        'https://i1.sndcdn.com/artworks-uYVzYT7G61wPTxze-khj5ag-t240x240.jpg',
      audio:
        'https://dc.vmusic.ir/2023/08/Focus FL - Tunnel Vision (Radio Edits) (2023)/128k/03) Focus FL - Beyond Reach (Radio Edit).mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'In The Air Tonight',
      artist: 'Phil Collins',
      cover: "https://lh3.googleusercontent.com/BUN2UyKh2zhqbeY7H45L0rt1QMscwbHZE1uDIO_mQXPTe-xtOh-RD4thq_skuGlkXf8LEXSEjBtVVYFL=w200-h200-l90-rj",
      audio: 'https://cdn.mp3wr.com/?h=JGraYpdVSDUTvak6mFdcLMk8lomBd0irN749SHUtoXNUZNpVk2QxTg-Ri3KIIWAftRttyGgvm8swzZJ6Sew\ ',
      genre: 'rock pop'
    },
    {
      title: 'Another Day In Paradise',
      artist: 'Phil Collins',
      cover: 'https://i.scdn.co/image/ab67616d0000b27307b486f09d5c8352b5f66ea0',
      audio:
        'https://dl.musicdagh.ir/songs/best/collins/Another-Day-In-Paradise.mp3',
      genre: 'rock pop'
    },

    {
      title: 'Escape',
      artist: 'Monomy',
      cover:
        'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/4e/90/d54e9011-c427-2da4-194d-7af00ab92c97/4250523830745.png/1200x1200bb.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Chill Vibes 2 (Playlist)/01 Escape.mp3',
      genre: 'house electronic pop'
    },
    {
      title: 'Nina Young',
      artist: 'When Light Gets Dark',
      cover: 'https://i1.sndcdn.com/artworks-DTaCpOejJykS-0-t500x500.png',
      audio:
        'https://dl6.songsara.net/FRE/9/Chill Vibes 2 (Playlist)/04 When Light Gets Dark.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Morocco',
      artist: 'Soft Deep',
      cover:
        'https://songsara.net/wp-content/uploads/2024/08/Morocco-Soft-Deep.jpg',
      audio:
        'https://dl6.songsara.net/FRE/10/Soft Deep - Morocco (2024) SONGSARA.NET.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Gravity (feat. Laura Korinth)',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/01 Gravity (feat. Laura Korinth) (Edit).mp3',
      genre: 'electronic techno'
    },
    {
      title: 'Never Look Back',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/02 Never Look Back (Edit).mp3',
      genre: 'electronic techno'
    },
    {
      title: 'Spicy (feat. Ginger)',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/04 Spicy (feat. Ginger) (Edit).mp3',
      genre: 'techno techno'
    },
    {
      title: 'Vienna',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/05 Vienna (Edit).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Purple Noise',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/09 Purple Noise.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Darkness',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/10 Darkness (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Space Diver',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/12 Space Diver.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'To The Moon And Back',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/15 To The Moon And Back (Edit).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Take It Smart',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/16 Take It Smart.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Level One',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/17 Level One (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Atomic Heart',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/19 Atomic Heart (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Blue Lake',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/21 Blue Lake.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Thunderstorm',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/26 Thunderstorm.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Moondancer',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/27 Moondancer (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Memory of Water',
      artist: 'Priopy',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GyXcJODn32nKB-l-C2q8gdUBUCIyn_CzGA&s',
      audio:
        'https://dl6.songsara.net/FRE/9/The Best Of RIOPY (Playlist)/01 Memory of Water.mp3',
      genre: 'relax piano'
    },
    {
      title: 'I Love You',
      artist: 'Priopy',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GyXcJODn32nKB-l-C2q8gdUBUCIyn_CzGA&s',
      audio:
        'https://dl6.songsara.net/FRE/9/The Best Of RIOPY (Playlist)/02 I Love You.mp3',
      genre: 'relax piano'
    },
    {
      title: 'Leading Me On',
      artist: 'Peter Pearson',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl.songsara.net/FRE/2021/6/Peter Pearson - Pink Moon (2021) SONGSARA.NET/01 Leading Me On.mp3',
      genre: 'relax piano'
    },
    {
      title: 'Pink Moon',
      artist: 'Peter Pearson',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl.songsara.net/FRE/2021/6/Peter Pearson - Pink Moon (2021) SONGSARA.NET/04 Pink Moon.mp3',
      genre: 'relax piano'
    },
    {
      title: 'Out the Blue',
      artist: 'Pink Moon',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl.songsara.net/FRE/2021/6/Peter Pearson - Pink Moon (2021) SONGSARA.NET/05 Out the Blue.mp3',
      genre: 'relax'
    },
    {
      title: 'Elevation',
      artist: 'Ken Verheecke',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/10/Ken Verheecke - Elevation (2024) SONGSARA.NET.mp3',
      genre: 'relax'
    },
    {
      title: 'Gravity',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/02 Translation.mp3',
      genre: 'relax'
    },
    {
      title: 'Silence',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/03 Silence.mp3',
      genre: 'relax'
    },
    {
      title: 'Breathing Silence',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/05 Breathing Silence.mp3',
      genre: 'relax'
    },
    {
      title: 'Here',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/06 Here.mp3',
      genre: 'relax'
    },
    {
      title: 'Homesick',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/07 Homesick.mp3',
      genre: 'relax'
    },
    {
      title: 'Inside Outside',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/08 Inside Outside.mp3',
      genre: 'relax'
    },
    {
      title: 'Pretoria',
      artist: 'Nora',
      cover:
        'https://songsara.net/wp-content/uploads/2024/06/Pretoria-Nora-En-Pure-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Nora En Pure - Pretoria (2024) SONGSARA.NET/01 Pretoria.mp3',
      genre: 'techno house electronic'
    },
    {
      title: 'Now',
      artist: '',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/01 Now (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Trouble so Hard',
      artist: 'Umek, Matteo Vitanza',
      cover:
        'https://i1.sndcdn.com/artworks-yGGyLv9zhFMYMANl-BoT7MQ-t500x500.jpg',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/07 Trouble so Hard.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'My Gasoline',
      artist: 'Maddix, Feles',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRROVwM__szsOQ9ZLybqpxj6uwn62I0L8Q6w&s',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/08 My Gasoline.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Dusty',
      artist: 'Marek Hemmann',
      cover:
        'https://i1.sndcdn.com/artworks-fGCY54QC2LoZWkOX-9uENZw-t500x500.jpg',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/11 Dusty.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Joker',
      artist: 'Daniel Levak',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30ySqf9mQkwj_1BReGr9aSMQ5RXV41ix1Aw&s',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/21 Joker.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'The Captain',
      artist: 'Hijckd',
      cover:
        'https://i1.sndcdn.com/artworks-a9vx5Fr48yz3bMNb-dKvdIA-t1080x1080.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/05 The Captain.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Nirvana',
      artist: 'Reinier Zonneveld, Hi-Lo, Oliver Heldens',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkQilUDEkTbWeVEAiVOyGxP1TF-ThGKE-LQ&s',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/08 Nirvana.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Serenity',
      artist: 'Belocca, Nusha',
      cover:
        'https://i1.sndcdn.com/artworks-ILe4AyvUvE3aQ73y-tKTpBg-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/09 Serenity.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Analog Girl in a Digital World',
      artist: 'Jil Tanner',
      cover: 'https://i1.sndcdn.com/artworks-AaHOBsysJcgp-0-t500x500.png',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/10 Analog Girl in a Digital World.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Colonia',
      artist: 'Space 92',
      cover:
        'https://i1.sndcdn.com/artworks-XJvKdQ4NPF1dHfAP-KyUdyg-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/11 Colonia.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Astro',
      artist: 'Mario Ochoa',
      cover:
        'https://i1.sndcdn.com/artworks-3jA4RbSV1l7eh5Rl-X7GDxQ-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/12 Astro.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Silence',
      artist: 'The YellowHeads, HLGRMS',
      cover:
        'https://i1.sndcdn.com/artworks-WzCQ1EZBybFJnFup-4mAohg-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/01 Silence.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Pulchra',
      artist: 'Patrick Scuro',
      cover:
        'https://i1.sndcdn.com/artworks-Dytk8V0SIEcrrIsD-WJwFJw-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/02 Pulchra.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Finding Yourself',
      artist: 'D72',
      cover: 'https://i1.sndcdn.com/artworks-qZoPz7VROVHi-0-t500x500.png',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/03 Finding Yourself.mp3',
      genre: 'techno electronic'
    },

    {
      title: 'The Sound Of Space',
      artist: 'Enrico Sangiuliano',
      cover:
        'https://i1.sndcdn.com/artworks-0YG84bpgUJnSywie-x8rvcg-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/22 The Sound Of Space.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Loneliness',
      artist: 'AKKI',
      cover:
        'https://i1.sndcdn.com/artworks-xswm4bqZAtWsupLn-OzQD4Q-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/23 Loneliness (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'We All Unite',
      artist: 'Patrick Scuro, Celic, Sylvie Miles',
      cover:
        'https://i1.sndcdn.com/artworks-gJUcwYyImz7lVW7l-Hiq38g-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/24 We All Unite.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'You Are Mine',
      artist: 'Mha Iri',
      cover:
        'https://i1.sndcdn.com/artworks-s0HYlENBaYjzxFVP-hUP1rw-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/32 You Are Mine (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Mercury',
      artist: 'Hi-Lo, Space 92, Oliver Heldens',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBm9Tmx7yr6MbCC-zT7uLFqE81mOzcszoZZQ&s',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/33 Mercury.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Acid Voices',
      artist: 'Denise Schneider',
      cover: 'https://i1.sndcdn.com/artworks-8W5StelTEL1k-0-t500x500.png',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/35 Acid Voices.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Humans Love Me',
      artist: 'T78',
      cover:
        'data:image/jpeg;base64,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',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/40 Humans Love Me.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Into the Night',
      artist: 'Slin Bourgh, Marie Vaunt',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/41 Into the Night.mp3',
      cover: 'https://f4.bcbits.com/img/a1124458180_10.jpg',
      genre: 'techno electronic'
    },
    {
      title: 'UFOs & LFOs',
      artist: 'Layton Giordani',
      cover:
        'https://i1.sndcdn.com/artworks-VjE5z6tckdi2yXLM-N1ujHg-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/46 UFOs & LFOs.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Rave (Remix)',
      artist: '',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/51 Rave (Remix).mp3',
      genre: 'techno electronic'
    },
    // PAGE https://songsara.net/107495/
    {
      title: 'Apex (Santiago Luna Remix)',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/01) Paul Thomas - Apex (Santiago Luna Remix).mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'Note to Self',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/03) Paul Thomas - Note to Self.mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'Infinite',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/04) Paul Thomas - Infinite.mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'Feel',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/05) Paul Thomas - Feel.mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'Weights',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/07) Paul Thomas - Weights.mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'The Sound of Aurora',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/13) Paul Thomas - The Sound of Aurora.mp3',
      genre: 'electronic techno house'
    },
    {
      title: 'Light',
      artist: 'Paul Thomas',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/11/Paul-Thomas-UV-Noir-Dark-Nights-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/11/Paul Thomas - UV Noir Dark Nights (2023)/128k/15) Paul Thomas - Light.mp3',
      genre: 'electronic techno house'
    },
    {
      title: '',
      artist: '',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIFMTW0JZEpolmImjVTLHxBd15f5O-lD1lg&s',
      audio:
        'https://dc.vmusic.ir/2024/07/VA - Top Singles Vol. 16 (2024)/128k/01) Mark Eliyahu - Unite.mp3',
      genre: 'relax light'
    },
    {
      title: 'Beyond Reach',
      artist: 'Focus FL',
      cover:
        'https://i1.sndcdn.com/artworks-uYVzYT7G61wPTxze-khj5ag-t240x240.jpg',
      audio:
        'https://dc.vmusic.ir/2023/08/Focus FL - Tunnel Vision (Radio Edits) (2023)/128k/03) Focus FL - Beyond Reach (Radio Edit).mp3',
      genre: 'electronic techno house'
    },

    // {
    //   title: 'Easy Lover',
    //   artist: 'Philip Bailey ft. Phil Collins',
    //   cover: 'https://lh3.googleusercontent.com/wTXvYmIuXs6giffNevgamlwI9o5q7MQMforfk0igktDkXPSc__V1Hnbc72UKdmkBodzaLua8OWfsvg=w200-h200-l90-rj',
    //   audio: 'https://cdn.mp3wr.com/?h=JGraYpdVSDUTvamDxQgyIck6iOJYTonKSHlpdoIg80VOWq5iemF4V_nKo4mdUxYz1C-X3qtGWQ\\',
    //   genre: 'rock pop'
    // },
    {
      title: 'In The Air Tonight',
      artist: 'Phil Collins',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/A_Groovy_Kind_of_Love.jpg/220px-A_Groovy_Kind_of_Love.jpg',
      audio:
        'https://dl.musicdagh.ir/songs/best/collins/In-The-Air-Tonight.mp3',
      genre: 'rock pop'
    },
    {
      title: 'Another Day In Paradise',
      artist: 'Phil Collins',
      cover: 'https://i.scdn.co/image/ab67616d0000b27307b486f09d5c8352b5f66ea0',
      audio:
        'https://dl.musicdagh.ir/songs/best/collins/Another-Day-In-Paradise.mp3',
      genre: 'rock pop'
    },
    {
      title: 'Do You Remember',
      artist: 'Phil Collins',
      cover:
        'https://static.wikia.nocookie.net/philcollins/images/1/1c/Do_You_Remember.jpg/revision/latest?cb=20230520043808',
      audio: 'https://dl.musicdagh.ir/songs/best/collins/Do-You-Remember.mp3',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://www.musicdagh.ir/'
    },

    {
      title: 'Escape',
      artist: 'Monomy',
      cover:
        'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/4e/90/d54e9011-c427-2da4-194d-7af00ab92c97/4250523830745.png/1200x1200bb.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Chill Vibes 2 (Playlist)/01 Escape.mp3',
      genre: 'house electronic pop'
    },
    {
      title: 'Nina Young',
      artist: 'When Light Gets Dark',
      cover: 'https://i1.sndcdn.com/artworks-DTaCpOejJykS-0-t500x500.png',
      audio:
        'https://dl6.songsara.net/FRE/9/Chill Vibes 2 (Playlist)/04 When Light Gets Dark.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Morocco',
      artist: 'Soft Deep',
      cover:
        'https://songsara.net/wp-content/uploads/2024/08/Morocco-Soft-Deep.jpg',
      audio:
        'https://dl6.songsara.net/FRE/10/Soft Deep - Morocco (2024) SONGSARA.NET.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Gravity (feat. Laura Korinth)',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/01 Gravity (feat. Laura Korinth) (Edit).mp3',
      genre: 'electronic techno'
    },
    {
      title: 'Never Look Back',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/02 Never Look Back (Edit).mp3',
      genre: 'electronic techno'
    },
    {
      title: 'Spicy (feat. Ginger)',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/04 Spicy (feat. Ginger) (Edit).mp3',
      genre: 'techno techno'
    },
    {
      title: 'Vienna',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/05 Vienna (Edit).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Purple Noise',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/09 Purple Noise.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Darkness',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/10 Darkness (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Space Diver',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/12 Space Diver.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'To The Moon And Back',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/15 To The Moon And Back (Edit).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Take It Smart',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/16 Take It Smart.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Level One',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/17 Level One (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Atomic Heart',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/19 Atomic Heart (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Blue Lake',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/21 Blue Lake.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Thunderstorm',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/26 Thunderstorm.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Moondancer',
      artist: 'Boris',
      cover:
        'https://songsara.net/wp-content/uploads/2023/10/Boris-Brejcha-1.jpg',
      audio:
        'https://dl6.songsara.net/FRE/5/The Best Of Boris Brejcha (Playlist)/27 Moondancer (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Memory of Water',
      artist: 'Priopy',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GyXcJODn32nKB-l-C2q8gdUBUCIyn_CzGA&s',
      audio:
        'https://dl6.songsara.net/FRE/9/The Best Of RIOPY (Playlist)/01 Memory of Water.mp3',
      genre: 'relax piano'
    },
    {
      title: 'I Love You',
      artist: 'Priopy',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GyXcJODn32nKB-l-C2q8gdUBUCIyn_CzGA&s',
      audio:
        'https://dl6.songsara.net/FRE/9/The Best Of RIOPY (Playlist)/02 I Love You.mp3',
      genre: 'relax piano'
    },
    {
      title: 'Leading Me On',
      artist: 'Peter Pearson',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl.songsara.net/FRE/2021/6/Peter Pearson - Pink Moon (2021) SONGSARA.NET/01 Leading Me On.mp3',
      genre: 'relax piano'
    },
    {
      title: 'Pink Moon',
      artist: 'Peter Pearson',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl.songsara.net/FRE/2021/6/Peter Pearson - Pink Moon (2021) SONGSARA.NET/04 Pink Moon.mp3',
      genre: 'relax piano'
    },
    {
      title: 'Out the Blue',
      artist: 'Pink Moon',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl.songsara.net/FRE/2021/6/Peter Pearson - Pink Moon (2021) SONGSARA.NET/05 Out the Blue.mp3',
      genre: 'relax'
    },
    {
      title: 'Elevation',
      artist: 'Ken Verheecke',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/10/Ken Verheecke - Elevation (2024) SONGSARA.NET.mp3',
      genre: 'relax'
    },
    {
      title: 'Gravity',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/02 Translation.mp3',
      genre: 'relax'
    },
    {
      title: 'Silence',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/03 Silence.mp3',
      genre: 'relax'
    },
    {
      title: 'Breathing Silence',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/05 Breathing Silence.mp3',
      genre: 'relax'
    },
    {
      title: 'Here',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/06 Here.mp3',
      genre: 'relax'
    },
    {
      title: 'Homesick',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/07 Homesick.mp3',
      genre: 'relax'
    },
    {
      title: 'Inside Outside',
      artist: 'Peter Ries',
      cover:
        'https://songsara.net/wp-content/uploads/2021/05/Peter-Pearson-Pink-Moon-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Peter Ries - Gravity (2024) SONGSARA.NET/08 Inside Outside.mp3',
      genre: 'relax'
    },
    {
      title: 'Pretoria',
      artist: 'Nora',
      cover:
        'https://songsara.net/wp-content/uploads/2024/06/Pretoria-Nora-En-Pure-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/9/Nora En Pure - Pretoria (2024) SONGSARA.NET/01 Pretoria.mp3',
      genre: 'techno house electronic'
    },
    {
      title: 'Now',
      artist: '',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/01 Now (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Trouble so Hard',
      artist: 'Umek, Matteo Vitanza',
      cover:
        'https://i1.sndcdn.com/artworks-yGGyLv9zhFMYMANl-BoT7MQ-t500x500.jpg',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/07 Trouble so Hard.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'My Gasoline',
      artist: 'Maddix, Feles',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRROVwM__szsOQ9ZLybqpxj6uwn62I0L8Q6w&s',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/08 My Gasoline.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Dusty',
      artist: 'Marek Hemmann',
      cover:
        'https://i1.sndcdn.com/artworks-fGCY54QC2LoZWkOX-9uENZw-t500x500.jpg',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/11 Dusty.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Joker',
      artist: 'Daniel Levak',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30ySqf9mQkwj_1BReGr9aSMQ5RXV41ix1Aw&s',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/21 Joker.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'The Captain',
      artist: 'Hijckd',
      cover:
        'https://i1.sndcdn.com/artworks-a9vx5Fr48yz3bMNb-dKvdIA-t1080x1080.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/05 The Captain.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Nirvana',
      artist: 'Reinier Zonneveld, Hi-Lo, Oliver Heldens',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkQilUDEkTbWeVEAiVOyGxP1TF-ThGKE-LQ&s',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/08 Nirvana.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Serenity',
      artist: 'Belocca, Nusha',
      cover:
        'https://i1.sndcdn.com/artworks-ILe4AyvUvE3aQ73y-tKTpBg-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/09 Serenity.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Analog Girl in a Digital World',
      artist: 'Jil Tanner',
      cover: 'https://i1.sndcdn.com/artworks-AaHOBsysJcgp-0-t500x500.png',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/10 Analog Girl in a Digital World.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Colonia',
      artist: 'Space 92',
      cover:
        'https://i1.sndcdn.com/artworks-XJvKdQ4NPF1dHfAP-KyUdyg-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/11 Colonia.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Astro',
      artist: 'Mario Ochoa',
      cover:
        'https://i1.sndcdn.com/artworks-3jA4RbSV1l7eh5Rl-X7GDxQ-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/12 Astro.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Silence',
      artist: 'The YellowHeads, HLGRMS',
      cover:
        'https://i1.sndcdn.com/artworks-WzCQ1EZBybFJnFup-4mAohg-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/01 Silence.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Pulchra',
      artist: 'Patrick Scuro',
      cover:
        'https://i1.sndcdn.com/artworks-Dytk8V0SIEcrrIsD-WJwFJw-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/02 Pulchra.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Finding Yourself',
      artist: 'D72',
      cover: 'https://i1.sndcdn.com/artworks-qZoPz7VROVHi-0-t500x500.png',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/03 Finding Yourself.mp3',
      genre: 'techno electronic'
    },
    // {
    //     title: 'Nothing Else Matters',
    //     artist: 'Metallica',
    //     cover: 'https://m.media-amazon.com/images/I/714xqpfy8yL._AC_UF1000,1000_QL80_.jpg',
    //     audio: 'https://myniloomusic2.musicmelnet.com/Niloo/Metallica/Metallica%20-%20Nothing%20Else%20Matters.mp3',
    //     genre: 'rock',
    // },
    {
      title: 'The Sound Of Space',
      artist: 'Enrico Sangiuliano',
      cover:
        'https://i1.sndcdn.com/artworks-0YG84bpgUJnSywie-x8rvcg-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/22 The Sound Of Space.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Loneliness',
      artist: 'AKKI',
      cover:
        'https://i1.sndcdn.com/artworks-xswm4bqZAtWsupLn-OzQD4Q-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/23 Loneliness (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'We All Unite',
      artist: 'Patrick Scuro, Celic, Sylvie Miles',
      cover:
        'https://i1.sndcdn.com/artworks-gJUcwYyImz7lVW7l-Hiq38g-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/24 We All Unite.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'You Are Mine',
      artist: 'Mha Iri',
      cover:
        'https://i1.sndcdn.com/artworks-s0HYlENBaYjzxFVP-hUP1rw-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/32 You Are Mine (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Mercury',
      artist: 'Hi-Lo, Space 92, Oliver Heldens',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBm9Tmx7yr6MbCC-zT7uLFqE81mOzcszoZZQ&s',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/33 Mercury.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Acid Voices',
      artist: 'Denise Schneider',
      cover: 'https://i1.sndcdn.com/artworks-8W5StelTEL1k-0-t500x500.png',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/35 Acid Voices.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Humans Love Me',
      artist: 'T78',
      cover:
        'data:image/jpeg;base64,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',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/40 Humans Love Me.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Into the Night',
      artist: 'Slin Bourgh, Marie Vaunt',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/41 Into the Night.mp3',
      cover: 'https://f4.bcbits.com/img/a1124458180_10.jpg',
      genre: 'techno electronic'
    },
    {
      title: 'UFOs & LFOs',
      artist: 'Layton Giordani',
      cover:
        'https://i1.sndcdn.com/artworks-VjE5z6tckdi2yXLM-N1ujHg-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/46 UFOs & LFOs.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Rave (Remix)',
      artist: '',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/51 Rave (Remix).mp3',
      genre: 'techno electronic'
    },
    // PAGE https://songsara.net/107495/

    {
      title: 'Pulse (Marie Vaunt Remix)',
      artist: 'Gizmo & Mac, Marie Vaunt',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/53 Pulse (Marie Vaunt Remix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Platia',
      artist: 'FOVOS',
      cover:
        'data:image/jpeg;base64,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',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Workout (Playlist)/11 Platia.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Elysium',
      artist: 'Clap Codex, Patrick Scuro',
      cover:
        'data:image/jpeg;base64,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',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Workout (Playlist)/06 Elysium.mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Workout (Playlist)/02 Mercury.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Future Dust',
      artist: 'Enrico Sangiuliano',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhzHGcFvEZj4NGnSvo1w-ouuxXu1VcqQgKg&s',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Workout (Playlist)/07 Future Dust (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'A Drop Of Silence',
      artist: 'Kitaro',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2022/15/The Best Of Kitaro (Playlist)/03 A Drop Of Silence.mp3',
      genre: 'relax'
    },
    {
      title: 'Fade Away',
      artist: 'Tube & Berger, RBBN',
      cover:
        'https://i1.sndcdn.com/artworks-AefqT36kOUObOTuC-0vSuNw-t500x500.jpg',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/28 Fade Away.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Back Me My Freedom',
      artist: 'Avis Vox',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_u78qNb343lNDIrbbAI43TAYEEcxtS_X-rQ&s',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/39 Back Me My Freedom.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Human Robot',
      artist: 'Alex Stein, Victor Ruiz',
      cover: 'https://f4.bcbits.com/img/a3933782043_5.jpg',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/40 Human Robot (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: 'Einmusik',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/43 Nassau (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Illusionist',
      artist: 'th;en',
      cover:
        'data:image/jpeg;base64,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',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/51 Illusionist.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Lady Love',
      artist: 'Oden & Fatzo, Camden Cox',
      cover:
        'https://i1.sndcdn.com/artworks-mpPjeDTL8eTest40-5TWBBg-t500x500.jpg',
      audio:
        'https://dl6.songsara.net/FRE/3/Electronic Rising 4 (Playlist)/54 Lady Love.mp3',
      genre: 'pop electronic'
    },
    {
      title: 'Intrigue',
      artist: 'Tenet Audio & Astropilot',
      cover: 'https://f4.bcbits.com/img/a3988368495_10.jpg',
      audio:
        'https://db.vmusic.ir/2022/08/Tenet Audio & Astropilot - Intrigue (2022)/128k/01) Tenet Audio & Astropilot - Intrigue.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Incandescence',
      artist: 'Ariella Zeitlin',
      cover: 'https://i1.sndcdn.com/artworks-BZ21q7nqm50y-0-t500x500.jpg',
      audio:
        'https://dc.vmusic.ir/2024/09/Ariella Zeitlin - Revelation (2024)/128k/01) Ariella Zeitlin - Incandescence.mp3',
      genre: 'rock'
    },
    {
      title: 'Fly On',
      artist: 'Hoten & Movement Machina',
      cover:
        'https://i1.sndcdn.com/artworks-Sdy2eZ3oS0Nzbu1P-yahCYA-t500x500.jpg',
      audio:
        'https://dl.vmusic.ir/2023/06/Hoten & Movement Machina - Fly On (2023)/128/Hoten & Movement Machina - Fly On.mp3',
      genre: 'techno house electronic'
    },
    {
      title: 'Echoes Of Tomorrow',
      artist: 'Tenet Audio & Astropilot',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8int9Y9hqi4pPYCTxCSjl-ZvtEZ_TSDw49g&s',
      audio:
        'https://dc.vmusic.ir/2023/08/Tenet Audio & Astropilot - Echoes of Tomorrow - Single (2023)/320k/Tenet Audio & Astropilot - Echoes Of Tomorrow.mp3',
      genre: 'techno house electronic'
    },
    {
      title: '',
      artist: '',
      cover:
        'https://i1.sndcdn.com/artworks-iW7bmmvj2iTNLqL3-J4ngcA-t500x500.jpg',
      audio:
        'https://dl.vmusic.ir/2020/06/Tinlicker - Sleepwalker (2020)/320k/Tinlicker - Sleepwalker.mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2019/09/Estiva-Metamorphoses-2019.jpg',
      audio:
        'https://dl.vmusic.ir/2019/09/Estiva - Metamorphoses (2019) 128k [Vmusic.ir]/05. Estiva - Eclipse.mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2019/09/Estiva-Metamorphoses-2019.jpg',
      audio:
        'https://dl.vmusic.ir/2019/09/Estiva - Metamorphoses (2019) 128k [Vmusic.ir]/10. Estiva - Two Tigers.mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2019/09/Estiva-Metamorphoses-2019.jpg',
      audio:
        'https://dl.vmusic.ir/2019/09/Estiva - Metamorphoses (2019) 128k [Vmusic.ir]/01. Estiva - Sirin.mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: '',
      cover: 'https://vmusic.ir/wp-content/uploads/2019/10/VA-ADE2019-2019.jpg',
      audio:
        'https://dl.vmusic.ir/2019/10/VA - ADE2019 (2019) 128k [Vmusic.ir]/04. Max Wexem - Persia (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: '',
      cover: 'https://vmusic.ir/wp-content/uploads/2019/10/VA-ADE2019-2019.jpg',
      audio:
        'https://dl.vmusic.ir/2019/10/VA - ADE2019 (2019) 128k [Vmusic.ir]/05. Max Freegrant;miss Monique - Attraction (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: '',
      cover: 'https://vmusic.ir/wp-content/uploads/2019/10/VA-ADE2019-2019.jpg',
      audio:
        'https://dl.vmusic.ir/2019/10/VA - ADE2019 (2019) 128k [Vmusic.ir]/08. Honjok - Balboa (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: '',
      cover: 'https://vmusic.ir/wp-content/uploads/2019/10/VA-ADE2019-2019.jpg',
      audio:
        'https://dl.vmusic.ir/2019/10/VA - ADE2019 (2019) 128k [Vmusic.ir]/10. Tencode - Storm (Original Mix).mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2021/06/Naden-Celestial-2021.jpg',
      audio:
        'https://db.vmusic.ir/2021/06/Naden - Celestial (2021)/320k/Naden - Celestial.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Acid Traxxx',
      artist: 'Paul Van Dyk, Phuture & Dj Pierre',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/10/Paul-van-Dyk-Phuture-DJ-Pierre-ACID-TRAXXX-Single-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/10/Paul van Dyk, Phuture & DJ Pierre - ACID TRAXXX - Single (2023)/320k/Paul Van Dyk, Phuture & Dj Pierre - Acid Traxxx.mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2019/09/Thomas-Lemmer-Night-Travellers-Remixed-EP-2019.jpg',
      audio:
        'https://dl.vmusic.ir/2019/09/Thomas Lemmer - Night Travellers Remixed - EP (2019) 128k [Vmusic.ir]/01. Thomas Lemmer - Embracing Love (Liam Thomas Remix).mp3',
      genre: 'house electronic'
    },
    {
      title: '',
      artist: '',
      cover:
        'https://vmusic.ir/wp-content/uploads/2019/09/Thomas-Lemmer-Night-Travellers-Remixed-EP-2019.jpg',
      audio:
        'https://dl.vmusic.ir/2019/09/Thomas Lemmer - Night Travellers Remixed - EP (2019) 128k [Vmusic.ir]/02. Thomas Lemmer - Cozy Days (Der Waldlaufer Remix).mp3',
      genre: 'relax electronic'
    },
    {
      title: 'Future Memories',
      artist: 'Estiva, Lake Avalon',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/08/Estiva-Lake-Avalon-Future-Memories-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/08/Estiva, Lake Avalon - Future Memories (2024)/320k/Estiva, Lake Avalon - Future Memories.mp3',
      genre: 'techno house electronic'
    },
    {
      title: 'Submersion',
      artist: 'VA',
      cover:
        'https://dl.vmusic.ir/old/Pic/VA---In-Search-Of-Sunrise-14-(2018).jpg',
      audio:
        'https://dl.vmusic.ir/old/Electronica/Naden%20-%20Submersion%20[Vmusic.ir].mp3',
      genre: 'techno electronic'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio:
        'https://dl.vmusic.ir/old/Classical/Khatia%20Buniatishvili%20-%20Kinderszenen,%20Op.%2015-%20VII.%20Traumerei%20[Vmusic.ir].mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Linda',
      artist: 'Davit Barqaia',
      cover:
        'https://songsara.net/wp-content/uploads/2024/09/Linda-Davit-Barqaia.jpg',
      audio:
        'https://dl6.songsara.net/FRE/11/Davit Barqaia - Linda (2024) SONGSARA.NET/01 Linda.mp3',
      genre: 'pop house electronic'
    },
    {
      title: 'Together Alone',
      artist: 'Imad',
      cover:
        'https://songsara.net/wp-content/uploads/2024/09/Together-Alone-Imad-Ghenwa-Nemnom-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/11/Imad - Together Alone (2023) SONGSARA.NET.mp3',
      genre: 'house electronic'
    },
    {
      title: 'El Helwa Di',
      artist: 'Ghenwa Nemnom',
      cover:
        'https://songsara.net/wp-content/uploads/2024/09/El-Helwa-Di-Ghenwa-Nemnom-DJ-Phellix-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/11/Ghenwa Nemnom - El Helwa Di (2024) SONGSARA.NET.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Nocturnal Beings',
      artist: 'Norvik',
      cover:
        'https://songsara.net/wp-content/uploads/2023/08/Nocturnal-Beings-Norvik.jpeg',
      audio:
        'https://dl6.songsara.net/FRE/4/The Best Of Norvik (Playlist)/01 Nocturnal Beings.mp3',
      genre: 'relax'
    },
    {
      title: 'Rhim (Jad Halal Remix)',
      artist: 'Cafe De Anatolia',
      cover:
        'https://songsara.net/wp-content/uploads/2023/01/Cafe-De-Anatolia-400x400.jpg',
      audio:
        'https://dl5.songsara.net/FRE/6/The Best Of Cafe De Anatolia (Playlist)/06 Rhim (Jad Halal Remix).mp3',
      genre: 'house electronic'
    },
    {
      title: 'Eckstein Eckstein',
      artist: '',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/06 Eckstein Eckstein.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Plan of Escape',
      artist: 'Fjaak',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/15 Plan of Escape.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Gamma (Joyhauser Remix)',
      artist: 'NTO, Joyhauser',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/20 Gamma (Joyhauser Remix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'The Sound of the Underground',
      artist: 'Tom Wax',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/21 The Sound of the Underground.mp3',
      genre: 'techno electronic'
    },
    {
      title: 'In From The Night (Adam Beyer & Wehbba Remix)',
      artist: 'Planetary Assault Systems',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Techno Bunker (Playlist)/26 In From The Night (Adam Beyer & Wehbba Remix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'You Take My Hand',
      artist: 'Tinlicker, Jamie Irrepressible',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/07 You Take My Hand.mp3',
      genre: 'house electronic'
    },
    {
      title: 'Consciousness (Eric Prydz Remix)',
      artist: 'Anyma, Chris Avantgarde, Eric Prydz',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/09 Consciousness (Eric Prydz Remix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Tied to You',
      artist: 'Lipless, LöKii, Project 46',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/10 Tied to You.mp3',
      genre: 'techno electronic'
    },

    {
      title: "Don't Hold Back (Yotto Remix)",
      artist: '',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/11 Don%27t Hold Back (Yotto Remix).mp3',
      genre: 'techno electronic',
      star: 5
    },

    {
      title: 'Reminiscing',
      artist: 'Nora En Pure',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/13 Reminiscing.mp3',
      genre: 'techno electronic',
      star: 3
    },

    {
      title: 'Radiation',
      artist: 'Ship Wrek',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/14 Radiation.mp3',
      genre: 'techno electronic',
      star: 4
    },

    {
      title: 'Feel Again',
      artist: 'Armin van Buuren, Wrabel',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/15 Feel Again.mp3',
      genre: 'techno electronic',
      star: 4
    },

    {
      title: 'Need To Feel Loved (Cristoph Remix)',
      artist: 'Reflekt, Cristoph, delline bass',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/16 Need To Feel Loved (Cristoph Remix).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Angel Dust',
      artist: 'Solardo',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/18 Angel Dust.mp3',
      genre: 'techno electronic',
      star: 3
    },
    {
      title: 'Rhythm (Of The Night)',
      artist: 'Something Good',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/24 Rhythm (Of The Night).mp3',
      genre: 'techno electronic'
    },
    {
      title: 'Feel You Close',
      artist: 'Like Mike, Kimotion, Angie Robba',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/31 Feel You Close.mp3',
      genre: 'techno house electronic',
      star: 4
    },
    {
      title: 'Phoenix',
      artist: 'Night Tales',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/32 Phoenix.mp3',
      genre: 'techno electronic',
      star: 4
    },
    {
      title: 'You Run',
      artist: 'Spada, Eleonora',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2022/15/Electronic Rising 2 (Playlist)/05 You Run.mp3',
      genre: 'techno electronic',
      star: 4
    },
    {
      title: 'Blis',
      artist: 'Stilhed, Norvik',
      cover:
        'https://songsara.net/wp-content/uploads/2023/08/Nocturnal-Beings-Norvik.jpeg',
      audio:
        'https://dl6.songsara.net/FRE/4/The Best Of Norvik (Playlist)/02 Blis.mp3',
      genre: 'relax ambient',
      star: 4
    },
    {
      title: 'Norma',
      artist: 'Norvik',
      cover:
        'https://songsara.net/wp-content/uploads/2023/08/Nocturnal-Beings-Norvik.jpeg',
      audio:
        'https://dl6.songsara.net/FRE/4/The Best Of Norvik (Playlist)/05 Norma.mp3',
      star: 4,
      genre: 'relax ambient'
    },
    {
      title: 'Kalas',
      artist: 'Norvik',
      cover:
        'https://songsara.net/wp-content/uploads/2023/08/Nocturnal-Beings-Norvik.jpeg',
      audio:
        'https://dl6.songsara.net/FRE/4/The Best Of Norvik (Playlist)/06 Kalas.mp3',
      genre: 'relax ambient',
      star: 4
    },
    {
      title: 'Snowcave',
      artist: 'Norvik',
      cover:
        'https://songsara.net/wp-content/uploads/2023/08/Nocturnal-Beings-Norvik.jpeg',
      audio:
        'https://dl6.songsara.net/FRE/4/The Best Of Norvik (Playlist)/07 Snowcave.mp3',
      genre: 'relax ambient',
      star: 4
    },
    {
      title: 'My Armour',
      artist: 'York, EKE, Nathan Red',
      cover: 'https://i1.sndcdn.com/artworks-Ak0MbZVBx9Yk-0-t500x500.jpg',
      genre: 'electronic',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/36 My Armour.mp3',
      star: 4
    },
    {
      title: 'Sun Goes Down',
      artist: 'Spada',
      cover:
        'https://i1.sndcdn.com/artworks-DK2zhENKn8zWJEqJ-W8uSUQ-t500x500.jpg',
      genre: 'electronic',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/37 Sun Goes Down.mp3',
      star: 4
    },
    {
      title: 'Hear Me Out',
      artist: 'Cosmic Gate, Diana Miro',
      cover: 'https://f4.bcbits.com/img/a0848248282_10.jpg',
      genre: 'electronic',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/35 Hear Me Out.mp3',
      star: 4
    },
    {
      title: 'Offshore',
      artist: 'Armin van Buuren, AVIRA, Chicane',
      cover: 'https://i1.sndcdn.com/artworks-OgigZSjLDEwn-0-t500x500.png',
      genre: 'electronic',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/23 Offshore.mp3',
      star: 4
    },
    {
      title: 'Strangers (with Mansionair) (Tinlicker Remix)',
      artist: 'Dom Dolla, Mansionair',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/42 Strangers (with Mansionair) (Tinlicker Remix).mp3',
      genre: 'electronic',
      star: 4
    },

    {
      title: 'Say',
      artist: 'Paige, Nihil Young',
      cover: 'https://i.scdn.co/image/ab67616d0000b273b5b25b4febeb797e43d66d50',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/44 Say.mp3',
      genre: 'electronic',
      star: 4
    },
    {
      title: 'Follow You Anywhere',
      artist: 'Cosmic Gate, Nathan Nicholson',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6tKhRPnfngpnTCurYC0AEQUuhCZnuGr_6Q&s',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/48 Follow You Anywhere.mp3',
      genre: 'electronic',
      star: 4
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/50 Artefact.mp3',
      genre: 'electronic techno',
      star: 4
    },
    {
      title: 'This Feeling (Yotto Remix)',
      artist: 'Vintage Culture, Goodboys, Yotto',
      cover:
        'https://i1.sndcdn.com/artworks-W98x50z2bTipwQtX-HWQ2aQ-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/52 This Feeling (Yotto Remix).mp3',
      genre: 'electronic techno',
      star: 4
    },
    {
      title: 'Lost at Sea',
      artist: 'Massane',
      cover:
        'https://i1.sndcdn.com/artworks-4dwiM3oBw8IcuMzI-N4TZ1w-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/53 Lost at Sea.mp3',
      genre: 'electronic techno',
      star: 4
    },
    {
      title: 'Sky',
      artist: 'Estiva',
      cover:
        'https://i1.sndcdn.com/artworks-JyKZN6wD0rp7Cnwm-WQjQcA-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/55 Sky.mp3',
      genre: 'electronic house',
      star: 4
    },
    {
      title: 'Children',
      artist: 'Tinlicker, Robert Miles',
      cover:
        'https://i1.sndcdn.com/artworks-9tbMz9gliA2ukRyC-PrqTBA-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/77 Children.mp3',
      genre: 'electronic techno',
      star: 4
    },
    {
      title: 'Should Have Seen It Coming',
      artist: 'Franky Wah, AETHO',
      cover:
        'data:image/jpeg;base64,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',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/79 Should Have Seen It Coming.mp3',
      genre: 'electronic techno',
      star: 4
    },
    {
      title: 'Always In My Head',
      artist: 'Denis Kenzo, WHITEOUT',
      cover:
        'data:image/jpeg;base64,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',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/80 Always In My Head.mp3',
      genre: 'electronic techno',
      star: 3.7
    },
    {
      title: 'Alchemy',
      artist: "Paige, Nihil Young, Lauren L'aimant",
      cover: 'https://i.scdn.co/image/ab67616d0000b2731b7b7f59d71b633a5a70ca8d',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/82 Alchemy.mp3',
      genre: 'electronic techno',
      star: 4
    },

    {
      title: 'Replay',
      artist: 'Giuseppe Ottaviani, Natalie Shay',
      cover:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMVFhUXGBgXGBgYGBgXGBcYHRgXFx0aFxgYHSggGBslHhcXITEiJSkrMC4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mICU3LS0vLi8tLS0tLy0tLy0tLS01LS0tLS0tLS0tLS0tLS0tLSstLS0tLS8tLy0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABgMEBQcCAQj/xABHEAABAwEFBAYGCQMBBgcAAAABAAIRAwQFEiExQVFhcQYTIoGRoTJCUnKxwQcUIzNigtHh8JKy8XM0Q1OiwtIWJDVjhLPD/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAIBAwUEBv/EAC8RAAICAQMCAgkFAQEAAAAAAAABAgMRBCExElEiQQUTMmFxgZGh8CMzsdHhQhX/2gAMAwEAAhEDEQA/AOtIQlmzWGlUpOq1LOLRWNR7ahPV46Za53Za6oR1bWQA3CRsdnJcpFGZCVKlcVRTewPh1gtWHEQ5xGKzgEuBOLEIMyZmVo2l4IsJBBDqrS2PWH1asZG8RmoA2kJYstlZSqMrOp0qgfWdhtNMxVLqr3ANqjV7BLWZOcOyDgaG5eejN3nGapslljr7Uevxfb/f1hOHqdfV+808EZDI0oSjcV3yKD6dlFJweXPr/ZNL2S/EB1ZL348hDwB62rQFHdF3Y4dTswp1Ba6znWn7IFzG2yoXtBa41HYmg04cAM52CQMjkhK1wWAmq+r9UsxH1m1fbl324ivVGTep2Hs/eaZ8FpX0xr6tClVjqXmpiB9GpUDQWU3D1mkdY7CdTTGuiANcIWDUu6gy0MpU6bA2qyp11ENb1bmDDhe9kYcWKGg+sHO1wiPNxXLZcNb/AMvRzq1mH7NmbOtPZOWbeyMtMggBgQlG620rLZK9elRptq9da6bMNPNzjbK1OkzsNLi3FgEAHIZDJF30Q6jWslHrJpYK9nNVlWkS6Q8T1jQ5321NxcRlFUBGQyNyEoXpaG2mhbLS30G2SpSpyIIL6XXVTPGaLSNhpOHKXpRasVXA1tVzrOwVmYKVZ7XWgnsNc6kx2HsNeCDsrgoDI1IS1a6hqVqVps5LiLP1jWgwK1NzmkszMYiILSYhwEmC6a9mtLKjrJUYZa68LQQf/jW3UHQ7CDoUANqEIUgCEIQAIQhAAhCEACEIQAIQhAAsKu2yVhVrPoMe6mXNfiY0ucGFwGvpNOExPHcVurDtV11DRdhgVCawicnU31HugneA4OG4yMpKV5Em5Lgv2y0U6dSnLZc6WBwAljSWAydQ0v6oZbS3cqn1enRqg07KwOfiAe3A0mRjdxaCRnvIUlqu99V9Ul+Brmim3IOOGJxAz2XFzj/Q0qcU6juoc8AObJfBEAmm5pjeJKNyMybKzqNnZaGHqGCq+XYw1vZcQRJOxzoeJ2wRtUlmu+zCs5zaFNtRpxl4a0EufiJMjOTnJ4qK0XfVf1rsYa5zgWAtBjqzNPtA6Yhij8ZCnDqjajndU5we1mjqfZIBkHE4aTsRkFJ53R9+ttYMLKelTqg0Q0ThxzuA1VixshsdWKebjhEauJcTllJJJPElULVYnkHsFw6/rIDg0lvV4ciSIz4q/YhDYwOZmcnODjzkOd8ULJMW87mbZbNQNTrW2Vomo/7UNZixguBcYzEuBz1zzhWrVXpvoVHVKYfTGMOY4Bwdgc5pyOWrZHcoG0H9YCKXVuxy97Xjq3tnOWAy5xGWbcjtyzjqXRNGoMP2jjWI7RjtVHubtjQhRlidU/5/OCwBQszmsZTa3rXZljQNMLQ551IxOY38w2KQ2ynTFUYcJYZLREvLz2S3eXulvvAqG1XfUqvqkvwNc0U25BxwgTiGfZdicf6GqT6s57qFR7RjaHY4OQcWgZbxMxuU7k5lnb88v9LLLKwADA0Q41IAEB7i5znD8RLnEnaXHevZotLg/CMQBaHRmGuLSQDrBLGkj8I3KRCYtIBYqQY6kKbOrdixMwjC7GSXy3Q4i4k75Kkp0WtLi1oBccTiBBc7C1su3nC1onc0bl7QgCKlZmNza1ogECABAJxRynNeW2OmIhjRD3VB2Rk9wcHPG5xD3gnbiO9ToQAIQhAAhCEACEIQAIQhAAhCEACEIQALOY/cX4y9wEl2GA8yM+z6IOmeS0VH1AiOOLvnF8VXOLlwQ0V6WbjIqGHHPEcOzZi+SjY4kmC/FjcPXwYQ8jb2Yw7virYoAGQXazEmJ5L2xgGQ3k95JJ8ykVb/AJDBHZyTi95wVcWkdZ6YiSzDI11xRrrLfBWW0ADILtZiTE8l96huHDGXnlnM75zUuM2l7gwyCmXYsBJ7OZO1wzwjyM+7xVteQwSTtIA8Jj4lek8I4RKBC81KgaC5xAAEkkwAN5KR74+kuhTfho0zWjV04G/lkEnwCckekJMu36RbM8HrAaRAnM4geAgZ+SsWLp/Y31Awl7Acg9whneZlvMiOKAGtC+Ar6ggEIQgAQhUbxvSnRHaMu2NGvfuHNAspxgsyeEXXEDM5BYF59IwJbRzPtnQe6NvPTmsa8b0qVtTDRnhGg4uO3mfJZFS30hrUbPDE7zaCPNI5djLv10p7Vcdx86OVXOo4nEklzpJ7lqJGuTppY6IFCo8tMziwnDmYjfx0TvTeHAOaQQQCCMwQcwQdoTLg0dPn1Uc9j0hCFJaCEIQAIQhAAhCEACEIQAIQhAAhCEACELL6Q3s2zUi9xjYOaAF/phbzVP1dh7IPaOsnjvHDekSx9EnV6zgHFrW7QJz3cVZffBqu6ulLnOOcQXEbYGzLeU79FK1Ejqm4m1G+k14wu57jOeYUDCXa/o8rAdh4dzySvWu+rRq9XUEHxBBX6AfSy0SL0su9rqzXxnA74dPyQBodGLa9tCnnmGtBB9YRAJ4jTw4pqsd4Nflo7cfkdqUrvEYBpOXj/lW1jrUzqm8brL2OfqaY2ry9wAJJgDMlYtjvUtyf2hv2j9Vs0qocJaZC06b4Wrw/QsUk+BcvPpGT2aOQ9s6/lGzmUuWiuGgveT8S47hOpKcb0uFlSXMhj/8AlPMbOY81z29zNXqpBNMlpAIjHMHPuA7kzyY+oquc82br7HqlaHVA5xyAIDWjQTOfF2Xpc4hSMc4+s7vJI8CoqrmUmNJmDMR65Grs9GiQB8M3KtTvRk5tcOMh3yCgXjYtV+j1KuMTsjvEDyCaegjalHFZnOL6YGKkTq0TDmHhmCPzLNsRbhnGIjFOyDoSTp3wtWwWgNcx4IIkCRpBOE/FWI2af20NiEIUjghCEACEIQAIQhAAhCEACEIQBVvT7p/ulY1gvdzMndpv/MO/b3rZvP7p/ulKaydfbOu2Li/IpsbT2HGz2hrxLTI+HMbEs9L6dOt9k/QDTjBKgo13MOJpIP8ANd6qdIWVHHGBJkEgbDlMDar9Pro2bS2f2HhYnyKPRno9Uey0PouwvDgxp83DzaugXPZHNbT6yOsaM3AROWeWfjlyVbooWUaRESXPe7nicT8IHcr7baSXy0DPIzMjuXVZbGtZkyxtLkqXu51Ssxp6/tSQaZIa0Da9w05Lw+xgHEXPeW+jjdiIBiRpnsOc+at66ryYnnry2rLu1crNo7IplNsza7u1IWg8yZ35+OapBkg7wSFZoOlgO7Lw08jHcuXyKz0paFdzDLTHwPMKJWbJYn1NMhvOndvRBScvDyCz5FuvfwbTLsMvEAN2GSBM7ANe5c0N31nWlz3gAOe5+IGcUumIPMzK6H0iuwNsxwCXNc1xJ1ImDyGaULO50DH6WcjLLblC3qlNR/U5OmK23K18UiXNyccokDFtJ+B8lmUrC4kZYWn1nZCOHtdyaHlsdrRUqdll+hDDvyPgicowWWziv0q9qP0MjpQT9Tw0yQGvHAlsEHxOZHFLfR63WilUb1bnRibLTJae0IlvOOK6E+m0EtiRxGRBEEHPKQSpLosVBgIwU+09rg8tPWNw54QBkROeRzUxkmiKNWl4J7YH+7rV1tJlSIxNBI3HaPFWFXu/B1bercHNAyIzn91YVh3Jp7oEIQgAQhCABCEIAEJIuXpc5sMry5vtj0h7w9Ycdeac7PXa9oexwc06EZhKpJlNOohavC/kSIQhMXFW8/un+6UppsvP7p/ulKjRmJWL6T/cj8Ci3kkot9Y6DzO79f3UjBOZ5kqOrI9IRuC+l2UbT5D9/lxXEtthCdjhIMCMvhGu/jvVgNJ3nnmPOfIqpSGXKR3a/Mr1AVvW3yNklqx/Phr/ADiqrhJiYG07gpXiNcufyG1V6jpEDf35D99EsmQeA+S88ZRYn6t3kRzzgd8nyUdoqNpieIHjKTbwvSpRtOMnE2RAGgEzlxjauynSysWXsiyMGzq1jukDOpmfZ2d+9agEKvd1pFSm14MhwBB3gqwStOuqFaxFFiSQPaCCCJByI3hc9t9lw13saMg4xuAnIeCarffYHZp5n2tg5b/5ql+1kl8nM5TxMCZ71y266C8MN39hXYvIr06YCsUYOoE75Pls8Soqo2jQ6H5HivTAs+U5SlmW5W23yRWyzjESDG2CRnlOR0ngqzzAndpxMfLXuG9SWhpLyAM8vgq1peCQBmBt3naR5DuWtV7C+CMTUyxKT97JLvvCpRdipujeDm08x/CnO6OkFOtDT2Knsk5H3Tt5apCQrFLBVp9ZZTxuu35wdVQki6Okr6cNqS9m/wBdvefSHPxThY7Wyq3FTcHD4cCNQVYnk3tPqq7l4eexOhCFJ0ghCEAcfVu7byq0HYqbo3jVruY+eqqIXMeXjJxeUdEuXpLSrw132dT2Scne6dvLXmtxcfTDcvSqpShlWajN/rt5E+kOB8VZGzuamn9If82fUdbz+6f7pSmtTpD0koU7G6uCXtJDAGAYsTtA4OIw6EmfNL913zQrtmkZ3h3pN5t/yOKzfSUG5KXkdtnixJcGgHEyQSDqc9ePPb4r61hjiSvGIn1st0geUr7Ufhket8J48tyzxD04buQ5DPzJBXoB21zvEr7Tb2Gn3vipAmwSRhgChcOyT+KPL9grJaiu0YQPxEc4DfmXIxsAp223Co+rS0c06bHRBBCwTZnVnEchyOJoHkSrvSOmynXcQ7tuOZGjZ2GNqiurA12MWqkHzm0kgka5yMo3ea9BV7EfgjqXB1O4bOaFOlRkvAbhLoyG2Z04eClvqyVXiWulvsad/HvSxZOnbGCKmExtacU8oVS+/pGD2GnZmua461HR2fcG/iYjci2tWQcWRKOdjQeQ0gOyJIAG3WM9w/nLw44iTvMpDsF61WPxSXSZOIkyZmSTnPFOVzXg20UhVYCNQWnVrhq08Vk2aSVK23XcpcOks4Nxj+bd6GtO5p8R5AgKaF9LVRkUu2O5W16bi4lpJgFsxlnmD6Qk+SX70uqrQPbHZ2OHon9DwKcOj9qYQ6kD22QSNsOAIPKZHctWowOBBAIORBzB5hbVEc1xKb9FC5Z4fc5YhNd79FdXUP6Cf7XHTkfFWLo6MMZDq0Pd7PqDn7R8k/SzKXo+5z6cfPyMG6Liq14d6LPaO33R63wTndt2U6AhgzOrjm53M/JXUJ1HBsabR107rd9/zgEIQmOsEIQgDj6EK7dd11a7optyGrjk1vM/IZrmPLxi5PCKSL2c2zU8VYgVCAWUZ+0cDIDnj/dsyOuZiBGoa6ooWBri1vX2hrSZOTWECYAzg+fELj143hVr1HVazy97syT5ADYBsAyVkYdzV0/o/His+hLeN7Va0B7uy30WNGFjTvDdrvxGTxVahVcwhzXFrhoQYI71EvoVmPI1EklhDncvTEGGWgR/7gGX52jTmPAJ2cWvY2owgiBJBkEeq4Hds7hvXHLLZX1HYabS524bBvJ0A4nJa1hv6pZqjWsfipgYXt9JjhkDh5RIIjMbln3aCMsuG3u8iuVafB1WyOlhG4z3fyfBShL/AEf6QUqzjTnDU2Nn0iM5pu9YYZO+NiYGvdvHgD8Qs5wlDaSwyrDXJ9JjPbs/VQEySzcBHPOR4u8lK52pOzM8VmWiqQ0unN0gd/pHwMfmSvnBBm3zdtCpm8DrROFzdQY9bYQN2uWxI9sut1HVsjY7UH9CnctUNqexrTjiDlBznhG1ddF868RW67FkZNbCPqvjagYYO06/IhXrVTaXEsaWt2Amf8clToMhxB25g/Ja6eUXlgOC93deFayVuuYMVOpm9mxwmDycDJB47ivLaSmqMmkfwunucMJPi1g70SeEVX2OEOpHRLottK0tx0Xg8NCOBGwrUp0pZ2hvXHbNVfSf1tF5pvG0aHg5pycOaYWfSFVa0irQa6psIcWsPEjM+B8Fzxor6upL5FdNtdnHPYsdK8dO1MqNcW4qcNc0kEPYTOYzHZc3wKt3L05tNMgVftmbZgPHJw175neEiXpftWvVbVqEDDo1votG2P1WnijNdEYqKwjowdtuq96NobipPDt7dHN95uoV5cQsb3tcH03OY8ZgtMHyXXejt4m0WdlR3pZtd7zTBPAGJ70wGkhCEEAhCEACEIQAl3L0QJh9oyH/AAwcz7xGnIZ8Qr99XsKQ+r0AGkDtFogM4N/Fx2c9GG0VMLHOAnC0mN8AmFzahTe8Yw8Eu7Rkak5k5c0qSRVTRCpYij7vnPfxXO77u00ahA9A5tPDceIXRBZXj0yN/Zz8jC8VbupVG9tvWAGSDLYz0OEzB3zGe9Rnc5XrHXZKMuDluJSsjbmu7XZZbvq0+p+rUWSCMBY3OdS10STlrrkuQ9Mbj+p2upRzwenTJzmm6Yz2kEFv5ZTHdCyM1mLyfbgrlz3MyDMB7I0ObdRt71LeFxA9qlkfZOncdn80VXo196fcPxamVI3hmVqrp1X5i+wv9GqppWugXCCx4BB9h3Y8sWXPcF2ivZxEjL4Fc2FnY5zC8aEdoagTnBT3TvEEFpyLNk6nMeSWcI2LEkddGqhcsS2ZBa6gEskTPag6bQDu3+Cybc/tEez2fDXzlI94Xw82upVpOIc98TqMA7IEHIggSe7irtuvKpU1yBzIG3n+i4HoJKWz2L/VbmjbL2a04Wdo7/VH6rKe9zs3GSoGqQOXdVRCtbFkYpHxwVO3tgNduPkrhKitrZYVcMe2kRkpLOyTg9sFvec2/wDMGnuVOw1CWRuy/RWAdoSy4ObV/tP5FEL45oIg5hWreyHkjR3aHfmQORkdyrqox+GZ9exEZtzG7b+617C7ExpO6DzGXyUCv2cDqwRvcDxORnwdH5U6n3O+nWNbT+pdsIz7l0XoVWDLHUe7JrX1HE69kNaSY26Fc+u0jwlO3R2sHXbaAPVbWHjTn9VZk7pTXQ5RG2y2llRofTcHNOhBkf54KVcfuu9KtndipOjeDm13vDbz1XQLh6VUq8Md9nV9knsu9x23kc+aSM0zj0+uhbtLZjAhCFYdwIQhAAke/LsfZXmrTaXUHGSBmaROsj2Nx2aHYS8IQSc6+tNfDgQRCOIyO8LQ6SWKkytDGBmJoccHZ7RLpMaZwNiyxTI0cDwOR+Y8SFU+TB1Ev1ZEvPI7xp3gacx4LM6Y2KpaaTC4jHSktcc8TDALS4aiYM5xB3rTDvaEfA8joe5R3pZaooPdTOoPHZtAQsk6dWdea+fzkQrhouZWc1zSDgP9zdN6YkuXBVc6u4uJJwHX3m+CY1Mg12fW784QFbVK8BidibJ9Pg4Ri7W45xxkDisVWq2TA72wG9zMj5hngUpzReDJr3WwudWGTpzGxxdiJMbNNm9UarSDB/yty1GIZumfeMT4QB3FVn0wRmmTNGjVSgkpbr7mUWHu3L7oJ3Ka0UCMx6PmqNet2SdAnNOFkZrMWWmPlSRKz6FVXGPQOU7MMLy3Ycv0V4MVO1tzkfwrSovDgDvzUNZRXbWrIOLILY2WNd7Jwnk6XDwIf/UqS0rQ4Cm+ZjDs3ghwPl4ErLY8ESDKqawY9tUob+Xc9K9d5lr2+67wJaf7x4Kirl2av9z/APSmoKkW6WSYuiFd4pWxmFzmOoudiEQwhlTWTt4blhsodlxOsGPCc/itPoneuBtps7v95RqFp/E1jzHIifBPFM7aqLIxcm8LHBloKEKkwxluLpfVowyrNSnv9dvIn0hwPin677fSrMx0nhw4ag7nDUHmuOKxYbbUoux03lrt42jcRoRwKeNjXJ36fXzr2luvudkQub/+OrTuo/0u/wC9Cs9ZE0P/AEqPedIQhCsO8Ueln34/02/3PVG77uqVjDBltcfRHftPAJqtt0Nq1RUeZAaG4RlJBcczuz0WhTYGgAAADQDIBJ07ma9C7LXKfAu2ujZbIxvXNxiocDnFuIDImcOwZbJKiZZm0z2HY6FTNjgcUb2zt4cORUX0j/c0v9T/AKHJMsN41KUhjiGkgubq0xtjfxGaVz6XgJatae31ePDtx+bi50ssJs1reGkgE42kZa6+cqS7r+BhtXI+0NPzDZzWv9IdQVhSqgEObia/aNhBB2jI+KSCE+zOyddWojnn3j41wIkGQdCNCrzjlSPsU3O7+tfHmWdyQbBbqlL0ZLdrTp+ybmXqypSbhyMAFp2YQTrtBLp7krWDLs0c6nnlHl5UL6kZ/wA7t6grWsTA7R8h+qhLycyjjksjSorqseF92e6tSddFk3rU7B2aQO9X6pcchA5rIvCoJAmc8ymi9jR07i4ZisElB2QJI02K3RqKsacgYcxshS0qJGuf82obwNZbGteIuupYhEbCfASfAAnuUlJoDGxvc08wZnwcB3FS2R4GGo3PCRjbvH/a4dn/ACF8dSwuqU5mIc0+0BoeRY4u7gkcsmdbqJWbcI8jMOadoI8RCVqdQtOWRTOwwl28GRVeOM+OfzTrg76EnUkywy3iMxn/ADwU1y2kurtnSHZdyywwnRXOjx+3HI/BCikEKK4SyluOFoH2buAJ8iqV22ljqjA/suDmwZ1zGq93tWw0nHgB4kD5lZDageQcEZqWWz9lm2BGR1280L6HyxjjuLSTrIJ1/KWfwJiuLolVrQ+pNOnxHbd7oOg4nwK5km3hHlo0znLpismHY7JUquDKbS5x2D4k6AcSnq4uhrKcPrxUf7PqN5+2eeXDamG7rupUG4KTQ0bd5O9x1JVpXRrS5NnT+j4V+Ke7+x56tu4eAQvSFYaGAQhCABCEIAUfpH+5pf6n/Q5ImTRidpsbtd+jePcNsP30htBo0ydA8k74wnTiZAHEhc2rVC4lx8NgGgA4AQFz2e0YGvX67fwNGpXxUXOMdoNZA0DgQYA2DCwHvhLlquwOzbkd2w/otV1UdW1m0Pe497aYH9rvFQqE2imF865dUWYAYWvaCIgg+Ga262ZnbtUgs7XmHjIS474aC4xxgKlaGOOZOXhHM7+StU8mxRrVbHD2f2LVGmTk0EncBPkFI+zVP+G/+h36KlRqiRIxD8UifDOO8LTstqYACAxoGynTaXTv62qHFvdi00StPzOS6qcZZs+plWppOXGNYjmqN+3W6z1hTcHCWMcMWRgjUjZJkxs0TLar4ca1OsWNeafoteXuac5l0OGKPDgsvptezrZXFfBhIptY4AyJa55kHd2k8eDR0mPVLHvKljGAQrjAHZjvCzrLaQRB1UnXwZHfxQ45Iv0ys3WzL1JxY6RyIOhG0H+Za6rQtMRTrCSwdh2k4c8jxw4m/knQhUaNUPCt2J4aXMcfsniHbcJyh4G2CBIGoHJJjBnShKDxIqvbhJadQSD3ZLIvpnaa7eI8P8ha9vaWVix2uBnGeyMwduYOe1Z1uGKn7pB+R84Vi4NWhYrRSu89sd/wWrYqTRVD4zz71lWH0x3/AAWtQMOSSeGcOrnKFqcX5f2S39WBa0b3Dy/gVWxHOPmrluoO9Zjg3QEtIBOuRKjs1ADZKlSzyXVauM10z2Z0H6NbFTf1r3sDiwsLZzAJx5gaTlqugpO+jOhFCq/2qkf0tB+LinFOlg6oQjBYigQhCkYEIQgAQhCABCFBbbW2lTfVeYZTa57jwaC4+QQByrpv0zp2iqKFM/Y0ye3GT6mkj8A0B2kk6QViApctVpdVqPqv9Ko9z3c3EuMcJJXuy2xzNMxuOn7KuUM7nBq9E7X1xe4wIVey2tr9MjuOv7qwqWsGJOEoPpksMlsxGIToZaTuDgWk9wMqnUY4EhwggwRuKnDozOgWfbb4kYWgGMg4jMAbBvHOY2KYps6NNXOx9MUSVmtGuU+JRTqdyzqVoBMnXirPWK9LY3qqumHTJ5LhdKidTCibVXsVEJYHhBQWIkdWyNOwDjtVY0HDjszV5zpyXrapHM8Oc3OCAr/1js4hqNQcpG8KOs2Y5kQpwwZCEYFlCMliSPNChUtDmupzAGHE70Wj2RvjPIb9ia7r6KUXNIqS4nUyWzyaDkF66M2MCljzJLiQNg2ZDfkmOgY1QghFRWEYlp6HWNjC5re1IaDjeYkhsiTBOaXbrseEB5zcQCNzQQCDxdEcp36Nt63Y2TXaX4gBLQ44TmO1hzAI1kd8rEc5wd2GdmBAwh7gI5YoBmDpuVc+TN1vt/L+wwiCDBDhmCfSG+NTvneNZWZabEacZy1wkHyII2EHyg7VffUz7Uzxme+c1FbaoAaCey5zgeGTId3Z9znb0hxe407lv+rZYaztUyGksOkloJLT6pz5cF0G5r8o2kdh0OGrHZOHdtHELlVcQ4j2Yb/SA35LzTqFpDmkhwzBBgg8CNEKbRFOtnVJrldv6O1ISRcPTQ5MtInYKjRn+do15jw2p2BVyknwbVN8LlmLPqEITFwIQhAAkf6XL16qxiiD2q7w3jgbD3d04W/mTwuJ/S5b+st/VzlRptbG5zh1hPeHMH5UEiWCvi+IKgk9YjMrRst6kCHidx0Pf+qzF6aoaT5KraYWrE0XKlpc8uJOQaTA02N7/SCpSvRfAI3iPMH5BeFKWB4QjBYisI+r215C8BfUDFhtcblKK52MVFXrPk0IA9tLic5HAKw6oFA+qQvDJQBYDyp2vVaUVK+FpPhzQA93JacNFrS07eO1a9K0A7Y5hJVxXvjZnkQc4Md/BMNG0GMs+eqAGCm6WnPRI7qBqvc+nVpuBcS0EkdmThg5zlG5aHSK29XZKrw1+It6sxk1peMIcTlOvwSp0Xq2PAW2gkOns4S4HSNhzUNZEsrjNYkjbNWqzsPa6NwOR+RUFoaX1Rl9nSPaOwuEFzRvMgNj8M6Sr11MoOtVKnjrOpuc1sOcY7WQ4jPdC3OkHRKswl9MurM3HOo3u9YcvBVyi1wZOo006lmO6FcknM6nVXrouetaHRTbkNXHJreZ38BmmS4uhRMPtOQ2Uwcz77hpyHinWhRaxoaxoa0ZAAQB3KI155KtP6OlPxWbLt5/4ZFxdGaNnh3p1PbcNPcHq/HittCFcklwbMK41rpisIEIQpHBCEIAF+fvpA/9StXvj+xqEIJQvFfQhCgkDsQEIQAOQ1CEACCvqEAfAtCh6I5IQgD1V0XhuoQhAEirW/0BzHwK+oQAXP6RT1duo5fNCEAeum/+xO99nxC5ptHd8UIQA9XR/tdH/Upf/a1drQhSQwQhCCAQhCABCEIA/9k=',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/89 Replay.mp3',
      genre: 'electronic techno',
      star: 4
    },
    {
      title: 'Waves of the Soul',
      artist: 'Massane',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHb5FXHrLdd1EN6k1RXpKyZwUT0_9AEszaXw&s',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/01 Waves of the Soul.mp3',
      genre: 'electronic techno',
      star: 4
    },
    {
      title: 'The Sign',
      artist: 'CamelPhat, Anyma',
      cover:
        'https://i1.sndcdn.com/artworks-tn0TZQs90mTaoBCB-ckzT2g-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Night Rider (Playlist)/02 The Sign.mp3',
      genre: 'electronic techno',
      star: 4
    },
    {
      title: 'We Control',
      artist: 'Lilly Palmer',
      cover: 'https://f4.bcbits.com/img/a2341283397_10.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Best of House & Techno (Playlist)/01 We Control.mp3',
      genre: 'electronic techno',
      star: 4
    },
    {
      title: 'Rave Harder Techno Bass',
      artist: 'Mark Dekoda',
      cover: 'https://i1.sndcdn.com/artworks-BQsylP1eXeHn-0-t500x500.jpg',
      audio:
        'https://dl3.songsara.net/FRE/2023/2/Best of House & Techno (Playlist)/03 Rave Harder Techno Bass.mp3',
      genre: 'electronic techno',
      star: 5
    },
    {
      title: 'The Secret Wedding',
      artist: 'James Horner',
      cover:
        'https://i.ytimg.com/vi/TmPGCJPxsug/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcyComvt1qq7diWkeOJT7O4Hw6cQ',
      audio:
        'https://dl.musicdagh.ir/songs/instrumental/braveheart/The-Secret-Wedding.mp3',
      genre: 'relax',
      star: 5
    },
    {
      title: 'Conquest Of Paradise',
      artist: 'Vangelis',
      cover: '',
      audio:
        'https://dl.musicdagh.ir/songs/instrumental/vangelis/conquest-of-paradise.mp3',
      genre: 'electronic techno',
      star: 4
    },
    {
      title: 'Faiano',
      artist: 'Charlie Dreaming',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/11/charlie-dreaming-Migration-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/11/charlie dreaming - Migration (2024)/128k/01) charlie dreaming - Faiano.mp3',
      genre: 'relax ambient',
      star: 5
    },
    {
      title: 'Napoli',
      artist: 'Charlie Dreaming',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/11/charlie-dreaming-Migration-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/11/charlie dreaming - Migration (2024)/128k/02) charlie dreaming - Napoli.mp3',
      genre: 'relax ambient',
      star: 5
    },
    {
      title: 'Saturna',
      artist: 'Charlie Dreaming',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/11/charlie-dreaming-Migration-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/11/charlie dreaming - Migration (2024)/128k/03) charlie dreaming - Saturna.mp3',
      genre: 'relax ambient',
      star: 5
    },
    {
      title: 'Waves',
      artist: 'Charlie Dreaming',
      cover:
        'https://vmusic.ir/wp-content/uploads/2024/11/charlie-dreaming-Migration-2024.jpg',
      audio:
        'https://dc.vmusic.ir/2024/11/charlie dreaming - Migration (2024)/128k/04) charlie dreaming - Waves.mp3',
      genre: 'relax ambient',
      star: 5
    },
    {
      title: 'Leaf In The Wind',
      artist: 'Mirko Dukanovic',
      cover: 'https://vmusic.ir/mp3/mirko-dukanovic-leaf-in-the-wind-2024/',
      audio:
        'https://dc.vmusic.ir/2024/10/Mirko Dukanovic - Leaf In The Wind (2024)/128k/Mirko Dukanovic - Leaf In The Wind.mp3',
      genre: 'relax ambient',
      star: 5
    },

    {
      title: 'O Come, O Come, Emmanuel',
      artist: 'Daniel Philip',
      cover: 'https://vmusic.ir/wp-content/uploads/2024/11/0.jpg',
      audio:
        'https://dc.vmusic.ir/2024/11/Daniel Philip - Christmas on a Felt Piano (2024)/128k/01) Daniel Philip - O Come, O Come, Emmanuel.mp3',
      genre: 'relax piano',
      star: 5
    },
    {
      title: 'What Child is This',
      artist: 'Daniel Philip',
      cover: 'https://vmusic.ir/wp-content/uploads/2024/11/0.jpg',
      audio:
        'https://dc.vmusic.ir/2024/11/Daniel Philip - Christmas on a Felt Piano (2024)/128k/03) Daniel Philip - What Child is This_.mp3',
      genre: 'relax piano',
      star: 5
    },
    {
      title: 'O Holy Night',
      audio:
        'https://dc.vmusic.ir/2024/11/Daniel Philip - Christmas on a Felt Piano (2024)/128k/04) Daniel Philip - O Holy Night.mp3',
      artist: 'Daniel Philip',
      cover: 'https://vmusic.ir/wp-content/uploads/2024/11/0.jpg',
      genre: 'relax piano',
      star: 5
    },
    {
      title: 'Alive',
      artist: 'Ytram',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/12/Ytram-Alive-2020.jpg',
      audio:
        'https://dl.vmusic.ir/2020/12/Ytram - Alive (2020)/128k/Ytram - Alive.mp3',
      genre: 'electronic house',
      star: 4
    },
    {
      title: 'Obsidian',
      artist: 'Fourge',
      cover:
        'https://vmusic.ir/wp-content/uploads/2021/01/Fourge-Obsidian-2021.jpg',
      audio:
        'https://dl.vmusic.ir/2021/01/Fourge - Obsidian (2021)/128k/Fourge - Obsidian.mp3',
      genre: 'electronic house',
      star: 4
    },
    {
      title: 'A Place For Everything',
      artist: 'A.M.R',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/08/A.M.R-A-Place-For-Everything-2020.jpg',
      audio:
        'https://dl.vmusic.ir/2020/08/A.M.R - A Place For Everything (2020)/128k/01) A.M.R - A Place For Everything - 2020.mp3',
      genre: 'relax',
      star: 4
    },
    {
      title: 'Crystal Fountain',
      artist: 'A.M.R',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/08/A.M.R-A-Place-For-Everything-2020.jpg',
      audio:
        'https://dl.vmusic.ir/2020/08/A.M.R - A Place For Everything (2020)/128k/02) A.M.R - Crystal Fountain - 2020.mp3',
      genre: 'electronic house',
      star: 4
    },
    {
      title: 'Fireflies',
      artist: 'A.M.R',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/08/A.M.R-A-Place-For-Everything-2020.jpg',
      audio:
        'https://dl.vmusic.ir/2020/08/A.M.R - A Place For Everything (2020)/128k/03) A.M.R - Fireflies - 2020.mp3',
      genre: 'electronic house',
      star: 4
    },
    {
      title: 'Sailor’s Cry',
      artist: 'A.M.R',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/08/A.M.R-A-Place-For-Everything-2020.jpg',
      audio:
        "https://dl.vmusic.ir/2020/08/A.M.R - A Place For Everything (2020)/128k/04) A.M.R - Sailor's Cry - 2020.mp3",
      genre: 'electronic house',
      star: 4,
      duration: '4:31'
    },
    {
      title: 'Fell Out Of Love',
      audio:
        'https://dl.vmusic.ir/2020/08/A.M.R - A Place For Everything (2020)/128k/05) A.M.R, Brandon Mignacca - Fell Out Of Love - 2020.mp3',
      artist: 'A.M.R',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/08/A.M.R-A-Place-For-Everything-2020.jpg',
      genre: 'electronic house',
      star: 4,
      duration: '3:56'
    },
    {
      title: 'Hidden Sun',
      audio:
        'https://dl.vmusic.ir/2020/08/A.M.R - A Place For Everything (2020)/128k/06) A.M.R - Hidden Sun - 2020.mp3',
      artist: 'A.M.R',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/08/A.M.R-A-Place-For-Everything-2020.jpg',
      genre: 'electronic house',
      star: 4,
      duration: '6:36'
    },
    {
      title: 'Constellation',
      audio:
        'https://dl.vmusic.ir/2020/08/A.M.R - A Place For Everything (2020)/128k/09) A.M.R - Constellation - 2020.mp3',
      artist: 'A.M.R',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/08/A.M.R-A-Place-For-Everything-2020.jpg',
      genre: 'electronic house',
      star: 4,
      duration: '6:36'
    },
    {
      title: 'In The Mornin',
      audio:
        "https://dl.vmusic.ir/2020/08/A.M.R - A Place For Everything (2020)/128k/08) A.M.R - In The Mornin' - 2020.mp3",
      artist: 'A.M.R',
      cover:
        'https://vmusic.ir/wp-content/uploads/2020/08/A.M.R-A-Place-For-Everything-2020.jpg',
      genre: 'electronic house',
      star: 4,
      duration: '7:12'
    },
    {
      title: 'Dokhtar Iroony',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Dokhtar%20Irouni.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Sheytoon Bala',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Shaytoon%20Balla.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Amene',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Aameneh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Sheytanat',
      audio: 'https://dl.ememay.ir/Music/Andy/Beegharar/Shaytanat-Andy-320.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Balaa',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Balla.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Shahre Ghesse',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Parieh%20Shahreh%20gheseh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Negah',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Negah.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Naze Naz',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Naze%20Naz.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Cheshmaye Naz',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Cheshmaye%20Naz.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Dokhtare Bala',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Dokhtareh%20Balla.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Nagoo Nemishe',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Nagou%20Na%20Nemisheh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Marde Tanha',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Mardeh%20Tanha%20%28feat.%20Heaven%20and%20Ea.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Dokhtare AtishPare',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Dokhtare%20Atish%20Pareh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Aroosi Bandari',
      audio:
        'https://ch-ir.keylid.app/https/dl.music-irani.com/music/2023/12/03/pid_11479/sandi-4(music-irani.com).mp3',
      artist: 'Sandy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Dokhtar Abadani',
      audio:
        'https://ch-ir.keylid.app/https/dl.music-irani.com/music/2023/12/03/pid_11479/sandi-7(music-irani.com).mp3',
      artist: 'Sandy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Emsho Sho She',
      audio:
        'https://ch-ir.keylid.app/https/dl.music-irani.com/music/2023/12/03/pid_11479/sandi-10(music-irani.com).mp3',
      artist: 'Sandy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },

    {
      title: 'Eshghe Bandar',
      audio:
        'https://ch-ir.keylid.app/https/dl.music-irani.com/music/2023/12/03/pid_11479/sandi-11(music-irani.com).mp3',
      artist: 'Sandy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Daram miram be tehran',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Daram%20Miram%20Beh%20Tehran.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Amine',
      audio:
        'https://dlrrooz.top/Music/A/C/Sandishad//Sandi%20-%20Amine%20[320].mp3',
      artist: 'Sandy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Deldar',
      audio:
        'https://dlrrooz.top/Music/A/C/Sandishad/Sandi%20-%20Deldaar%20[320].mp3',
      artist: 'Sandy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musicrooz.com/'
    },
    {
      title: 'Delom Chine',
      audio:
        'https://dlrrooz.top/Music/A/C/Sandishad/Sandi%20-%20Delom%20Chine%20[320].mp3',
      artist: 'Sandy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musicrooz.com/'
    },
    {
      title: 'Halime',
      audio:
        'https://dlrrooz.top/Music/A/C/Sandishad/Sandi%20-%20Halimeh%20[320].mp3',
      artist: 'Sandy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musicrooz.com/'
    },
    {
      title: 'Mashalla',
      audio:
        'https://dlrrooz.top/Music/A/C/Sandishad/Sandi%20-%20Mashala%20[320].mp3',
      artist: 'Sandy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musicrooz.com/'
    },
    {
      title: 'Raghse Javoona',
      audio:
        'https://dl.aftabmusic.com/1403/11/Album/Sandy-Raghse-Javoona/Party.MP3',
      artist: 'Sandy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Ramezun',
      audio:
        'https://dl.aftabmusic.com/1403/11/Album/Sandy-Raghse-Javoona/Remezun.MP3',
      artist: 'Sandy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Khosh Be Halam',
      audio:
        'https://irsv.upmusics.com/AliBZ/Hamid%20Hiraad%20Ft%20Ragheb%20|%20Khosh%20Be%20Halam%20(320).mp3',
      artist: 'Ragheb & Hirad',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://upmusics.com/'
    },
    {
      title: 'Gentleman',
      audio: 'https://ememay.ir/wp-content/uploads/2024/10/Sasy-Gentleman.mp3',
      artist: 'Sasy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Tehran Tokyo',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/10/Sasy-Tehran-Tokyo.mp3',
      artist: 'Sasy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Doctor',
      audio: 'https://ememay.ir/wp-content/uploads/2024/10/Sasy-Doctor.mp3',
      artist: 'Sasy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Baradarane Leyla',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/10/Sasy-Baradarane-Leila.mp3',
      artist: 'Sasy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },

    {
      title: 'Maman Mano Bebakhsh',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/10/Sasy-Maman-Mano-Bebakhsh.mp3',
      artist: 'Sasy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Shabe Royaei',
      audio:
        'https://irsv.upmusics.com/AliBZ/Aron%20Afshar%20%E2%80%93%20Shabe%20Royaei%203%20(320).mp3',
      artist: 'Aron Afshar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://upmusics.com/'
    },
    {
      title: 'Gole Naz',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Goleh%20Naz.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Entezar',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Entezar.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Az Khod Gozashte',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Az%20Khod%20Gozashteh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Be Kasi Nagoo',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Be%20Kasi%20Nagoo.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Ghesseye Eshgh',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Ghesseyeh%20Eshgh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Ghasre Kaghazi',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Ghasreh%20Kaghazi.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi pop',
      star: 4,
      duration: ''
    },
    {
      title: 'Goli Joon',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Goli%20Jon.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Age Eshgh Hamine',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Ageh%20Eshgh%20Hamineh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Khoshgele Mahalamoun',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Khoshgeleh%20Mahalamoun.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Emrooz Ke Man Ashegham',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Emrouz%20Ke%20Man%20Ashegham.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Eshghe Aval',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Eshgeh%20Aval.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Leyla',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Leila.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Khodaye Asemoonha',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Khodaye%20Asemoonha.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Dokhtare Bandar',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Dokhtare%20Bandar.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Bargard',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Bargard.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Baran',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Ghesseh%20Baran%20%28Andy%29.MP3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi pop',
      star: 4,
      duration: ''
    },
    {
      title: 'Ketabe Afarinesh',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Ketabeh%20Afarinesh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Sepide',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Sepideh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Shabe Man',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Shabeh%20Man.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: ''
    },
    {
      title: 'Bigharar',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Beegharar.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi pop',
      star: 4,
      duration: '',
      reference: 'https://ahoramusics.ir/'
    },
    {
      title: 'Norouz',
      artist: 'Andy',
      cover:
        'https://javanmelody.ir/wp-content/uploads/2023/02/Andy20-20Norouz.jpg',
      audio:
        'https://dl.javanmelody.ir/dl/1401/12/Andy-Norouz-abanmusics.com-128.mp3',
      genre: 'pop raghsi',
      duration: '',
      star: 5,
      reference: 'https://javanmelody.ir/'
    },
    {
      title: 'Stand By Me',
      artist: 'Andy & Bon Jovi',
      cover: 'https://javanmelody.ir/wp-content/uploads/2023/02/Andy-7.jpg',
      audio:
        'https://dl.javanmelody.ir/dl/1401/12/Andy-&-038;-Bon-Jovi-Stand-By-Me-abanmusics.com-128.mp3 ',
      genre: 'pop rock',
      duration: '',
      star: 5,
      reference: 'https://javanmelody.ir/'
    },
    {
      title: 'Kaghaze Bi Khat',
      artist: 'Andy',
      cover:
        'https://assets.rjassets.com/static/mp3/andy-kaghaze-bi-khat/9a58b404.jpg',
      audio:
        'https://dl.javanmelody.ir/dl/1401/12/Andy-Kaghaze-Bi-Khat-abanmusics.com-128.mp3',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://javanmelody.ir/'
    },
    {
      title: 'Tanhaei',
      artist: 'Andy',
      cover: '',
      audio:
        'https://dl.ememay.ir/Music/Andy/Love-Songs-Vol.1/Tanhaee-Andy-320.mp3',
      genre: 'pop',
      duration: '',
      star: 5,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Shabe Asheghi',
      audio:
        'https://sv.ahoramusics.ir/ton/1403/12/aron-afshar-shabe-asheghi-128.mp3',
      artist: 'Aron Afshar',
      cover:
        'https://ahoramusics.ir/wp-content/uploads/2025/03/aronafsharshabeasheghi.jpg',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ahoramusics.ir/'
    },
    {
      title: 'Jaan Jaan',
      audio:
        'https://sv.ahoramusics.ir/ton/1403/12/aron-afshar-jaan-jaan-128.mp3',
      artist: 'Aron Afshar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ahoramusics.ir/'
    },
    {
      title: 'Farar',
      audio:
        'https://sv.ahoramusics.ir/ton/1403/12/farzad-farzin-farar-128.mp3',
      artist: 'Farzad Farzin',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ahoramusics.ir/'
    },
    {
      title: 'Saghiya',
      audio: 'https://ememay.ir/wp-content/uploads/2024/10/Sasy-Saaghiya.mp3',
      artist: 'Sasy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },

    {
      title: 'Maman Mano Bebakhsh',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/10/Sasy-Maman-Mano-Bebakhsh.mp3',
      artist: 'Sasy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Shabe Royaei',
      audio:
        'https://irsv.upmusics.com/AliBZ/Aron%20Afshar%20%E2%80%93%20Shabe%20Royaei%203%20(320).mp3',
      artist: 'Aron Afshar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://upmusics.com/'
    },
    {
      title: 'Gole Naz',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Goleh%20Naz.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Entezar',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Entezar.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Az Khod Gozashte',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Az%20Khod%20Gozashteh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Be Kasi Nagoo',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Be%20Kasi%20Nagoo.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Ghesseye Eshgh',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Ghesseyeh%20Eshgh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Ghasre Kaghazi',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Ghasreh%20Kaghazi.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi pop',
      star: 4,
      duration: ''
    },
    {
      title: 'Goli Joon',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Goli%20Jon.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Age Eshgh Hamine',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Ageh%20Eshgh%20Hamineh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Khoshgele Mahalamoun',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Khoshgeleh%20Mahalamoun.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Emrooz Ke Man Ashegham',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Emrouz%20Ke%20Man%20Ashegham.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Eshghe Aval',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Eshgeh%20Aval.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi pop',
      star: 4,
      duration: ''
    },
    {
      title: 'Leyla',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Leila.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Khodaye Asemoonha',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Khodaye%20Asemoonha.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Dokhtare Bandar',
      audio: 'https://dl.ememay.ir/Music/Andy/Devoted/Dokhtaré-Bandar-Andy-320.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Bargard',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Bargard.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Baran',
      audio:
        'https://sv.ahoramusics.ir/iran/Andy/Andy-Ghesseh%20Baran%20%28Andy%29.MP3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi pop',
      star: 4,
      duration: ''
    },
    {
      title: 'Ketabe Afarinesh',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Ketabeh%20Afarinesh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Sepide',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Sepideh.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: ''
    },
    {
      title: 'Shabe Man',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Shabeh%20Man.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: ''
    },
    {
      title: 'Bigharar',
      audio: 'https://sv.ahoramusics.ir/iran/Andy/Andy-Beegharar.mp3',
      artist: 'Andy',
      cover: '',
      genre: 'raghsi pop',
      star: 4,
      duration: '',
      reference: 'https://ahoramusics.ir/'
    },
    {
      title: 'Norouz',
      artist: 'Andy',
      cover:
        'https://javanmelody.ir/wp-content/uploads/2023/02/Andy20-20Norouz.jpg',
      audio:
        'https://dl.javanmelody.ir/dl/1401/12/Andy-Norouz-abanmusics.com-128.mp3',
      genre: 'pop raghsi',
      duration: '',
      star: 5,
      reference: 'https://javanmelody.ir/'
    },
    {
      title: 'Stand By Me',
      artist: 'Andy & Bon Jovi',
      cover: 'https://javanmelody.ir/wp-content/uploads/2023/02/Andy-7.jpg',
      audio:
        'https://dl.javanmelody.ir/dl/1401/12/Andy-&-038;-Bon-Jovi-Stand-By-Me-abanmusics.com-128.mp3 ',
      genre: 'pop rock',
      duration: '',
      star: 5,
      reference: 'https://javanmelody.ir/'
    },
    {
      title: 'Kaghaze Bi Khat',
      artist: 'Andy',
      cover:
        'https://assets.rjassets.com/static/mp3/andy-kaghaze-bi-khat/9a58b404.jpg',
      audio:
        'https://dl.javanmelody.ir/dl/1401/12/Andy-Kaghaze-Bi-Khat-abanmusics.com-128.mp3',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://javanmelody.ir/'
    },
    {
      title: 'Tavalod',
      artist: 'Andy',
      cover: 'https://persianbikalam.org/wp-content/uploads/2020/07/Tavalodet-Movarak-Andy-Bikalam.jpg',
      audio:
        'https://dl.ememay.ir/Music/Andy/Devoted/Tavalod-Andy-320.mp3',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://javanmelody.ir/'
    },
    {
      title: 'Shabe Asheghi',
      audio:
        'https://sv.ahoramusics.ir/ton/1403/12/aron-afshar-shabe-asheghi-128.mp3',
      artist: 'Aron Afshar',
      cover:
        'https://ahoramusics.ir/wp-content/uploads/2025/03/aronafsharshabeasheghi.jpg',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ahoramusics.ir/'
    },
    {
      title: 'Jaan Jaan',
      audio:
        'https://sv.ahoramusics.ir/ton/1403/12/aron-afshar-jaan-jaan-128.mp3',
      artist: 'Aron Afshar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ahoramusics.ir/'
    },
    {
      title: 'Farar',
      audio:
        'https://sv.ahoramusics.ir/ton/1403/12/farzad-farzin-farar-128.mp3',
      artist: 'Farzad Farzin',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ahoramusics.ir/'
    },

    //////////////////////////

    {
      title: 'Whisper Softly Within',
      audio:
        'https://dc.vmusic.ir/2025/01/Antarctic Wastelands - Whispers in Static (2024-10-11)/128k/02) Antarctic Wastelands - Whisper Softly Within.mp3',
      artist: 'Whispers in Static',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/01/Antarctic-Wastelands-Whispers-in-Static-2024-10-11.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'A Silence that Becomes',
      audio:
        'https://dc.vmusic.ir/2025/01/Antarctic Wastelands - Whispers in Static (2024-10-11)/128k/03) Antarctic Wastelands - A Silence that Becomes.mp3',
      artist: 'Whispers in Static',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/01/Antarctic-Wastelands-Whispers-in-Static-2024-10-11.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Echo',
      audio:
        'https://dc.vmusic.ir/2025/02/Freya Arde - E C H O (2025-02-07)/128k/01) Freya Arde - Echo.mp3',
      artist: 'Freya Arde',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/02/Freya-Arde-E-C-H-O-2025-02-07.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Our Voices',
      audio:
        'https://dc.vmusic.ir/2025/02/Freya Arde - E C H O (2025-02-07)/128k/03) Freya Arde - Our Voices.mp3',
      artist: 'Freya Arde',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/02/Freya-Arde-E-C-H-O-2025-02-07.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Falling In Love Again',
      audio:
        'https://dc.vmusic.ir/2025/02/Freya Arde - E C H O (2025-02-07)/128k/05) Freya Arde - Falling In Love Again.mp3',
      artist: 'Freya Arde',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/02/Freya-Arde-E-C-H-O-2025-02-07.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Precious',
      audio:
        'https://dc.vmusic.ir/2025/02/Freya Arde - E C H O (2025-02-07)/128k/09) Freya Arde - Precious.mp3',
      artist: 'Freya Arde',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/02/Freya-Arde-E-C-H-O-2025-02-07.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Starlight',
      audio:
        'https://dc.vmusic.ir/2025/02/VA - Heartfelt Piano (2024-03-28)/128k/01) VA - Starlight.mp3',
      artist: 'Heartfelt Piano',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/02/Various-Artists-Heartfelt-Piano-2024.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Renewal',
      audio:
        'https://dc.vmusic.ir/2025/02/VA - Heartfelt Piano (2024-03-28)/128k/02) VA - Renewal.mp3',
      artist: 'Heartfelt Piano',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/02/Various-Artists-Heartfelt-Piano-2024.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Flow of Life',
      audio:
        'https://dc.vmusic.ir/2025/02/Living Room - Flow Of Life (2025-02-17)/128k/01) Living Room - Flow of Life.mp3',
      artist: 'Living Room',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/Living-Room-Flow-Of-Life-2025-02-17.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Flow of Life',
      audio:
        'https://dc.vmusic.ir/2025/02/Living Room - Flow Of Life (2025-02-17)/128k/01) Living Room - Flow of Life.mp3',
      artist: 'Living Room',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/Living-Room-Flow-Of-Life-2025-02-17.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Light Rain',
      audio:
        'https://dc.vmusic.ir/2025/02/Living Room - Flow Of Life (2025-02-17)/128k/04) Living Room - Light Rain.mp3',
      artist: 'Living Room',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/Living-Room-Flow-Of-Life-2025-02-17.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'In the Rice Field',
      audio:
        'https://dc.vmusic.ir/2025/02/Living Room - Flow Of Life (2025-02-17)/128k/03) Living Room - In the Rice Field.mp3',
      artist: 'Living Room',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/Living-Room-Flow-Of-Life-2025-02-17.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Kyoto Sunset',
      audio:
        'https://dc.vmusic.ir/2025/02/Living Room - Flow Of Life (2025-02-17)/128k/05) Living Room - Kyoto Sunset.mp3',
      artist: 'Living Room',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/Living-Room-Flow-Of-Life-2025-02-17.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Jatiluwih',
      audio:
        'https://dc.vmusic.ir/2025/02/Living Room - Flow Of Life (2025-02-17)/128k/07) Living Room - Jatiluwih.mp3',
      artist: 'Living Room',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/Living-Room-Flow-Of-Life-2025-02-17.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Flight of the Dragon',
      audio:
        'https://dc.vmusic.ir/2025/02/Living Room - Flow Of Life (2025-02-17)/128k/08) Living Room - Flight of the Dragon.mp3',
      artist: 'Living Room',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/Living-Room-Flow-Of-Life-2025-02-17.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Shōgun',
      audio:
        'https://dc.vmusic.ir/2025/02/Living Room - Flow Of Life (2025-02-17)/128k/09) Living Room - Shōgun.mp3',
      artist: 'Living Room',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/Living-Room-Flow-Of-Life-2025-02-17.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Maitrī',
      audio:
        'https://dc.vmusic.ir/2025/02/Living Room - Flow Of Life (2025-02-17)/128k/14) Living Room - Maitrī.mp3',
      artist: 'Living Room',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/Living-Room-Flow-Of-Life-2025-02-17.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Temptation',
      audio:
        'https://dc.vmusic.ir/2025/02/DYATHON - Dark Academia Vol. 1 (Slowed) (2025-02-21)/128k/15) DYATHON - Temptation (Slowed).mp3',
      artist: 'DYATHON',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/Living-Room-Flow-Of-Life-2025-02-17.jpg',
      genre: 'relax ambient',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Do You Remember',
      audio:
        'https://dl.vmusic.ir/2023/06/DYATHON - Perfect Strangers (2023)/128k/01) DYATHON - Do You Remember.mp3',
      artist: 'DYATHON',
      cover:
        'https://vmusic.ir/wp-content/uploads/2023/06/DYATHON-Perfect-Strangers-2023.jpg',
      genre: 'relax piano',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Sorry',
      audio:
        'https://dc.vmusic.ir/2025/02/DYATHON - Dark Academia Vol. 1 (Slowed) (2025-02-21)/128k/02) DYATHON - Sorry (Slowed).mp3',
      artist: 'DYATHON',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/DYATHON-Dark-Academia-Vol.-1-2025-02-21.jpg',
      genre: 'relax piano',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Forgive Them',
      audio:
        'https://dc.vmusic.ir/2025/02/DYATHON - Dark Academia Vol. 1 (Slowed) (2025-02-21)/128k/05) DYATHON - Forgive Them (Slowed).mp3',
      artist: 'DYATHON',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/DYATHON-Dark-Academia-Vol.-1-2025-02-21.jpg',
      genre: 'relax piano',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Like When We Were Young ',
      audio:
        'https://dc.vmusic.ir/2025/02/DYATHON - Dark Academia Vol. 1 (Slowed) (2025-02-21)/128k/09) DYATHON - Like When We Were Young (Slowed).mp3',
      artist: 'DYATHON',
      cover:
        'http://vmusic.ir/wp-content/uploads/2025/02/DYATHON-Dark-Academia-Vol.-1-2025-02-21.jpg',
      genre: 'relax piano',
      star: 4,
      duration: '',
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Arghavan',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Ariyan%20Azarfar%20-%20Arghavan%20(Ft.Amir%20Daryab).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9Bcml5YW4gQXphcmZhciAtIEFyZ2hhdmFuIChGdC5BbWlyIERhcnlhYikubXAzIiwiaWF0IjoxNzQxMzY0NjAzLCJleHAiOjE3NzI5MDA2MDN9.RQp5OD3OakPO73p8tQ70Mkku0u7dQa2pbBd7kD05yLo',
      artist: 'Ariyan Azarfar (Ft.Amir Daryab)',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/Ariyan%20Azarfar%20-%20Arghavan%20(Ft.Amir%20Daryab).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL0FyaXlhbiBBemFyZmFyIC0gQXJnaGF2YW4gKEZ0LkFtaXIgRGFyeWFiKS5qcGciLCJpYXQiOjE3NDEzNjQ2NDYsImV4cCI6MTc3MjkwMDY0Nn0.PQTAaiehexSy8krXRfiVag3yVPgKTuqWSBCXepGaH_E',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://t.me/ariorecords'
    },
    {
      title: 'Shab',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Arman%20Garshasbi%20-%20Shab%20(DJ%20Phellix%20&%20Seventh%20Soul%20Remix).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9Bcm1hbiBHYXJzaGFzYmkgLSBTaGFiIChESiBQaGVsbGl4ICYgU2V2ZW50aCBTb3VsIFJlbWl4KS5tcDMiLCJpYXQiOjE3NDEzNjQ4MjYsImV4cCI6MTc3MjkwMDgyNn0.peQlUA-3TVpLYDK1F7cu-Wlz8rJwhXS8d6TUoIrzu-Q',
      artist: 'Arman Garshasbi (Seventh Soul Remix)',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/Arman%20Garshasbi%20-%20Shab%20&%20Seventh%20Soul%20Remix).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL0FybWFuIEdhcnNoYXNiaSAtIFNoYWIgJiBTZXZlbnRoIFNvdWwgUmVtaXgpLmpwZyIsImlhdCI6MTc0MTM2NDczMCwiZXhwIjoxNzcyOTAwNzMwfQ.ILuwqlGJDCVhSemnhiXL8K_9SAHiBO49A9TQoMvfLPk',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://t.me/ariorecords'
    },
    {
      title: 'Miracle',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Breathe%20Carolina%20&%20GIACOBBI%20-%20Miracle.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9CcmVhdGhlIENhcm9saW5hICYgR0lBQ09CQkkgLSBNaXJhY2xlLm1wMyIsImlhdCI6MTc0MTM2NDkwNywiZXhwIjoxNzcyOTAwOTA3fQ.uSbtQ0QETjPI4iCJ1eCQsc45kT2uWEg8xEozlC06IS0s',
      artist: 'Breathe Carolina & GIACOBBI ',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/Breathe%20Carolina%20&%20GIACOBBI%20-%20Miracle.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL0JyZWF0aGUgQ2Fyb2xpbmEgJiBHSUFDT0JCSSAtIE1pcmFjbGUuanBnIiwiaWF0IjoxNzQxMzY0OTIwLCJleHAiOjE3NzI5MDA5MjB9.L74jzBXWMGzCj45fq7dIOsRSSB-Xg8ALh-OMW36WIhI',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://t.me/ariorecords'
    },

    {
      title: 'Shah Sanam',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/DJ_Phellix_&_Amir_Sheykh_ft_Fiooji_Shah_Sanam_Original_Mix.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9ESl9QaGVsbGl4XyZfQW1pcl9TaGV5a2hfZnRfRmlvb2ppX1NoYWhfU2FuYW1fT3JpZ2luYWxfTWl4Lm1wMyIsImlhdCI6MTc0MTM2NTAyNCwiZXhwIjoxNzcyOTAxMDI0fQ.r9kn91e2bweCsQxbOMySSHFkITn8ajw86E2hmyc6fKs',
      artist: 'DJ Phellix & Amir Sheykh ft Fiooji',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/DJ_Phellix_&_Amir_Sheykh_ft_Fiooji_Shah_Sanam_Original_Mix.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL0RKX1BoZWxsaXhfJl9BbWlyX1NoZXlraF9mdF9GaW9vamlfU2hhaF9TYW5hbV9PcmlnaW5hbF9NaXguanBnIiwiaWF0IjoxNzQxMzY0OTc4LCJleHAiOjE3NzI5MDA5Nzh9.5sAGwSDux5L-gwrThZ6FSf2jCQapgjuX1jJ2YhiDvHk',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://t.me/ariorecords'
    },
    {
      title: 'Ney',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/DJ%20Phellix,%20Idin%20Gorji,%20Soudeh%20Sharhi%20&%20Ario%20Vibes%20-%20Ney.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9ESiBQaGVsbGl4LCBJZGluIEdvcmppLCBTb3VkZWggU2hhcmhpICYgQXJpbyBWaWJlcyAtIE5leS5tcDMiLCJpYXQiOjE3NDEzNjUxMDEsImV4cCI6MTc3MjkwMTEwMX0.WPHe4mNqGc9t4l73RvzUnrISU77iEnNk5UIDb5zzQXM',
      artist: 'DJ Phellix, Idin Gorji, Soudeh Sharhi & Ario Vibes',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/Ney.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL05leS5qcGciLCJpYXQiOjE3NDEzNjU0MjAsImV4cCI6MTc3MjkwMTQyMH0.CJQCiN0cahGDFTT0ym4yyQRlFEPbkYgXzm9O3WdWHgw',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://t.me/ariorecords'
    },
    {
      title: 'Shah E Man',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/DJ_Phellix,_OF_REZZ,_Sant_IR,_Ario_Vibes_Shah_E_Man_feat_Mardan.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9ESl9QaGVsbGl4LF9PRl9SRVpaLF9TYW50X0lSLF9BcmlvX1ZpYmVzX1NoYWhfRV9NYW5fZmVhdF9NYXJkYW4ubXAzIiwiaWF0IjoxNzQxMzY1NTY2LCJleHAiOjE3NzI5MDE1NjZ9.y0WfWf-m2Myr1dY69R-xNg3LepO48WvbPAeZbRsC2MQ',
      artist: 'DJ_Phellix (feat Mardan)',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/DJ_Phellix,_OF_REZZ,_Sant_IR,_Ario_Vibes_Shah_E_Man_feat_Mardan.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL0RKX1BoZWxsaXgsX09GX1JFWlosX1NhbnRfSVIsX0FyaW9fVmliZXNfU2hhaF9FX01hbl9mZWF0X01hcmRhbi5qcGciLCJpYXQiOjE3NDEzNjU1NDksImV4cCI6MTc3MjkwMTU0OX0.wemI9Jxcfdr3o6rpfaIGt0eji8KACNRQM2h8wnnx5D8',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://t.me/ariorecords'
    },
    {
      title: 'Shirin Da Macho',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/ENKINAKI%20&%20Donya%20Kamali%20-%20Shirin%20Da%20Macho.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9FTktJTkFLSSAmIERvbnlhIEthbWFsaSAtIFNoaXJpbiBEYSBNYWNoby5tcDMiLCJpYXQiOjE3NDEzNjU4NzksImV4cCI6MTc3MjkwMTg3OX0.EzVJpMLc8Sxxn3FAW2tEKfnNgkZll_i3Eomud9KpWKI',
      artist: 'ENKINAKI & Donya Kamali',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/ENKINAKI%20&%20Donya%20Kamali%20-%20Shirin%20Da%20Macho.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL0VOS0lOQUtJICYgRG9ueWEgS2FtYWxpIC0gU2hpcmluIERhIE1hY2hvLmpwZyIsImlhdCI6MTc0MTM2NTkwMCwiZXhwIjoxNzcyOTAxOTAwfQ.2gvAkmEUEUwS3EadStSSmcH-DgM4AurrXSbt8EU3-b8',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://t.me/ariorecords'
    },
    {
      title: 'Che Danestam',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Homayoun_Shajarian_Che_Danestam_DJ_Phellix_&_Enkinaki_Remix.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9Ib21heW91bl9TaGFqYXJpYW5fQ2hlX0RhbmVzdGFtX0RKX1BoZWxsaXhfJl9FbmtpbmFraV9SZW1peC5tcDMiLCJpYXQiOjE3NDEzNjU5NjAsImV4cCI6MTc3MjkwMTk2MH0.AeV43rjvvzrm_Mj8SnyNsTjIBUwbdr1Vfug9JkNOMA8',
      artist: 'Homayoun Shajarian (DJ Phellix & Enkinaki Remix)',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/Homayoun_Shajarian_Che_Danestam_DJ_Phellix_&_Enkinaki_Remix.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL0hvbWF5b3VuX1NoYWphcmlhbl9DaGVfRGFuZXN0YW1fREpfUGhlbGxpeF8mX0Vua2luYWtpX1JlbWl4LmpwZyIsImlhdCI6MTc0MTM2NjAyMCwiZXhwIjoxNzcyOTAyMDIwfQ.9OBsdPMSSpE-NdXM-_KQOA0-myY6bRO4Wx4UxtlTDvM',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://t.me/ariorecords'
    },
    {
      title: 'Daroone Ayene',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Houmayoun_Shajarian_Daroone_Ayene_DJ_Phellix_&_Ahira_Remix.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9Ib3VtYXlvdW5fU2hhamFyaWFuX0Rhcm9vbmVfQXllbmVfREpfUGhlbGxpeF8mX0FoaXJhX1JlbWl4Lm1wMyIsImlhdCI6MTc0MTM2NjA1OSwiZXhwIjoxNzcyOTAyMDU5fQ.D2O64iVauIyIxUtIqnxN1-mugNzF29sAtaZesSZd7xk',
      artist: 'Homayoun Shajarian (DJ Phellix & Ahira Remix)',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/Houmayoun_Shajarian_Daroone_Ayene_DJ_Phellix_&_Ahira_Remix.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL0hvdW1heW91bl9TaGFqYXJpYW5fRGFyb29uZV9BeWVuZV9ESl9QaGVsbGl4XyZfQWhpcmFfUmVtaXguanBnIiwiaWF0IjoxNzQxMzY2MTA1LCJleHAiOjE3NzI5MDIxMDV9.mU76mg6k-tBRY0myZXuVQlC22Ol51DLcORiBJBOBXm8',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://t.me/ariorecords'
    },
    {
      title: 'Sama (Original Mix)',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Idin%20Gorji%20-%20Sama%20(Original%20Mix).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9JZGluIEdvcmppIC0gU2FtYSAoT3JpZ2luYWwgTWl4KS5tcDMiLCJpYXQiOjE3NDEzNjYxNTQsImV4cCI6MTc3MjkwMjE1NH0.rg03r13XFqRC91vko6f0mmz0mhmgp4tQ3lU9T95wSOU',
      artist: 'Idin Gorji',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/Idin%20Gorji%20-%20Sama%20(Original%20Mix).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL0lkaW4gR29yamkgLSBTYW1hIChPcmlnaW5hbCBNaXgpLmpwZyIsImlhdCI6MTc0MTM2NjE2NiwiZXhwIjoxNzcyOTAyMTY2fQ.SC-9wQd0imUrVJpw60DL04qNtnjpFsLsdCq4uvy2MWY',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://t.me/ariorecords'
    },
    {
      title: 'Rahe Meykhane ',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/M.R%20Shajarian%20-%20Rahe%20Meykhane%20(DJ%20K-F%20Remix).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9NLlIgU2hhamFyaWFuIC0gUmFoZSBNZXlraGFuZSAoREogSy1GIFJlbWl4KS5tcDMiLCJpYXQiOjE3NDEzNjYyMjYsImV4cCI6MTc3MjkwMjIyNn0.irX_L6mnMSMi2w61S7-wrT_JwMZEX8Xi-ZixlqjS5eU',
      artist: 'M.R Shajarian (DJ K-F Remix)',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/M.R%20Shajarian%20-%20Rahe%20Meykhane%20(DJ%20K-F%20Remix).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL00uUiBTaGFqYXJpYW4gLSBSYWhlIE1leWtoYW5lIChESiBLLUYgUmVtaXgpLmpwZyIsImlhdCI6MTc0MTM2NjI0MSwiZXhwIjoxNzcyOTAyMjQxfQ.NhpNxgLT-voPXH-BXs_OKvQvvEracUmu4756kKwn5IY',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://t.me/ariorecords'
    },

    {
      title: 'Bargaye Narenji',
      audio:
        'https://irsv.upmusics.com/dlw/Sirvan%20Khosravi%20%7C%20Bargaye%20Narenji%20(320).mp3',
      artist: 'Sirvan',
      cover: '',
      genre: 'raghsi pop farsi',
      star: 4,
      duration: '',
      reference: 'https://upmusics.com/'
    },
    {
      title: 'On Rooza Ro Mikham',
      audio:
        'https://irsv.upmusics.com/AliBZ/Sirvan%20Khosravi%20-%20Oon%20Rooza%20Ro%20Mikham%20(320).mp3',
      artist: 'Sirvan',
      cover:
        'https://upmusics.com/wp-content/uploads/2023/12/Oon-Rooza-Ro-Mikham-Small.jpg',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'Man Moghaseram',
      audio:
        'https://irsv.upmusics.com/99/Sirvan%20Khosravi%20-%20Man%20Moghasram%20(128).mp3',
      artist: 'Sirvan',
      cover: '',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'Divoonegi',
      audio:
        'https://irsv.upmusics.com/99/Sirvan%20Khosravi%20-%20Divoonegi%20(128).mp3',
      artist: 'Sirvan',
      cover: '',
      genre: 'pop electronic farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'Bonbast',
      audio:
        'https://irsv.upmusics.com/99/Sirvan%20Khosravi%20-%20Bon%20Bast%20(128).mp3',
      artist: 'Sirvan',
      cover: '',
      genre: 'rock farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'Soojehat Tekrarie',
      audio:
        'https://irsv.upmusics.com/Up-Song/Sirvan%20Khosravi%20-%20Sopjehat%20Tekrarie%20(128).mp3',
      artist: 'Sirvan',
      cover: '',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'Nemiram Aghab',
      audio:
        'https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20-%20Nemiram%20Aghab%20(2).mp3',
      artist: 'Sirvan & Xaniar',
      cover: '',
      genre: 'pop rock farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'Tanha Nazar (Remix)',
      audio:
        'https://irsv.upmusics.com/99/Sirvan%20Khosravi%20%E2%80%93%20Tanha%20Nazar%20(128).mp3',
      artist: 'Sirvan',
      cover: '',
      genre: 'pop electronic farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'In Hess Naabe',
      audio:
        'https://irsv.upmusics.com/Up-Song/Sirvan%20Khosravi%20%7C%20In%20Hess%20Naabe%20(128).mp3',
      artist: 'Sirvan',
      cover: '',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'Emrooz Mikham Behet Begam',
      audio:
        'https://irsv.upmusics.com/Up-Song/Sirvan%20Khosravi%20%7C%20Emrooz%20Mikham%20Behet%20Begam%20(128).mp3',
      artist: 'Sirvan',
      cover: 'https://www.mybia2music.com/assets/thumbs/113866558_500.jpg',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'Bahar Nazdike',
      audio:
        'https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Bahar%20Nazdike%20(128).mp3',
      artist: 'Sirvan',
      cover: '',
      genre: 'pop rock farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: '70 Million Setare',
      audio:
        'https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Haftad%20Milion%20Setare%20(128).mp3',
      artist: 'Sirvan',
      cover: '',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'To Khial Kardi Beri',
      audio:
        'https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20To%20Khial%20Kardi%20Beri%20(128).mp3',
      artist: 'Sirvan',
      cover: '',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'Bazam Betab',
      audio:
        'https://irsv.upmusics.com/Downloads/Musics/Sirvan%20Khosravi%20%7C%20Bazam%20Betab%20(128).mp3',
      artist: 'Sirvan',
      cover: '',
      genre: 'pop electronic farsi',
      star: 5,
      duration: '',
      reference: 'upmusics.com'
    },
    {
      title: 'Ghalbamo Ba Arezo Dobare Dar Amikhti',
      audio:
        'https://dl.uptrack.ir/Uptrack-ROOt/1401/07%20Mehr/28/Ghalbamo%20Ba%20Arezo%20Song.mp3',
      artist: 'Hayde',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Bekhand',
      audio:
        'https://dl.musicdel.ir/tag/music/1402/08/22/Ragheb%20Ft%20Hamid%20Hiraad%20-%20Bekhand%20(128).mp3',
      artist: 'Sirvan',
      cover:
        'https://upmusics.com/wp-content/uploads/2023/11/photo_2023-11-13_20-00-05.jpg',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musicdel.ir/'
    },
    {
      title: 'Zare Zare',
      audio:
        'http://irsv.upmusics.com/AliBZ/Ashvan%20-%20Zare%20Zare%20(320).mp3',
      artist: 'Ashvan',
      cover: 'https://dl.musicdel.ir/Music/1402/03/ashvan_zare_zare.jpg',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musicdel.ir/'
    },
    {
      title: 'Damad',
      audio:
        'https://dl.somemusic.ir/Music/1402/00/Hasan Shamaizade - Damad.mp3',
      artist: 'Shamaizade',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: 'Jadeye Eshgh',
      audio:
        'https://dlmuweb.musicmellnet.com/musics/02/06/Siavash%20Shams%20-%201%20-%20128.mp3',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musicsweb.ir/'
    },
    {
      title: 'Dokhtar Irooni',
      audio:
        'https://dlmuweb.musicmellnet.com/musics/02/06/Siavash%20Shams%20-%203%20-%20128.mp3',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musicsweb.ir/'
    },
    {
      title: 'Dokhtare Choopoon',
      audio:
        'https://dl.mehrdl.top/Music/A/I/Siavash%20Shams/01.%20Dokhtare%20Choopoon.mp3',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://music-mehr.com/'
    },

    {
      title: 'Yavash Yavash',
      audio:
        'https://dl.mehrdl.top/Music/A/I/Siavash%20Shams/02.%20Yavash%20Yavash.mp3',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://music-mehr.com/'
    },

    {
      title: 'Hamsayeha',
      audio:
        'https://dl.mehrdl.top/Music/A/I/Siavash%20Shams/08.%20Hamsayeha.mp3',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'https://musicsweb.ir/'
    },

    {
      title: 'Sahne',
      audio:
        'https://radiodl2.musicmelnet.com/Music/1400/8/Siavash%20Shams%20-%20Sahneh.mp3?_=1',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'pop farsi',
      star: 5,
      duration: '',
      reference: 'https://musiketo.com/'
    },
    {
      title: 'Male Mani',
      audio:
        'https://radiodl2.musicmelnet.com/Music/1403/2/SiavashShams/Siavash%20Shams%20Male%20Mani%28MusiceTo.com%29.mp3?_=1',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musiketo.com/'
    },
    {
      title: 'Bargard',
      audio:
        'https://radiodl2.musicmelnet.com/Music/1403/2/SiavashShams/Siavash%20Shams%20Bargard%28MusiceTo.com%29.mp3?_=1',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://musiketo.com/'
    },
    {
      title: 'Nagoo Kie',
      audio:
        'https://radiodl2.musicmelnet.com/Music/1403/2/SiavashShams/Siavash%20Shams%20Nagoo%20Kiye%28MusiceTo.com%29.mp3?_=1',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://musiketo.com/'
    },
    {
      title: 'Beraghs',
      audio:
        'https://radiodl2.musicmelnet.com/Music/1403/2/SiavashShams/Siavash%20Shams%20Beraghs%28MusiceTo.com%29.mp3?_=1',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musiketo.com/'
    },
    {
      title: 'Chike Chike',
      audio:
        'https://radiodl2.musicmelnet.com/Music/1403/2/SiavashShams/Siavash%20Shams%20Chikeh%20Chikeh%28MusiceTo.com%29.mp3?_=1',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'https://musiketo.com/'
    },
    {
      title: 'Bacheha',
      audio:
        'https://radiodl2.musicmelnet.com/Music/1403/2/SiavashShams/SiavashShamsBachehHa%28MusiceTo.com%29.mp3?_=1',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'pop',
      star: 5,
      duration: '',
      reference: 'https://musiketo.com/'
    },
    {
      title: 'Aghaze Eshgh',
      audio:
        'https://radiodl2.musicmelnet.com/Music/1403/2/SiavashShams/AghazeEshgh%28MusiceTo.com%29.mp3?_=1',
      artist: 'Siavash Shams',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://musiketo.com/'
    },
    {
      title: 'Mano Del',
      audio:
        'https://dl.uptrack.ir///Uptrack-ROOt/1399/01Farvardin/13/ROBOT/Black Cats – Mano Del 128.mp3',
      artist: 'Black Cats',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Dafi Joon',
      audio:
        'https://dl.uptrack.ir///Uptrack-ROOt/1399/01Farvardin/13/ROBOT/Black Cats – Dafi Joon 128.mp3',
      artist: 'Black Cats',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Paasho',
      audio:
        'https://dl.uptrack.ir///Uptrack-ROOt/1399/01Farvardin/13/ROBOT/Black Cats – Paasho 128.mp3',
      artist: 'Black Cats',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Emshab',
      audio:
        'https://dl.uptrack.ir/Uptrack-ROOt/1399/10%20Dey/12/Black%20Cats%20-%20Emshab.mp3',
      artist: 'Black Cats',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Jonoon',
      audio:
        'https://dl.uptrack.ir///Uptrack-ROOt/1399/01Farvardin/13/ROBOT/Black Cats – Jonoon 128.mp3',
      artist: 'Black Cats',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Aftab',
      audio:
        'https://dl.uptrack.ir///Uptrack-ROOt/1399/01Farvardin/13/ROBOT/Black Cats – Aftab 128.mp3',
      artist: 'Black Cats',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Ma Dota',
      audio:
        'https://dl.uptrack.ir///Uptrack-ROOt/1399/01Farvardin/13/ROBOT/Black Cats – Ma Dota 128.mp3',
      artist: 'Black Cats',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Naz',
      audio:
        'https://dl.uptrack.ir///Uptrack-ROOt/1399/01Farvardin/13/ROBOT/Black Cats – Naz 128.mp3',
      artist: 'Black Cats',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Joone Khodet',
      audio:
        'https://dl.uptrack.ir///Uptrack-ROOt/1399/01Farvardin/13/ROBOT/Black Cats – Jon Khodet 128.mp3',
      artist: 'Black Cats',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Mashregh Zamin',
      audio:
        'https://dl.musichi.ir/1401/05/03/Black%20Cats%20-%20Sad%20Sale%20Pish%20Too%20Shahri%20Az%20Mashregh%20Zamin.mp3',
      artist: 'Black Cats',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musichi.ir/'
    },
    {
      title: 'Del Ey Del',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Del-Ey-Del.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Roozegare Eshgh',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Roozegare-Eshgh.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Jooni Joonom',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Jooni-Joonom.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Viroon Beshi Ey Del',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Viroon-Beshi-Ey-Del.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Asir',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Aseer.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Eshghe Taze',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Eshghe-Tazeh.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Chi Seda Konam',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Chi-Seda-Konam.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Pardis',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Pardis.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Bahare Eshgh',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Bahare-Eshgh.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Delbar',
      audio:
        'https://dl.mp3index.ir/teerex/2024/03/leila_foruhar%20_ey_del%20balaei%20delbar%20bala%20balaei%20delbar%20%20128.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://teereex.ir/'
    },
    {
      title: 'Delam',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Delam.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Vadeh',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Vadeh.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Bahaneh',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Bahaneh.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Yare Shirin',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Leila-Forouhar-Yare-Shirin.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Hel Heleh',
      audio: 'https://dl.ememay.ir/Music/Leila-Forouhar/Hamsafar/Hel-Heleh-Leila-Forouhar-320.mp3',
      artist: 'Leila Forouhar',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },

    {
      title: 'Pichak',
      audio: 'https://ememay.ir/wp-content/uploads/2024/08/Ebi-Pichak.mp3',
      artist: 'Ebi',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Gheseye Eshgh',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/08/Ebi-Gheseh-Eshgh.mp3',
      artist: 'Ebi',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Gol Vajhe',
      audio:
        'https://dl.mehrdl.top/Music/A/F/Hayedeh-golvajeh/3.Gol%20Vajeh.mp3',
      artist: 'Hayde',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://music-mehr.com/'
    },
    {
      title: 'Harighe Sabz',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/08/Ebi-Harighe-Sabz.mp3',
      artist: 'Ebi',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Masteh Cheshaat',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/08/Ebi-Masteh-Cheshaat.mp3',
      artist: 'Ebi',
      cover: '',
      genre: 'pop farsi',
      star: 3,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Khanom Gol',
      audio: 'https://ememay.ir/wp-content/uploads/2024/08/Ebi-Khanom-Gol.mp3',
      artist: 'Ebi',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Geryeh Nakon',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/08/Ebi-Geryeh-Nakon.mp3',
      artist: 'Ebi',
      cover: '',
      genre: 'pop farsi',
      star: 3,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Ghebleh',
      audio: 'https://ememay.ir/wp-content/uploads/2024/08/Ebi-Ghebleh.mp3',
      artist: 'Ebi',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Nazi Joon',
      audio:
        'https://sv.jenabmusic.com/1400/Mordad/07/Shahram%20Kashani%20-%20Nazi%20Joon%28128%29.mp3',
      artist: 'Shahram Kashani',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://www.jenabmusic.com/'
    },
    {
      title: 'Alaleh',
      audio:
        'https://sv.jenabmusic.com/1400/Mordad/07/Shahram%20Kashani%20-%20Alaleh%20-%20128.mp3',
      artist: 'Shahram Kashani',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://www.jenabmusic.com/'
    },
    {
      title: 'Aftab',
      audio:
        'https://sv.jenabmusic.com/1400/Mordad/07/Shahram%20Kashani%20-%20Aftab%20-%20128.mp3',
      artist: 'Shahram Kashani',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://www.jenabmusic.com/'
    },
    {
      title: 'Bonbast',
      audio:
        'https://sv.jenabmusic.com/1400/Mordad/07/Shahram%20Kashani%20-%20%20Bonbast%20-%20128.mp3',
      artist: 'Shahram Kashani',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://www.jenabmusic.com/'
    },
    {
      title: 'Hame Migan',
      audio:
        'https://sv.jenabmusic.com/1400/Mordad/07/Shahram%20Kashani%20-%20Hameh%20Migan%20-%20128.mp3',
      artist: 'Shahram Kashani',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://www.jenabmusic.com/'
    },
    {
      title: 'Dokhtare AhmadAbad',
      audio:
        'https://dl.uptrack.ir/Uptrack-ROOt/1401/04%20Tir/20/Dokhtare%20Ahmadabad%20Song.mp3',
      artist: 'The Boys',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://download1music.ir/'
    },
    {
      title: 'Bigharar',
      audio:
        'https://dl6.download1music.ir/Music/2023/The Boyz/The Boyz - Bigharar 128.mp3',
      artist: 'The Boys',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://download1music.ir/'
    },

    {
      title: 'Naro Naro',
      audio:
        'https://dl6.download1music.ir/Music/2020/The%20Boyz/The%20Boyz%20-%20Che%20Khosh%20Migzareh%20Emshab%20128.mp3',
      artist: 'The Boys',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://download1music.ir/'
    },
    {
      title: 'Abadan',
      audio:
        'https://dl.bandmusic.ir/files/1403/07/05/The Boys - Abadan (128).mp3',
      artist: 'The Boys',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://bandmusic.ir/'
    },

    {
      title: '',
      audio:
        'https://dl.uptrack.ir/Uptrack-ROOt/1401/11%20Bahman/01/Party/1.mp3?_=1',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: '',
      audio:
        'https://dl.uptrack.ir/Uptrack-ROOt/1401/11%20Bahman/01/Party/4.mp3?_=4',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Flames',
      audio:
        'https://dl.uptrack.ir/Uptrack-ROOt/1401/11%20Bahman/01/Party/5.mp3?_=5',
      artist: 'David Guetta & Sia',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: 'https://uptrack.ir/'
    },
    {
      title: 'Dark Cartoons',
      audio: 'https://dl.iraniandj.ir/2025/1/16/3.mp3',
      artist: 'Bam Signal',
      cover:
        'https://i1.sndcdn.com/artworks-lrgdRwnO9DhKwmC4-3Hq4Mg-t500x500.jpg',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: 'Atmosphere Between (Ash Roy Remix)',
      audio: 'https://dl.iraniandj.ir/2025/1/16/4.mp3',
      artist: 'Bam Signal',
      cover:
        'https://i1.sndcdn.com/artworks-lrgdRwnO9DhKwmC4-3Hq4Mg-t500x500.jpg',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: 'Illusion of Humanity (Ocular Scope remix)',
      audio: 'https://dl.iraniandj.ir/2025/1/16/5.mp3',
      artist: 'Bam Signal',
      cover:
        'https://i1.sndcdn.com/artworks-lrgdRwnO9DhKwmC4-3Hq4Mg-t500x500.jpg',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2025/1/12/1.mp3',
      artist: '',
      cover:
        'https://i1.sndcdn.com/artworks-lrgdRwnO9DhKwmC4-3Hq4Mg-t500x500.jpg',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: 'Asse Asse',
      audio: 'https://dl.musicdrum.ir/uploads/2023/03/Sheila-Aseh-Aseh.mp3',
      artist: 'Sheila',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },
    {
      title: 'Baraye',
      audio: 'https://dl.musicdrum.ir/uploads/2023/02/Shervin-Baraye-320.mp3',
      artist: 'Shervin',
      cover: '',
      genre: 'pop farsi',
      star: 5,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },
    {
      title: 'Ashghalaye Rangi',
      audio:
        'https://dl.musicdrum.ir/uploads/2022/11/Shervin-Ashghalyae-Rangi.mp3',
      artist: 'Shervin',
      cover: '',
      genre: 'pop farsi',
      star: 3,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },
    {
      title: 'Daemi',
      audio:
        'https://dl.musicdrum.ir/uploads/2022/11/Shervin-Hajipour-Daemi.mp3',
      artist: 'Shervin',
      cover: '',
      genre: 'pop',
      star: 3,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },
    {
      title: 'Roozaye Khoob',
      audio:
        'https://dl.musicdrum.ir/uploads/2022/11/Shervin-Hajipour-Roozaye-Khoob.mp3',
      artist: 'Shervin',
      cover: '',
      genre: 'pop',
      star: 3,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },

    {
      title: 'Be Donya Nemidamesh',
      audio:
        'https://dl.musicdrum.ir/uploads/2022/11/Shervin-Hajipour-Be-Donya-Nemidamesh.mp3',
      artist: 'Shervin',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },

    {
      title: 'Bade Man',
      audio:
        'https://dl.musicdrum.ir/uploads/2022/10/Bade-Man-Shervin-Hajipour.mp3',
      artist: 'Shervin',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },

    {
      title: 'Bahar Oomad',
      audio:
        'https://dl.musicdrum.ir/uploads/2022/10/Bahar-Oomad-Shervin-Hajipour320.mp3',
      artist: 'Shervin',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },
    {
      title: 'Save Your Tears',
      audio:
        'https://dl.musicdrum.ir/uploads/2024/07/The-Weeknd-Save-Your-Tears.mp3',
      artist: 'The Weeknd',
      cover:
        'https://i1.sndcdn.com/artworks-95fDUFrdSlxnM3LH-JtlDxA-t500x500.jpg',
      genre: 'pop',
      star: 5,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },
    {
      title: 'In Your Eyes',
      audio:
        'https://dl.musicdrum.ir/uploads/2024/07/The-Weeknd-In-Your-Eyes.mp3',
      artist: 'The Weeknd',
      cover:
        'https://m.media-amazon.com/images/M/MV5BZTg5ZjlhZTctNjk3Yy00OGJkLWIxNGUtMzc3NTg1M2U5YmUwXkEyXkFqcGc@._V1_.jpg',
      genre: 'pop electronic',
      star: 4,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },
    {
      title: 'Blinding Lights',
      audio:
        'https://dl.musicdrum.ir/uploads/2024/07/The-Weeknd-Blinding-Lights.mp3',
      artist: 'The Weeknd',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
      genre: 'pop electronic',
      star: 4,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },
    {
      title: 'Love Me Harder',
      audio:
        'https://dl.musicdrum.ir/uploads/2024/07/Love-Me-Harder-Ariana-Grande-Feat.-The-Weeknd.mp3',
      artist: 'Ariana Grande Feat. The Weeknd',
      cover: 'https://i1.sndcdn.com/artworks-000103566691-8kh6se-t500x500.jpg',
      genre: 'pop electronic',
      star: 5,
      duration: '',
      reference: 'https://musicdrum.ir/'
    },
    {
      title: 'Disconnected',
      audio: 'https://dl.iraniandj.ir/2022/03/53/3.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: 'Hawk',
      audio: 'https://dl.iraniandj.ir/2022/03/53/5.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/10/28/1.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/10/28/3.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/10/28/4.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/10/28/5.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 5,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/10/28/6.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/10/28/7.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/10/28/8.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/10/28/9.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/10/28/10.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/10/28/11.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2025/1/1/2.mp3',
      artist: 'Monococ',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/34/2.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/34/4.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/34/6.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/34/7.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/25/1.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/25/2.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 5,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/25/5.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/25/8.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/25/9.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/25/16.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/25/18.mp3',
      artist: '',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },

    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/19/2.mp3',
      artist: 'Cosmic Boys',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },

    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/19/4.mp3',
      artist: 'Cosmic Boys',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/19/5.mp3',
      artist: 'Cosmic Boys',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: '',
      audio: 'https://dl.iraniandj.ir/2024/12/19/6.mp3',
      artist: 'Cosmic Boys',
      cover: '',
      genre: 'electronic techno',
      star: 4,
      duration: '',
      reference: ''
    },
    {
      title: 'Please Forgive Me',
      audio: 'https://dl.musicdagh.ir/songs/best/adams/Please-Forgive-Me.mp3',
      artist: 'Bryan Adams',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/9/90/Please_forgive_me.jpg',
      genre: 'pop rock',
      star: 4,
      duration: '',
      reference: 'https://www.musicdagh.ir/'
    },
    {
      title: 'Straight From The Heart',
      audio:
        'https://dl.musicdagh.ir/songs/best/adams/Straight-From-The-Heart.mp3',
      artist: 'Bryan Adams',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/9/96/Straight_From_the_Heart_%28Bryan_Adams_single_-_cover_art%29.jpg',
      genre: 'pop rock',
      star: 4,
      duration: '',
      reference: 'https://www.musicdagh.ir/'
    },
    {
      title: 'Heaven',
      audio: 'https://dl.musicdagh.ir/songs/best/adams/Heaven.mp3',
      artist: 'Bryan Adams',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOuXs5xA1xwlKCY1kP4Up9ax9rc9EXy1iXXzv_r1ihJnTeiHL21dOXF02esQ-cP2XXPg&usqp=CAU',
      genre: 'pop rock',
      star: 4,
      duration: '',
      reference: 'https://www.musicdagh.ir/'
    },
    {
      title: 'Have You Ever Really Loved A Woman',
      audio:
        'https://dl.musicdagh.ir/songs/best/adams/Have-You-Ever-Really-Loved-A-Woman.mp3',
      artist: 'Bryan Adams',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFTPOg1yusIn6PGYSMH30W-0GB50XiDf4ug&s',
      genre: 'pop rock',
      star: 4,
      duration: '',
      reference: 'https://www.musicdagh.ir/'
    },
    {
      title: 'Summer Of 69',
      audio: 'https://dl.musicdagh.ir/songs/best/adams/Summer-Of-69.mp3',
      artist: 'Bryan Adams',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCJI341HULtVVSEiNblbUDK18-pThKbnhCg&s',
      genre: 'pop rock',
      star: 5,
      duration: '',
      reference: 'https://www.musicdagh.ir/'
    },
    {
      title: 'I Feel You',
      audio:
        'https://dl.songsara.net/RaMt!N/98/6-Shahrivar/TOP%2030%20Schiller%20(Selected%20BY%20SONGSARA.NET)%20128K/02%20Leben...I%20Feel%20You.mp3',
      artist: 'Schiller',
      cover: '',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://songsara.net/'
    },
    {
      title: 'In Between',
      audio:
        'https://dl.songsara.net/RaMt!N/98/6-Shahrivar/TOP%2030%20Schiller%20(Selected%20BY%20SONGSARA.NET)%20128K/03%20In%20Between.mp3',
      artist: 'Schiller',
      cover: '',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://songsara.net/'
    },
    {
      title: 'In Paradisum',
      audio:
        'https://dl.songsara.net/RaMt!N/98/6-Shahrivar/TOP%2030%20Schiller%20(Selected%20BY%20SONGSARA.NET)%20128K/04%20In%20Paradisum.mp3',
      artist: 'Schiller',
      cover: '',
      genre: 'relax',
      star: 4,
      duration: '',
      reference: 'https://songsara.net/'
    },
    {
      title: 'Ruhe (Live)',
      audio:
        'https://dl.songsara.net/RaMt!N/98/6-Shahrivar/TOP%2030%20Schiller%20(Selected%20BY%20SONGSARA.NET)%20128K/06%20Ruhe%20(Live).mp3',
      artist: 'Schiller',
      cover: '',
      genre: 'electronic house',
      star: 5,
      duration: '',
      reference: 'https://songsara.net/'
    },
    {
      title: 'Salton Sea',
      audio:
        'https://dl.songsara.net/RaMt!N/98/6-Shahrivar/TOP%2030%20Schiller%20(Selected%20BY%20SONGSARA.NET)%20128K/08%20Salton%20Sea.mp3',
      artist: 'Schiller',
      cover: '',
      genre: 'electronic house',
      star: 4,
      duration: '',
      reference: 'https://songsara.net/'
    },
    {
      title: 'Himalayas',
      audio:
        'https://dl6.songsara.net/FRE/14/Borrtex - Everest (2025) SONGSARA.NET/01 Himalayas.mp3',
      artist: 'Borrtex',
      cover: '',
      genre: 'relax',
      star: 4,
      duration: '',
      reference: 'https://songsara.net/'
    },
    {
      title: 'Broken Angel',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Arash-Broken-Angel-feat.-Helena.mp3',
      artist: 'Arash feat Helena',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },

    {
      title: 'One Day',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Arash-One-Day-feat.-Helena-Radio-Edit.mp3',
      artist: 'Arash feat Helena',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Pure Love',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Arash-Pure-Love-feat.-Helena.mp3',
      artist: 'Arash feat Helena',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Temptation',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Arash-Temptation.mp3',
      artist: 'Arash',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Hulu',
      audio: 'https://ememay.ir/wp-content/uploads/2024/09/Arash-Hulu.mp3',
      artist: 'Arash ft Sasy',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Tike Tike Kardi',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Arash-Tike-Tike-Kardi.mp3',
      artist: 'Arash',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Donya',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Arash-Donya-feat.-Shaggy-Single-Version.mp3',
      artist: 'Arash feat Shaggy',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'BOMBE',
      audio: 'https://ememay.ir/wp-content/uploads/2024/09/Arash-BOMBE.mp3',
      artist: 'Arash',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Dasa Bala',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Arash-Dasa-Bala-feat.-Timbuktu-Yag.mp3',
      artist: 'Arash feat. Timbuktu Yag',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Boro Boro (Funky Sunday)',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Arash-Boro-Boro-vs-Nexus.mp3',
      artist: 'Arash',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Mary Jane',
      audio: 'https://ememay.ir/wp-content/uploads/2024/09/Arash-Mary-Jane.mp3',
      artist: 'Arash',
      cover: '',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Tekoon Bede',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/09/Arash-Tekoon-Bede.mp3',
      artist: 'Arash',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://ememay.ir/'
    },

    {
      title: 'Baraat Mimiram',
      audio:
        'https://dl.aftabmusic.com/1403/9/Album/Shahram-Shabpareh-Tapesh/Shahram-Shabpareh-Baraat-Mimiram-256.mp3',
      artist: 'Shahram Shabpare',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Vaveyla',
      audio:
        'https://dl.aftabmusic.com/1403/11/Album/Shahram-Shabpareh-Taar-Ta-Gitar/03%20-%20(Aghasi)%20-%20Vaveyla%20,%20Labe%20Karoon.mp3',
      artist: 'Shahram Shabpare',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Terme O Atlas',
      audio:
        'https://dl.aftabmusic.com/1403/3/album/Sohbet%20Bekheir%20Azizam%20-%20Moein/02%20Terme%20O%20Atlas.mp3',
      artist: 'Moein',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Tolou',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Best Of Shohreh/Shohreh%20-%20Toloo%20[320].mp3',
      artist: 'Shohre',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30Xoviog9Z6wj4RQ9fISpmuZ_uQGgnfox0g&s',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Esrar',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Best Of Shohreh/Shohreh%20-%20Esrar%20[320].mp3',
      artist: 'Shohre',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Ayeneh',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Best Of Shohreh/Shohreh%20-%20Ayeneh%20[320].mp3',
      artist: 'Shohre',
      cover: 'https://sahand-music.ir/photos/2000/14/12622.webp',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Panjereha',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Best Of Shohreh/Shohreh%20-%20Panjereha%20[320].mp3',
      artist: 'Shohre',
      cover: 'https://sahand-music.ir/photos/2000/14/12622.webp',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Shabe Sher',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Best Of Shohreh/Shohreh%20-%20Shab%20Sher%20[320].mp3',
      artist: 'Shohre',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Kalaghe Domsiah',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Best Of Shohreh/Shohreh%20-%20Kalagheh%20Domsiah%20[320].mp3',
      artist: 'Shohre',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Dele Bigharar',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Best Of Shohreh/Shohreh%20-%20Dele%20Beh%20Gharar%20[320].mp3',
      artist: 'Shohre',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Salam',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Best Of Shohreh/Shohreh%20-%20Salam%20[320].mp3',
      artist: 'Shohre',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Hame Shahr',
      audio:
        'https://dl.aftabmusic.com/1403/6/New/Asef%20Aria%20-%20Hame%20Shahr%20(128).mp3',
      artist: 'Asef Arya',
      cover:
        'https://aftabmusic.com/wp-content/uploads/2024/09/%D8%B3%DB%8C.jpg',
      genre: 'pop',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Koja Residi',
      audio:
        'https://dl.aftabmusic.com/1403/12/Album/Dorcci-Young-Morvarid/02.Dorcci%20-%20Be%20Koja%20Residi%20(320).mp3',
      artist: 'Dorcci',
      cover:
        'https://kelmusic.ir/wp-content/uploads/2025/02/Dorcci-Be-Koja-Residi.webp',
      genre: 'electronic rap pop',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'H2CO3',
      audio:
        'https://dl.aftabmusic.com/1403/12/Album/Dorcci-Young-Morvarid/03.Dorcci%20-%20H2CO3%20(320).mp3',
      artist: 'Dorcci',
      cover:
        'https://kelmusic.ir/wp-content/uploads/2025/02/Dorcci-Be-Koja-Residi.webp',
      genre: 'electronic rap pop',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Too Late',
      audio:
        'https://dl.aftabmusic.com/1403/12/Album/Dorcci-Young-Morvarid/08.Dorcci%20-%20Too%20Late%20(320).mp3',
      artist: 'Dorcci',
      cover:
        'https://kelmusic.ir/wp-content/uploads/2025/02/Dorcci-Be-Koja-Residi.webp',
      genre: 'electronic rap pop',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Addi',
      audio:
        'https://dl.aftabmusic.com/1403/12/Album/Dorcci-Young-Morvarid/10.Dorcci%20-%20Addi%20(320).mp3',
      artist: 'Dorcci',
      cover:
        'https://kelmusic.ir/wp-content/uploads/2025/02/Dorcci-Be-Koja-Residi.webp',
      genre: 'electronic rap pop',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Engar Na Engar',
      audio:
        'https://dl.aftabmusic.com/1403/12/Album/Mansoor-Ghashange/03%20-%20Engar%20Na%20Engar.mp3',
      artist: 'Mansor',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Bari Bakh',
      audio:
        'https://dl.aftabmusic.com/1403/11/Album/Mansour-No-Limit/14%20Bari%20Bakh.mp3',
      artist: 'Mansor',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Setareh',
      audio:
        'https://dl.aftabmusic.com/1403/6/New/Majid Razavi - Setareh (128).mp3',
      artist: 'Majid Razavi',
      cover: 'https://aftabmusic.com/wp-content/uploads/2024/09/new-3.jpg',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Bi To',
      audio:
        'https://dl.aftabmusic.com/1403/11/Album/Black-Cats-Rise-of-The-Cats/Black%20Cats%20-%20Bi%20Tou.mp3',
      artist: 'Black Cats',
      cover: '',
      genre: 'raghsi',
      star: 3,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Ashofte Hali',
      audio:
        'https://dl.mehrdl.top/Music/A/A/Shakila/Shakila%20-%20Ashofteh%20Haali%20[320].mp3',
      artist: 'Shakila',
      cover: '',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'https://music-mehr.com/'
    },

    {
      title: 'Rosvaye Zamane',
      audio:
        'https://dl.mehrdl.top/Music/A/A/Shakila/Shakila%20-%20Rosvaye%20Zamaneh%20[320].mp3',
      artist: 'Shakila',
      cover: '',
      genre: 'pop farsi',
      star: 5,
      duration: '',
      reference: 'https://music-mehr.com/'
    },
    {
      title: 'Shahzadeye Royaye Man',
      audio:
        'https://dl.mehrdl.top/Music/A/A/Shakila/Shakila%20-%20Shahzadeye%20Royaye%20Man%20[320].mp3',
      artist: 'Shakila',
      cover: '',
      genre: 'pop farsi',
      star: 5,
      duration: '',
      reference: 'https://music-mehr.com/'
    },
    {
      title: 'Ghoghaye Setaregan',
      audio:
        'https://dl.mehrdl.top/Music/A/B/New/03%20Ghoghaye%20Setaregan.mp3',
      artist: 'Shakila',
      cover:
        'data:image/jpeg;base64,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',
      genre: 'pop farsi',
      star: 5,
      duration: '',
      reference: 'https://music-mehr.com/'
    },
    {
      title: 'Sinderella',
      audio:
        'https://dl.aftabmusic.com/1403/11/Album/Kamran-homan-Cinderella/Black%20Cats%20-%2001%20-%20Cinderella.mp3',
      artist: 'Black Cats',
      cover:
        'https://aftabmusic.com/wp-content/uploads/2025/02/%D8%A2%D9%84%D8%A8%D9%88%D9%85.webp',
      genre: 'raghsi farsi',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Aftab',
      audio:
        'https://dl.aftabmusic.com/1403/11/Album/Kamran-homan-Cinderella/Black%20Cats%20-%2003%20-%20Aftab.mp3',
      artist: 'Black Cats',
      cover:
        'https://aftabmusic.com/wp-content/uploads/2025/02/%D8%A2%D9%84%D8%A8%D9%88%D9%85.webp',
      genre: 'raghsi farsi',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Naroo',
      audio:
        'https://dl.aftabmusic.com/1403/11/Album/Kamran-homan-Cinderella/Black%20Cats%20-%2004%20-%20Naroo.mp3',
      artist: 'Black Cats',
      cover:
        'https://aftabmusic.com/wp-content/uploads/2025/02/%D8%A2%D9%84%D8%A8%D9%88%D9%85.webp',
      genre: 'pop farsi',
      star: 5,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Haramsara',
      audio:
        'https://dl.aftabmusic.com/1403/11/Album/Kamran-homan-Cinderella/Black%20Cats%20-%2006%20-%20Haramsara.mp3',
      artist: 'Black Cats',
      cover:
        'https://aftabmusic.com/wp-content/uploads/2025/02/%D8%A2%D9%84%D8%A8%D9%88%D9%85.webp',
      genre: 'raghsi farsi',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Behtarini',
      audio:
        'https://dl.aftabmusic.com/1403/8/Album/Kamran-Hooman-Shenasnameh/Kamran-Hooman-Behtarini-320.mp3',
      artist: 'Black Cats',
      cover:
        'https://aftabmusic.com/wp-content/uploads/2024/11/%D8%A2%D9%84%D8%A8%D9%88%D9%85-%DA%A9%D8%A7%D9%85%D8%B1%D8%A7%D9%86-%D9%87%D9%88%D9%85%D9%86-%D8%B4%D9%86%D8%A7%D8%B3%D9%86%D8%A7%D9%85%D9%87-.webp',
      genre: 'raghsi farsi',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Age Donya Daste Man Bood',
      audio:
        'https://dl.aftabmusic.com/1403/8/Album/Kamran-Hooman-Shenasnameh/Kamran-Hooman-Age-Donya-Daste-Man-Bood-320.mp3',
      artist: 'Black Cats',
      cover:
        'https://aftabmusic.com/wp-content/uploads/2024/11/%D8%A2%D9%84%D8%A8%D9%88%D9%85-%DA%A9%D8%A7%D9%85%D8%B1%D8%A7%D9%86-%D9%87%D9%88%D9%85%D9%86-%D8%B4%D9%86%D8%A7%D8%B3%D9%86%D8%A7%D9%85%D9%87-.webp',
      genre: 'raghsi farsi',
      star: 3.5,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: '20',
      audio:
        'https://dl.aftabmusic.com/1403/8/Album/Kamran%20&%20Hooman-20/Kamran-Hooman-20-320.mp3',
      artist: 'Black Cats',
      cover:
        'https://aftabmusic.com/wp-content/uploads/2024/11/%D8%A2%D9%84%D8%A8%D9%88%D9%85-%DA%A9%D8%A7%D9%85%D8%B1%D8%A7%D9%86-%D9%87%D9%88%D9%85%D9%86-%D8%B4%D9%86%D8%A7%D8%B3%D9%86%D8%A7%D9%85%D9%87-.webp',
      genre: 'raghsi farsi',
      star: 3.5,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Faghat Be Khatere To',
      audio:
        'https://dl.aftabmusic.com/1403/7/Album/Mansour - Faghat Be Khatere To/01-%20Faghat%20Be%20Khatere%20To.MP3',
      artist: 'Mansour',
      cover: '',
      genre: 'raghsi farsi',
      star: 3.5,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Another Brick in the Wall',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Another%20Brick%20in%20the%20Wall%2C%20Pt.%202.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },

    {
      title: 'Coming Back to Life',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Coming%20Back%20to%20Life.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },

    {
      title: 'Dogs',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Dogs.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Fearless',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Fearless.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Learning to Fly',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Learning%20to%20Fly.mp3',
      artist: 'Pink Floyd',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/d/da/Pink_Floyd_-_Learning_to_Fly.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Lost for Words',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Lost%20for%20Words.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Marooned',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Marooned.mp3',
      artist: 'Pink Floyd',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeY1GcFrzkHQtW908VtQ1m88Ka4dbL398o7w&s',
      genre: 'rock',
      star: 5,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'On the Turning Away',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-On%20the%20Turning%20Away.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'One of the Few',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-One%20of%20the%20Few.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'One of These Days',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-One%20of%20These%20Days.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 5,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Poles Apart',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Poles%20Apart.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Sheeps',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Sheep.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Shine On You Crazy Diamond',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Shine%20On%20You%20Crazy%20Diamond%20%28Pts.%201-5%29.mp3',
      artist: 'Pink Floyd',
      cover: 'https://i1.sndcdn.com/artworks-000202128953-9k4u41-t500x500.jpg',
      genre: 'rock',
      star: 5,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Take It Back',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Take%20It%20Back.mp3',
      artist: 'Pink Floyd',
      cover:
        'https://m.media-amazon.com/images/M/MV5BNzMwYjRmNjItZmZlMS00YmZlLWJmODQtNjBlODQxYzBlYjQ0XkEyXkFqcGc@._V1_.jpg',
      genre: 'rock',
      star: 5,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Time',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Time.mp3',
      artist: 'Pink Floyd',
      cover:
        'https://oss.sazito.com/apiuploads/kamkarmusic/uploads/image/rootimage/113/bacb5e1889f6c51d92d3485558eab319.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Us and Them',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Us%20and%20Them.mp3',
      artist: 'Pink Floyd',
      cover: 'https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Welcome to the Machine',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Welcome%20to%20the%20Machine.mp3',
      artist: 'Pink Floyd',
      cover: 'https://i1.sndcdn.com/artworks-000109780940-w1tbsc-t500x500.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'What Do You Want from Me',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-What%20Do%20You%20Want%20from%20Me.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 5,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Wish You Were Here',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Wish%20You%20Were%20Here.mp3',
      artist: 'Pink Floyd',
      cover:
        'https://i.pinimg.com/736x/80/0d/96/800d96788ee9dcfc25c67c111e366b9a.jpg',
      genre: 'rock',
      star: 5,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Young Lust',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Young%20Lust.mp3',
      artist: 'Pink Floyd',
      cover: 'https://files.musicfeed.ir/2018/12/Pink-Floyd-The-Wall-cover.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Lost for Words',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/PinkFloyd//Pink%20Floyd-Lost%20for%20Words.mp3',
      artist: 'Pink Floyd',
      cover: 'https://i.scdn.co/image/ab67616d0000b2738431fb4cb38f8ee96d3434c0',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'In Memory',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/EdSheeran//Ed%20Sheeran-%20In%20Memory.mp3',
      artist: 'Ed Sheeran',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuccCLLPmcR01PguodiRJJiS5dRedholaYpro4Meu4bWnfYBEanpJN8z5WXuVRz1AL2Dc&usqp=CAU',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Afterglow',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/EdSheeran//Ed%20Sheeran-Afterglow.mp3',
      artist: 'Ed Sheeran',
      cover:
        'https://production-digtracks-com.s3-ap-northeast-1.amazonaws.com/uploads/cover_art/file/51318/coverart.jpg',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Beyond The Pale',
      audio:
        'https://dl.aftabmusic.com/1403/7/Other/EdSheeran//Ed%20Sheeran-Beyond%20The%20Pale.mp3',
      artist: 'Ed Sheeran',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1YoQiHwS3ih7VXsmkjERbMlVybYg2xa9y2Q&s',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    // {
    //   title: 'Bloodstream',
    //   audio:
    //     'https://dl.aftabmusic.com/1403/7/Other/EdSheeran//Ed%20Sheeran-Bloodstream.mp3',
    //   artist: 'Ed Sheeran',
    //   cover: 'https://i.scdn.co/image/ab67616d0000b2738df49889b9167bcb6c1c61e5',
    //   genre: 'rock pop',
    //   star: 4,
    //   duration: '',
    //   reference: 'https://aftabmusic.com/'
    // },
    {
      title: 'Way Down We Go',
      audio:
        'https://dl.aftabmusic.com/1403/6/Other/Rock//Kaleo%20-%20Way%20Down%20We%20Go.mp3',
      artist: 'Kaleo',
      cover:
        'http://upload.wikimedia.org/wikipedia/en/a/a1/KaleoWayDownWeGo.jpg',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Wake Me Up When September Ends',
      audio:
        'https://dl.aftabmusic.com/1403/6/Other/Rock//Green%20Day%20-%20Wake%20Me%20Up%20When%20September%20Ends.mp3',
      artist: 'Green Day',
      cover:
        'http://m.media-amazon.com/images/I/715oSyF69WL._UF1000,1000_QL80_.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'abcdefu (angrier)',
      audio:
        'https://dl.aftabmusic.com/1403/6/Other/Rock//GAYLE%20-%20abcdefu%20%28angrier%29.mp3',
      artist: 'GAYLE',
      cover: 'https://i1.sndcdn.com/artworks-3IHpyuI3eiTd-0-t500x500.jpg',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Yellow',
      audio:
        'https://dl.aftabmusic.com/1403/6/Other/Rock//Coldplay%20-%20Yellow.mp3',
      artist: 'Coldplay',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/9/9b/Yellow_cover_art.JPG',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Viva La Vida',
      audio:
        'https://dl.aftabmusic.com/1403/6/Other/Rock//Coldplay%20-%20Viva%20La%20Vida.mp3',
      artist: 'Coldplay',
      cover: 'https://i.scdn.co/image/ab67616d0000b273e21cc1db05580b6f2d2a3b6e',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Rock and a Hard Place',
      audio:
        'https://dl.aftabmusic.com/1403/6/Other/Rock//Bailey%20Zimmerman%20-%20Rock%20and%20a%20Hard%20Place.mp3',
      artist: 'Bailey Zimmerman',
      cover: 'https://i.scdn.co/image/ab67616d0000b273f282daf9f783241294438aab',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'The Only Exception',
      audio:
        'https://dl.aftabmusic.com/1403/6/Other/Rock//Paramore%20-%20The%20Only%20Exception.mp3',
      artist: 'Paramore',
      cover: 'https://i.scdn.co/image/ab67616d0000b273e01d7d558032457b0e4883f6',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Running up That Hill',
      audio:
        'https://dl.aftabmusic.com/1403/6/Other/Rock//MEG%20MYERS%20-%20Running%20up%20That%20Hill.mp3',
      artist: 'MEG MYERS',
      cover:
        'https://i1.sndcdn.com/artworks-000499381992-u9okpp-t1080x1080.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Should’ve Said No',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/24.Taylor-Swift-Should%20ve-Said-No-128.mp3',
      artist: 'Taylor Swift',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5tWDLREvcvxR_H4oV-d0tr_tnz48DzE2lw&s',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Stay Beautiful',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/25.Taylor-Swift-Stay-Beautiful-128.mp3',
      artist: 'Taylor Swift',
      cover: '',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'The Outside',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/29.Taylor-Swift-The-Outside-128.mp3',
      artist: 'Taylor Swift',
      cover: '',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'The Way I Loved You',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/30.Taylor-Swift-The-Way-I-Loved-You-128.mp3',
      artist: 'Taylor Swift',
      cover: '',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: ' Tim Mcgraw',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/32.Taylor-Swift-Tim-Mcgraw-128.mp3',
      artist: 'Taylor Swift',
      cover: '',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Hey Stephen',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/18.Taylor-Swift-Hey-Stephen-128.mp3',
      artist: 'Taylor Swift',
      cover: 'https://i1.sndcdn.com/artworks-000065654007-vzqahe-t500x500.jpg',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Invisible',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/20.Taylor-Swift-Invisible-128.mp3',
      artist: 'Taylor Swift',
      cover:
        '',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Mary’s Song (Oh My My My)',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/21.Taylor-Swift-Mary%20s-Song-%28Oh-My-My-My%29-128.mp3',
      artist: 'Taylor Swift',
      cover:
        '',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'the lakes',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/11.the%20lakes.mp3',
      artist: 'Taylor Swift',
      cover:
        '',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'A Perfectly Good Heart',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/12.Taylor-Swift-A-Perfectly-Good-Heart-128.mp3',
      artist: 'Taylor Swift',
      cover:
        '',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Fearless',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/01.Taylor-Swift-Fearless-128.mp3',
      artist: 'Taylor Swift',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWiLNknuoX8tlydgSO49aep7Zn_BRptTmgQ&s',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Love Story',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/02.Taylor-Swift-Love-Story-128.mp3',
      artist: 'Taylor Swift',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/0/01/Taylor_Swift_-_Love_Story.png',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'You Belong With Me',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/03.Taylor-Swift-You-Belong-With-Me-128.mp3',
      artist: 'Taylor Swift',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/b/b9/Taylor_Swift_-_You_Belong_with_Me.png',
      genre: 'rock pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Mine',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/05.Taylor-Swift-Mine-128.mp3',
      artist: 'Taylor Swift',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/5/56/Taylor_Swift_-_Mine.png',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'I Knew You Were Trouble',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/08.-%20Taylor%20Swift%20-%20I%20Knew%20You%20Were%20Trouble.%20%28128%29.mp3',
      artist: 'Taylor Swift',
      cover: 'https://i1.sndcdn.com/artworks-000038140006-wopgzj-t500x500.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'A Place In This World',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/13.Taylor-Swift-A-Place-In-This-World-128.mp3',
      artist: 'Taylor Swift',
      cover: 'http://i1.sndcdn.com/artworks-000421008288-8i2q2a-t500x500.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },

    {
      title: 'Change',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/Taylor Swift/15.Taylor-Swift-Change-128.mp3',
      artist: 'Taylor Swift',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/8/84/Taylor_Swift_-_Change.png',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },

    {
      title: 'Wherever I May Roam',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/khareji/Metallica-Wherever-I-May-Roam-gahmusic-320.mp3',
      artist: 'Metallica',
      cover: 'https://i1.sndcdn.com/artworks-000070557592-5bo74j-t500x500.jpg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Blow Your Mind',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/khareji/Dua-Lipa-Blow-Your-Mind-Mwah-gahmusic-320.mp3',
      artist: 'Dua Lipa',
      cover:
        'https://images.genius.com/044900c3a798fb934e1fe85f3aeea361.500x500x1.jpg',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Diamonds',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/khareji/Rihanna%20-%20Diamonds.mp3',
      artist: 'Rihanna',
      cover:
        'https://upload.wikimedia.org/wikipedia/en/e/e8/Diamonds_-_Rihanna.png',
      genre: 'pop',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'My Defence',
      audio:
        'https://dl.aftabmusic.com/1403/3/other/khareji/Queen-In-My-Defence-gahmusic-320.mp3',
      artist: 'Queen',
      cover:
        'https://i.discogs.com/Ywo-UzXrgAirwCWn75BSEnuk7LoBY3yxlXnTYWtod8w/rs:fit/g:sm/q:90/h:515/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3MzI2/ODUtMTIzOTgxODE2/OC5qcGVn.jpeg',
      genre: 'rock',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Aroosi',
      audio:
        'https://irsv.upmusics.com/Tracks/Songs/Aroosi%20Songs%20(4).mp3?_=156',
      artist: '',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Khaterkhatam',
      audio:
        'https://irsv.upmusics.com/dlw/Sina%20Derakhshande%20-%20Khater%20Khatam%20(320).mp3',
      artist: 'Sina Derakhshande',
      cover:
        'https://upmusics.com/wp-content/uploads/2024/11/photo_2024-11-27_19-53-40.jpg',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://upmusics.com/'
    },

    {
      title: 'Dokhtar Irooni',
      audio:
        'https://irsv.upmusics.com/AliBZ/Sohrab%20Pakzad%20-%20Dokhtar%20Irooni(320).mp3',
      artist: 'Sohrab Pakzad',
      cover:
        'https://rozmusic.com/wp-content/uploads/2024/09/Sohrab-Pakzad-Dokhtar-Irooni.jpg',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://upmusics.com/'
    },
    {
      title: 'Mosafer',
      audio:
        'https://irsv.upmusics.com/dlw/Majid%20Vahedi%20-%202%20Mosafer%20(320).mp3',
      artist: 'Majid Vahedi',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://upmusics.com/'
    },
    {
      title: 'Janan',
      audio:
        'https://irsv.upmusics.com/99/Ali%20Montazeri%20%E2%80%93%20Janan%20(320).mp3',
      artist: 'Ali Montazeri',
      cover: '',
      genre: 'raghsi',
      star: 4,
      duration: '',
      reference: 'https://upmusics.com/'
    },
    {
      title: 'Gole Hayahoo',
      audio:
        'https://dl.aftabmusic.com/1403/12/Album/Fereydoun-Asraei-Gharibeh/01.%20Fereydoun%20Asraei%20-%20Gole%20Hayahoo.mp3',
      artist: 'Fereydoun Asraei',
      cover:
        'https://aftabmusic.com/wp-content/uploads/2025/02/Fereydoun-Asraei-Gharibeh.jpg',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Kabootar',
      audio:
        'https://dl.aftabmusic.com/1403/12/Album/Fereydoun-Asraei-Gharibeh/03.%20Fereydoun%20Asraei%20-%20Kabootar.mp3',
      artist: 'Fereydoun Asraei',
      cover:
        'https://aftabmusic.com/wp-content/uploads/2025/02/Fereydoun-Asraei-Gharibeh.jpg',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Khooneh Be Khooneh',
      audio:
        'https://dl.aftabmusic.com/1403/12/Album/Fereydoun-Asraei-Gharibeh/05.%20Fereydoun%20Asraei%20-%20Khooneh%20Be%20Khooneh.mp3',
      artist: 'Fereydoun Asraei',
      cover:
        'https://aftabmusic.com/wp-content/uploads/2025/02/Fereydoun-Asraei-Gharibeh.jpg',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Kabe',
      audio:
        'https://dl.aftabmusic.com/1403/3/album/Kabeh%20Moein/01%20Kabeh.mp3',
      artist: 'Moein',
      cover: '',
      genre: 'pop farsi',
      star: 4,
      duration: '',
      reference: 'https://aftabmusic.com/'
    },
    {
      title: 'Dideye Tora',
      artist: 'DJ Phellix & Seventh Soul & ShezRiri',
      cover:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-pictures/DJ_Phellix,_Seventh_Soul_Dideye_Tora_feat_Shezriri_Original_Mix.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LXBpY3R1cmVzL0RKX1BoZWxsaXgsX1NldmVudGhfU291bF9EaWRleWVfVG9yYV9mZWF0X1NoZXpyaXJpX09yaWdpbmFsX01peC5qcGciLCJpYXQiOjE3NDQxODc2NTQsImV4cCI6MTkwMTg2NzY1NH0.JzK8Lqiznc66uuyIX5Sv75moBEqsTkp6TlncStC53js',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/DJ_Phellix,_Seventh_Soul_Dideye_Tora_feat_Shezriri_Original_Mix.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9ESl9QaGVsbGl4LF9TZXZlbnRoX1NvdWxfRGlkZXllX1RvcmFfZmVhdF9TaGV6cmlyaV9PcmlnaW5hbF9NaXgubXAzIiwiaWF0IjoxNzQ0MTg3NDA1LCJleHAiOjE5MDE4Njc0MDV9.xwln96Rp3w0L6gxKCeYlwiRmvJT6_bpfDji-UfEt1Vw',
      genre: 'house electronic',
      duration: '',
      reference: 'www.ArioRecords.com'
    },
    {
      title: 'Azizam',
      artist: 'Ed Sheeran',
      cover:
        'https://ava-music.com/wp-content/uploads/2025/04/Ed-Sheeran-Azizam.jpg',
      audio: 'https://dl.behmelody.in/1404/01/15/Azizam%20%28128%29.mp3',
      genre: 'pop',
      duration: '',
      reference: 'https://ava-music.com/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2025/1/42/1.mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2025/1/42/3.mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: 'Hymn',
      artist: 'Unusual Cosmic Process',
      cover:
        'https://geo-media.beatport.com/image_size/1400x1400/68585d1d-b4bf-42f6-811e-887e3923c474.jpg',
      audio: 'https://dl.iraniandj.ir/2025/1/41/1.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },

    {
      title: 'Once upon a time in silence',
      artist: 'Unusual Cosmic Process',
      cover:
        'https://geo-media.beatport.com/image_size/1400x1400/68585d1d-b4bf-42f6-811e-887e3923c474.jpg',
      audio: 'https://dl.iraniandj.ir/2025/1/41/3.mp3',
      genre: 'relax',
      duration: '',
      star: 5,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: 'Train to the past',
      artist: 'Unusual Cosmic Process',
      cover:
        'https://geo-media.beatport.com/image_size/1400x1400/68585d1d-b4bf-42f6-811e-887e3923c474.jpg',
      audio: 'https://dl.iraniandj.ir/2025/1/41/4.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },

    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/31/3.mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/35/1.mp3',
      genre: 'electronic trance',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/29/1.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/29/1.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/29/3.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/29/7.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/27/2.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/27/3.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/27/5.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/27/7.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },

    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/26/1.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/10/26/2.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2025/1/34/2.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2025/1/7/1.mp3',
      genre: 'electronic techno',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: 'Khiaboona',
      artist: 'Kiarash Ft Aaren',
      cover: '',
      audio:
        'https://dl.uptrack.ir/Uptrack-ROOt/1404/01%20Farvardin/22/Kiyarash%20%20%20Aaren%20-%20Khiaboona.mp3',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://dl.uptrack.ir'
    },
    {
      title: 'Still Loving You',
      artist: 'Scorpions',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/Love-At-First-Sting-250x250.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Scorpions/Love-At-First-Sting-Deluxe-Edition/_Still_Loving_You_Live_at_Madison_Square_Garden_1984_Scorpions.mp3',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir'
    },
    {
      title: 'Rhythm of Love',
      artist: 'Scorpions',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/Savage-Amusement-250x250.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Scorpions/Savage-Amusement/Rhythm-of-Love-2015-Remaster-Scorpions-320.mp3',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir'
    },
    {
      title: 'Believe in Love',
      artist: 'Scorpions',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/Savage-Amusement-250x250.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Scorpions/Savage-Amusement/Believe-in-Love-2015-Remaster-Scorpions-320.mp3',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir'
    },
    {
      title: "Don't Stop at the Top",
      artist: 'Scorpions',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/Savage-Amusement-250x250.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Scorpions/Savage-Amusement/_Dont_Stop_at_the_Top_2015_Remaster_Scorpions_320.mp3',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir'
    },
    {
      title: 'Du hast',
      artist: 'Rammstein',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/Sehnsucht-250x250.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Rammstein/Sehnsucht/Du-hast-Rammstein-320.mp3',
      genre: 'rock metal',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir'
    },
    {
      title: 'Engel',
      artist: 'Rammstein',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/Sehnsucht-250x250.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Rammstein/Sehnsucht/Engel-Rammstein-320.mp3',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir'
    },
    {
      title: 'Tier',
      artist: 'Rammstein',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/Sehnsucht-250x250.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Rammstein/Sehnsucht/Tier-Rammstein-320.mp3',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir'
    },
    {
      title: 'Bück Dich',
      artist: 'Rammstein',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/Sehnsucht-250x250.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Rammstein/Sehnsucht/Bück-dich-Rammstein-320.mp3',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir'
    },
    {
      title: 'Dreaming',
      artist: 'Michael Logozar',
      cover:
        'https://songsara.net/wp-content/uploads/2023/06/Dreaming-Michael-Logozar.jpeg',
      audio:
        'https://dl5.songsara.net/FRE/18/Michael Logozar - Dreaming (2023) SONGSARA.NET/02 Dreaming - Solo Piano Version.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'State of Anxiety',
      artist: 'Dark Life Note',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/Feelings-II-Dark-Life-Note.jpg',
      audio:
        'https://dl6.songsara.net/FRE/14/Dark Life Note - Feelings II (2025) SONGSARA.NET/01 State of Anxiety.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: ' River Flows In You',
      artist: 'Yiruma',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/8/The Best Of Yiruma (Playlist)/01 River Flows In You.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Reminiscent of Days (Orchestra Version)',
      artist: 'Yiruma',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/8/The Best Of Yiruma (Playlist)/05 Reminiscent of Days (Orchestra Version).mp3',
      genre: 'relax',
      duration: '',
      star: 5,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Wait Till the End feat. Tannaz (Original)',
      artist: 'Namito',
      cover:
        'https://i1.sndcdn.com/artworks-cmH5Z7wqyP9U2c2P-iBcIzA-t500x500.jpg',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Namito%20-%20Wait%20Till%20the%20End%20feat.%20Tannaz%20(Dub).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9OYW1pdG8gLSBXYWl0IFRpbGwgdGhlIEVuZCBmZWF0LiBUYW5uYXogKER1YikubXAzIiwiaWF0IjoxNzQ0OTc1MjEzLCJleHAiOjE5MDI2NTUyMTN9.mapVg947EI5H04ju0QPtGevnOFEFehy5kfjBDm7o7Fg',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Far Out',
      artist: 'Namito',
      cover: 'https://f4.bcbits.com/img/a3047123526_10.jpg',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Brams,%20Namito%20-%20Far%20Out%20(Original%20Mix).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9CcmFtcywgTmFtaXRvIC0gRmFyIE91dCAoT3JpZ2luYWwgTWl4KS5tcDMiLCJpYXQiOjE3NDQ5NzU3MzUsImV4cCI6MTkwMjY1NTczNX0.nieS4a3llFGA3BhNRF1hJblrO8Vq8oDK3dDaPzcIgo8',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Lone Wolf (Original Mix)',
      artist: 'Hubert Watt, Namito',
      cover: 'https://f4.bcbits.com/img/a3047123526_10.jpg',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Hubert%20Watt,%20Namito%20-%20Lone%20Wolf%20(Original%20Mix).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9IdWJlcnQgV2F0dCwgTmFtaXRvIC0gTG9uZSBXb2xmIChPcmlnaW5hbCBNaXgpLm1wMyIsImlhdCI6MTc0NDk3NTkwMSwiZXhwIjoxOTAyNjU1OTAxfQ.jzG2PlfbDmarOk4kOfCGLbAe7FISEkATo5vKnVG5ar0',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Sunne',
      artist: 'Annelie',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/SunneAnnelie-400x400.jpg',
      audio:
        'https://dl6.songsara.net/FRE/15/Annelie - Sunne (2025) SONGSARA.NET/03 Philippine.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Bemaan (Desert Dwellers Remix)',
      artist: 'Namito, Mahbobeh Golzari',
      cover:
        'https://i1.sndcdn.com/artworks-6LAXbl99AgO9lAnt-a6nDkg-t500x500.jpg',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Bemaan%20(Desert%20Dwellers%20Remix).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9CZW1hYW4gKERlc2VydCBEd2VsbGVycyBSZW1peCkubXAzIiwiaWF0IjoxNzQ1MTM4ODg3LCJleHAiOjE5MDI4MTg4ODd9.5YjCtBNRB07VZTawFg_Py7_NzumStImiBeV7nBu5tqY',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://soundcloud.com/namito'
    },
    {
      title: 'Bemaan',
      artist: 'Namito, Mahbobeh Golzari',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8Q-3o6PSqgmggPRA5p9R6XecTPeJN1w2-w&s',
      audio:
        'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Bemaan.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9CZW1hYW4ubXAzIiwiaWF0IjoxNzQ1MTM5MTI2LCJleHAiOjE5MDI4MTkxMjZ9.7uKf1fjT43CYeFdlkYZJaCJ4FkHWeWFTtOj3d2yhby0',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://soundcloud.com/namito'
    },
    {
      title: 'Serene Clarity',
      artist: 'Lulu Ray',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/5/Energy Release (Playlist)/002 Serene Clarity.mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Rymdresa',
      artist: 'Juni Ros',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/5/Energy Release (Playlist)/001 Rymdresa.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Explorer',
      artist: 'Angelic Planet',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/5/Energy Release (Playlist)/003 Explorer.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Sólestur',
      artist: 'Elsa Gudmundsdottir',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/5/Energy Release (Playlist)/004 Sólestur.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Safe',
      artist: 'Deruinga',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/5/Energy Release (Playlist)/005 Safe.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Opening Skies',
      artist: 'Eneyo Emberence',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/5/Energy Release (Playlist)/006 Opening Skies.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'At Night I Fly',
      artist: 'Heur',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/5/Energy Release (Playlist)/007 At Night I Fly.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Towards The Light',
      artist: 'Vincent La Rossi',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/5/Energy Release (Playlist)/008 Towards The Light.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Djupet',
      artist: 'Owen Meyers',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/5/Energy Release (Playlist)/009 Djupet.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Rings On Water',
      artist: 'Nekane Silver',
      cover: '',
      audio:
        'https://dl6.songsara.net/FRE/5/Energy Release (Playlist)/010 Rings On Water.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Deutschland',
      artist: 'Rammstein',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/trackname1-943-250x250.jpeg',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/03/Rammstein-Deutschland.mp3',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Armee der Tristen',
      artist: 'Rammstein',
      cover: 'https://ememay.ir/music/wp-content/uploads/2025/02/Zeit.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Rammstein/Zeit/Armee-der-Tristen-Rammstein-320.mp3',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Dicke Titten',
      artist: 'Rammstein',
      cover: 'https://ememay.ir/music/wp-content/uploads/2025/02/Zeit.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Rammstein/Zeit/Dicke-Titten-Rammstein-320.mp3',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Lügen',
      artist: 'Rammstein',
      cover: 'https://ememay.ir/music/wp-content/uploads/2025/02/Zeit.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Rammstein/Zeit/Lügen-Rammstein-320.mp3',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Rockin',
      artist: 'Weekend',
      cover: 'https://ememay.ir/music/wp-content/uploads/2025/02/Starboy.jpeg',
      audio:
        'https://dl.ememay.ir/Music/The-Weeknd/Starboy/Rockin-The-Weeknd-320.mp3',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: "Can't Feel My Face",
      artist: 'Weekend',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/The-Highlights-250x250.jpeg',
      audio:
        'https://dl.ememay.ir/Music/The-Weeknd/The-Highlights/Cant-Feel-My-Face-The-Weeknd-320.mp3',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'I Feel It Coming',
      artist: 'Weekend',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/The-Highlights-250x250.jpeg',
      audio:
        'https://dl.ememay.ir/Music/The-Weeknd/The-Highlights/I-Feel-It-Coming-The-Weeknd-Daft-Punk-320.mp3',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Call Out My Name',
      artist: 'Weekend',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/The-Highlights-250x250.jpeg',
      audio:
        'https://dl.ememay.ir/Music/The-Weeknd/The-Highlights/Call-Out-My-Name-The-Weeknd-320.mp3',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Moth To A Flame',
      artist: 'The Weeknd',
      cover: '',
      audio: 'https://uploadb.me/direct/riz6x9x1hc49/Swedish%20House%20Mafia%20Ft%20The%20Weeknd%20-%20Moth%20To%20A%20Flame.mp3.html',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Golden',
      artist: 'Harry Styles',
      cover: 'https://melodicc.com/wp-content/uploads/2021/06/Golden.jpg',
      audio: 'https://uploadb.me/direct/ut2fgbfntj9b/Harry%20Styles%20-%20Golden.mp3.html',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Bad Habits',
      artist: 'Ed Sheeran',
      cover: '',
      audio: 'https://uploadb.me/direct/4enzxihfo9bb/Ed%20Sheeran%20-%20Bad%20Habits.mp3.html',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Sign of the Times ',
      artist: 'Harry Styles',
      cover: '',
      audio: 'https://uploadb.me/direct/ci6xvuv7qy9k/02%20Sign%20of%20the%20Times.mp3.html',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'The Last Dance',
      artist: 'Maxthor',
      cover: 'https://melodicc.com/wp-content/uploads/2025/04/Maxthor-The-Last-Dance-Melodicc.com_-300x300.jpg',
      audio: 'https://uploadb.me/8t3n611q1zz6/Maxthor - The Last Dance (Melodicc.com).mp3.html',
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'All Of Me',
      artist: 'John Legend',
      cover: '',
      audio: 'https://uploadb.me/crlgrldfuaw8/John%20Legend%20-%20All%20Of%20Me.mp3.html',
      genre: 'pop',
      duration: '',
      star: 4.5,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Heavenly',
      artist: 'Cigarettes After Sex',
      cover: 'https://melodicc.com/wp-content/uploads/2022/09/Heavenly.jpg',
      audio: 'https://uploadb.me/6psapwff92jf/Cigarettes%20After%20_%20-%20Heavenly.mp3.html',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Vadeh',
      artist: 'Leyla',
      cover: 'https://ememay.ir/music/wp-content/uploads/2025/02/Hamsafar.jpeg',
      audio:
        'https://dl.ememay.ir/Music/Leila-Forouhar/Hamsafar/Vadeh-Leila-Forouhar-320.mp3',
      genre: 'raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: 'Phellix',
      cover:
        '',
      audio: 'https://dl.iraniandj.ir/2025/1/28/1.mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: 'Phellix',
      cover:
        '',
      audio: 'https://dl.iraniandj.ir/2025/1/28/2.mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: 'Phellix',
      cover:
        '',
      audio: 'https://dl.iraniandj.ir/2025/1/28/3.mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: 'Phellix',
      cover:
        '',
      audio: 'https://dl.iraniandj.ir/2025/1/28/4.mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio:
        'https://dl.iraniandj.ir/2024/1/38/007-HellX Club - Techno Chart - January 2024 Vol.3 (Compiled & Mixed By DjHellX).mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/1/38/2.mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },

    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/1/38/6.mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/1/38/9.mp3',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: '',
      cover: '',
      audio: 'https://dl.iraniandj.ir/2024/1/38/10.mp3',
      genre: 'electronic',
      duration: '',
      star: 4.8,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Blossom',
      artist: 'Sarah Watson',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/Blossom-Sarah-Watson.jpg',
      audio:
        'https://dl6.songsara.net/FRE/15/Sarah Watson - Blossom (2025) SONGSARA.NET.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Driven Snow',
      artist: 'Dirk Maassen',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/Awakening-Dirk-Maassen.jpg',
      audio:
        'https://dl6.songsara.net/FRE/15/Dirk Maassen - Awakening (2025) SONGSARA.NET/03 Driven Snow.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Awakening',
      artist: 'Dirk Maassen',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/Awakening-Dirk-Maassen.jpg',
      audio:
        'https://dl6.songsara.net/FRE/15/Dirk Maassen - Awakening (2025) SONGSARA.NET/01 Awakening.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Light Of Life',
      artist: 'Dirk Maassen',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/Awakening-Dirk-Maassen.jpg',
      audio:
        'https://dl6.songsara.net/FRE/15/Dirk Maassen - Awakening (2025) SONGSARA.NET/02 Light Of Life.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Rise',
      artist: 'Dirk Maassen',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/Awakening-Dirk-Maassen.jpg',
      audio:
        'https://dl6.songsara.net/FRE/15/Dirk Maassen - Awakening (2025) SONGSARA.NET/04 Rise.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Windsong',
      artist: 'Dirk Maassen',
      cover:
        'https://songsara.net/wp-content/uploads/2021/03/Dirk-Maassen-Echoes.jpg',
      audio:
        'https://dl.songsara.net/FRE/2021/3/Dirk Maassen - Echoes (2021) SONGSARA.NET/03 Windsong.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },

    {
      title: 'This Little Life',
      artist: 'Yanson',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Yanson-This-Little-Life-2025.jpg',
      audio:
        'https://dc.vmusic.ir/2025/03/Yanson - This Little Life (2025)/128k/01) Yanson - This Little Life.mp3',
      genre: 'relax',
      duration: '',
      star: 5,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Places We Felt Home',
      artist: 'Yanson',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Yanson-This-Little-Life-2025.jpg',
      audio:
        'https://dc.vmusic.ir/2025/03/Yanson - This Little Life (2025)/128k/02) Yanson - Places We Felt Home.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Memories Like Raindrops',
      artist: 'Yanson',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Yanson-This-Little-Life-2025.jpg',
      audio:
        'https://dc.vmusic.ir/2025/03/Yanson - This Little Life (2025)/128k/05) Yanson - Memories Like Raindrops.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Nocturne No. II',
      artist: 'Yanson',
      cover:
        'http://vmusic.ir/wp-content/uploads/2023/09/Yanson-Four-Last-Nocturnes-EP-2023.jpg',
      audio:
        'https://dc.vmusic.ir/2023/09/Yanson - Four Last Nocturnes - EP (2023)/128k/02) Yanson - Nocturne No. II.mp3',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Ignite',
      artist: 'Marek Iwaszkiewicz',
      audio:
        'https://dc.vmusic.ir/2025/04/Marek Iwaszkiewicz - Classics (2019)/128k/01) Marek Iwaszkiewicz - Ignite.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Marek-Iwaszkiewicz-Classics-2019.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Grace and Faith',
      artist: 'Thinking Music',
      audio:
        'https://dc.vmusic.ir/2025/04/Thinking Music - Heaven Is in Worship (2025)/128k/01) Thinking Music - Grace and Faith.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/04/Thinking-Music-Heaven-Is-in-Worship-2025.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/2/25/5.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: 'Scent Of Electricity',
      audio: 'https://dl.iraniandj.ir/2025/2/17/2.mp3',
      cover:
        'https://i1.sndcdn.com/artworks-OiTnB3TO1M7QOEey-XUvUEQ-t500x500.png',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: 'Scent Of Electricity',
      audio: 'https://dl.iraniandj.ir/2025/2/17/3.mp3',
      cover:
        'https://i1.sndcdn.com/artworks-OiTnB3TO1M7QOEey-XUvUEQ-t500x500.png',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/2/15/1.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/2/15/2.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: 'Quest of a Lifetime',
      artist: 'Legends of Fantasia',
      audio:
        'https://dc.vmusic.ir/2025/04/Legends of Fantasia - Quest of a Lifetime (2025)/128k/01) Legends of Fantasia - Quest of a Lifetime.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/04/Legends-of-Fantasia-Quest-of-a-Lifetime-2025.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Hall of the Brave',
      artist: 'Legends of Fantasia',
      audio:
        'https://dc.vmusic.ir/2025/04/Legends of Fantasia - Quest of a Lifetime (2025)/128k/02) Legends of Fantasia - Hall of the Brave.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/04/Legends-of-Fantasia-Quest-of-a-Lifetime-2025.jpg',
      genre: 'relax',
      duration: '',
      star: 4.5,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Arcane',
      artist: 'Legends of Fantasia',
      audio:
        'https://dc.vmusic.ir/2025/04/Legends of Fantasia - Quest of a Lifetime (2025)/128k/03) Legends of Fantasia - Arcane.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/04/Legends-of-Fantasia-Quest-of-a-Lifetime-2025.jpg',
      genre: 'relax',
      duration: '',
      star: 4.9,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Chevalerie',
      artist: 'Legends of Fantasia',
      audio:
        'https://dc.vmusic.ir/2025/04/Legends of Fantasia - Quest of a Lifetime (2025)/128k/04) Legends of Fantasia - Chevalerie.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/04/Legends-of-Fantasia-Quest-of-a-Lifetime-2025.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Fields of Avalon',
      artist: 'Legends of Fantasia',
      audio:
        'https://dc.vmusic.ir/2025/04/Legends of Fantasia - Quest of a Lifetime (2025)/128k/05) Legends of Fantasia - Fields of Avalon.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/04/Legends-of-Fantasia-Quest-of-a-Lifetime-2025.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Spirit of Winter',
      artist: 'Legends of Fantasia',
      audio:
        'https://dc.vmusic.ir/2025/04/Legends of Fantasia - Quest of a Lifetime (2025)/128k/06) Legends of Fantasia - Spirit of Winter.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/04/Legends-of-Fantasia-Quest-of-a-Lifetime-2025.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Elven Dreams',
      artist: 'Legends of Fantasia',
      audio:
        'https://dc.vmusic.ir/2025/04/Legends of Fantasia - Quest of a Lifetime (2025)/128k/09) Legends of Fantasia - Elven Dreams.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/04/Legends-of-Fantasia-Quest-of-a-Lifetime-2025.jpg',
      genre: 'relax',
      duration: '',
      star: 4.9,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'The Ascended',
      artist: 'Ambinoise',
      audio:
        'https://dc.vmusic.ir/2025/03/Ambinoise - Withering (2025-02-28)/128k/03) Ambinoise - The Ascended.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Ambinoise-Withering-2025-02-28.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Under a Starlit Sky of Dreams',
      artist: 'Thomas Lemmer',
      audio:
        'https://dc.vmusic.ir/2025/03/Thomas Lemmer - Dreamscapes (2025-03-07)/128k/01) Thomas Lemmer - Under a Starlit Sky of Dreams.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Thomas-Lemmer-Dreamscapes-2025-03-07.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: ' Where Nightfall Meets the Horizon',
      artist: 'Thomas Lemmer',
      audio:
        'https://dc.vmusic.ir/2025/03/Thomas Lemmer - Dreamscapes (2025-03-07)/128k/02) Thomas Lemmer - Where Nightfall Meets the Horizon.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Thomas-Lemmer-Dreamscapes-2025-03-07.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Drifting Through the Milky Way',
      artist: 'Thomas Lemmer',
      audio:
        'https://dc.vmusic.ir/2025/03/Thomas Lemmer - Dreamscapes (2025-03-07)/128k/05) Thomas Lemmer - Drifting Through the Milky Way.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Thomas-Lemmer-Dreamscapes-2025-03-07.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'In the Arms of the Night',
      artist: 'Thomas Lemmer',
      audio:
        'https://dc.vmusic.ir/2025/03/Thomas Lemmer - Dreamscapes (2025-03-07)/128k/06) Thomas Lemmer - In the Arms of the Night.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Thomas-Lemmer-Dreamscapes-2025-03-07.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'In the Glow of Midnight',
      artist: 'Thomas Lemmer',
      audio:
        'https://dc.vmusic.ir/2025/03/Thomas Lemmer - Dreamscapes (2025-03-07)/128k/07) Thomas Lemmer - In the Glow of Midnight.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Thomas-Lemmer-Dreamscapes-2025-03-07.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'When the Night Whispers Secrets',
      artist: 'Thomas Lemmer',
      audio:
        'https://dc.vmusic.ir/2025/03/Thomas Lemmer - Dreamscapes (2025-03-07)/128k/09) Thomas Lemmer - When the Night Whispers Secrets.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Thomas-Lemmer-Dreamscapes-2025-03-07.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Drifting Through the Milky Way (Lofi Version)',
      artist: 'Thomas Lemmer',
      audio:
        'https://dc.vmusic.ir/2025/03/Thomas Lemmer - Dreamscapes (2025-03-07)/128k/11) Thomas Lemmer - Drifting Through the Milky Way (Lofi Version).mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/03/Thomas-Lemmer-Dreamscapes-2025-03-07.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Northwind',
      artist: 'Be Still the Earth',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/01) Be Still the Earth - Northwind.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Under the Canopy',
      artist: 'We Dream Of Eden',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/02) We Dream Of Eden - Under the Canopy.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4.9,
      reference: 'https://vmusic.ir/'
    },
    {
      title: '',
      artist: 'Matt Tondut',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/03) Matt Tondut - Storms are for Sleeping.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'The Rain is Almost Over',
      artist: 'Moon Projection',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/04) Moon Projection - The Rain is Almost Over.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'And Then the Heavens Opened',
      artist: 'Retland',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/05) Retland - And Then the Heavens Opened.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Life Rains',
      artist: 'Anita Tatlow',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/06) Anita Tatlow - Life Rains.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Each Raindrop Holds a Note',
      artist: 'Applefish',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/07) Applefish - Each Raindrop Holds a Note.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Hidden in the Fog',
      artist: 'Lauge',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/08) Lauge - Hidden in the Fog.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Grey Skies',
      artist: 'Broken Peak',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/09) Broken Peak - Grey Skies.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Hidden in the Fog',
      artist: 'Lauge',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/08) Lauge - Hidden in the Fog.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Night Falls in Balik Palu',
      artist: 'Memories of the Forgotten',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/10) Memories of the Forgotten - Night Falls in Balik Palu.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Torrential',
      artist: 'Dear Gravity',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/11) Dear Gravity - Torrential.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Geosmin',
      artist: "Sky's Memoirs",
      audio:
        "https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/13) Sky's Memoirs - Geosmin.mp3",
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Whispers in the Mist',
      artist: 'Eternal Meadows',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/15) Eternal Meadows - Whispers in the Mist.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4.5,
      reference: 'https://vmusic.ir/'
    },

    {
      title: ' A Journey Through Rain',
      artist: 'Sensitizer',
      audio:
        'https://dc.vmusic.ir/2025/03/VA - Echoes in the Valley, Vol. 11 (2025)/128k/16) Sensitizer - A Journey Through Rain.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Speechless Trees',
      artist: 'Anhidema',
      audio:
        'https://dc.vmusic.ir/2025/01/Anhidema - Speechless Trees (2018)/128k/Anhidema - Speechless Trees.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'When Darkness Comes Upon You',
      artist: 'Mustafa Avşaroğlu',
      audio:
        'https://dc.vmusic.ir/2025/02/Mustafa Avşaroğlu - Exile (2025-01-27)/128k/02) Mustafa Avşaroğlu - When Darkness Comes Upon You.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/02/Mustafa-Avsaroglu-Exile-2025-01-27.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'The Things I Suffer For',
      artist: 'Mustafa Avşaroğlu',
      audio:
        'https://dc.vmusic.ir/2025/02/Mustafa Avşaroğlu - Exile (2025-01-27)/128k/03) Mustafa Avşaroğlu - The Things I Suffer For.mp3',
      cover:
        'https://vmusic.ir/wp-content/uploads/2025/02/Mustafa-Avsaroglu-Exile-2025-01-27.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: '',
      artist: '',
      audio:
        "https://dl.ememay.ir/Music/Taylor-Swift/Fearless-Taylor's-Version/_The_Best_Day_Taylors_Version_Taylor_Swift_320.mp3",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'We Are Never Ever Getting Back Together',
      artist: 'Taylor Swift',
      audio:
        'https://dl.ememay.ir/Music/Taylor-Swift/Red/_We_Are_Never_Ever_Getting_Back_Together_Taylor_Swift_320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4.5,
      reference: 'https://ememay.ir/'
    },

    {
      title: 'Eshareh',
      artist: 'Hayedeh',
      audio: 'https://ememay.ir/wp-content/uploads/2024/02/Hayedeh-Eshareh.mp3',
      cover: '',
      genre: 'raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Hayedeh',
      artist: 'Bezan Tar',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/02/Hayedeh-Bezan-Tar.mp3',
      cover: '',
      genre: 'raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Crawling',
      artist: 'LinkinPark',
      audio:
        'https://ememay.ir/wp-content/uploads/2024/04/Linkin-Park-Crawling.mp3',
      cover:
        'https://ememay.ir/music/wp-content/uploads/2025/02/trackname1-954-250x250.jpeg',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Sonne',
      artist: 'Rammstein',
      audio: 'https://ememay.ir/wp-content/uploads/2024/03/Rammstein-Sonne.mp3',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'What Ive Done',
      artist: 'LinkinPark',
      audio:
        'https://dl.ememay.ir/Music/Linkin-Park/Papercuts/What-Ive-Done-Linkin-Park-320.mp3',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/1/33/1.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: ''
    },

    {
      title: '',
      artist: 'Neurolabz',
      audio: 'https://dl.iraniandj.ir/2024/11/36/3.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2024/10/29/13.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4.8,
      reference: ''
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2024/10/29/10.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2024/10/29/9.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2024/10/29/8.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2024/10/13/2.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'A Walking Embrace',
      artist: 'Nils Frahm',
      audio:
        'https://dl5.songsara.net/FRE/28-30/Nils Frahm - Encores 2 (2019) SONGSARA.NET/02 A Walking Embrace.mp3',
      cover:
        'https://songsara.net/wp-content/uploads/2019/01/Nils-Frahm-Encores-2.jpg',
      genre: 'relax',
      duration: '',
      star: 5,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Sweet Little Lie',
      artist: 'Nils Frahm',
      audio: 'https://dl5.songsara.net/FRE/28-30/Nils Frahm - Encores 2 (2019) SONGSARA.NET/01 Sweet Little Lie.mp3',
      cover: 'https://songsara.net/wp-content/uploads/2019/01/Nils-Frahm-Encores-2.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Talisman',
      artist: 'Nils Frahm',
      audio: 'https://dl5.songsara.net/FRE/28-30/Nils Frahm - Encores 2 (2019) SONGSARA.NET/03 Talisman.mp3',
      cover: 'https://songsara.net/wp-content/uploads/2019/01/Nils-Frahm-Encores-2.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.emmusicdl.ir/Music/Enrique-Iglesias/Enrique/Rhythm-Divine-Enrique-Iglesias-320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Ashoobam',
      artist: 'Chaartaar',
      audio: 'https://dl.ememay.ir/Music/Chaartaar/Baaraan-Toee/Ashoobam.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Nimeye Gomshodeh',
      artist: 'Hamed Homayoun',
      audio: 'https://dl.ememay.ir/Music/Hamed-Homayoun/Barzakhe-Asheghi/Nimeye-Gomshodeh.mp3',
      cover: 'raghsi',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Zelzeleh',
      artist: 'Aron Afshar',
      audio: 'https://dl.ememay.ir/Music/Aron-Afshar/Best-of-Aron-Afshar,-Vol.-1/Zelzeleh.mp3',
      cover: '',
      genre: 'raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Giso Parishan',
      artist: 'Aron Afshar',
      audio: 'https://dl.ememay.ir/Music/Aron-Afshar/Best-of-Aron-Afshar,-Vol.-1/Giso-Parishan.mp3',
      cover: '',
      genre: 'raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Kojaei',
      artist: 'Aron Afshar',
      audio: 'https://dl.ememay.ir/Music/Aron-Afshar/Best-of-Aron-Afshar,-Vol.-1/Kojaei.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },

    {
      title: 'Atre Bahar',
      artist: 'Aron Afshar',
      audio: 'https://dl.ememay.ir/Music/Aron-Afshar/Shabe-Royaei/Atre-Bahar.mp3',
      cover: '',
      genre: 'raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Bist',
      artist: 'Kamran Hooman',
      audio: 'https://dl.ememay.ir/Music/Kamran--Hooman/20/20.mp3',
      cover: '',
      genre: 'raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Age Eshghe Man to Nisti',
      artist: 'Kamran Hooman',
      audio: 'https://dl.ememay.ir/Music/Kamran--Hooman/20/Age-Eshghe-Man-to-Nisti.mp3',
      cover: '',
      genre: 'raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Man Toro Mikham',
      artist: 'Kamran Hooman',
      audio: 'https://dl.ememay.ir/Music/Kamran--Hooman/20/Man-Toro-Mikham.mp3',
      cover: '',
      genre: 'raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Mano Bebakhsh',
      artist: 'Kamran Hooman',
      audio: 'https://dl.ememay.ir/Music/Kamran--Hooman/20/Mano-Bebakhsh.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Oonike Mikhastam',
      artist: 'Kamran Hooman',
      audio: 'https://dl.ememay.ir/Music/Kamran--Hooman/20/Oonike-Mikhastam.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Shahlaye Man',
      artist: 'Habib',
      audio: 'https://dl.ememay.ir/Music/Habib/Mardeh-Tanhayeh-Shab/Shahlaye-Man-Habib-320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Madar',
      artist: 'Habib',
      audio: 'https://dl.ememay.ir/Music/Habib/Javuni/Madar-Habib-320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Donya',
      artist: 'Arash feat Shaggy ',
      audio: 'https://dl.ememay.ir/Music/Arash/Donya-Always-Version/_Donya_feat_Shaggy_Single_Version_Arash_Shaggy_320.mp3',
      cover: '',
      genre: 'pop raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Donya',
      artist: 'Arash & Helena',
      audio: 'https://dl.ememay.ir/Music/Arash/Donya-Always-Version/Pure-Love-feat-Helena-Arash-Helena-320.mp3',
      cover: '',
      genre: 'pop raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },

    {
      title: 'Dasta Baalaa',
      artist: 'Arash ',
      audio: 'https://dl.ememay.ir/Music/Arash/Donya-Always-Version/_Dasa_Bala_feat_Timbuktu_Yag_Arash_Timbuktu_320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Chori Chori',
      artist: 'Arash ',
      audio: 'https://dl.ememay.ir/Music/Arash/Donya-Always-Version/Chori-Chori-feat-Aneela-Arash-Aneela-320.mp3',
      cover: '',
      genre: 'pop raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'One Day',
      artist: 'Arash Helena',
      audio: 'https://dl.ememay.ir/Music/Arash/SUPERMAN/_One_Day_feat_Helena_Radio_Edit_Arash_Helena_320.mp3',
      cover: '',
      genre: 'pop raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Scorpions',
      artist: 'Arash ',
      audio: 'https://dl.ememay.ir/Music/Scorpions/Lovedrive/Always-Somewhere-2015-Remaster-Scorpions-320.mp3',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Last Friday Night',
      artist: 'Katy Perry',
      audio: 'https://dl.ememay.ir/Music/Katy-Perry/Teenage-Dream/Last-Friday-Night-TGIF-Katy-Perry-320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: '',
      artist: 'Sirvan ',
      audio: 'https://dl.ememay.ir/Music/Sirvan-Khosravi/Saat-9/Today-I-Wanna-Tell-You-Sirvan-Khosravi-320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Zendegy Hamin Emrooze',
      artist: 'Sirvan ',
      audio: 'https://dl.ememay.ir/Music/Sirvan-Khosravi/Saat-9/Live-for-Today-Sirvan-Khosravi-320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Delam Gerefte',
      artist: 'Sirvan ',
      audio: 'https://dl.ememay.ir/Music/Sirvan-Khosravi/Saat-9/Im-Down-Sirvan-Khosravi-320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Oon Rooza',
      artist: 'Sirvan ',
      audio: 'https://dl.ememay.ir/Music/Sirvan-Khosravi/Saat-9/Those-Days-Sirvan-Khosravi-320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: "Sa'ate 9",
      artist: 'Sirvan ',
      audio: 'https://dl.ememay.ir/Music/Sirvan-Khosravi/Saat-9/9-Oclock-Sirvan-Khosravi-320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Na Naro',
      artist: 'Sirvan ',
      audio: 'https://dl.ememay.ir/Music/Sirvan-Khosravi/Jaddeye-Royaha/Na-Naro-Sirvan-Khosravi-320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {

      title: 'Baroone Paeizy',
      artist: 'Sirvan ',
      audio: 'https://dl.ememay.ir/Music/Sirvan-Khosravi/Jaddeye-Royaha/Baroone-Paizi-Sirvan-Khosravi-320.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {

      title: 'Na Naro (Live Version)',
      artist: 'Sirvan ',
      audio: 'https://ememay.ir/wp-content/uploads/2024/11/Sirvan-Khosravi-Na-Naro-Unplugged-Tehran-2015.mp3',
      cover: 'https://ememay.ir/music/wp-content/uploads/2025/02/trackname1-304-250x250.jpeg',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {

      title: 'Ye Roozi Miay',
      artist: 'Sirvan ',
      audio: 'https://ememay.ir/wp-content/uploads/2024/11/Sirvan-Khosravi-Ye-Roozi-Miay-One-Day-You-Will-Come.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Jaye Man Nisti',
      artist: 'Sirvan & Kave Yaghmaei',
      audio: 'https://ememay.ir/wp-content/uploads/2024/11/Sirvan-Khosravi-Jaye-Man-Nisti.mp3',
      cover: 'https://ememay.ir/music/wp-content/uploads/2025/02/trackname1-308-250x250.jpeg',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Bargard',
      artist: 'Sirvan ',
      audio: 'https://ememay.ir/wp-content/uploads/2024/11/Sirvan-Khosravi-Bargard.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Ghabe Axe Khali',
      artist: 'Sirvan ',
      audio: 'https://ememay.ir/wp-content/uploads/2024/11/Sirvan-Khosravi-Ghabe-Akse-Khali.mp3',
      cover: 'https://ememay.ir/music/wp-content/uploads/2025/02/trackname1-295-250x250.jpeg',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Tajob Nakon',
      artist: 'Sirvan ',
      audio: 'https://ememay.ir/wp-content/uploads/2024/11/Sirvan-Khosravi-Tajob-Nakon.mp3',
      cover: 'https://ememay.ir/music/wp-content/uploads/2025/02/trackname1-298-250x250.jpeg',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Soojehat Tekrarie',
      artist: 'Sirvan ',
      audio: 'https://ememay.ir/wp-content/uploads/2024/11/Sirvan-Khosravi-Soojehat-Tekrarie.mp3',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Ghorse Ghamar 2',
      artist: 'Bani',
      audio: 'https://dl.ememay.ir/Music/Behnam-Bani/Best-Of-Behnam-Bani-Vol.2/Ghorse-Ghamar-2-Behnam-Bani-320.mp3',
      cover: '',
      genre: 'raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'In Eshgheh',
      artist: 'Behnam Bani ',
      audio: 'https://dl.ememay.ir/Music/Behnam-Bani/Best-Of-Behnam-Bani-Vol.2/In-Eshgheh-Behnam-Bani-320.mp3',
      cover: '',
      genre: 'raghsi',
      duration: '',
      star: 4,
      reference: 'https://ememay.ir/'
    },
    {
      title: 'Wilson (feat. Roland Bingaman)',
      artist: 'Yair Albeg Wein, Adi Goldstein, Roland Bingaman',
      audio:
        'https://dl6.songsara.net/FRE/14/Yair Albeg Wein - eversafe± (2025) SONGSARA.NET/02 Wilson (feat. Roland Bingaman).mp3',
      cover:
        'https://songsara.net/wp-content/uploads/2025/02/eversafe%C2%B1-Yair-Albeg-Wein-Adi-Goldstein.jpg',
      genre: 'relax',
      duration: '',
      star: 4.7,
      reference: 'https://songsara.net/'
    },

    {
      title: '888 Sacred Tranquility, Pt. 1',
      artist: 'Peter Ries',
      audio:
        'https://dl6.songsara.net/FRE/14/Peter Ries - 888 Sacred Tranquility (2025) SONGSARA.NET/01 888 Sacred Tranquility, Pt. 1.mp3',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/888-Sacred-Tranquility-Peter-Ries-400x400.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: '888 Sacred Tranquility, Pt. 2',
      artist: 'Peter Ries',
      audio:
        'https://dl6.songsara.net/FRE/14/Peter Ries - 888 Sacred Tranquility (2025) SONGSARA.NET/02 888 Sacred Tranquility, Pt. 2.mp3',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/888-Sacred-Tranquility-Peter-Ries-400x400.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: '888 Sacred Tranquility, Pt. 5',
      artist: 'Peter Ries',
      audio:
        'https://dl6.songsara.net/FRE/14/Peter Ries - 888 Sacred Tranquility (2025) SONGSARA.NET/05 888 Sacred Tranquility, Pt. 5.mp3',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/888-Sacred-Tranquility-Peter-Ries-400x400.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: '888 Sacred Tranquility, Pt. 6',
      artist: 'Peter Ries',
      audio:
        'https://dl6.songsara.net/FRE/14/Peter Ries - 888 Sacred Tranquility (2025) SONGSARA.NET/06 888 Sacred Tranquility, Pt. 6.mp3',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/888-Sacred-Tranquility-Peter-Ries-400x400.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: '888 Sacred Tranquility, Pt. 7',
      artist: 'Peter Ries',
      audio:
        'https://dl6.songsara.net/FRE/14/Peter Ries - 888 Sacred Tranquility (2025) SONGSARA.NET/07 888 Sacred Tranquility, Pt. 7.mp3',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/888-Sacred-Tranquility-Peter-Ries-400x400.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: '888 Sacred Tranquility, Pt. 9',
      artist: 'Peter Ries',
      audio:
        'https://dl6.songsara.net/FRE/14/Peter Ries - 888 Sacred Tranquility (2025) SONGSARA.NET/09 888 Sacred Tranquility, Pt. 9.mp3',
      cover:
        'https://songsara.net/wp-content/uploads/2025/04/888-Sacred-Tranquility-Peter-Ries-400x400.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Beautiful',
      artist: 'David Tolk',
      audio:
        'https://dl6.songsara.net/FRE/15/David Tolk - Beautiful (2025) SONGSARA.NET.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },
    {
      title: 'Sphere',
      artist: 'Peter Gregson',
      audio:
        'https://dl6.songsara.net/FRE/15/Peter Gregson - Peter Gregson (2025) SONGSARA.NET/01 Sphere.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://songsara.net/'
    },

    {
      title: '',
      artist: 'Neurolabz',
      audio: 'https://dl.iraniandj.ir/2024/11/36/3.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },

    {
      title: '',
      artist: 'Neurolabz',
      audio: 'https://dl.iraniandj.ir/2024/11/36/4.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: 'Neurolabz',
      audio: 'https://dl.iraniandj.ir/2024/11/36/6.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },
    {
      title: '',
      artist: 'Neurolabz',
      audio: 'https://dl.iraniandj.ir/2024/11/36/9.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://pro.iraniandj.ir/'
    },

    {
      title: 'Sadeness',
      artist: 'Enigma',
      audio: 'https://uploadb.me/e0n551qwnq8p/Enigma%20-%20Sadeness.mp3.html',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Lost On You',
      artist: 'LP',
      audio: 'https://uploadb.me/54syci2lsmrd/Lp%20-%20Lost%20On%20You.mp3.html',
      cover: '',
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'

    },
    {
      title: 'Goodbye My Lover',
      artist: 'James Blunt',
      audio: 'https://uploadb.me/sjkxl2t1gvsd/James%20Blunt%20-%20Goodbye%20My%20Lover.mp3.html',
      cover: '',
      genre: 'pop relax',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'

    },
    {
      title: 'Shape of My Heart',
      artist: 'Sting',
      audio: 'http://uploadb.me/direct/9mh5ivlbsk7w/Sting%20-%20Shape%20of%20My%20Heart.mp3.html',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'

    },
    {
      title: 'Brother Louie',
      artist: 'Modern Talking',
      audio: 'https://uploadb.me/sgmiodt4bh2z/Modern%20Talking%20-%20Brother%20Louie.mp3.html',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'

    },
    {
      title: 'Billie Jean',
      artist: 'Michael Jackson',
      audio: "http://uploadb.me/direct/01utehj5lue4/Michael%20Jackson%20-%20Billie%20Jean.mp3.html",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'

    },
    {
      title: 'Wish You Were Here',
      artist: 'Pink Floyd',
      audio: "https://uploadb.me/0gmmutp4i0qm/04%20Pink%20Floyd%20-%20Wish%20You%20Were%20Here%20.mp3.html",
      cover: '',
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'

    },

    {
      title: 'Rock You Like A Hurricane',
      artist: 'Scorpions',
      audio: "https://uploadb.me/v3q7c4p3uye4/Scorpions%20-%20Rock%20You%20Like%20A%20Hurricane%20.mp3.html",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'

    },
    {
      title: "Let's Talk About Love",
      artist: 'Modern Talking',
      audio: "http://uploadb.me/direct/777wogqwxw4e/Modern%20Talking%20-%20Let's%20Talk%20About%20Love.mp3.html",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'

    },
    {
      title: 'Wind Of Change',
      artist: 'Scorpions',
      audio: "https://uploadb.me/6oboenipo5x0/Scorpions%20-%20Wind%20Of%20Change.mp3.html",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'

    },
    {
      title: 'Nothing Else Matters',
      artist: 'Metallica',
      audio: "https://uploadb.me/zayaiq62dmut/Metallica%20-%20Nothing%20Else%20Matters.mp3.html",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'

    },
    {
      title: 'Caught A Body',
      artist: 'Alesso Ft Ty Dolla $ign',
      audio: "https://uploadb.me/vqupe2i2n08r/Alesso%20Ft%20Ty%20Dolla%20$ign%20-%20Caught%20A%20Body%20.mp3.html",
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },

    {
      title: 'False Need',
      artist: 'Mochakk',
      audio: "https://uploadb.me/vuebwt74a4ww/Mochakk%20-%20False%20Need%20.mp3.html",
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Quiver',
      artist: 'SILK',
      audio: "https://uploadb.me/lyzpivugfuqj/SILK%20-%20Quiver%20.mp3.html",
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Secrets',
      artist: 'Regard Ft Raye',
      audio: "https://uploadb.me/jbgb9tuvo32u/Regard%20Ft%20Raye%20-%20Secrets.mp3.html",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'July24 (Radio Edit)',
      artist: 'Farvardin Ft. PooBon',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Farvardin%20Ft.%20PooBon%20-%20July24%20(Radio%20Edit).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9GYXJ2YXJkaW4gRnQuIFBvb0JvbiAtIEp1bHkyNCAoUmFkaW8gRWRpdCkubXAzIiwiaWF0IjoxNzQ2OTk0NzkxLCJleHAiOjE5MDQ2NzQ3OTF9.7RXKRGzErD2OwgsX0saBxeSYBOO4TduSQshd6HGaKWc',
      cover: 'https://www.musicema.com/sites/default/files/Farvardin%20Ft.%20PooBon%20-%20July24%20%28Radio%20Edit%29.jpg',
      genre: 'electronic pop',
      duration: '',
      star: 5.8,
      reference: ''
    },
    {
      title: 'Che',
      artist: 'Farvardin',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Farvardin%20-%20CHE%20.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9GYXJ2YXJkaW4gLSBDSEUgLm1wMyIsImlhdCI6MTc0Njk5NDk0NSwiZXhwIjoxOTA0Njc0OTQ1fQ.Ad0392HDIJAf56Ah4-XZ9tPNpDP3an28CwvehC2JMbg',
      cover: 'https://i.scdn.co/image/ab67616d0000b27363a188203bf69a243ac9e081',
      genre: ' pop',
      duration: '',
      star: 4,
      reference: ''
    },
    {
      title: 'Jazebe',
      artist: 'Farvardin',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Jazebe.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9KYXplYmUubXAzIiwiaWF0IjoxNzQ2OTk1MTg5LCJleHAiOjE5MDQ2NzUxODl9.LD-e3-UCjyVdGD6L5FuO9p6T-S1bFJ3Wa-hkvvVQzgM',
      cover: 'https://ts2.tarafdari.com/contents/user395334/content-sound/1530100936396-1415111127.jpg',
      genre: 'electronic pop',
      duration: '',
      star: 5,
    },
    {
      title: 'Mesle man',
      artist: 'Farvardin',
      audio: 'https://dl.musicdel.ir/Music/1403/12/Farvardin-Mesle%20Man%20-musicdel.ir%20128.mp3',
      cover: 'https://musicdel.ir/wp-content/uploads/2025/04/Farvardin-Mesle%20Man%20-musicdel.ir.jpg',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://musicdel.ir/'
    },
    {
      title: 'Siah Cheshm',
      artist: 'Farvardin',
      audio: 'http://sv2.mybia2music.com/s2/Music/1398/02/05/02/Farvardin%20-%20Siah%20Cheshm%20%5B128%5D.mp3',
      cover: 'https://sv2.mybia2music.com/s2/Music/1398/02/05/02/Farvardin%20-%20Siah%20Cheshm.jpg',
      genre: 'electronic pop',
      duration: '',
      star: 4.2,
      reference: 'https://www.mybia2music.com/'
    },

    {
      title: 'Jaddeyh Jangali',
      artist: 'Farvardin',
      audio: 'http://sv2.mybia2music.com/s2/Music/1397/12%20Esfand/10/03/Farvardin%20-%20Jaddeyh%20Jangali%20%5B128%5D.mp3',
      cover: 'https://www.mybia2music.com/assets/thumbs/113899790_500.jpg',
      genre: ' pop',
      duration: '',
      star: 4,

    },
    {
      title: 'Shabe Shahr',
      artist: 'Farvardin',
      audio: 'http://sv2.mybia2music.com/s2/Music/1398/08/04/01/Farvardin%20-%20Shabe%20Shahr%20%5B128%5D.mp3',
      cover: 'https://sv2.mybia2music.com/s2/Music/1398/08/04/01/Farvardin%20-%20Shabe%20Shahr.jpg',
      genre: 'pop',
      duration: '',
      star: 4,
    },
    {
      title: 'Che Shavad',
      artist: 'Amir Abbas Golab (Yasin Torki Remix)',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Amir%20Abbas%20Golab%20-%20Che%20Shavad%20(Yasin%20Torki%20Remix)%20(320).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9BbWlyIEFiYmFzIEdvbGFiIC0gQ2hlIFNoYXZhZCAoWWFzaW4gVG9ya2kgUmVtaXgpICgzMjApLm1wMyIsImlhdCI6MTc0Njk5NzE0NywiZXhwIjoxOTA0Njc3MTQ3fQ.a_gwPgU_CkPqUvUtzvOCeDdmHznuQlZyrGiS05u0C4I',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: '',
      artist: 'Kreisel',
      audio: 'https://dl.iraniandj.ir/2024/5/49/2.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2024/5/49/3.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2024/5/48/2.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: '',
      artist: 'Ironside',
      audio: 'https://dl.iraniandj.ir/2024/5/37/1.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4.7,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: 'Ironside',
      audio: 'https://dl.iraniandj.ir/2024/5/37/1.mp3',
      cover: 'https://pro.iraniandj.ir/wp-content/uploads/2024/09/Ironside-–-System-Extractor.jpg',
      genre: 'electronic',
      duration: '',
      star: 4.7,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: 'Ironside',
      audio: 'https://dl.iraniandj.ir/2024/5/37/2.mp3',
      cover: 'https://pro.iraniandj.ir/wp-content/uploads/2024/09/Ironside-–-System-Extractor.jpg',
      genre: 'electronic',
      duration: '',
      star: 4.7,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: 'Ironside',
      audio: 'https://dl.iraniandj.ir/2024/5/37/3.mp3',
      cover: 'https://pro.iraniandj.ir/wp-content/uploads/2024/09/Ironside-–-System-Extractor.jpg',
      genre: 'electronic',
      duration: '',
      star: 4.7,
      reference: 'https://dl.iraniandj.ir'
    },

    {
      title: 'Chizi Begou',
      artist: 'Electronic Joy (Ft Ahmad Shamlou)',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Electronic%20Joy%20-%20Chizi%20Begou%20(Ft%20Ahmad%20Shamlou).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9FbGVjdHJvbmljIEpveSAtIENoaXppIEJlZ291IChGdCBBaG1hZCBTaGFtbG91KS5tcDMiLCJpYXQiOjE3NDc2NDM0NzAsImV4cCI6MTkwNTMyMzQ3MH0.5gjUui7CY4jcciC1FOXNKa69RiphIc0bcBuoWsAw4gU',
      cover: 'https://i1.sndcdn.com/artworks-000141795051-63twky-t500x500.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: 'Divaneh Sho',
      artist: 'Electronic Joy (Ft Ahmad Shamlou) ',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Electronic%20Joy%20-%20Divaneh%20Sho%20(Ft%20Ahmad%20Shamlou).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9FbGVjdHJvbmljIEpveSAtIERpdmFuZWggU2hvIChGdCBBaG1hZCBTaGFtbG91KS5tcDMiLCJpYXQiOjE3NDc2NDM0NDksImV4cCI6MTkwNTMyMzQ0OX0.9Jvw_eziW41vmcKtlqvYYhMN0qycHpcGsKi7fmW8tr0',
      cover: 'https://i1.sndcdn.com/artworks-000244751722-yknd0n-t1080x1080.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: 'Manoto ',
      artist: 'Electronic Joy (ft. Khosro Shakibaei)',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Electronic%20Joy%20-%20Manoto%20(ft.%20Khosro%20Shakibaei).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9FbGVjdHJvbmljIEpveSAtIE1hbm90byAoZnQuIEtob3NybyBTaGFraWJhZWkpLm1wMyIsImlhdCI6MTc0NzY0OTg5MCwiZXhwIjoxOTA1MzI5ODkwfQ.kN66xr_QVcy5Fyjjeggu-AGu4SQ28FS9WdXnSifZjVU',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: 'Verlaine',
      artist: 'Electronic Joy (feat. Migrain)',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Electronic%20Joy%20-%20Verlaine%20(feat.%20Migrain).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9FbGVjdHJvbmljIEpveSAtIFZlcmxhaW5lIChmZWF0LiBNaWdyYWluKS5tcDMiLCJpYXQiOjE3NDc2NTAzMDYsImV4cCI6MTkwNTMzMDMwNn0.q-nro9tlZcIbxAokPQZ8UL4aD3JJMpIaAFNYQeDBsWQ',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: 'Yadegar',
      artist: 'Electronic Joy',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Electronic%20Joy%20-%20Yadegar.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9FbGVjdHJvbmljIEpveSAtIFlhZGVnYXIubXAzIiwiaWF0IjoxNzQ3NjUxNzE0LCJleHAiOjE5MDUzMzE3MTR9.gTdkXytbWJ5C-qtjcr5rSnCHUfECzcspRqA5fkAxIbI',
      cover: 'https://i1.sndcdn.com/artworks-uNsAfROIxEsHic8f-QSVB9g-t500x500.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: 'When Hope Is Lost',
      artist: 'Danny Darko (Electronic Joy Remix)',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Danny%20Darko%20-%20When%20Hope%20Is%20Lost%20(Electronic%20Joy%20Remix).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9EYW5ueSBEYXJrbyAtIFdoZW4gSG9wZSBJcyBMb3N0IChFbGVjdHJvbmljIEpveSBSZW1peCkubXAzIiwiaWF0IjoxNzQ3NjUyNDg3LCJleHAiOjE5MDUzMzI0ODd9.U4fuTQl4GC0XoNJkVlw1TyMYE_hilRed9dpjuFjM9tY',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: 'Bade Man',
      artist: 'Xaniar (AFX & Electronic Joy Remix)',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Xaniar%20-%20Bade%20Man%20(AFX%20&%20Electronic%20Joy%20Remix).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9YYW5pYXIgLSBCYWRlIE1hbiAoQUZYICYgRWxlY3Ryb25pYyBKb3kgUmVtaXgpLm1wMyIsImlhdCI6MTc0NzY1MjU1OCwiZXhwIjoxOTA1MzMyNTU4fQ.3U1DfswNCGAzpwIP5dMWUt71wqDIewjQOUfgm7z1bpg',
      cover: 'https://i1.sndcdn.com/artworks-000486594933-fzbvt2-t500x500.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: 'Sadeness',
      artist: 'Enigma',
      audio: 'https://uploadb.me/e0n551qwnq8p/Enigma%20-%20Sadeness.mp3.html',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: 'The Mass',
      artist: 'Enigma',
      audio: 'https://uploadb.me/zm92xn0ug3bq/Era%20-%20The%20Mass.mp3.html',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'

    },

    {
      title: 'Voices',
      artist: 'Vangelis',
      audio: 'https://uploadb.me/xe2w9pffxq4l/Vangelis%20-%20Voices.MP3.html',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Ameno',
      artist: 'Era',
      audio: 'https://uploadb.me/vedy32r6vvxz/Era%20-%20Ameno.mp3.html',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },

    {
      title: 'Dance Of Sarasvati',
      artist: 'Kitaro',
      audio: 'https://uploadb.me/305fnfgdvjhm/Kitarō%20-%20Dance%20Of%20Sarasvati.MP3.html',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },

    {
      title: 'What We Do',
      artist: 'Pink Floyd',
      audio: "https://uploadb.me/lhfdavp4254n/02%20Pink%20Floyd%20-%20Side%201,%20Pt.%202%20It's%20What%20We%20Do.mp3.html",
      cover: 'https://melodicc.com/wp-content/uploads/2022/07/The-Endless-River.jpg',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Time',
      artist: 'Roger Waters',
      audio: 'https://uploadb.me/4ujhk5luc9s5/Roger%20Waters%20-%20Time%20.mp3.html',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'High Hopes',
      artist: 'Pink Floyd',
      audio: 'https://uploadb.me/f7k63v6l9zp4/11%20Pink%20Floyd%20-%20High%20Hopes%20.mp3.html',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Hey You',
      artist: 'Pink Floyd',
      audio: 'https://uploadb.me/3ozbfpo75a8z/Pink%20Floyd%20-%20Hey%20You%20.mp3.html',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Into You',
      artist: 'Craset Ft Glo Σ',
      audio: 'https://uploadb.me/ug3j7oopp3vl/Into%20You.mp3.html',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Look at This',
      artist: 'Fismoll',
      audio: 'https://uploadb.me/lr8093kvrcg4/Look%20at%20This%20-%20Fismoll.mp3.html',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'On an Island',
      artist: 'David Gilmour',
      audio: 'https://uploadb.me/ymljtacetk6p/David%20Gilmour%20-%20On%20an%20Island.mp3.html',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },


    {
      title: 'Babel',
      artist: 'Gustavo',
      audio: 'https://uploadb.me/m38j8onw9sqz/Gustavo%20Santaolalla%20-%20Babel.mp3.html',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Caught A Body',
      artist: 'Ty Dolla',
      audio: 'https://uploadb.me/vqupe2i2n08r/Alesso Ft Ty Dolla $ign - Caught A Body .mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2023/04/Caught-A-Body.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Ruhe',
      artist: 'Schiller',
      audio: 'https://uploadb.me/mv1vybn62hmg/SchillerRuhe%20-%20Ruhe.mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2024/06/adsfghjm.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Perfect',
      artist: 'ED SHEERAN',
      audio: 'https://uploadb.me/nnteux3y4otf/ED%20SHEERAN%20-%20Perfect.mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2020/12/Perfect.jpg',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Amen',
      artist: 'Enigma Ft Aquilo',
      audio: 'https://uploadb.me/0tv8qsg5e5ms/Enigma%20Ft%20Aquilo%20-%20Amen.mp3.html',
      cover: '',
      genre: 'electronic pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Iron Sky',
      artist: 'Paolo Nutini',
      audio: 'https://uploadb.me/imzkmnf82apr/Paolo%20Nutini%20-%20Iron%20Sky.mp3.html',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'My Man',
      artist: 'Parov Stelar Ft Lightnin Hopkins',
      audio: 'https://uploadb.me/yers46c7yjyc/Parov%20Stelar%20Ft%20Lightnin%20Hopkins%20-%20My%20Man.mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2021/11/My-Man.jpg',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Marion Barf',
      artist: 'Clint Mansell',
      audio: 'https://uploadb.me/otzkg8054mpv/Clint%20Mansell%20-%20Marion%20Barfs.mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2023/10/Marion-Barfs.jpg',
      genre: 'relax',
      duration: '',
      star: 4.6,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Matsuri',
      artist: 'Kitaro',
      audio: 'https://uploadb.me/h2yd1asdtqdy/Kitarō%20-%20Matsuri.MP3.html',
      cover: '',
      genre: 'relax electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },

    {
      title: 'The Road to Hell',
      artist: 'Chris Rea',
      audio: 'https://uploadb.me/h3mc28m5sngz/Chris%20Rea%20The%20-%20Road%20To%20Hell%20Part%202.mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2024/12/Chris-Rea-–-The-Road-to-Hell-Pt1.jpg',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },

    {
      title: 'First We Take Manhattan',
      artist: 'Joe Cocker',
      audio: 'https://uploadb.me/jhew852295le/Joe%20Cocker%20-%20First%20We%20Take%20Manhattan.mp3.html',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },

    {
      title: 'Sometimes',
      artist: 'Reamonn',
      audio: 'https://uploadb.me/f0ujqkr61p4j/Reamonn%20-%20Sometimes.mp3.html',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Eagles',
      artist: 'Hotel California',
      audio: 'https://uploadb.me/z600uq3s421t/Eagles%20-%20Hotel%20California.mp3.html',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'THE LONELIEST',
      artist: 'Måneskin',
      audio: 'https://uploadb.me/p6g38kmy4xxm/M%C3%A5neskin%20-%20THE%20LONELIEST.mp3.html',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: " Don't Cry",
      artist: "Guns N' Roses",
      audio: "https://uploadb.me/qt4v99pc6tfj/Guns%20N'%20Roses%20-%20Don't%20Cry.mp3.html",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Curse of the Traveller',
      artist: 'Chris Rea',
      audio: 'https://uploadb.me/v3gwbi3up00w/Curse%20of%20the%20Traveller%20-%20Chris%20Rea%20(Melodicc.com).mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2024/12/Chris-Rea-–-Curse-of-the-Traveller.jpg',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Paper Aeroplane',
      artist: 'Francesco Rossi',
      audio: 'https://uploadb.me/vaff59qv7m2f/Francesco%20Rossi%20-%20Paper%20Aeroplane%20(Original%20Mix)%20.mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2024/07/Paper-Aeroplane-Original-Mix--560x560.webp',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Beat It',
      artist: 'Michael Jackson',
      audio: 'https://uploadb.me/f5ppt54do07u/Michael%20Jackson%20-%20Beat%20It.mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2022/07/Beat-It.jpg',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Standing in Motion ',
      artist: 'Yanni',
      audio: 'https://uploadb.me/prq26u6indtw/Standing%20in%20Motion%20(Live)%20-%20Melodicc.com%20.mp3.html',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },

    {
      title: 'Looking for the Summer',
      artist: 'Chris Rea',
      audio: 'https://uploadb.me/my1bx2c23ux4/Looking%20for%20the%20Summer%20-%20Chris%20Rea%20(Melodicc.com).mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2024/12/Chris-Rea-–-Looking-for-the-Summer.jpg',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Cheri Cheril Lady',
      artist: 'Modern Talking',
      audio: 'https://uploadb.me/m95doeqop8vg/Modern%20Talking%20-%20Cheri%20Cheril%20Lady.mp3.html',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4.7,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'We Are The World',
      artist: 'Michael Jackson',
      audio: 'https://uploadb.me/er68f2rfpxjb/Michael%20Jackson%20-%20We%20Are%20The%20World.mp3.html',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: ' Atlantis Is Calling ',
      artist: 'Modern Talking',
      audio: 'https://uploadb.me/yyku4pm924vl/Modern%20Talking%20-%20Atlantis%20Is%20Calling.mp3.html',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'You Can Win If You Want',
      artist: 'Modern Talking',
      audio: 'https://uploadb.me/d2v9izatmab4/Modern%20Talking%20-%20You%20Can%20Win%20If%20You%20Want.mp3.html',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Athena',
      artist: 'Trilucid',
      audio: 'https://uploadb.me/jsdmsloehpy5/Athena%20-%20Trilucid%20(Melodicc.com).mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2025/02/Trilucid-–-Athena.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Lost Control',
      artist: ' SNDR',
      audio: 'https://uploadb.me/c41q8clhgwn9/Lost%20Control%20-%20SNDR%20(Melodicc.com).mp3.html',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Right Back (2nd Edit)',
      artist: 'Stoto',
      audio: 'https://uploadb.me/q3s9d6pjgprs/Stoto%20-%20Right%20Back%20(2nd%20Edit)%20Melodicc.com%20(320).mp3.html',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Double Fantasy',
      artist: ' The Weeknd Ft Future',
      audio: 'https://uploadb.me/hdsrcw7d1bna/The%20Weeknd%20Ft%20Future%20-%20Double%20Fantasy.mp3.html',
      cover: 'https://melodicc.com/wp-content/uploads/2023/04/Double-Fantasy.jpg',
      genre: 'electronic pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Chemical',
      artist: 'Post Malone',
      audio: 'https://uploadb.me/zjo55vqgecd1/Post%20Malone%20-%20Chemical.mp3.html',
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: 'Creepin',
      artist: "Metro Boomin Ft The Weeknd",
      audio: "https://uploadb.me/direct/4bn5rkoosa7f/10%20Metro%20Boomin%20-%20Creepin'%20(Ft%20The%20Weeknd%20Ft%2021%20Savage).mp3.html",
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://melodicc.com/'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/1/63/4.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/1/63/5.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/1/63/7.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/1/63/11.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/1/58/2.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/1/58/6.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/1/58/8.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/2/25/3.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: 'Viapo',
      audio: 'https://dl.iraniandj.ir/2025/2/6/1.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: 'Viapo',
      audio: 'https://dl.iraniandj.ir/2025/2/6/2.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: 'Viapo',
      audio: 'https://dl.iraniandj.ir/2025/2/6/3.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: 'Viapo',
      audio: 'https://dl.iraniandj.ir/2025/2/6/4.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/1/63/1.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: '',
      artist: '',
      audio: 'https://dl.iraniandj.ir/2025/1/62/3.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://dl.iraniandj.ir'
    },
    {
      title: 'I Can Be Your Hero (Club Mix)',
      artist: 'Luca Debonaire feat Chris Marina',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Xaniar%20-%20Bade%20Man%20(AFX%20&%20Electronic%20Joy%20Remix).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzQ4M2Q5ZjAxLTVmNmItNDk0MS05MTQ2LTRiNDk2ZmJjNDkyOSJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9YYW5pYXIgLSBCYWRlIE1hbiAoQUZYICYgRWxlY3Ryb25pYyBKb3kgUmVtaXgpLm1wMyIsImlhdCI6MTc0ODc4NDE5NywiZXhwIjoxOTA2NDY0MTk3fQ.yueh5aEZr2IS5ASKDN9ljM4Rsv6_k1Dk17JtXdCAmy4',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: ' The Hole (Layton Giordani Remix)',
      artist: 'Riva Starr',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Uppermost%20-%20Atoms%20(Ft%20Birsen).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzQ4M2Q5ZjAxLTVmNmItNDk0MS05MTQ2LTRiNDk2ZmJjNDkyOSJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9VcHBlcm1vc3QgLSBBdG9tcyAoRnQgQmlyc2VuKS5tcDMiLCJpYXQiOjE3NDg3ODU2NzUsImV4cCI6MTkwNjQ2NTY3NX0.PpkUh6co74wAAfMBaezfjcjhnAwAz9iFViZgYY1ZApA',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },

    {
      title: ' Atoms (Ft Birsen)',
      artist: 'Uppermost',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Uppermost%20-%20Atoms%20(Ft%20Birsen).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzQ4M2Q5ZjAxLTVmNmItNDk0MS05MTQ2LTRiNDk2ZmJjNDkyOSJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9VcHBlcm1vc3QgLSBBdG9tcyAoRnQgQmlyc2VuKS5tcDMiLCJpYXQiOjE3NDg3ODY4MzAsImV4cCI6MTkwNjQ2NjgzMH0.dNacLY0MYBGYTccs9co4y69yDPXE9ByxPLqo49QMiCU',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: 'Navaei',
      artist: 'DJ Phellix Ft. Amir Sheykh',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/DJ%20Phellix%20Ft.%20Amir%20Sheykh%20-%20Navaei.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzQ4M2Q5ZjAxLTVmNmItNDk0MS05MTQ2LTRiNDk2ZmJjNDkyOSJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9ESiBQaGVsbGl4IEZ0LiBBbWlyIFNoZXlraCAtIE5hdmFlaS5tcDMiLCJpYXQiOjE3NDg3ODcxOTMsImV4cCI6MTkwNjQ2NzE5M30.yxMoOdSMUa4Bwz4ewpfkvwmif6ijNPfsAn6LHYJp1CY',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: 'Del Barnakanam (Ft Amir Sheykh)',
      artist: 'DJ Phellix',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/DJ%20Phellix%20-%20Del%20Barnakanam%20(Ft%20Amir%20Sheykh).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzQ4M2Q5ZjAxLTVmNmItNDk0MS05MTQ2LTRiNDk2ZmJjNDkyOSJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9ESiBQaGVsbGl4IC0gRGVsIEJhcm5ha2FuYW0gKEZ0IEFtaXIgU2hleWtoKS5tcDMiLCJpYXQiOjE3NDg3ODc1NzUsImV4cCI6MTkwNjQ2NzU3NX0.v1ZpbPxC32Tc-lM9bCkMs1Um2Go6HwjEQ2KOpCymHTI',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
    },
    {
      title: 'Reunite',
      artist: 'Bella Element',
      audio: 'https://dc.vmusic.ir/2024/01/Bella Element - Piano Lullabies (2024)/128k/02) Bella Element - Reunite.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'

    },
    {
      title: 'Bliss',
      artist: 'Solarsoul',
      audio: 'https://dc.vmusic.ir/2024/02/Solarsoul - Discovery/128k/03) Solarsoul - Bliss.mp3',
      cover: 'https://f4.bcbits.com/img/a1281692903_10.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'A Gaze Into Infinity (feat. Tigerforest)',
      artist: 'Solarsoul',
      audio: 'https://dc.vmusic.ir/2024/02/Solarsoul - Discovery/128k/02) Solarsoul - A Gaze Into Infinity (feat. Tigerforest).mp3',
      cover: 'https://f4.bcbits.com/img/a1281692903_10.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Moon River (feat. DreamMan)',
      artist: 'Solarsoul',
      audio: 'https://dc.vmusic.ir/2024/02/Solarsoul - Discovery/128k/09) Solarsoul - Moon River (feat. DreamMan).mp3',
      cover: 'https://f4.bcbits.com/img/a1281692903_10.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'A Dream Within a Dream',
      artist: 'Solarsoul',
      audio: 'https://dc.vmusic.ir/2024/02/Solarsoul - Discovery/128k/11) Solarsoul - A Dream Within a Dream.mp3',
      cover: 'https://f4.bcbits.com/img/a1281692903_10.jpg',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Into Infinity',
      artist: 'Solarsoul',
      audio: 'https://dc.vmusic.ir/2024/02/Solarsoul - Discovery/128k/12) Solarsoul - Into Infinity (feat. Green Sun).mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'The Long Way Home',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2021/06/Scott Buckley - The Long Way Home (2021)/128k/Scott Buckley - The Long Way Home.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Sanctuary',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2021/07/Scott Buckley - Sanctuary (2021)/128k/Scott Buckley - Sanctuary.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Falling Together',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2021/08/Scott Buckley - Falling Together (2021)/128k/Scott Buckley - Falling Together.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'This Too Shall Pass',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2021/11/Scott Buckley - Library Songs 7 (2021)/128k/01) Scott Buckley - This Too Shall Pass.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 5,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'I Walk With Ghosts',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2021/11/Scott Buckley - Library Songs 7 (2021)/128k/02) Scott Buckley - I Walk With Ghosts.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Affirmations',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2021/11/Scott Buckley - Library Songs 7 (2021)/128k/05) Scott Buckley - Affirmations.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Falling Together',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2021/11/Scott Buckley - Library Songs 7 (2021)/128k/06) Scott Buckley - Falling Together.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Chasing Daylight',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2021/11/Scott Buckley - Library Songs 7 (2021)/128k/07) Scott Buckley - Chasing Daylight.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Beautiful Oblivion',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2021/11/Scott Buckley - Library Songs 7 (2021)/128k/09) Scott Buckley - Beautiful Oblivion.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Midvinter',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2021/12/Scott Buckley - Midvinter (2021)/128k/Scott Buckley - Midvinter.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Permafrost',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2023/04/Scott Buckley - Library Songs 9 (2023)/128k/02) Scott Buckley - Permafrost.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 5,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'A Kind of Hope',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2023/04/Scott Buckley - Library Songs 9 (2023)/128k/03) Scott Buckley - A Kind of Hope.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4.8,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Hymn To the Dawn',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2023/04/Scott Buckley - Library Songs 9 (2023)/128k/05) Scott Buckley - Hymn To the Dawn.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4.5,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Adrift Among Infinite Stars',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2023/04/Scott Buckley - Library Songs 9 (2023)/128k/06) Scott Buckley - Adrift Among Infinite Stars.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 5,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Cirrus',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2023/04/Scott Buckley - Library Songs 9 (2023)/128k/07) Scott Buckley - Cirrus.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Aurora',
      artist: 'Scott Buckley',
      audio: 'https://db.vmusic.ir/2023/04/Scott Buckley - Library Songs 9 (2023)/128k/09) Scott Buckley - Aurora.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: '',
      artist: 'Scott Buckley',
      audio: '',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Reverie',
      artist: 'Scott Buckley',
      audio: 'https://dl.vmusic.ir/2020/04/Scott Buckley - Reverie (2020)/128k/Scott Buckley - Reverie.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    }, {
      title: 'Hiraeth',
      artist: 'Scott Buckley',
      audio: 'https://dl.vmusic.ir/2020/06/Scott Buckley - Hiraeth (2020)/128k/Scott Buckley - Hiraeth.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Where Stars Fall',
      artist: 'Scott Buckley',
      audio: 'https://dl.vmusic.ir/2021/02/Scott Buckley - Where Stars Fall (2021)/128k/Scott Buckley - Where Stars Fall.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'The Things That Keep Us Here',
      artist: 'Scott Buckley',
      audio: 'https://dl.vmusic.ir/2019/12/Scott Buckley - Monomyth (2019) 128k [Vmusic.ir]/03. Scott Buckley - The Things That Keep Us Here.mp3',
      cover: '',
      genre: 'relax',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Frankfurt',
      artist: 'Nora Van Elken',
      audio: 'https://dc.vmusic.ir/2025/05/Nora Van Elken - Deutschland (2025)/128k/01) Nora Van Elken - Frankfurt.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Hanover',
      artist: 'Nora Van Elken',
      audio: 'https://dc.vmusic.ir/2025/05/Nora Van Elken - Deutschland (2025)/128k/02) Nora Van Elken - Hanover.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },

    {
      title: 'Düsseldorf',
      artist: 'Nora Van Elken ',
      audio: 'https://dc.vmusic.ir/2025/05/Nora Van Elken - Deutschland (2025)/128k/03) Nora Van Elken - Düsseldorf.mp3',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: 'https://vmusic.ir/'
    },
    {
      title: 'Magic',
      artist: 'Cold Play',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/coldplay%20-%20magic%20(freakme%20visionary%20re-work)_-1448731280.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ODNkOWYwMS01ZjZiLTQ5NDEtOTE0Ni00YjQ5NmZiYzQ5MjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9jb2xkcGxheSAtIG1hZ2ljIChmcmVha21lIHZpc2lvbmFyeSByZS13b3JrKV8tMTQ0ODczMTI4MC5tcDMiLCJpYXQiOjE3NDg4NzY2NTIsImV4cCI6MTkwNjU1NjY1Mn0.RBRRcOyPAhW7BCgelR38pPoYYALMbm4-NVnhM-lzBP0',
      cover: 'https://i1.sndcdn.com/artworks-000140591570-gw8z7s-t1080x1080.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,

    },
    {
      title: 'Museum (Matan Caspi Remix)',
      artist: 'Jorgio Kioris',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Jorgio%20Kioris%20-%20Museum%20(Original%20Mix)Outta%20Limits.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ODNkOWYwMS01ZjZiLTQ5NDEtOTE0Ni00YjQ5NmZiYzQ5MjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9Kb3JnaW8gS2lvcmlzIC0gTXVzZXVtIChPcmlnaW5hbCBNaXgpT3V0dGEgTGltaXRzLm1wMyIsImlhdCI6MTc0ODg3NzI2OCwiZXhwIjoxOTA2NTU3MjY4fQ.0bH0S5bfV5Yq5hMZbhyMsixfRzAFKVQck-mh9tvZDVU',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,

    },
    {
      title: 'Just Us',
      artist: 'Fever',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Just%20Us%20-%20Fever.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ODNkOWYwMS01ZjZiLTQ5NDEtOTE0Ni00YjQ5NmZiYzQ5MjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9KdXN0IFVzIC0gRmV2ZXIubXAzIiwiaWF0IjoxNzQ4ODc3MzgzLCJleHAiOjE5MDY1NTczODN9.Xk66R-LAS4qbwe9I0OWXTaMpunOcOnBInCn0cYcxSHs',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,

    },
    {
      title: 'Feeling Good (Nikko Culture Remix)',
      artist: 'Nina Simone',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Nina%20Simone%20-%20Feeling%20Good%20(Nikko%20Culture%20Remix).mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mNTQ1YjJmZS01ODAxLTQ1ODYtOWMyYS0yN2JkNTZiYjQ2MGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9OaW5hIFNpbW9uZSAtIEZlZWxpbmcgR29vZCAoTmlra28gQ3VsdHVyZSBSZW1peCkubXAzIiwiaWF0IjoxNzUyNjcxMzE0LCJleHAiOjE5MTAzNTEzMTR9.hUGrqrdiOA8tQeg477ysaJL42jlqwo_0NSoy2coR-vg',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,

    },
    {
      title: '',
      artist: 'Telefon Tel Aviv',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/Telefon%20Tel%20Aviv.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ODNkOWYwMS01ZjZiLTQ5NDEtOTE0Ni00YjQ5NmZiYzQ5MjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9UZWxlZm9uIFRlbCBBdml2Lm1wMyIsImlhdCI6MTc0ODg3ODA0NywiZXhwIjoxOTA2NTU4MDQ3fQ.Knwf8oI8Ep5sQhc4-_Khe6a4SKEhtgNaAUgbeQrTX9g',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4.7,

    },
    {
      title: 'Hold My Hand',
      artist: '',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/03%20-%20Hold%20My%20Hand.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ODNkOWYwMS01ZjZiLTQ5NDEtOTE0Ni00YjQ5NmZiYzQ5MjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy8wMyAtIEhvbGQgTXkgSGFuZC5tcDMiLCJpYXQiOjE3NDg4NzgyOTMsImV4cCI6MTkwNjU1ODI5M30.fPairRVJ1JMqnFjB4Jxexn3Z5CtRvDVtnM9Vb7iweFc',
      cover: '',
      genre: 'electronic rock',
      duration: '',
      star: 4,

    },
    {
      title: 'Summer Wine',
      artist: '',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/05%20Summer%20Wine.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ODNkOWYwMS01ZjZiLTQ5NDEtOTE0Ni00YjQ5NmZiYzQ5MjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy8wNSBTdW1tZXIgV2luZS5tcDMiLCJpYXQiOjE3NDg4ODAxNDIsImV4cCI6MTkwNjU2MDE0Mn0.zQTsnU-fyzpIjKv_JFO7EYgPOrqSfKGQ7GEeMwo8rHc',
      cover: '',
      genre: 'rock pop',
      duration: '',
      star: 4,

    },
    {
      title: 'Global Trance Grooves 190 (+ Astropilot)--(slice)',
      artist: 'John 00 Fleming (Radio Mix)',
      audio: 'https://fdveybzxmfvhbznemfpr.supabase.co/storage/v1/object/sign/dance-baby-musics/John%2000%20Fleming%20-%20Global%20Trance%20Grooves%20190%20(+%20Astropilot)--1.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80ODNkOWYwMS01ZjZiLTQ5NDEtOTE0Ni00YjQ5NmZiYzQ5MjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5jZS1iYWJ5LW11c2ljcy9Kb2huIDAwIEZsZW1pbmcgLSBHbG9iYWwgVHJhbmNlIEdyb292ZXMgMTkwICgrIEFzdHJvcGlsb3QpLS0xLm1wMyIsImlhdCI6MTc0OTA1MTI0NiwiZXhwIjoxOTA2NzMxMjQ2fQ.T5p18O0Rk5IeyyjhRXGOyZaE63UqrgY9ghjqT-0D9rI',
      cover: 'https://i1.sndcdn.com/artworks-000468065685-ujyrh3-t500x500.jpg',
      genre: 'electronic',
      duration: '',
      reference: "https://soundcloud.com/john00fleming/john-00-fleming-global-trance-grooves-190-astropilot",
      star: 4,
    },
    {
      title: '',
      artist: '',
      audio: 'https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/korolova-live-the-future-of-dance-miami-2023.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9rb3JvbG92YS1saXZlLXRoZS1mdXR1cmUtb2YtZGFuY2UtbWlhbWktMjAyMy5tcDMiLCJpYXQiOjE3NDkwNzM5ODYsImV4cCI6MTkwNjc1Mzk4Nn0.infmm_RZ1rRfJRsomjAOmCQ8Fre9WZGiRyin6Rc8ctA',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4.8,
      reference: ""
    },
    {
      title: 'Running up that Hill Bootleg',
      artist: '',
      audio: 'https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/Running%20up%20that%20Hill%20Bootleg.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9SdW5uaW5nIHVwIHRoYXQgSGlsbCBCb290bGVnLm1wMyIsImlhdCI6MTc0OTA3NDk1MCwiZXhwIjoxOTA2NzU0OTUwfQ.EjroF86DYFpQ3xupqTVOD2PgCgVjCvpZzpJ5ypalUd8',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: ""
    },

    {
      title: 'The Road',
      artist: 'Boxer & Forbes pres. Dandy feat. Tania Zygar ',
      audio: 'https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/Boxer%20&%20Forbes%20pres.%20Dandy%20feat.%20Tania%20Zygar%20-%20The%20Road.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9Cb3hlciAmIEZvcmJlcyBwcmVzLiBEYW5keSBmZWF0LiBUYW5pYSBaeWdhciAtIFRoZSBSb2FkLm1wMyIsImlhdCI6MTc0OTA3NzAwMiwiZXhwIjoxOTA2NzU3MDAyfQ.F9W46hgQ9OgfFqlY5HBSsKYEpIGJ7aQBJ4LLKB1Rfwo',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: ""
    },

    {
      title: 'Turn The Page',
      artist: 'Metallica',
      audio: 'https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/Metallica%20-%20Turn%20The%20Page.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9NZXRhbGxpY2EgLSBUdXJuIFRoZSBQYWdlLm1wMyIsImlhdCI6MTc0OTE0MTQzNiwiZXhwIjoxOTA2ODIxNDM2fQ.p8c4VEq5TnxDVX5bCxAKMtbWEKCJrbE4dVQ43Gwb5kY',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: ""
    },
    {
      title: 'Ken Tavr',
      artist: 'Ishome',
      audio: 'https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/08%20-%20Ken%20Tavr.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy8wOCAtIEtlbiBUYXZyLm1wMyIsImlhdCI6MTc0OTE0MzA1MCwiZXhwIjoxOTA2ODIzMDUwfQ.AtIUJglwlQXfnU5bVdkUTFC0w4F5mV4DwaweuSMuZ1Y',
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: ""
    },
    {
      title: 'Radio Waves',
      artist: 'Roger Waters',
      audio: 'https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/roger%20waters.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9yb2dlciB3YXRlcnMubXAzIiwiaWF0IjoxNzQ5MTQ4MzU2LCJleHAiOjE5MDY4MjgzNTZ9.FthfJ1voWDqqI27eMwW-w6xbJh6jq-aT2raaLhqP-KI',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: ""
    },
    {
      title: 'Who Need Information',
      artist: 'Roger Waters',
      audio: 'https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/Who%20Need%20Information.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9XaG8gTmVlZCBJbmZvcm1hdGlvbi5tcDMiLCJpYXQiOjE3NDkxNDg2OTUsImV4cCI6MTkwNjgyODY5NX0.fbAyIO6257ql4L5A3gUq8Qm3EnGDCpis06OFqdDaZxE',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: ""
    },
    {
      title: 'The Powers That Be',
      artist: 'Roger Waters',
      audio: 'https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/The%20Powers%20That%20Be.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9UaGUgUG93ZXJzIFRoYXQgQmUubXAzIiwiaWF0IjoxNzQ5MTQ4ODU3LCJleHAiOjE5MDY4Mjg4NTd9.UVa0lDqKPGixxLqD7nuAmm5zgjfTOHflznRBAeAdRcU',
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4.7,
      reference: ""
    },
    {
      title: 'Hideaway (From "Wonder Park")',
      artist: 'Grace Vanderwaal',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCwdtaB_dT5RLsQzleCZapR3F8KBbG0y4pgFHrdgml0rBwLDq366WhAQwUCOi2EvkbsMp15gfC3giFhov0NRY39GH8mwV4Y\\",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/search/grace-vanderwaal-clay"
    },
    {
      title: 'Clearly',
      artist: 'Grace Vanderwaal',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCwdtaB_dT5RLsQzleCZapR3EsWCaH4n-kVOWq5DkGlUXxiXrY25HBYz1C-X3qtGWQ\\",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: '(Everything I Do) I Do It For You (Classic Version)',
      artist: 'Bryan Adams',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcdzZ6IdSlUIc1BQ5F9f43JSM2FcHoioWgFOuAXSzkrKRp0ho51Ll8ygCeS3lgxa8MwzJBwb9vXhFdp2l2ZGTFOD5G0ia5cNgGWJ23KaC-byzDNknpJ7A\\",
      cover: '',
      genre: 'rock pop',
      duration: '',
      star: 5,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Cloud Number Nine',
      artist: 'Bryan Adams',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcdzZ6IdSlUIc1BQ6ykeJ2776eSdG4g8z8zX99TUVlvIgW7rk3OQjQo1UZwj6t9ictEzFo4",
      cover: '',
      genre: 'rock pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: " When You're Gone (Feat. Melanie C)",
      artist: 'Bryan Adams',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcdzZ6IdSlUIc1BQ8CgbpZ3KMiSLn4goWZUZNYOUzZwRh-CXWe6VFEuyTNDrGEvkbsMopI_cSfYbzhL6DNRY39GH8mwV4Y\\",
      cover: '',
      genre: 'rock pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Sound The Bugle',
      artist: 'Bryan Adams',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcdzZ6IdSlUIc1BQ7ynfpa7762FbCz99oZRW5dXjy1cP_Sac3LDVEIHqfSW3Zl9ncoMig\\",
      cover: '',
      genre: 'rock pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Cuts Like A Knife',
      artist: 'Bryan Adams',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcdzZ6IdSlUIc1BQ6ytfZt3G8KIbCz8oWpTX9dTSxhOUQzHsIO4CEYl0kGM2KYyTsAzllFRawzjki0jwFyWFn5ZDMiyjZIZ",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Sober',
      artist: 'Tool',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkaw6k6qFdSJdL0jM11TZCkRY50XVsn6lMLaeVPn2V-Itw\\",
      cover: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Sobers.gif',
      genre: 'rock',
      duration: '',
      star: 5,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Schism',
      artist: 'Tool',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkaw6k6qEtYKdM7SdKcRpzMRoqXcIUvw2NQHORijGSAWOiF",
      cover: 'https://i.scdn.co/image/ab67616d0000b273ca41a947c13b78749c4953b1',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Forty Six & 2',
      artist: 'Tool',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkaw6k6m1diNNnudtKwKU53AX-Ga0kiw41GYtRBlCE-HdHHsXvJXWP9kQ\\",
      cover: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Aenima.jpg',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Ænema',
      artist: 'Tool',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkaw6k6GG5eJc0vSdKcRpzIOaiPclkD1opQHORijGSAWOiF",
      cover: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Aenima.jpg',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Vicarious',
      artist: 'Tool',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkaw6k6q1FTIdI3kt6rL5G7DMaENFEN6YQoZKcvUWN_Rh_JsFeG",
      cover: 'https://i.scdn.co/image/ab67616d0000b273781369aabc39c792cc55604f',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Stinkfist',
      artist: 'Tool',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkaw6k6qFxZLss0jNysL5G7DKeDd4MG9FA3O9geUWN_Rh_JsFeG",
      cover: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Aenima.jpg',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Parabola',
      artist: 'Tool',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkaw6k6pUliIcI9j8pecoyUO6RgUnrwuZE5WOgUnmRsWSDHeks\\",
      cover: 'https://i.scdn.co/image/ab67616d0000b273ca41a947c13b78749c4953b1',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Reflection',
      artist: 'Tool',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkaw6k6p01WLMUxl9Knd07AM5aDQIIruGlHWaFeYxZ-WQzIso2SGQ\\",
      cover: 'https://i.scdn.co/image/ab67616d0000b273ca41a947c13b78749c4953b1',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Prison Sex',
      artist: 'Tool',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkaw6k6pVpZM888Q7ydgU7AM5ZgbGAGyYUyRMAjYxZ-WQzIso2SGQ\\",
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9L2je_iztF3I69U6uZDRlaB4gMLFKdHR-w&s',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Hush',
      artist: 'Tool',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkaw6k6nV1jKIY3h6aAUXOvGqFQO1P8xkVYatJioGNIFg\\",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'No More Tears',
      artist: 'Ozzy Osbourne',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDQlzrY6pFtSL9VAkc5YV5d3HMiPbCwP5oBXaZdXjy1ASxqlnoi9TDEyofSW3Zl9ncoMig\\",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'I Just Want You',
      artist: 'Ozzy Osbourne',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDQlzrY6pFtSL9VAkc5YUkihRMyRJ2Mc75MFT-BjUVlvIhuNcoTALVT0kEZXj6t9ictEzFo4",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Shot In The Dark',
      artist: 'Ozzy Osbourne',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDQlzrY6pFtSL9VAkc5YXJDGQ3lmdSwP6YQFOtJglhZ0Seiht5PPGlUn2C1TzF58nLhDzpBEPQ\\",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Cymatics',
      artist: 'Nigel Stanford',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDMUu6KGdTtkIc40ktucKWvQPLqRcG8up4hJM7NdmjVRV-6kbXTMDmM0wUKY3HU6",
      cover: 'https://i.ytimg.com/vi/QAEsdLtjq2U/sddefault.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'One Hundred Hunters',
      artist: 'Nigel Stanford',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDMUu6KGdTtkIc40ktucKXfFNHllfHof84RJFrljmWRwVx56pn6SHFHtuf5uzY1oi6j1zJFogDD0XBY\\",
      cover: 'https://i.ytimg.com/vi/g9jwmplNwFg/maxresdefault.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Entropy',
      artist: 'Nigel Stanford',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDMUu6KGdTtkIc40ktucKW3FQ8uMd4Xh6oMiSaphmCZELvXBdF97W2Qh1EOWpmk\\",
      cover: 'https://i.ytimg.com/vi/QAEsdLtjq2U/sddefault.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Deep Space',
      artist: 'Nigel Stanford',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDMUu6KGdTtkIc40ktucKWy8NMk9Wnwc5IQLX9UrokdSRt-mdYinH2fm00KE3a18ZYg\\",
      cover: 'https://i.ytimg.com/vi/QAEsdLtjq2U/sddefault.jpg',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Crystal Skies',
      artist: 'Nigel Stanford',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDMUu6KGdTtkIc40ktucKWvJSMyRaHjb1IpOW-QUlFRIW_a6cV6XHFUT2CNJ3KxqnMxClk4\\",
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Stay With Me Tonight Ft Catey Shaw',
      artist: 'Nigel Stanford',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDMUu6KGdTtkIc40ktucKXvLMNI9XnUv6T8yW5FCml50TBPIXWDJCDMh1DOciYtxic71woFEQwDgjV1O6WaMPWQLHsiejspbLfE\\",
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Walk',
      artist: 'Pantera',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDUMwrF_x0kQF8E6jo-hbWXCHq9PcGAgyHBOYZdhn1F_Wh6Rbg\\",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Cowboys From Hell',
      artist: 'Pantera',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDUMwrF_x0kQA89FhdixfEidQciKJ1Qg7YsLX9UrljdZLSKgpn2rGlfm00KE3a18ZYg\\",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: '5 Minutes Alone',
      artist: 'Pantera',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDUMwrF_x0kQ9YAbjNetfY3K75qJdnogp4hJM-dkkzpjTAS6pJONDmM0wUKY3HU6",
      cover: 'https://i.discogs.com/C8883o-ME5D2v_6UMasd4lNcQOU_eW0Hszs4g0F7xYs/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2ODcw/My0xNjIyNjMxODg1/LTkwODYuanBlZw.jpeg',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'The Power Of Love',
      artist: 'Celine Dion',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSChu_amDw00QBMk9kYmMcY13H8iUbH7b0IUFQuBkkBZ0SeiWcmynLz70kzVYoV58nLhDzpBEPQ\\",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'My Heart Will Go On',
      artist: 'Celine Dion',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSChu_amDw00QBMk9kYmFgkifNLqPeywS6otRFrhdSz95BdOgrJC6CEQoxTuIiX57l8Tve3FwgBzviEgYmhSUVEg4FM5qkpdOOTHQNUncrGqczEKWTg\\",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: " I'm Alive",
      artist: 'Celine Dion',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSChu_amDw00QBMk9kYmBMJV3EMWGfXHh6oMib7Jjf0ViLv-admN7W2Qh1EOWpmk\\",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Immortality',
      artist: 'Celine Dion (Feat. Bee Gees)',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSChu_amDw00QBMk9kYmBdpXGQc1-c3Uv-j8NPNZPnx4rJxC5XWG6TWPphjeHpmxoip80ootbcPzWRVhq0mKgY0gW",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Where Does My Heart Beat Now',
      artist: 'Celine Dion',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSChu_amDw00QBMk9kYmPcY3JNHlhdnEuoWxeFrlTjGJ_Be25no51Nl83hjeHpns-oaEow1NmXQu5RVhq0mKgY0gW",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Wide Spectrum',
      artist: 'Dreaming Cooper',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCkduZ6HvlZX4KM9ktmde0iuOL2CJ18r5oJZaOZbUVlvIuTMoHKYOUgfsBCGj6t9ictEzFo4",
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Zero-G',
      artist: 'Dreaming Cooper',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCkduZ6HvlZX4KM9ktmde0ixNMuMNFPh6oMiV99IdWpxNwXIh057W2Qh1EOWpmk\\",
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Mysterious Places',
      artist: 'Dreaming Cooper',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCkduZ6HvlZX4KM9ktmde0ikSMyRbH4k8JRYFsFajFNwWNG9oVfHOFgPogV5325Zk31CzX57gS6-UA\\",
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Liquid Flow',
      artist: 'Dreaming Cooper',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCkduZ6HvlZX4KM9ktmde0ijOMqScHDbx4tUbZdXjy1bOOO_g4mtUkQZ1_SW3Zl9ncoMig\\",
      cover: '',
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Fire For You',
      artist: 'Cannons',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQBslAiIl-eJp3KMiSLXUfvplaYdJBjDpqXx3HY43JSWQ10wtU",
      cover: '',
      genre: 'pop electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Bright Lights',
      artist: 'Cannons',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQAtI3itGsKXTANsGRejIk5Vw3Kp4ljFM8PtiWtEDIXFE01UFgmg\\",
      cover: '',
      genre: 'pop electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Golden',
      artist: 'Cannons',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQB886h86mKVCmQcKEcHoc7YteFsFTnVZ6Vxi5oTqXYRAIwUCV4lhcnNA7vpAwMiTlXDZQyCd9XW4X-ZiwQMhcUTTVQWCa",
      cover: 'https://lh3.googleusercontent.com/SpF7pKaJLeWuvp0H3aRC4zhsSd0JkEE9984ekK92RiqIZIoZNMQnuaI0EIn4WHwDmnw35VNfmk7LuyY=w200-h200-l90-rj',
      genre: 'pop electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: ' Backwards',
      artist: 'Cannons',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQAsExjuCZe4zK9cKBRGAPxZMSI8oxnCFMCx7Ino7KWy3x",
      cover: '',
      genre: 'pop electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Bad Dream',
      artist: 'Cannons',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQAsEyQ62qbonE9cKBRGsyrlNRUOY5bVxcCx7Ino7KWy3x",
      cover: '',
      genre: 'pop electronic',
      duration: '',
      star: 4.5,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Talk Talk',
      artist: 'Cannons',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQFME6jomMapTC9cKBREQuxHJEWcA6YztyCx7Ino7KWy3x",
      cover: '',
      genre: 'pop electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Neon Light',
      artist: 'Cannons',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQDsU9kYmEco-_Q3-Ga0ny51BeTNkyb2dWGdHHsXvJXWP9kQ\\",
      cover: '',
      genre: 'pop electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Shadows',
      artist: 'Cannons',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQE8gvh9ivfE7AM5aXXVgvxXJLbcFFdBZ-WQzIso2SGQ\\",
      cover: '',
      genre: 'pop electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Round And Round',
      artist: 'Cannons',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQEs9Dkc1YSpa776uMfHofp4hJM6pQekBMPv2gsWquDmM0wUKY3HU6",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Sex On Fire',
      artist: 'Cannons',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQE8VGQ7imKW7AQb49L1st6oZOZNJal2krNRDGo4nHVVUkgBCciYNylr5CeWxtLAfmjlMfl1ePLTtE8MBqgooVSSXT9JbdmX2dygyK",
      cover: '',
      genre: 'pop electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Livin' On A Prayer",
      artist: 'Bon Jovi',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcawl1kxF5Z4Kw3mdKmMEimPXleJ1wt4phKaJdXjy1kJw_NoEusLFwCsfSW3Zl9ncoMig\\",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "It's My Life",
      artist: 'Bon Jovi',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcawl1kxF5Z4KlCStxYVqF3G8KDbDIk5VxHT6Rkg2JCSxiMqEDIXFE01UFgmg\\",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Always',
      artist: 'Bon Jovi',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcawl1kxF5Z4KE6msqxfE7AM5aNZmvzsncyQsNkbBZ-WQzIso2SGQ\\",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'You Give Love A Bad Name',
      artist: 'Bon Jovi',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcawl1kxF5Z4Lk9mIl_cp6876WMfXHbwj8nV9UOeVF4StG9oVeWWVPztiKT43FReX1CzX57gS6-UA\\",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Street Spirit (Fade Out)',
      artist: 'Radio Head',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDcMuKaJvU1RJIAhl9udbpx3IsmGeXUvoUcrV9VTSz-AWdR6pn6SGmn2yz2TmY5dgLD1zJFogDD0XBY\\",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: ' All Of My Life',
      artist: 'Phil Collins',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDUTvak6mFdcLMk8lol5dZR3Hr89VIXbzYhLW5dXjy2BHhi5c0_IWkU1tfSW3Zl9ncoMig\\",
      cover: '',
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'One More Night',
      artist: 'Phil Collins',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDUTvak6mFdcLMk8lomHd413HMiPbCwJ6oZNapdXjy13OfzIf462TjMNx_SW3Zl9ncoMig\\",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },

    {
      title: "That's Just The Way It Is",
      artist: 'Phil Collins',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDUTvak6mFdcLMk8lomMcYnL9sw9UYEu9T85XtYOglGEBfTIXWPIDlkknUaNz3piW5oDrm43Mi71gFlr5Ctc",
      cover: '',
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Shallow ',
      artist: 'Lady Gaga .Ft Bradley Cooper ',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDEMuLY6nElXIYAhi8qkdZfO75-RJ04t4oNRW-oObl96VRDGY4O5JTQQuBZwq4NiW5Acf5B7bS_2kiIn",
      cover: '',
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "You're Beautiful",
      artist: "James Blunt",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSC8MwaKNdSpcNc5CQ8Knfk_JNHlfbG0w9YhLa90UlFRIHhu9tnHHTkUMszlJ3KxqnMxClk4\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Wisemen",
      artist: "James Blunt",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSC8MwaKNdSpcNc5CQ8ChfI3ENMdDcHD492VYPcVCj0VhHgR6sI62XGUznf8\\",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Carry You Home",
      artist: "James Blunt",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSC8MwaKNdSpcNc5CQ6yZe5rQ77KMfCwD8IxKHNpSaEpCPhK_g1GpUTovhkGXyqx-m5QA ",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "High",
      artist: "James Blunt",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSC8MwaKNdSpcNc5CQ7GhcJB9OL1aPYQk6VYqYKEhoigxWB-1sY_IJSE\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Same Mistake",
      artist: "James Blunt",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSC8MwaKNdSpcNc5CQ7yZdo13HMKQe20m5kVOWq5beCU4Xh6VhYSCWxYz1C-X3qtGWQ\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "1973",
      artist: "James Blunt",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSC8MwaKNdSpcNc5CQ5pxQFt9OL1aamPx1U89KrdnnzkxWB-1sY_IJSE\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },

    {
      title: "Cold",
      artist: "James Blunt",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSC8MwaKNdSpcNc5CQ6yndYx9OL1afILu4n4ebOZIgWcxWB-1sY_IJSE\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },

    {
      title: "Ok",
      artist: "Robin Schulz - James Blunt",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDcatqaIdTtTKNU6nYmHdEh_Fb5-ezrby4BSW-QObVyAUx99Y4O5JWQTvxp5tYV-mq8Yf5B7bS_2kiIn",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },

    {
      title: "Tears And Rain",
      artist: "James Blunt",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSC8MwaKNdSpcNc5CQ72daprK75qLaywN4ohTHNpSaDlqSRWnf42pWlQ3hkGXyqx-m5QA",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },

    {
      title: "It Must Have Been Love",
      artist: "Roxette",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDcazKKOyU0QCdTucN6rfUifMM-CJ04g5o0FQuBkkBAzKx3DqjqpUFXgpjeP1lgreMk0zZGALBLwjEZkkxdRWW8iF8KpU6oVWAjQ_2yPq32Jy0TMWjg\\",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Spending My Time",
      artist: "Roxette",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDcazKKOyU0QE9Azkc2hd493HNI9W3Uo5j8NS-QObFSAUR90gInDXFUt0D2VyqqCSKQ40UYtdR--c1Rdu0-PSD8pDIhjjclJZDXTC1Q\\",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Listen To Your Heart",
      artist: "Roxette",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDcazKKOyU0QDMlBl86mKXzG77KMfH7byYRGaOUUlFRIR964jUq5Hz0M2DlJ3KxqnMxClk4\\",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Fading Like A Flower (Every Time You Leave)",
      artist: "Roxette",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDcazKKOyU0QBsEyjNefKXTAOr49SCwB7Y5cW-MOUzWBSh3NXW6-VVXguT2YiYRuic00gkNwcPjOizlo01VcYHJP43qwjrZcZTOd_w\\",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },

    {
      title: "Metropolis",
      artist: "Schiller",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDgOvKaGwU1i4K0zl9uneZfDOMxDcHD481ZRKqk0bGFxUfB6sI62XGUznf8\\",
      cover: "",
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "From Here To Eternity",
      artist: "Schiller",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDgOvKaGwU1i4KZAktZYUY3JNHlxdiwA9YRXZNpipBZ0SejNr2zIK0Ao1gRY0F58nLhDzpBEPQ\\",
      cover: "",
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Dark Sun",
      artist: "Schiller",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDgOvKaGwU1i4KQvldRYXJ3F9cKBRH4T52gsJrJmn1hkCx7Ino7KWy3x",
      cover: "",
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },

    {
      title: "Berlin Tehran",
      artist: "Schiller",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDgOvKaGwU1i4KIzldWhd0irNMGPaHrh6oMiQ9I7oTVELtiVj4F7W2Qh1EOWpmk\\",
      cover: "",
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },

    {
      title: "Nothing I've Ever Known",
      artist: "Bryan Adams",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcdzZ6IdSlUIc1BQ7enfZDAPcA9UDMx5j8qbNZgSzt5VCLCY4O5JVkstD10zK1Tc5n_f5B7bS_2kiIn",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Nothing For Me Ft Zorro",
      artist: "Lupus Nocte",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDEgxLKNdTZfI9QzQ7enfZDAPcA9TXstoWxKFrdiS0p6Vx3DY4O5JUr2q0GHn4tdi7k-f5B7bS_2kiIn",
      cover: "",
      genre: 'electronic pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: " Without You (Extended Mix) Ft Korolova & Krismi",
      artist: "Alar",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCYXta86rFFkKM9Dl4mReJ13956Ve3Ep5YRJFr5XoxkrKx90iInHV1wv1i9Dj1hUmsBCxoYtdR--aT5JwTulWXcZ5LdjjclJZDXTC1Q\\",
      cover: "",
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Voyager (Extended Mix) Ft Monophase",
      artist: "Korolova",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDAaxqyGxF5R4LY9nMqfbpp3956Ve3Ep5YRJFr5XoxkrKx90ionDV2AowUGIiWBSnID1woFEZQDJT0xFqDSROIILHsiejspbLfE\\",
      cover: "",
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Yankı",
      artist: "Simge",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDgUwaR_dUFRLsuS1I-hbWWgGomMb3EN9H4pLpdhn1F_Wh6Rbg\\",
      cover: "",
      genre: 'electronic pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Mad Heart",
      artist: "Namito",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDMMwaaOxAg9IcTua86Ze5x9OL1aUoY0yWVaYt5YdCAxWB-1sY_IJSE\\",
      cover: "https://lh3.googleusercontent.com/KAExSLQrr_SwlEjHd9Ml4bitQTpRWimHcLEkLdoedR6IlcssRwg3bosm76psYiIYvyospDwEM2JzncyOzA=w200-h200-l90-rj",
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "",
      artist: "LP",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDEbdJSCulYQF8X1lc5YUZG-N3-Ga0kU7m0uUKlFpFROJtHHsXvJXWP9kQ\\",
      cover: "",
      genre: 'rock pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Halo",
      artist: "LP",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDEbdIV7wVcQ6Kw3mc5hL5G7DMxNTl4x0ExMK-BlUWN_Rh_JsFeG",
      cover: "",
      genre: 'rock pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: " Nothing For Me (Instrumental Version)",
      artist: "Lupus Nocte - Ft Zorro",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDEgxLKNdTZfI9QzQ7enfZDAPcA9TXstoWxKFpk3mWN_VyDBoojJSVzgtjOV3KF4loDvn5EnZirzkVQc2lJoaFkt3pmnfYszVwmGQZfKrH6blAA\\",
      cover: "",
      genre: 'rock pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Nothing For Me",
      artist: "Lupus Nocte - Ft Zorro",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDEgxLKNdTZfI9QzQ7enfZDAPcA9TXstoWxKFrdiS0p6Vx3DY4O5JUr2q0GHn4tdi7k-f5B7bS_2kiIn",
      cover: "",
      genre: 'rock pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Up All Night",
      artist: "Cannons",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQFdDuZNWkKXbANsGRLXUfvplUJtImd2RWTASlY43JSWQ10wtU",
      cover: "",
      genre: ' pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Evening Star",
      artist: "Cannons",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQBdYzkdKmcEiqQ7qPLXUfvpk0aqMzlT1vFe6tY43JSWQ10wtU",
      cover: "",
      genre: ' pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Stuck On You",
      artist: "Cannons",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQE9RDhtRYWJZ3KMiSLXUfvkxbO8A2fSB5KvK_Y43JSWQ10wtU",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: " Pretty Boy ",
      artist: "Cannons",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCgMwquJw1sQENIzl92xKWrGSHlFVn4k6IhTV91apBBbSh26rIzCTVTgokdDvaBuSKU0woRvbir2kU1l4FJUFnRJ6Mh2bZc1RwjKIGWqXnycuEPOkEQ9",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },

    {
      title: "Shadows",
      artist: "Cannons",
      audio: "https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/Cannons%20Shadows.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9DYW5ub25zIFNoYWRvd3MubXAzIiwiaWF0IjoxNzQ5NzIwMTc1LCJleHAiOjE5MDc0MDAxNzV9.FsuEFXPklMp5dud3xAk3qxX9O6LxKLceuvINc0pOmdM",
      cover: "",
      genre: 'pop electronic',
      duration: '',
      star: 4,
      reference: ""
    },

    {
      title: "",
      artist: "",
      audio: "https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/strong.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9zdHJvbmcubXAzIiwiaWF0IjoxNzQ5NzI0NTIwLCJleHAiOjE5MDc0MDQ1MjB9.X4Ql8wVMZsoF7681K-jDwKBCrPvgTgZfOVjFvoNxBB0",
      cover: "",
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: ""
    },
    {
      title: "",
      artist: "",
      audio: "https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/power.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9wb3dlci5tcDMiLCJpYXQiOjE3NDk3MjYxOTAsImV4cCI6MTkwNzQwNjE5MH0.FSXWasHYVDB3j0IdhbUxtkzMxcbdBuqwflOr9_Gi4Vg",
      cover: "",
      genre: 'electronic',
      duration: '',
      star: 4,
      reference: ""
    },
    {
      title: "",
      artist: "",
      audio: "https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/john-slice.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9qb2huLXNsaWNlLm1wMyIsImlhdCI6MTc0OTc0MTE0NywiZXhwIjoxOTA3NDIxMTQ3fQ.yx5Pkb3PhwXag7ENQn-qECGMz_7QCl7BeDv9ek6sb20",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: ""
    },
    {
      title: "",
      artist: "",
      audio: "https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/john-slice.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZTYzZjJmNC0yNDc5LTQwYmQtOTNhYS00MzkwZDE3MjFlMDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9qb2huLXNsaWNlLm1wMyIsImlhdCI6MTc0OTc0MTg4OSwiZXhwIjoxOTA3NDIxODg5fQ.J3QdCNtfdCc1htz1VlSma1eCQ4jnUPPjsBt3XUsqwYw",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: ""
    },
    {
      title: "I Don't Want To Talk About It",
      artist: "Rod Stewart",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDcauF1tyU1nIdJCQ7JYTZfF9s09Xm0p9T85ZZFCjFx2Bey2rI_JCDk0gPZVmWhBSKk0xn56gCDzSAtf1SukY1xc9IGlYKFPOebTQoTdrXxliA\\",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "I Don't Want To Talk About It",
      artist: "Rod Stewart",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDcauF1tyU1nIdJCQ7JYTZfF9s09Xm0p9T85ZZFCjFx2Bey2rI_JCDk0gPZUonBCSK00y5BweymqRU5armiOQENd98GRZcJfFjPUL5feq0ZZ",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "Waiting For A Girl Like You",
      artist: "Foreigner",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCsaxqKDvFZVMoAlhNKscpa-75-MeSz8oWZOaN0Od1l2SsutrI97UVT91P6X3aB6gLEmkG4tfy_ik1pprh8\\",
      cover: "https://lh3.googleusercontent.com/kM3-YCGT8cK1eDvkvgPVF-2gDpZy5TepES79D-ByLD7Plfz_IfmE_QROcQQwWPLEin2xJu5zcx4kydI=w200-h200-l90-rj",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "Stuck On You",
      artist: "Lionel Richie",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCkMyqI6m01eLMVHQ7ysfovC76iLJ2Uq9kVOWq5geDp8HRHGoIurXxYz1C-X3qtGWQ\\",
      cover: "https://lh3.googleusercontent.com/_NYJiWu4FELJ-Gj7Rumq_vkgugDcit8xl4E1F7P2tBDUt7Vn3PzQbsTCxYjtHoBLpv8UXiLACRVQxok=w200-h200-s-l90-rj",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "November Rain",
      artist: "Guns N' Roses",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCwgwrA6ow8QEs9BiNxYV5fNNMZ_bH7b04BOZJdXjy2EGxe6iE23MCQ6mPSW3Zl9ncoMig\\",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCwgwrA6ow8QEs9BiNxYXJ-8NM09SnQk7YMFRZgOeFl5StG9oVfENVYNtTSK06FVj31CzX57gS6-UA\\",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "Paradise City",
      artist: "Guns N' Roses",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCwgwrA6ow8QEs9BiNxYWYnJML2GenHbxIhZb5dXjy1fFQXBgoytU1I4pfSW3Zl9ncoMig\\",
      cover: "",
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "Civil War",
      artist: "Guns N' Roses",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCwgwrA6ow8QEs9BiNxYTJHNOMU9Xm0tp4hJM9phblg_UO65i3OqDmM0wUKY3HU6",
      cover: "",
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "21 Guns",
      artist: "Green Day",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCwduaKIdSxROYAAVIl_fpbK9cKBRGHr2YJWPKhgnDh2Cx7Ino7KWy3x",
      cover: "",
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "You Could Be Mine",
      artist: "Guns N' Roses",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCwgwrA6ow8QEs9BiNxYYpfM75yMfHgfoWFKFr5XmVUxTg-RgXDPS0H0vzmL3IUvm8swzZJ6Sew\\",
      cover: "",
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "Breakdown",
      artist: "Guns N' Roses",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCwgwrA6ow8QEs9BiNxYS5q8MMSBdoMpp4hJM6g7YlFePPyFjHDMDmM0wUKY3HU6",
      cover: "",
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "How Deep Is Your Love",
      artist: "Bee Gees",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcQuV1huk1j4Kg9mol8bo3H76KQJ2Uq9pEFQuBkkBZ0Sei-tIPATFsxuUVZ2F58nLhDzpBEPQ\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "Stayin' Alive ",
      artist: "Bee Gees",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcQuV1huk1j4LNChOKhd093EMWGfXHbqWVXZd4OTUNsWSDGoXvOCD4pxzaXiX5unrxBez1aezDvg1lo0lGWGTFOD5GEfMguMxmlGGrDaC-byzDNknpJ7A\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: "You Win Again",
      artist: "Bee Gees",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcQuV1huk1j4Lk9mImPcpZ3EMB-cHrh6oMiYqc_myRDOxqen057W2Qh1EOWpmk\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"

    },
    {
      title: " Too Much Heaven",
      artist: "Bee Gees",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcQuV1huk1j4LQ9komFfou_76GCaIIg70VOWq5Vj2FhNd6JhmvGORYz1C-X3qtGWQ\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Night Fever",
      artist: "Bee Gees",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcQuV1huk1j4K43itGsKW68Rb6PJzQO5pFHV98OeFmDDtG9oVeLSmAklxWO0GhWeX1CzX57gS6-UA\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Rest Your Love On Me",
      artist: "Bee Gees",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcQuV1huk1j4LIzlt1YYpfMQXlpdoIgoW5TFr5TUVlvIvO5i4mcMDYrokFTj6t9ictEzFo4",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "More Than A Woman",
      artist: "Bee Gees (Sg's Paradise Edit) Ft Sg Lewis",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcQuV1huk1j4K09lc5YXZC4PXleJ2Mq7oBTFplBkhd-Bfu1r3u5UWMlgBOH0qwySJ1DeXBuLAfmlk5pl1ePLT80_Ky2istJNx_T9JbdmX2dygyK",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Alone",
      artist: "Bee Gees",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcQuV1huk1j4KE6ktedL5G7DLCFaHTw6HQcPaM3UWN_Rh_JsFeG",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "La Isla Bonita",
      artist: "Madonna",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDIMuKyIw0kQDMHubNykakiZPseGe23h6oMiK7gekVE_HNu-lE57W2Qh1EOWpmk\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4.9,
      reference: "https://mp3wr.com/"
    },
    {
      title: " Hung Up",
      artist: "Madonna",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDIMuKyIw0kQCNU8iomNeU7AM5ZPN1sC7n4SSNZQcBZ-WQzIso2SGQ\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Mama, I'm Coming Home",
      artist: "Ozzy Osbourne",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDQlzrY6pFtSL9VAkc5YVonEMIU9UDMooWJUY9pckhBTVBi5Y4O5JTcMvyFo3X9KWbg2f5B7bS_2kiIn",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Every Breath You Take",
      artist: "The Police",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkTuV1qxFRZI8XuaN-de6F3EcuCaIAjoXhUa5FCjFtwCxS4ekeoSUUypDaTmWs9TspDupF8f_iy",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Say You, Say Me",
      artist: "Lionel Richie",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDEUw6t_wQhCKcM2jM5YXInQ77KMfDjb1IBeFr5TUVlvIuSjo4mpSTwY0iOSj6t9ictEzFo4",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: 'Zombies',
      artist: 'The Cranberries',
      cover: 'https://m.media-amazon.com/images/M/MV5BZWQ1ODZjM2YtYmU2Yy00NTNjLTg3MzYtZmU1MzgyOWYyYzg5XkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_FMjpg_UX1000_.jpg',
      audio: 'https://ememay.ir/wp-content/uploads/2023/12/Zombie-The-Cranberries.mp3',
      genre: 'rock',
      star: 4,
      reference: "https://ememay.ir"
    },
    {
      title: "Dreams",
      artist: 'The Cranberries',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkTuV1dx0leIsVAldKdfEibQb5-dH_h6oMiSdZooDZ9LRiMo0p7W2Qh1EOWpmk\\",
      cover: "",
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Ode To My Family",
      artist: 'The Cranberries',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkTuV1dx0leIsVAldKdfEimM749W3vbzpgFPNJblFyECxS4emiiQif0zBJn12pKTspDupF8f_iy",
      cover: "",
      genre: 'rock pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "When You're Gone",
      artist: 'The Cranberries',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkTuV1dx0leIsVAldKdfEiuN76LJ2Uq9kZXW5E1ml5wCxS4epLASkYSp0aWzXBOTspDupF8f_iy",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4.7,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Promises",
      artist: 'The Cranberries',
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDkTuV1dx0leIsVAldKdfEinQciKcH8g9EVOWq4nlTp6MvrAhYqpTxYz1C-X3qtGWQ\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "I Want To Know What Love Is",
      artist: "Foreigner",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCsaxqKDvFZVMoAXQ8CZd5x3I8g9Unoq-D88XtJiSzx6WxB0ho11ECH5mQdDu512icpDvo8wMiTlXBlgshuKV2pO_q1tQMhcUTTVQWCa",
      cover: "",
      genre: 'pop rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Time Flies By",
      artist: "Rowland Giles",
      audio: "https://dc.vmusic.ir/2024/11/VA - Tritonia 497 (2024)/128k/06) Rowland Giles - Time Flies By (Tritonia 497).mp3",
      cover: "",
      genre: 'pop electronic',
      duration: '',
      star: 4,
      reference: "https://vmusic.ir/"
    },

    {
      title: "Prologue",
      artist: "Thomas Farnon",
      audio: "https://dc.vmusic.ir/2025/06/Thomas Farnon - Vignettes (2025)/128k/01) Thomas Farnon - Prologue.mp3",
      cover: "https://vmusic.ir/wp-content/uploads/2025/06/Thomas-Farnon-Vignettes-2025.jpg",
      genre: 'relax',
      duration: '',
      star: 4,
      reference: "https://vmusic.ir/"

    },

    {
      title: "Someone Else's World",
      artist: "Thomas Farnon",
      audio: "https://dc.vmusic.ir/2025/06/Thomas Farnon - Vignettes (2025)/128k/02) Thomas Farnon - Someone Else's World.mp3",
      cover: "https://vmusic.ir/wp-content/uploads/2025/06/Thomas-Farnon-Vignettes-2025.jpg",
      genre: 'relax',
      duration: '',
      star: 4,
      reference: "https://vmusic.ir/"

    },
    {
      title: "Elektra",
      artist: "Thomas Farnon",
      audio: "https://dc.vmusic.ir/2025/06/Thomas Farnon - Vignettes (2025)/128k/08) Thomas Farnon - Elektra.mp3",
      cover: "https://vmusic.ir/wp-content/uploads/2025/06/Thomas-Farnon-Vignettes-2025.jpg",
      genre: 'relax',
      duration: '',
      star: 4,
      reference: "https://vmusic.ir/"

    },

    {
      title: "Epilogue",
      artist: "Thomas Farnon",
      audio: "https://dc.vmusic.ir/2025/06/Thomas Farnon - Vignettes (2025)/128k/10) Thomas Farnon - Epilogue.mp3",
      cover: "https://vmusic.ir/wp-content/uploads/2025/06/Thomas-Farnon-Vignettes-2025.jpg",
      genre: 'relax',
      duration: '',
      star: 4,
      reference: "https://vmusic.ir/"

    },
    {
      title: "I Still See You",
      artist: "David A. Molina",
      audio: "https://dc.vmusic.ir/2025/05/David A. Molina - I Still See You (2025)/128k/David A. Molina - I Still See You.mp3",
      cover: "",
      genre: 'relax',
      duration: '',
      star: 4,
      reference: "https://vmusic.ir/"

    },
    {
      title: "Cambodia",
      artist: "Kim Wilde",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSDAUwV1xvlRUJYARhNaaeIzAMHlFWnUp6ItKFsdTnWN0VBl9Y4O5JVH5xRaV1aFta68yf5B7bS_2kiIn",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Smalltown Boy",
      artist: "Bronski Beat ",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCcdw6uNwFEQAsUvl4mLdonDO82Mfnrbw45eHNpSaFFDSSWniGzJS2QVhkGXyqx-m5QA",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCkgtV1mvlhR4KwzmdKsapzAPcBDcHD40JJLN99heEk9Fvh6sI62XGUznf8\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Dance The Night",
      artist: "Dua Lipa",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCkgtV1mvlhR4KQvkcydKXy_NHlrcHMj9T8NPONdmBBNRh22pn91PFglgA-Py612UX04vVphPTTFiU1OujJ-UzFYH7Wxj8glIQ\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Take On Me",
      artist: "A-Ha",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCbYnJ46qUlbJYAdkYmFbk7AM5ZlgXD_uYpHOutIbBZ-WQzIso2SGQ\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "I Still See You",
      artist: "David A. Molina",
      audio: "https://dc.vmusic.ir/2025/05/David A. Molina - I Still See You (2025)/128k/David A. Molina - I Still See You.mp3",
      cover: "",
      genre: 'electronic relax',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "Always With Me, Always With You",
      artist: "Joe Satriani",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSC8auV1ttlxiKcE8jIl5dZ-4SMw9XnUv6T8yW50ObFyCRiTHXXG-XFjguT2Yj6FtZao_pmBOZBL7Yjgml2GfUX9aHpFu",
      cover: "",
      genre: 'rock',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    {
      title: "",
      artist: "",
      audio: "https://miowhffogcqhjcjjhabr.supabase.co/storage/v1/object/sign/radio.music/Super%20Focus%20Flow%20State%20Music%20-%20Alpha%20Binaural%20Beats,%20Study%20Music%20for%20Focus%20and%20Concentration.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNWM1NTczOC03ZDExLTRjZDctOWQ5Mi1hZTc1YjU5OWY3ZWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyYWRpby5tdXNpYy9TdXBlciBGb2N1cyBGbG93IFN0YXRlIE11c2ljIC0gQWxwaGEgQmluYXVyYWwgQmVhdHMsIFN0dWR5IE11c2ljIGZvciBGb2N1cyBhbmQgQ29uY2VudHJhdGlvbi5tcDMiLCJpYXQiOjE3NTI0MzQ0OTYsImV4cCI6MTkxMDExNDQ5Nn0.mKuUCqFB-103jalHU_jmdLwiOZRoJMOFptSIxVtWnYA",
      cover: "",
      genre: 'relax',
      duration: '',
      star: 4,
    },
    {
      title: "It's My Life",
      artist: "Dr. Alban",
      audio: "https://cdn.mp3wr.com/?h=JGraYpdVSCkdgl1bwUpRLoAXl5CrKXXQ76WGbXHh6oMiR6MkYUViURW8qX17W2Qh1EOWpmk\\",
      cover: "",
      genre: 'pop',
      duration: '',
      star: 4,
      reference: "https://mp3wr.com/"
    },
    // {
    //   title: "",
    //   artist: "",
    //   audio: "",
    //   cover: "",
    //   genre: 'pop',
    //   duration: '',
    //   star: 4,
    //   reference: "https://mp3wr.com/"
    // },
    // {
    //   title: "",
    //   artist: "",
    //   audio: "",
    //   cover: "",
    //   genre: 'pop',
    //   duration: '',
    //   star: 4,
    //   reference: "https://mp3wr.com/"
    // },



  ],
  genres: [
    {
      genre: 'raghsi',
      icon: 'pop',
      text: 'Persian Pop',
      active: false
    },
    {
      genre: 'pop',
      icon: 'pop',
      text: 'Pop',
      active: false
    },
    {
      genre: 'relax',
      icon: 'pop',
      text: 'Relax',
      active: false
    },
    {
      genre: 'rock',
      icon: 'pop',
      text: 'Rock',
      active: false
    },
    {
      genre: 'electronic',
      icon: 'pop',
      text: 'Electronic',
      active: true
    }
  ],
  go: false,
  isPlaying: false
})

export default storeSimple
