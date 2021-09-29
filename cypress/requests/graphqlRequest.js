
export const availableOffersgql = ()=>{
    cy.intercept('POST', 'https://api.staging.updater.com/graphql', (req) => {
    if (req.body.hasOwnProperty('query') && req.body.query.includes('availableOffers')) {
      req.alias = 'gqlAvailableOffers'
    }
  })
}
export default availableOffersgql;