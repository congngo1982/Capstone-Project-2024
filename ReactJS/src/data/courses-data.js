import { Audio, Duration, Enrolled, Instructor, Language, Lectures, Reading, Video } from "../svg";

export const course_data = [
  {
    id: 1,
    courseImage: '/assets/img/course/course-1.jpg',
    trending_1:true,
    featured:true,
    lesson: 43,
    language:'English',
    skill_label:'Beginner',
    title: 'Become a product Manager learn the skills & job.',
    rating: 4.5,
    y_video_id:'-_X6PhkjpzU',
    teacherImg: '/assets/img/course/teacher/teacher-1.jpg',
    course_summary:'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    teacherName: 'Jim Séchen',
    category: 'Art & Design',
    price: 'free',
    last_update: 'July 24, 2022',
    total_rating:14,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tag: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: [" Business's managers, leaders", " Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/assets/img/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews:{
      text:"Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do",
      comments:[
        {
          user:'/assets/img/course/comment/course-comment-1.jpg',
          name:'Eleanor Fant',
          date:'July 14, 2022',
          comment:"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:5,
        },
        {
          user:'/assets/img/course/comment/course-comment-2.jpg',
          name:'Shahnewaz Sakil',
          date:'July 17, 2022',
          comment:"David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:4,
        },
      ]
    },
    members:[
      {
        img:'/assets/img/course/instructor/course-instructor-1.jpg',
        name:'Shahnewaz Sakil',
        title:'Engineer',
        member_info:[
          {
            title:7,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:5,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:3.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-2.jpg',
        name:'Lauren Stamps',
        title:'Teacher',
        member_info:[
          {
            title:8,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:6,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:5.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-3.jpg',
        name:'Jonquil Von',
        title:'Associate',
        member_info:[
          {
            title:9,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:15,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:4.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
    ],
    course_content:[
      {
        icon:<Instructor/>,
        title:'Instructor :',
        subtitle:'Jim Séchen'
      },
      {
        icon:<Lectures/>,
        title:'Lectures :',
        subtitle:14,
      },
      {
        icon:<Duration/>,
        title:'Duration :',
        subtitle:'6 Weeks',
      },
      {
        icon:<Enrolled/>,
        title:'Enrolled :',
        subtitle:'20 students',
      },
      {
        icon:<Language/>,
        title:'Language :',
        subtitle:'English',
      },
    ]
  },
  {
    id: 2,
    courseImage: '/assets/img/course/course-2.jpg',
    popularity_1:true,
    trending:true,
    lesson: '72',
    language:'Russian',
    skill_label:'Intermediate',
    title: 'Fundamentals of music theory Learn new',
    rating: '4.0',
    y_video_id:'oQouImCJeVI',
    teacherImg: '/assets/img/course/teacher/teacher-2.jpg',
    course_summary:'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    teacherName: 'Barry Tone',
    category: 'UX Design',
    price: 32.00,
    oldPrice: 68.00,
    color: 'sky-blue',
    last_update: 'July 15, 2022',
    total_rating:16,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tag: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: [" Business's managers, leaders", " Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/assets/img/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews:{
      text:"Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do",
      comments:[
        {
          user:'/assets/img/course/comment/course-comment-1.jpg',
          name:'Eleanor Fant',
          date:'July 14, 2022',
          comment:"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:5,
        },
        {
          user:'/assets/img/course/comment/course-comment-2.jpg',
          name:'Shahnewaz Sakil',
          date:'July 17, 2022',
          comment:"David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:4,
        },
      ]
    },
    members:[
      {
        img:'/assets/img/course/instructor/course-instructor-1.jpg',
        name:'Shahnewaz Sakil',
        title:'Engineer',
        member_info:[
          {
            title:7,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:5,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:3.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-2.jpg',
        name:'Lauren Stamps',
        title:'Teacher',
        member_info:[
          {
            title:8,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:6,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:5.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-3.jpg',
        name:'Jonquil Von',
        title:'Associate',
        member_info:[
          {
            title:9,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:15,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:4.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
    ],
    course_content:[
      {
        icon:<Instructor/>,
        title:'Instructor :',
        subtitle:'Barry Tone'
      },
      {
        icon:<Lectures/>,
        title:'Lectures :',
        subtitle:16,
      },
      {
        icon:<Duration/>,
        title:'Duration :',
        subtitle:'8 Weeks',
      },
      {
        icon:<Enrolled/>,
        title:'Enrolled :',
        subtitle:'25 students',
      },
      {
        icon:<Language/>,
        title:'Language :',
        subtitle:'Russian',
      },
    ]
  },
  {
    id: 3,
    courseImage: '/assets/img/course/course-3.jpg',
    trending_1:true,
    featured:true,
    lesson: '35',
    language:'English',
    skill_label:'Expert',
    title: 'Bases Matemáticas dios Álgebra Ecuacion',
    rating: 4.3,
    y_video_id:'yJg-Y5byMMw',
    teacherImg: '/assets/img/course/teacher/teacher-3.jpg',
    course_summary:'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    teacherName: 'Samuel Serif',
    category: 'Development',
    price: 13.00,
    oldPrice: 19.00,
    color: 'green',
    last_update: 'Jun 7, 2022',
    total_rating:17,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tag: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: [" Business's managers, leaders", " Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/assets/img/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews:{
      text:"Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do",
      comments:[
        {
          user:'/assets/img/course/comment/course-comment-1.jpg',
          name:'Eleanor Fant',
          date:'July 14, 2022',
          comment:"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:5,
        },
        {
          user:'/assets/img/course/comment/course-comment-2.jpg',
          name:'Shahnewaz Sakil',
          date:'July 17, 2022',
          comment:"David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:4,
        },
      ]
    },
    members:[
      {
        img:'/assets/img/course/instructor/course-instructor-1.jpg',
        name:'Shahnewaz Sakil',
        title:'Engineer',
        member_info:[
          {
            title:7,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:5,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:3.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-2.jpg',
        name:'Lauren Stamps',
        title:'Teacher',
        member_info:[
          {
            title:8,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:6,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:5.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-3.jpg',
        name:'Jonquil Von',
        title:'Associate',
        member_info:[
          {
            title:9,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:15,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:4.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
    ],
    course_content:[
      {
        icon:<Instructor/>,
        title:'Instructor :',
        subtitle:'Samuel Serif'
      },
      {
        icon:<Lectures/>,
        title:'Lectures :',
        subtitle:18,
      },
      {
        icon:<Duration/>,
        title:'Duration :',
        subtitle:'10 Weeks',
      },
      {
        icon:<Enrolled/>,
        title:'Enrolled :',
        subtitle:'28 students',
      },
      {
        icon:<Language/>,
        title:'Language :',
        subtitle:'English',
      },
    ]
  },
  {
    id: 4,
    courseImage: '/assets/img/course/course-4.jpg',
    featured_1:true,
    featured:true,
    lesson: '60',
    language:'Hindi',
    skill_label:'Beginner',
    title: 'Strategy law and organization Foundation',
    rating: 3.5,
    y_video_id:'N3AkSS5hXMA',
    teacherImg: '/assets/img/course/teacher/teacher-4.jpg',
    course_summary:'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    teacherName: 'Elon Gated',
    category: 'Development',
    price: 62.00,
    oldPrice: 97.00,
    color: 'blue',
    last_update: 'April 24, 2022',
    total_rating:20,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tag: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: [" Business's managers, leaders", " Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/assets/img/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews:{
      text:"Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do",
      comments:[
        {
          user:'/assets/img/course/comment/course-comment-1.jpg',
          name:'Eleanor Fant',
          date:'July 14, 2022',
          comment:"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:5,
        },
        {
          user:'/assets/img/course/comment/course-comment-2.jpg',
          name:'Shahnewaz Sakil',
          date:'July 17, 2022',
          comment:"David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:4,
        },
      ]
    },
    members:[
      {
        img:'/assets/img/course/instructor/course-instructor-1.jpg',
        name:'Shahnewaz Sakil',
        title:'Engineer',
        member_info:[
          {
            title:7,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:5,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:3.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-2.jpg',
        name:'Lauren Stamps',
        title:'Teacher',
        member_info:[
          {
            title:8,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:6,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:5.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-3.jpg',
        name:'Jonquil Von',
        title:'Associate',
        member_info:[
          {
            title:9,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:15,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:4.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
    ],
    course_content:[
      {
        icon:<Instructor/>,
        title:'Instructor :',
        subtitle:'Elon Gated'
      },
      {
        icon:<Lectures/>,
        title:'Lectures :',
        subtitle:21,
      },
      {
        icon:<Duration/>,
        title:'Duration :',
        subtitle:'9 Weeks',
      },
      {
        icon:<Enrolled/>,
        title:'Enrolled :',
        subtitle:'32 students',
      },
      {
        icon:<Language/>,
        title:'Language :',
        subtitle:'Hindi',
      },
    ]
  },
  {
    id: 5,
    courseImage: '/assets/img/course/course-5.jpg',
    art_design_1:true,
    lesson: '28',
    language:'Bengali',
    skill_label:'Intermediate',
    title: 'The business Intelligence analyst Course 2022',
    rating: 4.5,
    y_video_id:'i8xsbYgMiBs',
    teacherImg: '/assets/img/course/teacher/teacher-5.jpg',
    course_summary:'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    teacherName: 'Eleanor Fant',
    category: 'Marketing',
    price: 25.00,
    oldPrice: 36.00,
    color: 'orange',
    last_update: 'February 24, 2022',
    total_rating:22,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tag: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: [" Business's managers, leaders", " Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/assets/img/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews:{
      text:"Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do",
      comments:[
        {
          user:'/assets/img/course/comment/course-comment-1.jpg',
          name:'Eleanor Fant',
          date:'July 14, 2022',
          comment:"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:5,
        },
        {
          user:'/assets/img/course/comment/course-comment-2.jpg',
          name:'Shahnewaz Sakil',
          date:'July 17, 2022',
          comment:"David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:4,
        },
      ]
    },
    members:[
      {
        img:'/assets/img/course/instructor/course-instructor-1.jpg',
        name:'Shahnewaz Sakil',
        title:'Engineer',
        member_info:[
          {
            title:7,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:5,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:3.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-2.jpg',
        name:'Lauren Stamps',
        title:'Teacher',
        member_info:[
          {
            title:8,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:6,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:5.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-3.jpg',
        name:'Jonquil Von',
        title:'Associate',
        member_info:[
          {
            title:9,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:15,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:4.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
    ],
    course_content:[
      {
        icon:<Instructor/>,
        title:'Instructor :',
        subtitle:'Eleanor Fant'
      },
      {
        icon:<Lectures/>,
        title:'Lectures :',
        subtitle:23,
      },
      {
        icon:<Duration/>,
        title:'Duration :',
        subtitle:'12 Weeks',
      },
      {
        icon:<Enrolled/>,
        title:'Enrolled :',
        subtitle:'30 students',
      },
      {
        icon:<Language/>,
        title:'Language :',
        subtitle:'Bengali',
      },
    ]
  },
  {
    id: 6,
    courseImage: '/assets/img/course/course-6.jpg',
    featured_1:true,
    lesson: '38',
    language:'Russian',
    skill_label:'Expert',
    title: 'Bases Matemáticas dios Álgebra Ecuacion',
    rating: 4.8,
    y_video_id:'bjFvcFjJpE0',
    teacherImg: '/assets/img/course/teacher/teacher-6.jpg',
    course_summary:'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    teacherName: 'Brian Cumin',
    category: 'Data Science',
    price: 35.00,
    oldPrice: 46.00,
    color: 'pink',
    last_update: 'March 20, 2022',
    total_rating:25,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tag: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: [" Business's managers, leaders", " Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/assets/img/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews:{
      text:"Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do",
      comments:[
        {
          user:'/assets/img/course/comment/course-comment-1.jpg',
          name:'Eleanor Fant',
          date:'July 14, 2022',
          comment:"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:5,
        },
        {
          user:'/assets/img/course/comment/course-comment-2.jpg',
          name:'Shahnewaz Sakil',
          date:'July 17, 2022',
          comment:"David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:4,
        },
      ]
    },
    members:[
      {
        img:'/assets/img/course/instructor/course-instructor-1.jpg',
        name:'Shahnewaz Sakil',
        title:'Engineer',
        member_info:[
          {
            title:7,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:5,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:3.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-2.jpg',
        name:'Lauren Stamps',
        title:'Teacher',
        member_info:[
          {
            title:8,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:6,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:5.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-3.jpg',
        name:'Jonquil Von',
        title:'Associate',
        member_info:[
          {
            title:9,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:15,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:4.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
    ],
    course_content:[
      {
        icon:<Instructor/>,
        title:'Instructor :',
        subtitle:'Brian Cumin'
      },
      {
        icon:<Lectures/>,
        title:'Lectures :',
        subtitle:25,
      },
      {
        icon:<Duration/>,
        title:'Duration :',
        subtitle:'14 Weeks',
      },
      {
        icon:<Enrolled/>,
        title:'Enrolled :',
        subtitle:'35 students',
      },
      {
        icon:<Language/>,
        title:'Language :',
        subtitle:'Russian',
      },
    ]
  },
  {
    id: 7,
    courseImage: '/assets/img/course/course-7.jpg',
    lesson: '26',
    language:'Hindi',
    skill_label:'Beginner',
    title: 'Build your media and Public presence',
    rating: 4.6,
    y_video_id:'uVwtVBpw7RQ',
    teacherImg: '/assets/img/course/teacher/teacher-7.jpg',
    course_summary:'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    teacherName: 'Pelican Steve',
    category: 'Audio & Music',
    price: 46.00,
    oldPrice: 72.00,
    color: 'orange',
    last_update: 'November 24, 2021',
    total_rating:29,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tag: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: [" Business's managers, leaders", " Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/assets/img/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews:{
      text:"Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do",
      comments:[
        {
          user:'/assets/img/course/comment/course-comment-1.jpg',
          name:'Eleanor Fant',
          date:'July 14, 2022',
          comment:"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:5,
        },
        {
          user:'/assets/img/course/comment/course-comment-2.jpg',
          name:'Shahnewaz Sakil',
          date:'July 17, 2022',
          comment:"David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:4,
        },
      ]
    },
    members:[
      {
        img:'/assets/img/course/instructor/course-instructor-1.jpg',
        name:'Shahnewaz Sakil',
        title:'Engineer',
        member_info:[
          {
            title:7,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:5,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:3.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-2.jpg',
        name:'Lauren Stamps',
        title:'Teacher',
        member_info:[
          {
            title:8,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:6,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:5.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-3.jpg',
        name:'Jonquil Von',
        title:'Associate',
        member_info:[
          {
            title:9,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:15,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:4.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
    ],
    course_content:[
      {
        icon:<Instructor/>,
        title:'Instructor :',
        subtitle:'Pelican Steve'
      },
      {
        icon:<Lectures/>,
        title:'Lectures :',
        subtitle:24,
      },
      {
        icon:<Duration/>,
        title:'Duration :',
        subtitle:'18 Weeks',
      },
      {
        icon:<Enrolled/>,
        title:'Enrolled :',
        subtitle:'40 students',
      },
      {
        icon:<Language/>,
        title:'Language :',
        subtitle:'Hindi',
      },
    ]
  },
  {
    id: 8,
    courseImage: '/assets/img/course/course-8.jpg',
    trending:true,
    lesson: '13',
    language:'Bengali',
    skill_label:'Intermediate',
    title: 'Creative writing through Storytelling',
    rating: 4.4,
    y_video_id:'uxZZzmeCoLE',
    teacherImg: '/assets/img/course/teacher/teacher-8.jpg',
    course_summary:'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    teacherName: 'Shahnewaz Sakil',
    category: 'Mechanical',
    price: 52.00,
    oldPrice: 72.00,
    color: 'pink',
    last_update: 'December 24, 2022',
    total_rating:32,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tag: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: [" Business's managers, leaders", " Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/assets/img/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews:{
      text:"Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do",
      comments:[
        {
          user:'/assets/img/course/comment/course-comment-1.jpg',
          name:'Eleanor Fant',
          date:'July 14, 2022',
          comment:"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:5,
        },
        {
          user:'/assets/img/course/comment/course-comment-2.jpg',
          name:'Shahnewaz Sakil',
          date:'July 17, 2022',
          comment:"David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:4,
        },
      ]
    },
    members:[
      {
        img:'/assets/img/course/instructor/course-instructor-1.jpg',
        name:'Shahnewaz Sakil',
        title:'Engineer',
        member_info:[
          {
            title:7,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:5,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:3.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-2.jpg',
        name:'Lauren Stamps',
        title:'Teacher',
        member_info:[
          {
            title:8,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:6,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:5.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-3.jpg',
        name:'Jonquil Von',
        title:'Associate',
        member_info:[
          {
            title:9,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:15,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:4.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
    ],
    course_content:[
      {
        icon:<Instructor/>,
        title:'Instructor :',
        subtitle:'Shahnewaz Sakil'
      },
      {
        icon:<Lectures/>,
        title:'Lectures :',
        subtitle:26,
      },
      {
        icon:<Duration/>,
        title:'Duration :',
        subtitle:'20 Weeks',
      },
      {
        icon:<Enrolled/>,
        title:'Enrolled :',
        subtitle:'45 students',
      },
      {
        icon:<Language/>,
        title:'Language :',
        subtitle:'Bengali',
      },
    ]
  },
  {
    id: 9,
    courseImage: '/assets/img/course/course-9.jpg',
    lesson: '25',
    language:'English',
    skill_label:'Expert',
    title: 'Product Manager Learn the Skills & job.',
    rating: 4.2,
    y_video_id:'2ReR1YJrNOM',
    teacherImg: '/assets/img/course/teacher/teacher-9.jpg',
    course_summary:'Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem',
    teacherName: 'Hilary Ouse',
    category: 'Lifestyle',
    price: 15.00,
    oldPrice: 45.00,
    color: 'blue-2',
    last_update: 'July 10, 2022',
    total_rating:34,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tag: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: [" Business's managers, leaders", " Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/assets/img/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews:{
      text:"Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do",
      comments:[
        {
          user:'/assets/img/course/comment/course-comment-1.jpg',
          name:'Eleanor Fant',
          date:'July 14, 2022',
          comment:"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:5,
        },
        {
          user:'/assets/img/course/comment/course-comment-2.jpg',
          name:'Shahnewaz Sakil',
          date:'July 17, 2022',
          comment:"David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:4,
        },
      ]
    },
    members:[
      {
        img:'/assets/img/course/instructor/course-instructor-1.jpg',
        name:'Shahnewaz Sakil',
        title:'Engineer',
        member_info:[
          {
            title:7,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:5,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:3.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-2.jpg',
        name:'Lauren Stamps',
        title:'Teacher',
        member_info:[
          {
            title:8,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:6,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:5.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-3.jpg',
        name:'Jonquil Von',
        title:'Associate',
        member_info:[
          {
            title:9,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:15,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:4.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
    ],
    course_content:[
      {
        icon:<Instructor/>,
        title:'Instructor :',
        subtitle:'Hilary Ouse'
      },
      {
        icon:<Lectures/>,
        title:'Lectures :',
        subtitle:30,
      },
      {
        icon:<Duration/>,
        title:'Duration :',
        subtitle:'25 Weeks',
      },
      {
        icon:<Enrolled/>,
        title:'Enrolled :',
        subtitle:'50 students',
      },
      {
        icon:<Language/>,
        title:'Language :',
        subtitle:'English',
      },
    ]
  },
  {
    id: 10,
    courseImage: '/assets/img/course/home-3/course-1.jpg',
    lesson: '25',
    language:'English',
    skill_label:'Intermediate',
    title: 'Product Manager Learn the Skills & job.',
    rating: 4.5,
    y_video_id:'XBoZPCgdnm8',
    home_3:true,
    teacherImg: '/assets/img/course/teacher/home-3/teacher-1.jpg',
    teacherName: 'Jim Séchen',
    category: 'UX Designer',
    course_summary:'Top instructors from around the world teach millions of students on Quillow. Get unlimited.',
    price: 77.00,
    oldPrice: 88.00,
    color: 'orange',
    last_update: 'July 13, 2022',
    total_rating:39,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tag: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: [" Business's managers, leaders", " Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/assets/img/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews:{
      text:"Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do",
      comments:[
        {
          user:'/assets/img/course/comment/course-comment-1.jpg',
          name:'Eleanor Fant',
          date:'July 14, 2022',
          comment:"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:5,
        },
        {
          user:'/assets/img/course/comment/course-comment-2.jpg',
          name:'Shahnewaz Sakil',
          date:'July 17, 2022',
          comment:"David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:4,
        },
      ]
    },
    members:[
      {
        img:'/assets/img/course/instructor/course-instructor-1.jpg',
        name:'Shahnewaz Sakil',
        title:'Engineer',
        member_info:[
          {
            title:7,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:5,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:3.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-2.jpg',
        name:'Lauren Stamps',
        title:'Teacher',
        member_info:[
          {
            title:8,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:6,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:5.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-3.jpg',
        name:'Jonquil Von',
        title:'Associate',
        member_info:[
          {
            title:9,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:15,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:4.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
    ],
    course_content:[
      {
        icon:<Instructor/>,
        title:'Instructor :',
        subtitle:'Jim Séchen'
      },
      {
        icon:<Lectures/>,
        title:'Lectures :',
        subtitle:35,
      },
      {
        icon:<Duration/>,
        title:'Duration :',
        subtitle:'30 Weeks',
      },
      {
        icon:<Enrolled/>,
        title:'Enrolled :',
        subtitle:'52 students',
      },
      {
        icon:<Language/>,
        title:'Language :',
        subtitle:'English',
      },
    ]
  },
  {
    id: 11,
    courseImage: '/assets/img/course/home-3/course-2.jpg',
    lesson: '29',
    language:'Bengali',
    skill_label:'Expert',
    title: 'The Importance Of Intrinsic for Students.',
    rating: 4.4,
    y_video_id:'6oFuwhIibo4',
    home_3:true,
    teacherImg: '/assets/img/course/teacher/home-3/teacher-2.jpg',
    teacherName: 'Naim Uddin',
    category: 'Product Design',
    course_summary:'Top instructors from around the world teach millions of students on Quillow. Get unlimited.',
    price: 99.00,
    oldPrice: 108.00,
    color: 'blue-2',
    last_update: 'July 15, 2022',
    total_rating:43,
    overview: "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well. Give us a bell bits and bobs Charles he lost his bottle super my lady cras starkers bite your arm off Queen's English, pardon me horse play Elizabeth a blinding shot chinwag knees up do one David, blag cup of tea Eaton so I said bleeding haggle James Bond cup of char. Gosh William ummm I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do with me nancy boy show off show off pick your nose and blow off spiffing good time lavatory me old mucker, chimney pot what a load of rubbish boot squiffy lost the plot brolly wellies excuse my french.",
    tag: ['Big data', 'Data analysis', 'Data modeling'],
    target_audience: [" Business's managers, leaders", " Downloadable lectures, code and design assets for all projects", "Anyone who is finding a chance to get the promotion"],
    other_instructor: [
      {
        teacher_img: "/assets/img/course/teacher/teacher-3.jpg",
        teacher_name: "Eleanor Fant",
        teacher_title: "Instructor"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-2.jpg",
        teacher_name: "Lauren Stamps",
        teacher_title: "Teacher"
      },
      {
        teacher_img: "/assets/img/course/teacher/teacher-1.jpg",
        teacher_name: "Jonquil Von",
        teacher_title: "Associate"
      },
    ],
    curriculum: [
      {
        id: 'course__accordion',
        course_c_title: 'Week 01',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
      {
        id: 'course__accordion-2',
        course_c_title: 'Week 02',
        course_info: [
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
            questions: '2 questions'
          },
          {
            course_c_icon: <Video />,
            course_c_text: 'Video:',
            course_c_text_2: 'Greetings and introduction',
            clock_icon: 'icon_clock_alt',
            minute: '14 minutes',
          },
          {
            course_c_icon: <Audio />,
            course_c_text: 'Audio:',
            course_c_text_2: 'Interactive lesson',
            clock_icon: 'icon_clock_alt',
            minute: '15 minutes',
            questions: '3 questions'
          },
          {
            course_c_icon: <Reading />,
            course_c_text: 'Reading:',
            course_c_text_2: 'Ut enim ad minim veniam',
            clock_icon: 'icon_clock_alt',
            minute: '22 minutes',
          },
        ]
      },
    ],
    reviews:{
      text:"Gosh william I'm telling crikey burke I don't want no agro A bit of how's your father bugger all mate off his nut that, what a plonker cuppa owt to do",
      comments:[
        {
          user:'/assets/img/course/comment/course-comment-1.jpg',
          name:'Eleanor Fant',
          date:'July 14, 2022',
          comment:"So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:5,
        },
        {
          user:'/assets/img/course/comment/course-comment-2.jpg',
          name:'Shahnewaz Sakil',
          date:'July 17, 2022',
          comment:"David blatant have it, standard A bit of how's your father my lady absolutely.",
          rating:4,
        },
      ]
    },
    members:[
      {
        img:'/assets/img/course/instructor/course-instructor-1.jpg',
        name:'Shahnewaz Sakil',
        title:'Engineer',
        member_info:[
          {
            title:7,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:5,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:3.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-2.jpg',
        name:'Lauren Stamps',
        title:'Teacher',
        member_info:[
          {
            title:8,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:6,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:5.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
      {
        img:'/assets/img/course/instructor/course-instructor-3.jpg',
        name:'Jonquil Von',
        title:'Associate',
        member_info:[
          {
            title:9,
            text:'Courses',
            pl:'pl-45'
          },
          {
            title:15,
            text:'Review',
            pl:'pl-70'
          },
          {
            title:4.00,
            text:'Rating',
            pl:'pl-85'
          },
        ]
      },
    ],
    course_content:[
      {
        icon:<Instructor/>,
        title:'Instructor :',
        subtitle:'Naim Uddin'
      },
      {
        icon:<Lectures/>,
        title:'Lectures :',
        subtitle:40,
      },
      {
        icon:<Duration/>,
        title:'Duration :',
        subtitle:'32 Weeks',
      },
      {
        icon:<Enrolled/>,
        title:'Enrolled :',
        subtitle:'55 students',
      },
      {
        icon:<Language/>,
        title:'Language :',
        subtitle:'Bengali',
      },
    ]
  },

]