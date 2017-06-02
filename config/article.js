export default () => ({ // eslint-disable-line

  // link file UUID
  id: '$uuid',

  // canonical URL of the published page
  // "$url" get filled in by the ./configure script
  url: '$url',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Goldman dominates the league table that matters: deal fees',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Bulge bracket banks have lots of ground to make up but boutiques stand in their way',

  topic: {
    name: 'Mergers & Acquisitions',
    url: '/foo',
  },

  // relatedArticle: {
  //   text: '',
  //   url: '',
  // },

  mainImage: {
    title: '',
    description: '',
    credit: '',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fig.ft.com%2Fstatic%2Fwall-street-fees%2Fwall-street-fees-MASTER.jpg?source=ig&format=png',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Sujeet Indap', url: '/foo/bar' },
    // { name: 'Author Two' },
  ],

  // Appears in the HTML <title>
  title: 'Goldman dominates the league table that matters: deal fees',

  // meta data
  description: 'Bulge bracket banks have lots of ground to make up but boutiques stand in their way',

  /*
  TODO: Select Twitter card type -
        "summary" or "summary_large_image"

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialDescription: '',
  // twitterCreator: '@author's_account', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  // tweetText: '',
  // twitterRelatedAccounts: ['authors_account_here', 'ftdata'], // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the "General social" options above

  //TWITTER METADATA (for Twitter cards)
  twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fig.ft.com%2Fsites%2Fwall-street-fees%2Fimages%2Fwall-street-fees-SOCIAL.jpg?source=ig&format=png',
  twitterHeadline: 'Where are Wall Street\'s biggest rainmakers?',
  twitterDescription: 'An FT analysis of deal fees among elite deal advisors',

  //FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fig.ft.com%2Fsites%2Fwall-street-fees%2Fimages%2Fwall-street-fees-SOCIAL.jpg?source=ig&format=png',
  facebookHeadline: 'Where are Wall Street\'s biggest rainmakers?',
  facebookDescription: 'An FT analysis of deal fees among elite deal advisors',

  //ADVERTISING
  ads: {
    // ad unit hierarchy makes ads more granular. Start with ft.com and /companies /markets /world as appropriate to your story
    gptAdunit: 'ft.com/companies/european',
    // granular targeting is optional and will be specified by the ads team
    dftTargeting: '',
  },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to "IG"
    however another value may be needed
    */
    // product: '',
  },
});
