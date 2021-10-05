/**
 * Module Imports.
 */


/**
 * E2E Testing using Cypress
 */
describe('TestSuit: Itegration & E2E Testing for the Text Editor page. ', () => {

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
    context('TestCase: Tests if user is at the correct URL and if elements exists as expected. ', () => {
        it('Test: Test if user is at expected URL. ', () => {
            cy.url().should('include', '/text-editor')
        })

        it('Test: Test if editor navigation exists. ', () => {
            cy.get('#documentEditorNavigation')
                .should('be.visible')
                .children()
                .should('be', 'div')
                .children()
                .should('be', 'button')
        })

        it('Test: Test if wrapper for documents form and menu exists. ', () => {
            cy.get('#formAndMenuWrapper')
                .should('be.visible')

            cy.contains('nav', 'Save')
            cy.contains('button', 'Create New Document')
        })

        it('Test: Test if form create new document exists. ', () => {
            cy.get('#createDocumentForm')
                .should('be.visible')
        })

        it('Test: Test if editor TinyMCE exists. ', () => {
            cy.get('#documentMenu')
                .should('be.visible')
        })
    })


    /**
     *
     */
    context('TestCase: Test the Documents Menu. ', () => {

        /**
         * Test for table of documents and its child elements existense.
         */
        it('Test: Test the document menu and its child elements for existence. ', () => {
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
         * Test if the user can open a document.
         */
        it('Test: Test to open a document from the documents menu. ', () => {
            cy.get('#documentsTable')
                .children('tbody')
                .children('tr')
                .contains('Mumintrollet')
                .click()
                .iframe()
                .contains('body')
                .should('not.be.visible')
                .and('not.be.empty')

            /**
             * TinyMCE editor element is an iframe and somewhat tricky to test.
             */
            cy.frameLoaded('.tox-edit-area__iframe').should('be.visible')

            /**
             * Due to tinyMCE iframe-structure, child elements containing the text are hidden and there for needs to be tested like so.
             */
            cy.iframe()
                .contains('html')
                .should('not.be.visible')

            cy.iframe()
                .contains('body')
                .should('not.be.visible')
        })
    })



    /**
     * Navigates to text editor and tests to open a document.
     */
    context('Test the Created Document Form. ', () => {

        /**
         * Test for form to create new documents and its child elements existense.
         */
        it('Test: Test the create new document form and its children for existence. ', () => {
            cy.get('#createDocumentForm')
                .should('be.visible')

            cy.get('#createDocumentForm')
                .children()
                .should('be', 'input', '#author')
                .should('be', 'button')
        })


        /**
         * Test the create new documents form inputs with text input and validate that text to expected.
         */
        it('Test: Test filling in the create new document form inputs and validate to expected strings. ', () => {
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


        it('Test: Can the user create a new document. ', () => {
            const testAuthor = 'Testing Author Input';
            const testTitle = 'Testing Title Input';
            const testCategory = 'Testing Category Input';

            /**
             * Startup mock server.
             * Specify expected route for request calls and expected request body.
             */
            cy.server()
            cy.route('POST', 'https://editor-backend-express.azurewebsites.net/document', {
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
                .type('{enter}')
        })
    })
})
