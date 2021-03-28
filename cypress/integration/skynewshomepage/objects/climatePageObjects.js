export default class climatePageObjects{


       /**
      *
      * Page Elements
      *
      * */


 get focusClimateArticle(){
       return 'body > div:nth-child(6) > div > div > div:nth-child(6) > div > div > h3 > a > span'
 }

 get climateText(){
       return 'body > div.section-wrap > div.sdc-article-header.sdc-article-header--story-article > div > div.sdc-article-header__main > div > h1 > span'
 }
  
       

}