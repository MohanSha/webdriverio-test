describe('westwingnow home page', () => {
    it('searches for product and view results', () => {
        browser.url('https://www.westwingnow.de/')
        $('[id="onetrust-accept-btn-handler"]').click()
        $('[data-testid="search-input"]').setValue('möbel')
        browser.keys("\uE007"); 
        expect($('[data-testid="generic-product"]')).toBeDisplayed()
    })

    it('add product to wishlist without logging in', () => {
        $('[data-testid="wishlist-icon"]').click()
        expect($('[data-testid="reg__mode"]')).toBeDisplayed()
    })

    it('login & check product added to wishlist & delete from wishlist', () => {
        $('[data-testid="login_reg_switch_btn"]').click()
        $('[data-testid="long-register-email-field"]').setValue('mohansha@outlook.com')
        $('[data-testid="long-register-password-field"]').setValue('FsumZ@W!7TspNA')
        $('[data-testid="login_reg_submit_btn"]').click()
        //expect($('/html/body/div[1]/div/div[1]/div[7]/div/div/main/div/div[2]/div[1]/a/div/div[2]/div[2]/div/svg *data-filled="true"'))
        const wishlistCounter=$('[data-testid="wishlist-counter"]').getText()
        const expectedWishlistCounter= 1
        expect(wishlistCounter == expectedWishlistCounter)
        $('[data-testid="wishlist-bubble"]').click()
        $('.qaBlockListProduct__delete').click()

    })
})