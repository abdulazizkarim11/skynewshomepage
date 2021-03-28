export default class homePageObjects {


    /**
      *
      * Page Elements
      *
      * */
  
  get climateArticle(){
    return 'body > div:nth-child(6) > div > div > div:nth-child(3) > div > div > h3 > a > span'
  }

  get acceptCookies(){
      return '#sp_message_iframe_368417'
  }

  get menuCategory(){
      return '.sdc-site-header__menu'
  }


  get articleOnHomePage(){
      return '#load-more-list > div > div > div > div:nth-child(2) > div > div > h3 > a > span'
  }
  
  }