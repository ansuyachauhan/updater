
export const availableOffersgql = ()=>{
    cy.intercept('POST', '/graphql', (req) => {
    if (req.body.hasOwnProperty('query') && req.body.query.includes('availableOffers')) {
      req.alias = 'gqlAvailableOffers'
    }
  })
}
export default availableOffersgql;