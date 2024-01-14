// data.js
const levelsData = {
  alldata: [
    { id: '100' , level: 1, label: '100.Personal', ico:'fEmerald', data: [ //  █ PERSONAL █
      { id: '110' , level: 2, ico:'fEmerald', label: '01.Your Name', data: [ // ▬ NAME ▬
        { id: '111' , level: 3, ico:'fEmerald', label: '01.Identidity Documents', data: [
          { level: 4, ico:'pdf', label: 'Bird_Certificate.pdf'},
          { level: 4, ico:'pdf', label: 'ID Card.pdf'},
          { level: 4, ico:'pdf', label: 'Social_Segurity_Card.pdf'},
          { level: 4, ico:'pdf', label: 'drivers license.pdf'},
          { level: 4, ico:'pdf', label: 'Passport.pdf'},
          { level: 4, ico:'jpg', label: 'yourPhoto.jpg'},
        ] },
        { id: '112' , level: 3, ico:'fEmerald', label: '02.Health', data: [
          
        ] },
        { id: '113' , level: 3, ico:'fEmerald', label: '03.Education', data: [
          { level: 3, ico:'pdf', label: 'CRT_HighSchoolDiploma.pdf' },
          { level: 3, ico:'pdf', label: 'CRT_testing_largadocumentNamelargoLarge.pdf' },
        ] },
        { id: '114' , level: 3, ico:'fEmerald', label: '04.Finance', data: [
          
        ] },
        { id: '115' , level: 3, ico:'fEmerald', label: '05.Legals', data: [
          
        ] },
        { id: '116' , level: 3, ico:'fBrown', label: '98.Review', data: [
          
        ] }
      ] },
      { id: '120' , level: 2, ico:'fEmerald', label: '02.Family Documents', data: [ // ▬ FAMILY ▬
        
      ] },
      { id: '130' , level: 2, ico:'fEmerald', label: '03.Memories', data: [ // ▬ MEMORIES ▬
        { id: '131' , level: 3, ico:'fEmerald', label: '01.Family', data: [
          
        ] },
        { id: '132' , level: 3, ico:'fEmerald', label: '02.Friends', data: [
          
        ] },
        { id: '133' , level: 3, ico:'fEmerald', label: '03.Work Meets', data: [
          
        ] }
      ] },
      { id: '140' , level: 2, ico:'fBrown', label: '97.Undefined', data: [ // ▬ 97 ▬
        { level: 3, ico:'jpg', label: 'PHO_Lois_middleSchoolGraduation.jpg' }
      ] },
      { id: '150' , level: 2, ico:'fBrown', label: '98.Review', data: [ // ▬ 98 ▬
        { level: 3, ico:'pdf', label: 'Divorce Decree.pdf' },
        { level: 3, ico:'jpg', label: '0fT56ghI9bx.jpg' },
      ] },
    ] },

    { id: '200' , level: 1, label: '200.Work', ico:'fBlue', data: [ //  █ WORK █
      { id: '210' , level: 2, label: '01.Develoment', ico:'fBlue', data:[ // ▬ ▬
        { id: '211' , level: 3, label: '(Nothing for now)', data:[
        ] },
      ] },
      { id: '220' , level: 2, label: '02.Project Managment', ico:'fBlue', data:[ // ▬ ▬
        { id: '221' , level: 3, label: '(Nothing for now)' },
      ] },
      { id: '230' , level: 2, label: '03.Product Design', ico:'fBlue', data:[ // ▬ ▬
      ] },
      { id: '240' , level: 2, label: '04.Content Managment', ico:'fBlue', data:[ // ▬ ▬
      ] },
      { id: '250' , level: 2, label: '05.Data Analysis', ico:'fBlue', data:[ // ▬ ▬
      ] },
      { id: '260' , level: 2, label: '06.Editing', ico:'fBlue', data:[ // ▬ ▬
      ] },
      { id: '270' , level: 2, label: '07.Marketing', ico:'fBlue', data:[ // ▬ ▬
      ] },
      { id: '280' , level: 2, label: '08.Logistics', ico:'fBlue', data:[ // ▬ ▬
      ] },
      { id: '290' , level: 2, label: '09.Education', ico:'fBlue', data:[ // ▬ ▬
      ] },
      { level: 2, label: '10.Financial Services', ico:'fBlue', data:[ // ▬ ▬
      ] },
      { level: 2, label: '11.Legal Services', ico:'fBlue', data:[ // ▬ ▬
      ] },

    ] },

    { id: '300' , level: 1, label: '300.Projects', ico:'fRed', data: [ //  █ PROJECTS █

    ] },

    { id: '400' , level: 1, label: '400.Academic', ico:'fYellow', data: [ //  █ ACADEMIC █
      { id: '410' , level: 2, label: '01.Lenguage', ico:'fYellow', data: [
        {id: '411' , level: 3, label: 'Grammar'},
      ] },

      { id: '420' , level: 2, label: '02.ForeignLenguage', ico:'fYellow', data: [
        {id: '421' , level: 3, label: 'Spanish', data: [
          { id: '421_01' , level: 4, label: 'Gramatica'},
        ] },
      ] },
      { id: '430' , level: 2, label: '03.Graphic Design', ico:'fYellow', data: [
        { id : '431' , level: 3, label: '01.Foundations' },
        { id : '433' , level: 3, label: '02.Concept' },
        { id : '432' , level: 3, label: '03.Branding' },
        { id : '434' , level: 3, label: '04.Graphic Editors' },
        { id : '435' , level: 3, label: '05.User Experience' },
        { id : '436' , level: 3, label: '06.Final Project' },
        { id : '437' , level: 3, label: '90.Resources' },
        { id : '438' , level: 3, label: '98.Review' },

      ] },
      { id: '440' , level: 2, label: '04.Development', ico:'fYellow', data: [
        {id: '441' , level: 3, label: 'Frontend'},
        {id: '442' , level: 3, label: 'Backend'},
        {id: '443' , level: 3, label: 'Data Science'},
        {id: '444' , level: 3, label: 'Machine Learning'},
        {id: '445' , level: 3, label: 'Mobile Development'},
      ] },
      { id: '450' , level: 2, label: '90.Resources', ico:'fBrown', data: [ 
        { id: '451' , level: 3, label: 'RSR_8Grd_schoolSchedule.pdf', ico:'pdf'},
      ] },
      { id: '460' , level: 2, label: '97.Undefined', ico:'fBrown' },
      { id: '470' , level: 2, label: '98.Review', ico:'fBrown', data: [ 
        { id: '471' , level: 3, label: 'GBH3-ipWEAA5lsf.jpg', ico:'jpg'},
        { id: '462' , level: 3, label: 'IMG-20220217-WA0006.jpg', ico:'jpg'},
        { id: '463' , level: 3, label: 'IMG-20220217-WA0007.jpg', ico:'jpg'},
        { id: '464' , level: 3, label: 'IMG-20220217-WA0008.jpg', ico:'jpg'},
        { id: '465' , level: 3, label: 'math-presentation.pdf', ico:'pdf'},
        { id: '466' , level: 3, label: 'MrSmith-test.zip', ico:'zip'},
      ] },
    ] },

    { id: '500' , level: 1, label: '500.Hobbies', ico:'fOrange', data: [ //  █ HOBBIES █
      { id: '510' , level: 2, label: '01.Games', ico:'fOrange'},
      { id: '520' , level: 2, label: '02.Art', ico:'fOrange'},
      { id: '530' , level: 2, label: '03.Podcast', ico:'fOrange'},
      { id: '540' , level: 2, label: '04.Music', ico:'fOrange'},
      { id: '550' , level: 2, label: '05.Recipes', ico:'fOrange'},
      { id: '560' , level: 2, label: '90.Resources', ico:'fBrown', },
    ] },

    { id: '600' , level: 1, label: '900.Resources', ico:'fBrown', data: [ //  █ RESOURCES █
      { id: '610' , level: 2, label: 'test', ico:'fBrown'}, 
    ] },

    { id: '700' , level: 1, label: '998.Review', ico:'fBrown', data: [ //  █ REVIEW █
      { id: '710' , level: 2, label: 'test', ico:'fBrown'}, 
    ] },

    { id: '800' , level: 1, label: '999.Settings', ico:'fBrown', data: [ //  █ SETTINGS █
      { id: '810' , level: 2, label: '01.Wallpapers', ico:'fBrown'},
      { id: '820' , level: 2, label: '02.Icons', ico:'fBrown'},
    ] }
  ]
};

export default levelsData;