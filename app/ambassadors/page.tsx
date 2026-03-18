'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Linkedin } from "lucide-react"

const ambassadors = [
  {
    name: "Vedika Jain",
    school: "Sarvodaya Bal Vidyalaya, New Delhi",
    title: "YLCA Ambassador - Government Schools (Delhi)",
    image: "/vedika.jpeg",
    intro:
      "10th-grade STEM enthusiast and mathematics Olympiad awardee. Leading YLCA's first independent government school workshops in Delhi, bringing cybersecurity and AI awareness to underserved communities.",
    socialLink: null,
  },
  {
    name: "Henry Whitehead",
    school: "Saint Francis High School, Mountain View, California, USA",
    title: "YLCA Ambassador",
    image: "/ambassadors/henry.jpeg",
    intro:
      "11th-grade student from the Bay Area passionate about cybersecurity and digital safety. Helping spread awareness and empower students to stay safe online.",
    socialLink: null,
  },
  {
    name: "Yuvam Loonker",
    school: "JBCN International School, Mumbai",
    title: "Director of Innovation Programs",
    image: "/yuvam.png",
    intro:
      "Global lead for YLCA's hackathons and capstone programs, creating hands-on pathways for students with real-world projects and competitions. Regional Outreach Lead for West & South India.",
    socialLink: null,
  },
  {
    name: "Avni Bhardwaj",
    school: "Challenger School, Sunnyvale, California",
    title: "YLCA Blog Manager & Editorial Coordinator",
    image: "/avni.png",
    intro:
      "Leads YLCA's student communications through blogs and newsletters. Supports ambassadors with outlines, ensures quality and tone, and shares impact stories.",
    socialLink: null,
  },
  {
    name: "Aarush Mangal",
    school: "Welham Boys' School, Dehradun",
    title: "Ambassador for Young Athletes Group",
    image: "/arush.png",
    intro:
      "State and district-level tennis champion bringing cybersecurity awareness to the sports community. Educating student-athletes on digital safety and protecting them from online scams.",
    socialLink: null,
  },
  {
    name: "Atharv Uppal",
    school: "Auckland House School For Boys, Shimla, Himachal Pradesh",
    title: "YLCA Ambassador",
    image: "/ambassadors/Auckland House School For Boys_ ATHARV UPPAL.jpeg",
    intro:
      "9th-grade student passionate about creating a safe and secure environment in terms of cybercrime and cybersecurity. Aspires to learn and implement techniques in today's world of advancement and technology.",
    socialLink: null,
  },
  {
    name: "Aarav Sharma",
    school: "Auckland House School For Boys, Shimla",
    title: "YLCA Ambassador",
    image: "/ambassadors/AHSB_AARAV SHARMA.jpeg",
    intro:
      "9th-grade student from Shimla with a strong interest in cybersecurity and AI safety. Motivated to spread awareness about cyber threats and help students use the internet safely and responsibly.",
    socialLink: null,
  },
  {
    name: "Aaidhan Gowher",
    school: "Auckland House School For Boys, Shimla, Himachal Pradesh",
    title: "YLCA Ambassador",
    image: "/ambassadors/Aaidhan Gowher.jpeg",
    intro:
      "Class 10 student with a focused interest in artificial intelligence and ethical innovation. Leading initiatives to build a safer, more informed, and future-ready digital community for students.",
    socialLink: "https://www.linkedin.com/in/aaidhan-gowher-3468563a6/",
  },
  {
    name: "Shivankit Kanwar",
    school: "Auckland House School For Boys, Shimla, Himachal Pradesh",
    title: "YLCA Ambassador",
    image: "/ambassadors/ShivankitKanwar_ProfilePhoto.jpg.jpg",
    intro:
      "12th-grade student interested in how technology shapes our world. Exploring cybersecurity and AI to understand digital systems, online safety, and emerging tech trends through collaboration.",
    socialLink: null,
  },
  {
    name: "Aainesh Bhandari",
    school: "Delhi Public School, Dwarka Expressway, Gurugram, Haryana",
    title: "YLCA Ambassador",
    image: "/ambassadors/DPSdwarkaexp_AaineshBhandari.jpg",
    intro:
      "11th-grade student with a keen interest in AI and cyber security. Striving to bring about awareness to create a safer, kinder, and more forgiving online space for everyone.",
    socialLink: "https://www.linkedin.com/in/aainesh-bhandari-5727b93a6",
  },
  {
    name: "Diti Chaudhary",
    school: "Delhi Public School Karnal, Haryana",
    title: "YLCA Ambassador",
    image: "/ambassadors/Dpsk_diti_.jpg",
    intro:
      "10th-grade AI enthusiast with a strong interest in learning and leadership. Committed to empowering students with digital awareness and creating a safer, more responsible online space.",
    socialLink: "https://www.linkedin.com/in/diti-chaudhary-630a443a1",
  },
  {
    name: "Kanishka Walia",
    school: "Delhi Public School Karnal, Haryana",
    title: "YLCA Ambassador",
    image: "/ambassadors/Dpsk_Kanishka.jpg",
    intro:
      "10th-grade curious learner who loves learning and leading. Striving to promote smart and ethical ways of using technology and helping others stay safe on online platforms.",
    socialLink: null,
  },
  {
    name: "Himadri Das",
    school: "JBCN International School Oshiwara, Mumbai",
    title: "YLCA Ambassador",
    image: "/ambassadors/JBCN_HimadriDas.jpg",
    intro:
      "11th-grade tech enthusiast and AI/embedded microcontroller hobbyist. Leading school's Tech club and aspiring to create an inclusive environment for aspiring technologists.",
    socialLink: null,
  },
  {
    name: "Panache Kataria",
    school: "JBCN International School Oshiwara, Mumbai, Maharashtra",
    title: "YLCA Ambassador",
    image: "/ambassadors/JBCN_PanacheKataria.png",
    intro:
      "11th-grade student innovator working at the intersection of AI and real-world problem solving. Designing initiatives that use technology to improve safety, strengthen awareness, and drive social impact.",
    socialLink: "https://www.linkedin.com/in/panache-kataria-0a39872a3",
  },
  {
    name: "Rudra Ramaswamy",
    school: "JBCN International School Oshiwara, Mumbai, Maharashtra",
    title: "YLCA Ambassador",
    image: "/ambassadors/Rudra Ramaswamy.jpeg",
    intro:
      "11th-grade DP student who enjoys coding and problem-solving. Passionate about spreading awareness on cybersecurity and AI to protect vulnerable internet users.",
    socialLink: null,
  },
  {
    name: "Agrima Tripathi",
    school: "Kothari International School, Noida",
    title: "YLCA Ambassador",
    image: "/ambassadors/AgrimaTripathi.jpeg",
    intro:
      "Enthusiastic 9th-grade innovator spreading awareness about the dangers and ethics of technology. Helping fellow students use technology ethically and protect themselves from cybercrime.",
    socialLink: null,
  },
  {
    name: "Mehar Bajaj",
    school: "Epic Academy School, Lathrop, California, USA",
    title: "YLCA Ambassador",
    image: "/ambassadors/mehar.jpeg",
    intro:
      "Middle school student and state-level volleyball player. Bringing cybersecurity and digital safety awareness to her school and team while balancing academics and athletics.",
    socialLink: null,
  },
  {
    name: "Sanvi Jain",
    school: "Sacred Heart Convent International School, Ludhiana, Punjab, India",
    title: "YLCA Ambassador",
    image: "/ambassadors/sanvi.png",
    intro:
      "11th-grade student passionate about AI, cybersecurity, and digital marketing. Spreading awareness about safe internet use, cyber risks, and helping build a safer, more conscious digital space for everyone.",
    socialLink: null,
  },
  {
    name: "Aarna Malhotra",
    school: "Sacred Heart Convent International School, Ludhiana, Punjab, India",
    title: "YLCA Ambassador",
    image: "/ambassadors/aarna.png",
    intro:
      "Grade 9 student with a strong interest in AI, digital awareness, and communication. Promoting safer, more responsible, and empathetic online spaces for young users as a YLCA Ambassador.",
    socialLink: null,
  },
]

