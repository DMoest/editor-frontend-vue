/**
 * Module Imports.
 */


/**
 * E2E Testing using Cypress
 */
describe('TestSuit: E2E Testing the Text Editor.', () => {

    /**
     * Build up
     */
    beforeEach(() => {
        cy.visit('http://localhost:8081/text-editor')
    })

    // /**
    //  * Tear down
    //  */
    // afterEach(() => {
    //
    // })


    /**
     * Tests for elements existance on editor page.
     */
    it('TestCase: Navigate to text editor. ', () => {
        cy.url().should('include', '/text-editor')

        cy.get('#documentEditorNavigation')
            .should('be.visible')

        cy.contains('nav', 'Save')
        cy.contains('button', 'Create New Document')

        cy.get('#formAndMenuWrapper').should('be.visible')
        cy.get('#createDocumentForm').should('be.visible')
        cy.get('#documentMenu').should('be.visible')
    })


    /**
     * Check for table of documents and its child elements existense.
     */
    it.only('TestCase: Test the document menu and its child elements for existence. ', () => {
        cy.get('#documentMenu')
            .children()
            .should('be.visible')
            .and('have.attr', 'class')

        cy.get('#documentsTable')
            .should('be.visible')

        cy.get('#documentsTable')
            .children()
            .should('be.visible')
            .and('be', 'thead')
            .and('be', 'tbody')

        cy.get('#documentsTableHeader')
            .children()
            .should('be.visible')
            .and('be', 'tr')

        cy.get('#documentsTableHeader')
            .should('be.visible')
            .and('contain', 'author')
            .and('contain', 'title')
            .and('contain', 'category')

        cy.get('#documentTableBody')
            .should('be.visible')

        cy.get('#documentTableBody')
            .children()
            .should('be.visible')
            .and('be', 'tr')
    })


    /**
     * Test case for creating a new document.
     */
    it('TestCase: Check if the user can fill out the create new document form. ', () => {
        const testAuthor = 'Testing Author Input';
        const testTitle = 'Testing Author Input';
        const testCategory = 'Testing Author Input';

        cy.get('#author')
            .type(testAuthor)
            .should('have.value', testAuthor)

        cy.get('#title')
            .type(testTitle)
            .should('have.value', testTitle)

        cy.get('#category')
            .type(testCategory)
            .should('have.value', testCategory)
    })


    /**
     * Navigates to text editor and tests to open a document.
     */
    context('POST request from created document form to create new document. ', () => {
        it('TestCase: Can the user create a new document. ', () => {
            const testAuthor = 'Testing Author Input';
            const testTitle = 'Testing Title Input';
            const testCategory = 'Testing Category Input';


            /**
             * Startup mock server.
             * Specify expected route for request calls and expected request body.
             */
            cy.server()
            cy.route('POST', '/', {
                author: testAuthor,
                title: testTitle,
                category: testCategory
            })

            cy.get('#author')
                .type(testAuthor)
                .should('have.value', testAuthor)

            cy.get('#title')
                .type(testTitle)
                .should('have.value', testTitle)

            cy.get('#category')
                .type(testCategory)
                .should('have.value', testCategory)

            // cy.get('#documentMenu table thead tr').contain('author')
            // cy.get('#documentMenu table tbody tr').contain('title')
            // cy.get('#documentMenu table tbody tr').contain('category')


            // cy.get('#createDocumentButton')
            //     .contains('Create New Document')
            //     .click()
        })
    })
})
