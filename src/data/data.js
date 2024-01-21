const levelsData = {
  alldata: [
    { id: '1_00' , level: 1, label: '100.Personal', ico:'fEmerald', data: [ //  █ PERSONAL █
      { id: '1_01' , level: 2, ico:'fEmerald', label: '01.My Documents', data: [ // ▬ NAME ▬
        { id: '1_01_01' , level: 3, ico:'fEmerald', label: '01.Identidity Documents', data: [
          { level: 4, ico:'pdf', label: 'Bird_Certificate.pdf'},
          { level: 4, ico:'pdf', label: 'ID Card.pdf'},
          { level: 4, ico:'pdf', label: 'Social_Segurity_Card.pdf'},
          { level: 4, ico:'pdf', label: 'drivers license.pdf'},
          { level: 4, ico:'pdf', label: 'Passport.pdf'},
          { level: 4, ico:'jpg', label: 'yourPhoto.jpg'},
        ] },
        { id: '1_01_02' , level: 3, ico:'fEmerald', label: '02.Health', data: [
          { label: ' This folder is empty' }
        ] },
        { id: '1_01_03' , level: 3, ico:'fEmerald', label: '03.Education', data: [
          { level: 4, ico:'pdf', label: 'CRT_HighSchoolDiploma.pdf' },
          { level: 4, ico:'pdf', label: 'CRT_testing_largadocumentNamelargoLarge.pdf' },
        ] },
        { id: '1_01_04' , level: 3, ico:'fEmerald', label: '04.Finance', data: [
          { label: ' This folder is empty' }
        ] },
        { id: '1_01_05' , level: 3, ico:'fEmerald', label: '05.Legals', data: [
          { label: ' This folder is empty' }
        ] },
        { id: '1_01_06' , level: 3, ico:'fBrown', label: '98.Review', data: [
          { label: ' This folder is empty' }
        ] }
      ] },
      { id: '1_02' , level: 2, ico:'fEmerald', label: '02.Home Documents', data: [ // ▬ FAMILY ▬
        { id: '1_02_01' , level: 3, ico:'fEmerald', label: '01.Property Docs', data: [ 
          { level: 4, ico:'pdf', label: 'DOC_propertyTitle.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_purchaseAgreement.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_possessionAgreement.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_certificateOfTitle.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_leaseAgreement.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_MortgageAgreement.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_MortgageInsurancePolicy.pdf'},
        ] },
        { id: '1_02_02' , level: 3, ico:'fEmerald', label: '02.Maintenance', data: [ 
          { level: 4, ico:'fEmerald', label: 'Bills Records'},
          { level: 4, ico:'pdf', label: 'DOC_UtilityBill.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_InternetContract.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_ElectricityContract.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_GarbageCollectionServiceContract.pdf'},
        ] },
        { id: '1_02_03' , level: 3, ico:'fEmerald', label: '03.Insurance Policies', data: [ 
          { level: 4, ico:'pdf', label: 'DOC_HomeInsurancePolicy.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_LifeInsurancePolicy.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_CarPolicy.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_CarWarranty.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_Heritage.pdf'},
        ] },
        { id: '1_02_04' , level: 3, ico:'fEmerald', label: '04.Taxes Records', data: [ 
          { level: 4, ico:'fEmerald', label: '2021'},
          { level: 4, ico:'fEmerald', label: '2022'},
          { level: 4, ico:'fEmerald', label: '2023'},
          { level: 4, ico:'fEmerald', label: '2024'},
          { level: 4, ico:'pdf', label: 'DOC_IcomeTaxReturns.pdf'},
        ] },
        { id: '1_02_05' , level: 3, ico:'fEmerald', label: '05.Equipments', data: [ 
          { level: 4, ico:'pdf', label: 'DOC_MicrowaveWarranty.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_FridgeWarranty.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_VacumInstructions.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_CelphoneWarranty.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_PS4Warranty.pdf'},
        ] },
        { id: '1_02_06' , level: 3, ico:'fEmerald', label: '06.Makeover Plan', data: [ 
          { level: 4, ico:'docx', label: 'DOC_renovationWhislist.docx'},
          { level: 4, ico:'pdf', label: 'DOC_costEstimateWood.pdf'},
          { level: 4, ico:'pdf', label: 'DOC_buildingPlans.pdf'},
          { level: 4, ico:'jpg', label: 'reference1.jpg'},
          { level: 4, ico:'jpg', label: 'reference2.jpg'},
        ] },
        { id: '1_02_07' , level: 3, ico:'fBrown', label: '98.Review', data: [
          
        ]}
      ] },
      { id: '1_03' , level: 2, ico:'fEmerald', label: '03.Bussiness', data: [ // ▬ BUSINESS ▬
        { label: ' This folder is empty' }
      ] },
      { id: '1_04' , level: 2, ico:'fEmerald', label: '04.Finance', data: [ // ▬ 97 ▬
        { label: ' This folder is empty' }
      ] },
      { id: '1_05' , level: 2, ico:'fEmerald', label: '04.Memories', data: [ // ▬ MEMORIES ▬
        { id: '1_05_01' , level: 3, ico:'fEmerald', label: '01.Family', data: [
          { label: ' This folder is empty' }
        ] },
        { id: '1_05_02' , level: 3, ico:'fEmerald', label: '02.Friends', data: [
          { label: ' This folder is empty' }
        ] },
        { id: '1_05_03' , level: 3, ico:'fEmerald', label: '03.Work Meets', data: [
          { label: ' This folder is empty' }
        ] }
      ] },
      { id: '1_040' , level: 2, ico:'fBrown', label: '97.Undefined', data: [ // ▬ 97 ▬
        { level: 3, ico:'jpg', label: 'PHO_Lois_middleSchoolGraduation.jpg' }
      ] },
      { id: '1_050' , level: 2, ico:'fBrown', label: '98.Review', data: [ // ▬ 98 ▬
        { level: 3, ico:'pdf', label: 'Divorce Decree.pdf' },
        { level: 3, ico:'jpg', label: '0fT56ghI9bx.jpg' },
      ] },
    ] },

    { id: '2_00' , level: 1, label: '200.Work', ico:'fBlue', data: [ //  █ WORK █
      { id: '2_01' , level: 2, label: '01.Develoment', ico:'fBlue', data:[ // ▬ ▬
        { level: 3, label: '(Nothing for now - Dev)', data:[
        ] },
      ] },
      { id: '2_02' , level: 2, label: '02.Project Managment', ico:'fBlue', data:[ // ▬ ▬
        { level: 3, label: '(Nothing for now - PM)' },
      ] },
      { id: '2_03' , level: 2, label: '03.Product Design', ico:'fBlue', data:[ // ▬ ▬
        { label: ' This folder is empty' }
      ] },
      { id: '2_04' , level: 2, label: '04.Content Managment', ico:'fBlue', data:[ // ▬ ▬
        { label: ' This folder is empty' }
      ] },
      { id: '2_05' , level: 2, label: '05.Data Analysis', ico:'fBlue', data:[ // ▬ ▬
        { label: ' This folder is empty' }
      ] },
      { id: '2_06' , level: 2, label: '06.Editing', ico:'fBlue', data:[ // ▬ ▬
        { label: ' This folder is empty' }
      ] },
      { id: '2_07' , level: 2, label: '07.Marketing', ico:'fBlue', data:[ // ▬ ▬
        { label: ' This folder is empty' }
      ] },
      { id: '2_08' , level: 2, label: '08.Logistics', ico:'fBlue', data:[ // ▬ ▬
        { label: ' This folder is empty' }
      ] },
      { id: '2_09' , level: 2, label: '09.Education', ico:'fBlue', data:[ // ▬ ▬
        { label: ' This folder is empty' }
      ] },
      { id: '2_10' , level: 2, label: '10.Financial Services', ico:'fBlue', data:[ // ▬ ▬
        { level: 3, label: '(Nothing for now - FS)' }
      ] },
      { id: '2_11' , level: 2, label: '11.Legal Services', ico:'fBlue', data:[ // ▬ ▬
        { label: ' This folder is empty' }
      ] },

    ] },

    { id: '3_00' , level: 1, label: '300.Projects', ico:'fRed', data: [ //  █ PROJECTS █
    { label: ' This folder is empty' }
    ] },

    { id: '4_00' , level: 1, label: '400.Academic', ico:'fYellow', data: [ //  █ ACADEMIC █
      { id: '4_010' , level: 2, label: '01.Lenguage', ico:'fYellow', data: [
        {id: '4_01_01' , level: 3, label: 'Grammar'},
      ] },

      { id: '4_020' , level: 2, label: '02.ForeignLenguage', ico:'fYellow', data: [
        {id: '4_02_01' , level: 3, label: 'Spanish', data: [
          { id: '421_01' , level: 4, label: 'Gramatica'},
        ] },
      ] },
      { id: '4_03' , level: 2, label: '03.Graphic Design', ico:'fYellow', data: [
        { id : '4_03_01' , level: 3, label: '01.Foundations' },
        { id : '4_03_03' , level: 3, label: '02.Concept' },
        { id : '4_03_02' , level: 3, label: '03.Branding' },
        { id : '4_03_04' , level: 3, label: '04.Graphic Editors' },
        { id : '4_03_05' , level: 3, label: '05.User Experience' },
        { id : '4_03_06' , level: 3, label: '06.Final Project' },
        { id : '4_03_07' , level: 3, label: '90.Resources' },
        { id : '4_03_08' , level: 3, label: '98.Review' },

      ] },
      { id: '4_04' , level: 2, label: '04.Development', ico:'fYellow', data: [
        {id: '4_04_01' , level: 3, label: 'Frontend'},
        {id: '4_04_02' , level: 3, label: 'Backend'},
        {id: '4_04_03' , level: 3, label: 'Data Science'},
        {id: '4_04_04' , level: 3, label: 'Machine Learning'},
        {id: '4_04_05' , level: 3, label: 'Mobile Development'},
      ] },
      { id: '4_05' , level: 2, label: '90.Resources', ico:'fBrown', data: [ 
        { level: 3, label: 'RSR_8Grd_schoolSchedule.pdf', ico:'pdf'},
      ] },
      { id: '4_06' , level: 2, label: '97.Undefined', ico:'fBrown', data: [
        { label: ' This folder is empty' }
      ] },
      { id: '4_07' , level: 2, label: '98.Review', ico:'fBrown', data: [ 
        { level: 3, label: 'GBH3-ipWEAA5lsf.jpg', ico:'jpg'},
        { level: 3, label: 'IMG-20220217-WA0006.jpg', ico:'jpg'},
        { level: 3, label: 'IMG-20220217-WA0007.jpg', ico:'jpg'},
        { level: 3, label: 'IMG-20220217-WA0008.jpg', ico:'jpg'},
        { level: 3, label: 'math-presentation.pdf', ico:'pdf'},
        { level: 3, label: 'MrSmith-test.zip', ico:'zip'},
      ] },
    ] },

    { id: '5_00' , level: 1, label: '500.Hobbies', ico:'fOrange', data: [ //  █ HOBBIES █
      { id: '5_01' , level: 2, label: '01.Games', ico:'fOrange', data : [
        { label: ' This folder is empty' }
      ] },
      { id: '5_02' , level: 2, label: '02.Art', ico:'fOrange', data : [
        { label: ' This folder is empty' }
      ] },
      { id: '5_03' , level: 2, label: '03.Podcast', ico:'fOrange', data : [
        { label: ' This folder is empty' }
      ] },
      { id: '5_04' , level: 2, label: '04.Music', ico:'fOrange', data : [
        { label: ' This folder is empty' }
      ] },
      { id: '5_05' , level: 2, label: '05.Recipes', ico:'fOrange', data : [
        { label: ' This folder is empty' }
      ] },
      { id: '5_06' , level: 2, label: '90.Resources', ico:'fBrown', data : [
        { label: ' This folder is empty' }
      ] },
    ] },

    { id: '6_00' , level: 1, label: '900.Resources', ico:'fBrown', data: [ //  █ RESOURCES █
      { id: '6_01' , level: 2, label: 'test', ico:'fBrown'}, 
    ] },

    { id: '7_00' , level: 1, label: '998.Review', ico:'fBrown', data: [ //  █ REVIEW █
      { id: '7_01' , level: 2, label: 'test', ico:'fBrown'}, 
    ] },

    { id: '8_00' , level: 1, label: '999.Settings', ico:'fBrown', data: [ //  █ SETTINGS █
      { id: '8_01' , level: 2, label: '01.Wallpapers', ico:'fBrown'},
      { id: '8_02' , level: 2, label: '02.Icons', ico:'fBrown'},
    ] }
  ]
};

export default levelsData;