export default function AmbassadorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20">
        {/* Page Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 bg-gradient-to-b from-background via-muted/20 to-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm">
              YLCA AMBASSADORS
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight px-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ambassadors</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              A global cohort of student leaders using cybersecurity and AI knowledge to protect their schools, teams, and
              communities.
            </p>
          </div>
        </section>

        {/* Ambassadors Carousel */}
        <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-6xl mx-auto relative z-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {ambassadors.map((ambassador, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group relative overflow-hidden border-2 border-border/60 dark:border-border/40 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 dark:hover:border-primary/50 h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardHeader className="relative">
                        <div className="aspect-square w-full mb-4 rounded-xl overflow-hidden border border-border/40">
                          <img
                            src={ambassador.image}
                            alt={ambassador.name}
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <CardTitle className="text-xl font-bold mb-2">{ambassador.name}</CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">{ambassador.school}</p>
                      </CardHeader>
                      <CardContent className="relative">
                        <div className="mb-3">
                          <Badge variant="secondary" className="text-[10px] px-2 py-0.5">
                            {ambassador.title}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ambassador.intro}</p>
                        {ambassador.socialLink && (
                          <a
                            href={ambassador.socialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-medium"
                          >
                            <Linkedin className="w-4 h-4" />
                            Connect
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-12" />
              <CarouselNext className="hidden sm:flex -right-12" />
            </Carousel>
          </div>
        </section>

        {/* Ambassador Stories */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <Badge variant="outline" className="mb-3 px-4 sm:px-5 py-1.5 text-xs sm:text-sm">
                AMBASSADOR STORIES
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3 tracking-tight">
                In Their Own Words
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                Hear from YLCA Ambassadors on why they joined, what they&apos;re building, and how they plan to drive impact in their
                communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="border border-border/50 dark:border-border/40 bg-card/80 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-bold">Sanvi Jain</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Grade 11 · Sacred Heart Convent International School, Ludhiana, Punjab, India
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Hi, my name is Sanvi, and I am an 11th-grade student at Sacred Heart Convent School, Ludhiana. I am
                    enthusiastic about AI, cybersecurity, and digital marketing. As a YLCA Ambassador, I aim to spread awareness about
                    safe and responsible internet use, educate students about cyber risks, and contribute toward making the internet a
                    safer and more conscious space for everyone.
                  </p>
                  <p>
                    I want to become a YLCA Ambassador because I&apos;ve seen how powerful and dangerous the digital world can be—from
                    troll comments affecting mental health to deepfakes and fake chats damaging reputations. Being aware of digital
                    footprints, scams, and online ethics has made me feel a responsibility to educate others, not just about safety, but
                    about conscious and respectful use of technology.
                  </p>
                  <p>
                    In the next 60–90 days, I aim to conduct cybersecurity and AI awareness workshops in government schools and create
                    online content that reaches students beyond the classroom. Through these efforts, I hope to build a community that
                    learns, grows, and promotes conscious and responsible use of technology together.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border/50 dark:border-border/40 bg-card/80 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-bold">Aarna Malhotra</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Grade 9 · Sacred Heart Convent International School, Ludhiana, Punjab, India
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    I am Aarna Malhotra, a Grade 9 student with a strong interest in AI, digital awareness, and communication. As a YLCA
                    Ambassador, I aim to promote safer, more responsible, and empathetic online spaces for young users.
                  </p>
                  <p>
                    I chose to apply as a YLCA Ambassador because the internet has become an inseparable part of teenage life, yet many
                    users are unaware of its risks. From misinformation to online harassment and cyber fraud, small mistakes online can
                    have lasting consequences. Exposure to real-life cases of digital misuse made me realise the need for early awareness
                    and education.
                  </p>
                  <p>
                    Over the next 60–90 days, I plan to organise an interactive session focused on AI basics, cybersecurity awareness,
                    and safe online practices, and to create short, easy-to-understand digital content on AI tools, online risks, and
                    digital footprints—helping young users make smarter and safer decisions online.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

