import 'preact'

declare global {
  namespace JSX {
    interface HTMLAttributes {
    /**
     * Add Bulma's `.delete` class to the element.
     */
    delete?: boolean
    /**
     * Add Bulma's `.modal-close` class to the element.
     */
    'modal-close'?: boolean
    /**
     * Add Bulma's `.is-unselectable` class to the element.
     */
    'is-unselectable'?: boolean
    /**
     * Add Bulma's `.button` class to the element.
     */
    button?: boolean
    /**
     * Add Bulma's `.file` class to the element.
     */
    file?: boolean
    /**
     * Add Bulma's `.breadcrumb` class to the element.
     */
    breadcrumb?: boolean
    /**
     * Add Bulma's `.pagination-previous` class to the element.
     */
    'pagination-previous'?: boolean
    /**
     * Add Bulma's `.pagination-next` class to the element.
     */
    'pagination-next'?: boolean
    /**
     * Add Bulma's `.pagination-link` class to the element.
     */
    'pagination-link'?: boolean
    /**
     * Add Bulma's `.pagination-ellipsis` class to the element.
     */
    'pagination-ellipsis'?: boolean
    /**
     * Add Bulma's `.tabs` class to the element.
     */
    tabs?: boolean
    /**
     * Add Bulma's `.select` class to the element.
     */
    select?: boolean
    /**
     * Add Bulma's `.is-multiple` class to the element.
     */
    'is-multiple'?: boolean
    /**
     * Add Bulma's `.is-loading` class to the element.
     */
    'is-loading'?: boolean
    /**
     * Add Bulma's `.navbar-link` class to the element.
     */
    'navbar-link'?: boolean
    /**
     * Add Bulma's `.is-arrowless` class to the element.
     */
    'is-arrowless'?: boolean
    /**
     * Add Bulma's `.box` class to the element.
     */
    box?: boolean
    /**
     * Add Bulma's `.content` class to the element.
     */
    content?: boolean
    /**
     * Add Bulma's `.notification` class to the element.
     */
    notification?: boolean
    /**
     * Add Bulma's `.progress` class to the element.
     */
    progress?: boolean
    /**
     * Add Bulma's `.table` class to the element.
     */
    table?: boolean
    /**
     * Add Bulma's `.table-container` class to the element.
     */
    'table-container'?: boolean
    /**
     * Add Bulma's `.title` class to the element.
     */
    title?: boolean
    /**
     * Add Bulma's `.subtitle` class to the element.
     */
    subtitle?: boolean
    /**
     * Add Bulma's `.block` class to the element.
     */
    block?: boolean
    /**
     * Add Bulma's `.highlight` class to the element.
     */
    highlight?: boolean
    /**
     * Add Bulma's `.level` class to the element.
     */
    level?: boolean
    /**
     * Add Bulma's `.list` class to the element.
     */
    list?: boolean
    /**
     * Add Bulma's `.message` class to the element.
     */
    message?: boolean
    /**
     * Add Bulma's `.pagination` class to the element.
     */
    pagination?: boolean
    /**
     * Add Bulma's `.is-small` class to the element.
     */
    'is-small'?: boolean
    /**
     * Add Bulma's `.is-medium` class to the element.
     */
    'is-medium'?: boolean
    /**
     * Add Bulma's `.is-large` class to the element.
     */
    'is-large'?: boolean
    /**
     * Add Bulma's `.loader` class to the element.
     */
    loader?: boolean
    /**
     * Add Bulma's `.control` class to the element.
     */
    control?: boolean
    /**
     * Add Bulma's `.is-overlay` class to the element.
     */
    'is-overlay'?: boolean
    /**
     * Add Bulma's `.image` class to the element.
     */
    image?: boolean
    /**
     * Add Bulma's `.is-square` class to the element.
     */
    'is-square'?: boolean
    /**
     * Add Bulma's `.has-ratio` class to the element.
     */
    'has-ratio'?: boolean
    /**
     * Add Bulma's `.is-1by1` class to the element.
     */
    'is-1by1'?: boolean
    /**
     * Add Bulma's `.is-5by4` class to the element.
     */
    'is-5by4'?: boolean
    /**
     * Add Bulma's `.is-4by3` class to the element.
     */
    'is-4by3'?: boolean
    /**
     * Add Bulma's `.is-3by2` class to the element.
     */
    'is-3by2'?: boolean
    /**
     * Add Bulma's `.is-5by3` class to the element.
     */
    'is-5by3'?: boolean
    /**
     * Add Bulma's `.is-16by9` class to the element.
     */
    'is-16by9'?: boolean
    /**
     * Add Bulma's `.is-2by1` class to the element.
     */
    'is-2by1'?: boolean
    /**
     * Add Bulma's `.is-3by1` class to the element.
     */
    'is-3by1'?: boolean
    /**
     * Add Bulma's `.is-4by5` class to the element.
     */
    'is-4by5'?: boolean
    /**
     * Add Bulma's `.is-3by4` class to the element.
     */
    'is-3by4'?: boolean
    /**
     * Add Bulma's `.is-2by3` class to the element.
     */
    'is-2by3'?: boolean
    /**
     * Add Bulma's `.is-3by5` class to the element.
     */
    'is-3by5'?: boolean
    /**
     * Add Bulma's `.is-9by16` class to the element.
     */
    'is-9by16'?: boolean
    /**
     * Add Bulma's `.is-1by2` class to the element.
     */
    'is-1by2'?: boolean
    /**
     * Add Bulma's `.is-1by3` class to the element.
     */
    'is-1by3'?: boolean
    /**
     * Add Bulma's `.modal` class to the element.
     */
    modal?: boolean
    /**
     * Add Bulma's `.modal-background` class to the element.
     */
    'modal-background'?: boolean
    /**
     * Add Bulma's `.hero-video` class to the element.
     */
    'hero-video'?: boolean
    /**
     * Add Bulma's `.input` class to the element.
     */
    input?: boolean
    /**
     * Add Bulma's `.textarea` class to the element.
     */
    textarea?: boolean
    /**
     * Add Bulma's `.file-cta` class to the element.
     */
    'file-cta'?: boolean
    /**
     * Add Bulma's `.file-name` class to the element.
     */
    'file-name'?: boolean
    /**
     * Add Bulma's `.is-focused` class to the element.
     */
    'is-focused'?: boolean
    /**
     * Add Bulma's `.is-active` class to the element.
     */
    'is-active'?: boolean
    /**
     * Add Bulma's `.is-clearfix` class to the element.
     */
    'is-clearfix'?: boolean
    /**
     * Add Bulma's `.is-pulled-left` class to the element.
     */
    'is-pulled-left'?: boolean
    /**
     * Add Bulma's `.is-pulled-right` class to the element.
     */
    'is-pulled-right'?: boolean
    /**
     * Add Bulma's `.is-clipped` class to the element.
     */
    'is-clipped'?: boolean
    /**
     * Add Bulma's `.is-size-1` class to the element.
     */
    'is-size-1'?: boolean
    /**
     * Add Bulma's `.is-size-2` class to the element.
     */
    'is-size-2'?: boolean
    /**
     * Add Bulma's `.is-size-3` class to the element.
     */
    'is-size-3'?: boolean
    /**
     * Add Bulma's `.is-size-4` class to the element.
     */
    'is-size-4'?: boolean
    /**
     * Add Bulma's `.is-size-5` class to the element.
     */
    'is-size-5'?: boolean
    /**
     * Add Bulma's `.is-size-6` class to the element.
     */
    'is-size-6'?: boolean
    /**
     * Add Bulma's `.is-size-7` class to the element.
     */
    'is-size-7'?: boolean
    /**
     * Add Bulma's `.is-size-1-mobile` class to the element.
     */
    'is-size-1-mobile'?: boolean
    /**
     * Add Bulma's `.is-size-2-mobile` class to the element.
     */
    'is-size-2-mobile'?: boolean
    /**
     * Add Bulma's `.is-size-3-mobile` class to the element.
     */
    'is-size-3-mobile'?: boolean
    /**
     * Add Bulma's `.is-size-4-mobile` class to the element.
     */
    'is-size-4-mobile'?: boolean
    /**
     * Add Bulma's `.is-size-5-mobile` class to the element.
     */
    'is-size-5-mobile'?: boolean
    /**
     * Add Bulma's `.is-size-6-mobile` class to the element.
     */
    'is-size-6-mobile'?: boolean
    /**
     * Add Bulma's `.is-size-7-mobile` class to the element.
     */
    'is-size-7-mobile'?: boolean
    /**
     * Add Bulma's `.is-size-1-tablet` class to the element.
     */
    'is-size-1-tablet'?: boolean
    /**
     * Add Bulma's `.is-size-2-tablet` class to the element.
     */
    'is-size-2-tablet'?: boolean
    /**
     * Add Bulma's `.is-size-3-tablet` class to the element.
     */
    'is-size-3-tablet'?: boolean
    /**
     * Add Bulma's `.is-size-4-tablet` class to the element.
     */
    'is-size-4-tablet'?: boolean
    /**
     * Add Bulma's `.is-size-5-tablet` class to the element.
     */
    'is-size-5-tablet'?: boolean
    /**
     * Add Bulma's `.is-size-6-tablet` class to the element.
     */
    'is-size-6-tablet'?: boolean
    /**
     * Add Bulma's `.is-size-7-tablet` class to the element.
     */
    'is-size-7-tablet'?: boolean
    /**
     * Add Bulma's `.is-size-1-touch` class to the element.
     */
    'is-size-1-touch'?: boolean
    /**
     * Add Bulma's `.is-size-2-touch` class to the element.
     */
    'is-size-2-touch'?: boolean
    /**
     * Add Bulma's `.is-size-3-touch` class to the element.
     */
    'is-size-3-touch'?: boolean
    /**
     * Add Bulma's `.is-size-4-touch` class to the element.
     */
    'is-size-4-touch'?: boolean
    /**
     * Add Bulma's `.is-size-5-touch` class to the element.
     */
    'is-size-5-touch'?: boolean
    /**
     * Add Bulma's `.is-size-6-touch` class to the element.
     */
    'is-size-6-touch'?: boolean
    /**
     * Add Bulma's `.is-size-7-touch` class to the element.
     */
    'is-size-7-touch'?: boolean
    /**
     * Add Bulma's `.is-size-1-desktop` class to the element.
     */
    'is-size-1-desktop'?: boolean
    /**
     * Add Bulma's `.is-size-2-desktop` class to the element.
     */
    'is-size-2-desktop'?: boolean
    /**
     * Add Bulma's `.is-size-3-desktop` class to the element.
     */
    'is-size-3-desktop'?: boolean
    /**
     * Add Bulma's `.is-size-4-desktop` class to the element.
     */
    'is-size-4-desktop'?: boolean
    /**
     * Add Bulma's `.is-size-5-desktop` class to the element.
     */
    'is-size-5-desktop'?: boolean
    /**
     * Add Bulma's `.is-size-6-desktop` class to the element.
     */
    'is-size-6-desktop'?: boolean
    /**
     * Add Bulma's `.is-size-7-desktop` class to the element.
     */
    'is-size-7-desktop'?: boolean
    /**
     * Add Bulma's `.is-size-1-widescreen` class to the element.
     */
    'is-size-1-widescreen'?: boolean
    /**
     * Add Bulma's `.is-size-2-widescreen` class to the element.
     */
    'is-size-2-widescreen'?: boolean
    /**
     * Add Bulma's `.is-size-3-widescreen` class to the element.
     */
    'is-size-3-widescreen'?: boolean
    /**
     * Add Bulma's `.is-size-4-widescreen` class to the element.
     */
    'is-size-4-widescreen'?: boolean
    /**
     * Add Bulma's `.is-size-5-widescreen` class to the element.
     */
    'is-size-5-widescreen'?: boolean
    /**
     * Add Bulma's `.is-size-6-widescreen` class to the element.
     */
    'is-size-6-widescreen'?: boolean
    /**
     * Add Bulma's `.is-size-7-widescreen` class to the element.
     */
    'is-size-7-widescreen'?: boolean
    /**
     * Add Bulma's `.is-size-1-fullhd` class to the element.
     */
    'is-size-1-fullhd'?: boolean
    /**
     * Add Bulma's `.is-size-2-fullhd` class to the element.
     */
    'is-size-2-fullhd'?: boolean
    /**
     * Add Bulma's `.is-size-3-fullhd` class to the element.
     */
    'is-size-3-fullhd'?: boolean
    /**
     * Add Bulma's `.is-size-4-fullhd` class to the element.
     */
    'is-size-4-fullhd'?: boolean
    /**
     * Add Bulma's `.is-size-5-fullhd` class to the element.
     */
    'is-size-5-fullhd'?: boolean
    /**
     * Add Bulma's `.is-size-6-fullhd` class to the element.
     */
    'is-size-6-fullhd'?: boolean
    /**
     * Add Bulma's `.is-size-7-fullhd` class to the element.
     */
    'is-size-7-fullhd'?: boolean
    /**
     * Add Bulma's `.has-text-centered` class to the element.
     */
    'has-text-centered'?: boolean
    /**
     * Add Bulma's `.has-text-justified` class to the element.
     */
    'has-text-justified'?: boolean
    /**
     * Add Bulma's `.has-text-left` class to the element.
     */
    'has-text-left'?: boolean
    /**
     * Add Bulma's `.has-text-right` class to the element.
     */
    'has-text-right'?: boolean
    /**
     * Add Bulma's `.has-text-centered-mobile` class to the element.
     */
    'has-text-centered-mobile'?: boolean
    /**
     * Add Bulma's `.has-text-centered-tablet` class to the element.
     */
    'has-text-centered-tablet'?: boolean
    /**
     * Add Bulma's `.has-text-centered-tablet-only` class to the element.
     */
    'has-text-centered-tablet-only'?: boolean
    /**
     * Add Bulma's `.has-text-centered-touch` class to the element.
     */
    'has-text-centered-touch'?: boolean
    /**
     * Add Bulma's `.has-text-centered-desktop` class to the element.
     */
    'has-text-centered-desktop'?: boolean
    /**
     * Add Bulma's `.has-text-centered-desktop-only` class to the element.
     */
    'has-text-centered-desktop-only'?: boolean
    /**
     * Add Bulma's `.has-text-centered-widescreen` class to the element.
     */
    'has-text-centered-widescreen'?: boolean
    /**
     * Add Bulma's `.has-text-centered-widescreen-only` class to the element.
     */
    'has-text-centered-widescreen-only'?: boolean
    /**
     * Add Bulma's `.has-text-centered-fullhd` class to the element.
     */
    'has-text-centered-fullhd'?: boolean
    /**
     * Add Bulma's `.has-text-justified-mobile` class to the element.
     */
    'has-text-justified-mobile'?: boolean
    /**
     * Add Bulma's `.has-text-justified-tablet` class to the element.
     */
    'has-text-justified-tablet'?: boolean
    /**
     * Add Bulma's `.has-text-justified-tablet-only` class to the element.
     */
    'has-text-justified-tablet-only'?: boolean
    /**
     * Add Bulma's `.has-text-justified-touch` class to the element.
     */
    'has-text-justified-touch'?: boolean
    /**
     * Add Bulma's `.has-text-justified-desktop` class to the element.
     */
    'has-text-justified-desktop'?: boolean
    /**
     * Add Bulma's `.has-text-justified-desktop-only` class to the element.
     */
    'has-text-justified-desktop-only'?: boolean
    /**
     * Add Bulma's `.has-text-justified-widescreen` class to the element.
     */
    'has-text-justified-widescreen'?: boolean
    /**
     * Add Bulma's `.has-text-justified-widescreen-only` class to the element.
     */
    'has-text-justified-widescreen-only'?: boolean
    /**
     * Add Bulma's `.has-text-justified-fullhd` class to the element.
     */
    'has-text-justified-fullhd'?: boolean
    /**
     * Add Bulma's `.has-text-left-mobile` class to the element.
     */
    'has-text-left-mobile'?: boolean
    /**
     * Add Bulma's `.has-text-left-tablet` class to the element.
     */
    'has-text-left-tablet'?: boolean
    /**
     * Add Bulma's `.has-text-left-tablet-only` class to the element.
     */
    'has-text-left-tablet-only'?: boolean
    /**
     * Add Bulma's `.has-text-left-touch` class to the element.
     */
    'has-text-left-touch'?: boolean
    /**
     * Add Bulma's `.has-text-left-desktop` class to the element.
     */
    'has-text-left-desktop'?: boolean
    /**
     * Add Bulma's `.has-text-left-desktop-only` class to the element.
     */
    'has-text-left-desktop-only'?: boolean
    /**
     * Add Bulma's `.has-text-left-widescreen` class to the element.
     */
    'has-text-left-widescreen'?: boolean
    /**
     * Add Bulma's `.has-text-left-widescreen-only` class to the element.
     */
    'has-text-left-widescreen-only'?: boolean
    /**
     * Add Bulma's `.has-text-left-fullhd` class to the element.
     */
    'has-text-left-fullhd'?: boolean
    /**
     * Add Bulma's `.has-text-right-mobile` class to the element.
     */
    'has-text-right-mobile'?: boolean
    /**
     * Add Bulma's `.has-text-right-tablet` class to the element.
     */
    'has-text-right-tablet'?: boolean
    /**
     * Add Bulma's `.has-text-right-tablet-only` class to the element.
     */
    'has-text-right-tablet-only'?: boolean
    /**
     * Add Bulma's `.has-text-right-touch` class to the element.
     */
    'has-text-right-touch'?: boolean
    /**
     * Add Bulma's `.has-text-right-desktop` class to the element.
     */
    'has-text-right-desktop'?: boolean
    /**
     * Add Bulma's `.has-text-right-desktop-only` class to the element.
     */
    'has-text-right-desktop-only'?: boolean
    /**
     * Add Bulma's `.has-text-right-widescreen` class to the element.
     */
    'has-text-right-widescreen'?: boolean
    /**
     * Add Bulma's `.has-text-right-widescreen-only` class to the element.
     */
    'has-text-right-widescreen-only'?: boolean
    /**
     * Add Bulma's `.has-text-right-fullhd` class to the element.
     */
    'has-text-right-fullhd'?: boolean
    /**
     * Add Bulma's `.is-capitalized` class to the element.
     */
    'is-capitalized'?: boolean
    /**
     * Add Bulma's `.is-lowercase` class to the element.
     */
    'is-lowercase'?: boolean
    /**
     * Add Bulma's `.is-uppercase` class to the element.
     */
    'is-uppercase'?: boolean
    /**
     * Add Bulma's `.is-italic` class to the element.
     */
    'is-italic'?: boolean
    /**
     * Add Bulma's `.has-text-white` class to the element.
     */
    'has-text-white'?: boolean
    /**
     * Add Bulma's `.has-background-white` class to the element.
     */
    'has-background-white'?: boolean
    /**
     * Add Bulma's `.has-text-black` class to the element.
     */
    'has-text-black'?: boolean
    /**
     * Add Bulma's `.has-background-black` class to the element.
     */
    'has-background-black'?: boolean
    /**
     * Add Bulma's `.has-text-light` class to the element.
     */
    'has-text-light'?: boolean
    /**
     * Add Bulma's `.has-background-light` class to the element.
     */
    'has-background-light'?: boolean
    /**
     * Add Bulma's `.has-text-dark` class to the element.
     */
    'has-text-dark'?: boolean
    /**
     * Add Bulma's `.has-background-dark` class to the element.
     */
    'has-background-dark'?: boolean
    /**
     * Add Bulma's `.has-text-primary` class to the element.
     */
    'has-text-primary'?: boolean
    /**
     * Add Bulma's `.has-background-primary` class to the element.
     */
    'has-background-primary'?: boolean
    /**
     * Add Bulma's `.has-text-link` class to the element.
     */
    'has-text-link'?: boolean
    /**
     * Add Bulma's `.has-background-link` class to the element.
     */
    'has-background-link'?: boolean
    /**
     * Add Bulma's `.has-text-info` class to the element.
     */
    'has-text-info'?: boolean
    /**
     * Add Bulma's `.has-background-info` class to the element.
     */
    'has-background-info'?: boolean
    /**
     * Add Bulma's `.has-text-success` class to the element.
     */
    'has-text-success'?: boolean
    /**
     * Add Bulma's `.has-background-success` class to the element.
     */
    'has-background-success'?: boolean
    /**
     * Add Bulma's `.has-text-warning` class to the element.
     */
    'has-text-warning'?: boolean
    /**
     * Add Bulma's `.has-background-warning` class to the element.
     */
    'has-background-warning'?: boolean
    /**
     * Add Bulma's `.has-text-danger` class to the element.
     */
    'has-text-danger'?: boolean
    /**
     * Add Bulma's `.has-background-danger` class to the element.
     */
    'has-background-danger'?: boolean
    /**
     * Add Bulma's `.has-text-black-bis` class to the element.
     */
    'has-text-black-bis'?: boolean
    /**
     * Add Bulma's `.has-background-black-bis` class to the element.
     */
    'has-background-black-bis'?: boolean
    /**
     * Add Bulma's `.has-text-black-ter` class to the element.
     */
    'has-text-black-ter'?: boolean
    /**
     * Add Bulma's `.has-background-black-ter` class to the element.
     */
    'has-background-black-ter'?: boolean
    /**
     * Add Bulma's `.has-text-grey-darker` class to the element.
     */
    'has-text-grey-darker'?: boolean
    /**
     * Add Bulma's `.has-background-grey-darker` class to the element.
     */
    'has-background-grey-darker'?: boolean
    /**
     * Add Bulma's `.has-text-grey-dark` class to the element.
     */
    'has-text-grey-dark'?: boolean
    /**
     * Add Bulma's `.has-background-grey-dark` class to the element.
     */
    'has-background-grey-dark'?: boolean
    /**
     * Add Bulma's `.has-text-grey` class to the element.
     */
    'has-text-grey'?: boolean
    /**
     * Add Bulma's `.has-background-grey` class to the element.
     */
    'has-background-grey'?: boolean
    /**
     * Add Bulma's `.has-text-grey-light` class to the element.
     */
    'has-text-grey-light'?: boolean
    /**
     * Add Bulma's `.has-background-grey-light` class to the element.
     */
    'has-background-grey-light'?: boolean
    /**
     * Add Bulma's `.has-text-grey-lighter` class to the element.
     */
    'has-text-grey-lighter'?: boolean
    /**
     * Add Bulma's `.has-background-grey-lighter` class to the element.
     */
    'has-background-grey-lighter'?: boolean
    /**
     * Add Bulma's `.has-text-white-ter` class to the element.
     */
    'has-text-white-ter'?: boolean
    /**
     * Add Bulma's `.has-background-white-ter` class to the element.
     */
    'has-background-white-ter'?: boolean
    /**
     * Add Bulma's `.has-text-white-bis` class to the element.
     */
    'has-text-white-bis'?: boolean
    /**
     * Add Bulma's `.has-background-white-bis` class to the element.
     */
    'has-background-white-bis'?: boolean
    /**
     * Add Bulma's `.has-text-weight-light` class to the element.
     */
    'has-text-weight-light'?: boolean
    /**
     * Add Bulma's `.has-text-weight-normal` class to the element.
     */
    'has-text-weight-normal'?: boolean
    /**
     * Add Bulma's `.has-text-weight-medium` class to the element.
     */
    'has-text-weight-medium'?: boolean
    /**
     * Add Bulma's `.has-text-weight-semibold` class to the element.
     */
    'has-text-weight-semibold'?: boolean
    /**
     * Add Bulma's `.has-text-weight-bold` class to the element.
     */
    'has-text-weight-bold'?: boolean
    /**
     * Add Bulma's `.is-family-primary` class to the element.
     */
    'is-family-primary'?: boolean
    /**
     * Add Bulma's `.is-family-secondary` class to the element.
     */
    'is-family-secondary'?: boolean
    /**
     * Add Bulma's `.is-family-sans-serif` class to the element.
     */
    'is-family-sans-serif'?: boolean
    /**
     * Add Bulma's `.is-family-monospace` class to the element.
     */
    'is-family-monospace'?: boolean
    /**
     * Add Bulma's `.is-family-code` class to the element.
     */
    'is-family-code'?: boolean
    /**
     * Add Bulma's `.is-block` class to the element.
     */
    'is-block'?: boolean
    /**
     * Add Bulma's `.is-block-mobile` class to the element.
     */
    'is-block-mobile'?: boolean
    /**
     * Add Bulma's `.is-block-tablet` class to the element.
     */
    'is-block-tablet'?: boolean
    /**
     * Add Bulma's `.is-block-tablet-only` class to the element.
     */
    'is-block-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-block-touch` class to the element.
     */
    'is-block-touch'?: boolean
    /**
     * Add Bulma's `.is-block-desktop` class to the element.
     */
    'is-block-desktop'?: boolean
    /**
     * Add Bulma's `.is-block-desktop-only` class to the element.
     */
    'is-block-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-block-widescreen` class to the element.
     */
    'is-block-widescreen'?: boolean
    /**
     * Add Bulma's `.is-block-widescreen-only` class to the element.
     */
    'is-block-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-block-fullhd` class to the element.
     */
    'is-block-fullhd'?: boolean
    /**
     * Add Bulma's `.is-flex` class to the element.
     */
    'is-flex'?: boolean
    /**
     * Add Bulma's `.is-flex-mobile` class to the element.
     */
    'is-flex-mobile'?: boolean
    /**
     * Add Bulma's `.is-flex-tablet` class to the element.
     */
    'is-flex-tablet'?: boolean
    /**
     * Add Bulma's `.is-flex-tablet-only` class to the element.
     */
    'is-flex-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-flex-touch` class to the element.
     */
    'is-flex-touch'?: boolean
    /**
     * Add Bulma's `.is-flex-desktop` class to the element.
     */
    'is-flex-desktop'?: boolean
    /**
     * Add Bulma's `.is-flex-desktop-only` class to the element.
     */
    'is-flex-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-flex-widescreen` class to the element.
     */
    'is-flex-widescreen'?: boolean
    /**
     * Add Bulma's `.is-flex-widescreen-only` class to the element.
     */
    'is-flex-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-flex-fullhd` class to the element.
     */
    'is-flex-fullhd'?: boolean
    /**
     * Add Bulma's `.is-inline` class to the element.
     */
    'is-inline'?: boolean
    /**
     * Add Bulma's `.is-inline-mobile` class to the element.
     */
    'is-inline-mobile'?: boolean
    /**
     * Add Bulma's `.is-inline-tablet` class to the element.
     */
    'is-inline-tablet'?: boolean
    /**
     * Add Bulma's `.is-inline-tablet-only` class to the element.
     */
    'is-inline-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-inline-touch` class to the element.
     */
    'is-inline-touch'?: boolean
    /**
     * Add Bulma's `.is-inline-desktop` class to the element.
     */
    'is-inline-desktop'?: boolean
    /**
     * Add Bulma's `.is-inline-desktop-only` class to the element.
     */
    'is-inline-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-inline-widescreen` class to the element.
     */
    'is-inline-widescreen'?: boolean
    /**
     * Add Bulma's `.is-inline-widescreen-only` class to the element.
     */
    'is-inline-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-inline-fullhd` class to the element.
     */
    'is-inline-fullhd'?: boolean
    /**
     * Add Bulma's `.is-inline-block` class to the element.
     */
    'is-inline-block'?: boolean
    /**
     * Add Bulma's `.is-inline-block-mobile` class to the element.
     */
    'is-inline-block-mobile'?: boolean
    /**
     * Add Bulma's `.is-inline-block-tablet` class to the element.
     */
    'is-inline-block-tablet'?: boolean
    /**
     * Add Bulma's `.is-inline-block-tablet-only` class to the element.
     */
    'is-inline-block-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-inline-block-touch` class to the element.
     */
    'is-inline-block-touch'?: boolean
    /**
     * Add Bulma's `.is-inline-block-desktop` class to the element.
     */
    'is-inline-block-desktop'?: boolean
    /**
     * Add Bulma's `.is-inline-block-desktop-only` class to the element.
     */
    'is-inline-block-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-inline-block-widescreen` class to the element.
     */
    'is-inline-block-widescreen'?: boolean
    /**
     * Add Bulma's `.is-inline-block-widescreen-only` class to the element.
     */
    'is-inline-block-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-inline-block-fullhd` class to the element.
     */
    'is-inline-block-fullhd'?: boolean
    /**
     * Add Bulma's `.is-inline-flex` class to the element.
     */
    'is-inline-flex'?: boolean
    /**
     * Add Bulma's `.is-inline-flex-mobile` class to the element.
     */
    'is-inline-flex-mobile'?: boolean
    /**
     * Add Bulma's `.is-inline-flex-tablet` class to the element.
     */
    'is-inline-flex-tablet'?: boolean
    /**
     * Add Bulma's `.is-inline-flex-tablet-only` class to the element.
     */
    'is-inline-flex-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-inline-flex-touch` class to the element.
     */
    'is-inline-flex-touch'?: boolean
    /**
     * Add Bulma's `.is-inline-flex-desktop` class to the element.
     */
    'is-inline-flex-desktop'?: boolean
    /**
     * Add Bulma's `.is-inline-flex-desktop-only` class to the element.
     */
    'is-inline-flex-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-inline-flex-widescreen` class to the element.
     */
    'is-inline-flex-widescreen'?: boolean
    /**
     * Add Bulma's `.is-inline-flex-widescreen-only` class to the element.
     */
    'is-inline-flex-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-inline-flex-fullhd` class to the element.
     */
    'is-inline-flex-fullhd'?: boolean
    /**
     * Add Bulma's `.is-hidden` class to the element.
     */
    'is-hidden'?: boolean
    /**
     * Add Bulma's `.is-sr-only` class to the element.
     */
    'is-sr-only'?: boolean
    /**
     * Add Bulma's `.is-hidden-mobile` class to the element.
     */
    'is-hidden-mobile'?: boolean
    /**
     * Add Bulma's `.is-hidden-tablet` class to the element.
     */
    'is-hidden-tablet'?: boolean
    /**
     * Add Bulma's `.is-hidden-tablet-only` class to the element.
     */
    'is-hidden-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-hidden-touch` class to the element.
     */
    'is-hidden-touch'?: boolean
    /**
     * Add Bulma's `.is-hidden-desktop` class to the element.
     */
    'is-hidden-desktop'?: boolean
    /**
     * Add Bulma's `.is-hidden-desktop-only` class to the element.
     */
    'is-hidden-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-hidden-widescreen` class to the element.
     */
    'is-hidden-widescreen'?: boolean
    /**
     * Add Bulma's `.is-hidden-widescreen-only` class to the element.
     */
    'is-hidden-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-hidden-fullhd` class to the element.
     */
    'is-hidden-fullhd'?: boolean
    /**
     * Add Bulma's `.is-invisible` class to the element.
     */
    'is-invisible'?: boolean
    /**
     * Add Bulma's `.is-invisible-mobile` class to the element.
     */
    'is-invisible-mobile'?: boolean
    /**
     * Add Bulma's `.is-invisible-tablet` class to the element.
     */
    'is-invisible-tablet'?: boolean
    /**
     * Add Bulma's `.is-invisible-tablet-only` class to the element.
     */
    'is-invisible-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-invisible-touch` class to the element.
     */
    'is-invisible-touch'?: boolean
    /**
     * Add Bulma's `.is-invisible-desktop` class to the element.
     */
    'is-invisible-desktop'?: boolean
    /**
     * Add Bulma's `.is-invisible-desktop-only` class to the element.
     */
    'is-invisible-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-invisible-widescreen` class to the element.
     */
    'is-invisible-widescreen'?: boolean
    /**
     * Add Bulma's `.is-invisible-widescreen-only` class to the element.
     */
    'is-invisible-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-invisible-fullhd` class to the element.
     */
    'is-invisible-fullhd'?: boolean
    /**
     * Add Bulma's `.is-marginless` class to the element.
     */
    'is-marginless'?: boolean
    /**
     * Add Bulma's `.is-paddingless` class to the element.
     */
    'is-paddingless'?: boolean
    /**
     * Add Bulma's `.is-radiusless` class to the element.
     */
    'is-radiusless'?: boolean
    /**
     * Add Bulma's `.is-shadowless` class to the element.
     */
    'is-shadowless'?: boolean
    /**
     * Add Bulma's `.is-relative` class to the element.
     */
    'is-relative'?: boolean
    /**
     * Add Bulma's `.icon` class to the element.
     */
    icon?: boolean
    /**
     * Add Bulma's `.is-hovered` class to the element.
     */
    'is-hovered'?: boolean
    /**
     * Add Bulma's `.is-text` class to the element.
     */
    'is-text'?: boolean
    /**
     * Add Bulma's `.is-white` class to the element.
     */
    'is-white'?: boolean
    /**
     * Add Bulma's `.is-inverted` class to the element.
     */
    'is-inverted'?: boolean
    /**
     * Add Bulma's `.is-outlined` class to the element.
     */
    'is-outlined'?: boolean
    /**
     * Add Bulma's `.is-black` class to the element.
     */
    'is-black'?: boolean
    /**
     * Add Bulma's `.is-light` class to the element.
     */
    'is-light'?: boolean
    /**
     * Add Bulma's `.is-dark` class to the element.
     */
    'is-dark'?: boolean
    /**
     * Add Bulma's `.is-primary` class to the element.
     */
    'is-primary'?: boolean
    /**
     * Add Bulma's `.is-link` class to the element.
     */
    'is-link'?: boolean
    /**
     * Add Bulma's `.is-info` class to the element.
     */
    'is-info'?: boolean
    /**
     * Add Bulma's `.is-success` class to the element.
     */
    'is-success'?: boolean
    /**
     * Add Bulma's `.is-warning` class to the element.
     */
    'is-warning'?: boolean
    /**
     * Add Bulma's `.is-danger` class to the element.
     */
    'is-danger'?: boolean
    /**
     * Add Bulma's `.is-normal` class to the element.
     */
    'is-normal'?: boolean
    /**
     * Add Bulma's `.is-fullwidth` class to the element.
     */
    'is-fullwidth'?: boolean
    /**
     * Add Bulma's `.is-static` class to the element.
     */
    'is-static'?: boolean
    /**
     * Add Bulma's `.is-rounded` class to the element.
     */
    'is-rounded'?: boolean
    /**
     * Add Bulma's `.buttons` class to the element.
     */
    buttons?: boolean
    /**
     * Add Bulma's `.are-small` class to the element.
     */
    'are-small'?: boolean
    /**
     * Add Bulma's `.are-medium` class to the element.
     */
    'are-medium'?: boolean
    /**
     * Add Bulma's `.are-large` class to the element.
     */
    'are-large'?: boolean
    /**
     * Add Bulma's `.has-addons` class to the element.
     */
    'has-addons'?: boolean
    /**
     * Add Bulma's `.is-selected` class to the element.
     */
    'is-selected'?: boolean
    /**
     * Add Bulma's `.is-expanded` class to the element.
     */
    'is-expanded'?: boolean
    /**
     * Add Bulma's `.is-centered` class to the element.
     */
    'is-centered'?: boolean
    /**
     * Add Bulma's `.is-right` class to the element.
     */
    'is-right'?: boolean
    /**
     * Add Bulma's `.container` class to the element.
     */
    container?: boolean
    /**
     * Add Bulma's `.is-fluid` class to the element.
     */
    'is-fluid'?: boolean
    /**
     * Add Bulma's `.is-widescreen` class to the element.
     */
    'is-widescreen'?: boolean
    /**
     * Add Bulma's `.is-fullhd` class to the element.
     */
    'is-fullhd'?: boolean
    /**
     * Add Bulma's `.is-lower-alpha` class to the element.
     */
    'is-lower-alpha'?: boolean
    /**
     * Add Bulma's `.is-lower-roman` class to the element.
     */
    'is-lower-roman'?: boolean
    /**
     * Add Bulma's `.is-upper-alpha` class to the element.
     */
    'is-upper-alpha'?: boolean
    /**
     * Add Bulma's `.is-upper-roman` class to the element.
     */
    'is-upper-roman'?: boolean
    /**
     * Add Bulma's `.is-16x16` class to the element.
     */
    'is-16x16'?: boolean
    /**
     * Add Bulma's `.is-24x24` class to the element.
     */
    'is-24x24'?: boolean
    /**
     * Add Bulma's `.is-32x32` class to the element.
     */
    'is-32x32'?: boolean
    /**
     * Add Bulma's `.is-48x48` class to the element.
     */
    'is-48x48'?: boolean
    /**
     * Add Bulma's `.is-64x64` class to the element.
     */
    'is-64x64'?: boolean
    /**
     * Add Bulma's `.is-96x96` class to the element.
     */
    'is-96x96'?: boolean
    /**
     * Add Bulma's `.is-128x128` class to the element.
     */
    'is-128x128'?: boolean
    /**
     * Add Bulma's `.dropdown-item` class to the element.
     */
    'dropdown-item'?: boolean
    /**
     * Add Bulma's `.is-narrow` class to the element.
     */
    'is-narrow'?: boolean
    /**
     * Add Bulma's `.is-bordered` class to the element.
     */
    'is-bordered'?: boolean
    /**
     * Add Bulma's `.is-hoverable` class to the element.
     */
    'is-hoverable'?: boolean
    /**
     * Add Bulma's `.is-striped` class to the element.
     */
    'is-striped'?: boolean
    /**
     * Add Bulma's `.tags` class to the element.
     */
    tags?: boolean
    /**
     * Add Bulma's `.tag` class to the element.
     */
    tag?: boolean
    /**
     * Add Bulma's `.is-delete` class to the element.
     */
    'is-delete'?: boolean
    /**
     * Add Bulma's `.is-spaced` class to the element.
     */
    'is-spaced'?: boolean
    /**
     * Add Bulma's `.is-1` class to the element.
     */
    'is-1'?: boolean
    /**
     * Add Bulma's `.is-2` class to the element.
     */
    'is-2'?: boolean
    /**
     * Add Bulma's `.is-3` class to the element.
     */
    'is-3'?: boolean
    /**
     * Add Bulma's `.is-4` class to the element.
     */
    'is-4'?: boolean
    /**
     * Add Bulma's `.is-5` class to the element.
     */
    'is-5'?: boolean
    /**
     * Add Bulma's `.is-6` class to the element.
     */
    'is-6'?: boolean
    /**
     * Add Bulma's `.is-7` class to the element.
     */
    'is-7'?: boolean
    /**
     * Add Bulma's `.heading` class to the element.
     */
    heading?: boolean
    /**
     * Add Bulma's `.number` class to the element.
     */
    number?: boolean
    /**
     * Add Bulma's `.has-fixed-size` class to the element.
     */
    'has-fixed-size'?: boolean
    /**
     * Add Bulma's `.checkbox` class to the element.
     */
    checkbox?: boolean
    /**
     * Add Bulma's `.radio` class to the element.
     */
    radio?: boolean
    /**
     * Add Bulma's `.is-disabled` class to the element.
     */
    'is-disabled'?: boolean
    /**
     * Add Bulma's `.file-icon` class to the element.
     */
    'file-icon'?: boolean
    /**
     * Add Bulma's `.fa` class to the element.
     */
    fa?: boolean
    /**
     * Add Bulma's `.has-name` class to the element.
     */
    'has-name'?: boolean
    /**
     * Add Bulma's `.is-empty` class to the element.
     */
    'is-empty'?: boolean
    /**
     * Add Bulma's `.is-boxed` class to the element.
     */
    'is-boxed'?: boolean
    /**
     * Add Bulma's `.file-label` class to the element.
     */
    'file-label'?: boolean
    /**
     * Add Bulma's `.file-input` class to the element.
     */
    'file-input'?: boolean
    /**
     * Add Bulma's `.label` class to the element.
     */
    label?: boolean
    /**
     * Add Bulma's `.help` class to the element.
     */
    help?: boolean
    /**
     * Add Bulma's `.field` class to the element.
     */
    field?: boolean
    /**
     * Add Bulma's `.has-addons-centered` class to the element.
     */
    'has-addons-centered'?: boolean
    /**
     * Add Bulma's `.has-addons-right` class to the element.
     */
    'has-addons-right'?: boolean
    /**
     * Add Bulma's `.has-addons-fullwidth` class to the element.
     */
    'has-addons-fullwidth'?: boolean
    /**
     * Add Bulma's `.is-grouped` class to the element.
     */
    'is-grouped'?: boolean
    /**
     * Add Bulma's `.is-grouped-centered` class to the element.
     */
    'is-grouped-centered'?: boolean
    /**
     * Add Bulma's `.is-grouped-right` class to the element.
     */
    'is-grouped-right'?: boolean
    /**
     * Add Bulma's `.is-grouped-multiline` class to the element.
     */
    'is-grouped-multiline'?: boolean
    /**
     * Add Bulma's `.is-horizontal` class to the element.
     */
    'is-horizontal'?: boolean
    /**
     * Add Bulma's `.field-label` class to the element.
     */
    'field-label'?: boolean
    /**
     * Add Bulma's `.field-body` class to the element.
     */
    'field-body'?: boolean
    /**
     * Add Bulma's `.has-icons-left` class to the element.
     */
    'has-icons-left'?: boolean
    /**
     * Add Bulma's `.has-icons-right` class to the element.
     */
    'has-icons-right'?: boolean
    /**
     * Add Bulma's `.is-left` class to the element.
     */
    'is-left'?: boolean
    /**
     * Add Bulma's `.has-arrow-separator` class to the element.
     */
    'has-arrow-separator'?: boolean
    /**
     * Add Bulma's `.has-bullet-separator` class to the element.
     */
    'has-bullet-separator'?: boolean
    /**
     * Add Bulma's `.has-dot-separator` class to the element.
     */
    'has-dot-separator'?: boolean
    /**
     * Add Bulma's `.has-succeeds-separator` class to the element.
     */
    'has-succeeds-separator'?: boolean
    /**
     * Add Bulma's `.card` class to the element.
     */
    card?: boolean
    /**
     * Add Bulma's `.card-header` class to the element.
     */
    'card-header'?: boolean
    /**
     * Add Bulma's `.card-header-title` class to the element.
     */
    'card-header-title'?: boolean
    /**
     * Add Bulma's `.card-header-icon` class to the element.
     */
    'card-header-icon'?: boolean
    /**
     * Add Bulma's `.card-image` class to the element.
     */
    'card-image'?: boolean
    /**
     * Add Bulma's `.card-content` class to the element.
     */
    'card-content'?: boolean
    /**
     * Add Bulma's `.card-footer` class to the element.
     */
    'card-footer'?: boolean
    /**
     * Add Bulma's `.card-footer-item` class to the element.
     */
    'card-footer-item'?: boolean
    /**
     * Add Bulma's `.media` class to the element.
     */
    media?: boolean
    /**
     * Add Bulma's `.dropdown` class to the element.
     */
    dropdown?: boolean
    /**
     * Add Bulma's `.dropdown-menu` class to the element.
     */
    'dropdown-menu'?: boolean
    /**
     * Add Bulma's `.is-up` class to the element.
     */
    'is-up'?: boolean
    /**
     * Add Bulma's `.dropdown-content` class to the element.
     */
    'dropdown-content'?: boolean
    /**
     * Add Bulma's `.dropdown-divider` class to the element.
     */
    'dropdown-divider'?: boolean
    /**
     * Add Bulma's `.is-mobile` class to the element.
     */
    'is-mobile'?: boolean
    /**
     * Add Bulma's `.level-left` class to the element.
     */
    'level-left'?: boolean
    /**
     * Add Bulma's `.level-right` class to the element.
     */
    'level-right'?: boolean
    /**
     * Add Bulma's `.level-item` class to the element.
     */
    'level-item'?: boolean
    /**
     * Add Bulma's `.is-flexible` class to the element.
     */
    'is-flexible'?: boolean
    /**
     * Add Bulma's `.list-item` class to the element.
     */
    'list-item'?: boolean
    /**
     * Add Bulma's `.media-left` class to the element.
     */
    'media-left'?: boolean
    /**
     * Add Bulma's `.media-right` class to the element.
     */
    'media-right'?: boolean
    /**
     * Add Bulma's `.media-content` class to the element.
     */
    'media-content'?: boolean
    /**
     * Add Bulma's `.menu` class to the element.
     */
    menu?: boolean
    /**
     * Add Bulma's `.menu-list` class to the element.
     */
    'menu-list'?: boolean
    /**
     * Add Bulma's `.menu-label` class to the element.
     */
    'menu-label'?: boolean
    /**
     * Add Bulma's `.message-header` class to the element.
     */
    'message-header'?: boolean
    /**
     * Add Bulma's `.message-body` class to the element.
     */
    'message-body'?: boolean
    /**
     * Add Bulma's `.modal-content` class to the element.
     */
    'modal-content'?: boolean
    /**
     * Add Bulma's `.modal-card` class to the element.
     */
    'modal-card'?: boolean
    /**
     * Add Bulma's `.modal-card-head` class to the element.
     */
    'modal-card-head'?: boolean
    /**
     * Add Bulma's `.modal-card-foot` class to the element.
     */
    'modal-card-foot'?: boolean
    /**
     * Add Bulma's `.modal-card-title` class to the element.
     */
    'modal-card-title'?: boolean
    /**
     * Add Bulma's `.modal-card-body` class to the element.
     */
    'modal-card-body'?: boolean
    /**
     * Add Bulma's `.navbar` class to the element.
     */
    navbar?: boolean
    /**
     * Add Bulma's `.navbar-brand` class to the element.
     */
    'navbar-brand'?: boolean
    /**
     * Add Bulma's `.navbar-item` class to the element.
     */
    'navbar-item'?: boolean
    /**
     * Add Bulma's `.navbar-burger` class to the element.
     */
    'navbar-burger'?: boolean
    /**
     * Add Bulma's `.navbar-start` class to the element.
     */
    'navbar-start'?: boolean
    /**
     * Add Bulma's `.navbar-end` class to the element.
     */
    'navbar-end'?: boolean
    /**
     * Add Bulma's `.has-dropdown` class to the element.
     */
    'has-dropdown'?: boolean
    /**
     * Add Bulma's `.navbar-dropdown` class to the element.
     */
    'navbar-dropdown'?: boolean
    /**
     * Add Bulma's `.has-shadow` class to the element.
     */
    'has-shadow'?: boolean
    /**
     * Add Bulma's `.is-fixed-bottom` class to the element.
     */
    'is-fixed-bottom'?: boolean
    /**
     * Add Bulma's `.is-fixed-top` class to the element.
     */
    'is-fixed-top'?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-top` class to the element.
     */
    'has-navbar-fixed-top'?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-bottom` class to the element.
     */
    'has-navbar-fixed-bottom'?: boolean
    /**
     * Add Bulma's `.navbar-tabs` class to the element.
     */
    'navbar-tabs'?: boolean
    /**
     * Add Bulma's `.navbar-menu` class to the element.
     */
    'navbar-menu'?: boolean
    /**
     * Add Bulma's `.is-tab` class to the element.
     */
    'is-tab'?: boolean
    /**
     * Add Bulma's `.navbar-content` class to the element.
     */
    'navbar-content'?: boolean
    /**
     * Add Bulma's `.navbar-divider` class to the element.
     */
    'navbar-divider'?: boolean
    /**
     * Add Bulma's `.is-fixed-bottom-touch` class to the element.
     */
    'is-fixed-bottom-touch'?: boolean
    /**
     * Add Bulma's `.is-fixed-top-touch` class to the element.
     */
    'is-fixed-top-touch'?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-top-touch` class to the element.
     */
    'has-navbar-fixed-top-touch'?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-bottom-touch` class to the element.
     */
    'has-navbar-fixed-bottom-touch'?: boolean
    /**
     * Add Bulma's `.is-transparent` class to the element.
     */
    'is-transparent'?: boolean
    /**
     * Add Bulma's `.has-dropdown-up` class to the element.
     */
    'has-dropdown-up'?: boolean
    /**
     * Add Bulma's `.is-fixed-bottom-desktop` class to the element.
     */
    'is-fixed-bottom-desktop'?: boolean
    /**
     * Add Bulma's `.is-fixed-top-desktop` class to the element.
     */
    'is-fixed-top-desktop'?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-top-desktop` class to the element.
     */
    'has-navbar-fixed-top-desktop'?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-bottom-desktop` class to the element.
     */
    'has-navbar-fixed-bottom-desktop'?: boolean
    /**
     * Add Bulma's `.has-spaced-navbar-fixed-top` class to the element.
     */
    'has-spaced-navbar-fixed-top'?: boolean
    /**
     * Add Bulma's `.has-spaced-navbar-fixed-bottom` class to the element.
     */
    'has-spaced-navbar-fixed-bottom'?: boolean
    /**
     * Add Bulma's `.hero` class to the element.
     */
    hero?: boolean
    /**
     * Add Bulma's `.is-fullheight-with-navbar` class to the element.
     */
    'is-fullheight-with-navbar'?: boolean
    /**
     * Add Bulma's `.pagination-list` class to the element.
     */
    'pagination-list'?: boolean
    /**
     * Add Bulma's `.is-current` class to the element.
     */
    'is-current'?: boolean
    /**
     * Add Bulma's `.panel` class to the element.
     */
    panel?: boolean
    /**
     * Add Bulma's `.panel-heading` class to the element.
     */
    'panel-heading'?: boolean
    /**
     * Add Bulma's `.panel-tabs` class to the element.
     */
    'panel-tabs'?: boolean
    /**
     * Add Bulma's `.panel-block` class to the element.
     */
    'panel-block'?: boolean
    /**
     * Add Bulma's `.panel-icon` class to the element.
     */
    'panel-icon'?: boolean
    /**
     * Add Bulma's `.panel-list` class to the element.
     */
    'panel-list'?: boolean
    /**
     * Add Bulma's `.is-wrapped` class to the element.
     */
    'is-wrapped'?: boolean
    /**
     * Add Bulma's `.is-center` class to the element.
     */
    'is-center'?: boolean
    /**
     * Add Bulma's `.is-toggle` class to the element.
     */
    'is-toggle'?: boolean
    /**
     * Add Bulma's `.is-toggle-rounded` class to the element.
     */
    'is-toggle-rounded'?: boolean
    /**
     * Add Bulma's `.column` class to the element.
     */
    column?: boolean
    /**
     * Add Bulma's `.columns` class to the element.
     */
    columns?: boolean
    /**
     * Add Bulma's `.is-full` class to the element.
     */
    'is-full'?: boolean
    /**
     * Add Bulma's `.is-three-quarters` class to the element.
     */
    'is-three-quarters'?: boolean
    /**
     * Add Bulma's `.is-two-thirds` class to the element.
     */
    'is-two-thirds'?: boolean
    /**
     * Add Bulma's `.is-half` class to the element.
     */
    'is-half'?: boolean
    /**
     * Add Bulma's `.is-one-third` class to the element.
     */
    'is-one-third'?: boolean
    /**
     * Add Bulma's `.is-one-quarter` class to the element.
     */
    'is-one-quarter'?: boolean
    /**
     * Add Bulma's `.is-one-fifth` class to the element.
     */
    'is-one-fifth'?: boolean
    /**
     * Add Bulma's `.is-two-fifths` class to the element.
     */
    'is-two-fifths'?: boolean
    /**
     * Add Bulma's `.is-three-fifths` class to the element.
     */
    'is-three-fifths'?: boolean
    /**
     * Add Bulma's `.is-four-fifths` class to the element.
     */
    'is-four-fifths'?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters` class to the element.
     */
    'is-offset-three-quarters'?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds` class to the element.
     */
    'is-offset-two-thirds'?: boolean
    /**
     * Add Bulma's `.is-offset-half` class to the element.
     */
    'is-offset-half'?: boolean
    /**
     * Add Bulma's `.is-offset-one-third` class to the element.
     */
    'is-offset-one-third'?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter` class to the element.
     */
    'is-offset-one-quarter'?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth` class to the element.
     */
    'is-offset-one-fifth'?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths` class to the element.
     */
    'is-offset-two-fifths'?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths` class to the element.
     */
    'is-offset-three-fifths'?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths` class to the element.
     */
    'is-offset-four-fifths'?: boolean
    /**
     * Add Bulma's `.is-0` class to the element.
     */
    'is-0'?: boolean
    /**
     * Add Bulma's `.is-offset-0` class to the element.
     */
    'is-offset-0'?: boolean
    /**
     * Add Bulma's `.is-offset-1` class to the element.
     */
    'is-offset-1'?: boolean
    /**
     * Add Bulma's `.is-offset-2` class to the element.
     */
    'is-offset-2'?: boolean
    /**
     * Add Bulma's `.is-offset-3` class to the element.
     */
    'is-offset-3'?: boolean
    /**
     * Add Bulma's `.is-offset-4` class to the element.
     */
    'is-offset-4'?: boolean
    /**
     * Add Bulma's `.is-offset-5` class to the element.
     */
    'is-offset-5'?: boolean
    /**
     * Add Bulma's `.is-offset-6` class to the element.
     */
    'is-offset-6'?: boolean
    /**
     * Add Bulma's `.is-offset-7` class to the element.
     */
    'is-offset-7'?: boolean
    /**
     * Add Bulma's `.is-8` class to the element.
     */
    'is-8'?: boolean
    /**
     * Add Bulma's `.is-offset-8` class to the element.
     */
    'is-offset-8'?: boolean
    /**
     * Add Bulma's `.is-9` class to the element.
     */
    'is-9'?: boolean
    /**
     * Add Bulma's `.is-offset-9` class to the element.
     */
    'is-offset-9'?: boolean
    /**
     * Add Bulma's `.is-10` class to the element.
     */
    'is-10'?: boolean
    /**
     * Add Bulma's `.is-offset-10` class to the element.
     */
    'is-offset-10'?: boolean
    /**
     * Add Bulma's `.is-11` class to the element.
     */
    'is-11'?: boolean
    /**
     * Add Bulma's `.is-offset-11` class to the element.
     */
    'is-offset-11'?: boolean
    /**
     * Add Bulma's `.is-12` class to the element.
     */
    'is-12'?: boolean
    /**
     * Add Bulma's `.is-offset-12` class to the element.
     */
    'is-offset-12'?: boolean
    /**
     * Add Bulma's `.is-narrow-mobile` class to the element.
     */
    'is-narrow-mobile'?: boolean
    /**
     * Add Bulma's `.is-full-mobile` class to the element.
     */
    'is-full-mobile'?: boolean
    /**
     * Add Bulma's `.is-three-quarters-mobile` class to the element.
     */
    'is-three-quarters-mobile'?: boolean
    /**
     * Add Bulma's `.is-two-thirds-mobile` class to the element.
     */
    'is-two-thirds-mobile'?: boolean
    /**
     * Add Bulma's `.is-half-mobile` class to the element.
     */
    'is-half-mobile'?: boolean
    /**
     * Add Bulma's `.is-one-third-mobile` class to the element.
     */
    'is-one-third-mobile'?: boolean
    /**
     * Add Bulma's `.is-one-quarter-mobile` class to the element.
     */
    'is-one-quarter-mobile'?: boolean
    /**
     * Add Bulma's `.is-one-fifth-mobile` class to the element.
     */
    'is-one-fifth-mobile'?: boolean
    /**
     * Add Bulma's `.is-two-fifths-mobile` class to the element.
     */
    'is-two-fifths-mobile'?: boolean
    /**
     * Add Bulma's `.is-three-fifths-mobile` class to the element.
     */
    'is-three-fifths-mobile'?: boolean
    /**
     * Add Bulma's `.is-four-fifths-mobile` class to the element.
     */
    'is-four-fifths-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-mobile` class to the element.
     */
    'is-offset-three-quarters-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-mobile` class to the element.
     */
    'is-offset-two-thirds-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-half-mobile` class to the element.
     */
    'is-offset-half-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-mobile` class to the element.
     */
    'is-offset-one-third-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-mobile` class to the element.
     */
    'is-offset-one-quarter-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-mobile` class to the element.
     */
    'is-offset-one-fifth-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-mobile` class to the element.
     */
    'is-offset-two-fifths-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-mobile` class to the element.
     */
    'is-offset-three-fifths-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-mobile` class to the element.
     */
    'is-offset-four-fifths-mobile'?: boolean
    /**
     * Add Bulma's `.is-0-mobile` class to the element.
     */
    'is-0-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-0-mobile` class to the element.
     */
    'is-offset-0-mobile'?: boolean
    /**
     * Add Bulma's `.is-1-mobile` class to the element.
     */
    'is-1-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-1-mobile` class to the element.
     */
    'is-offset-1-mobile'?: boolean
    /**
     * Add Bulma's `.is-2-mobile` class to the element.
     */
    'is-2-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-2-mobile` class to the element.
     */
    'is-offset-2-mobile'?: boolean
    /**
     * Add Bulma's `.is-3-mobile` class to the element.
     */
    'is-3-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-3-mobile` class to the element.
     */
    'is-offset-3-mobile'?: boolean
    /**
     * Add Bulma's `.is-4-mobile` class to the element.
     */
    'is-4-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-4-mobile` class to the element.
     */
    'is-offset-4-mobile'?: boolean
    /**
     * Add Bulma's `.is-5-mobile` class to the element.
     */
    'is-5-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-5-mobile` class to the element.
     */
    'is-offset-5-mobile'?: boolean
    /**
     * Add Bulma's `.is-6-mobile` class to the element.
     */
    'is-6-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-6-mobile` class to the element.
     */
    'is-offset-6-mobile'?: boolean
    /**
     * Add Bulma's `.is-7-mobile` class to the element.
     */
    'is-7-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-7-mobile` class to the element.
     */
    'is-offset-7-mobile'?: boolean
    /**
     * Add Bulma's `.is-8-mobile` class to the element.
     */
    'is-8-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-8-mobile` class to the element.
     */
    'is-offset-8-mobile'?: boolean
    /**
     * Add Bulma's `.is-9-mobile` class to the element.
     */
    'is-9-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-9-mobile` class to the element.
     */
    'is-offset-9-mobile'?: boolean
    /**
     * Add Bulma's `.is-10-mobile` class to the element.
     */
    'is-10-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-10-mobile` class to the element.
     */
    'is-offset-10-mobile'?: boolean
    /**
     * Add Bulma's `.is-11-mobile` class to the element.
     */
    'is-11-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-11-mobile` class to the element.
     */
    'is-offset-11-mobile'?: boolean
    /**
     * Add Bulma's `.is-12-mobile` class to the element.
     */
    'is-12-mobile'?: boolean
    /**
     * Add Bulma's `.is-offset-12-mobile` class to the element.
     */
    'is-offset-12-mobile'?: boolean
    /**
     * Add Bulma's `.is-narrow-tablet` class to the element.
     */
    'is-narrow-tablet'?: boolean
    /**
     * Add Bulma's `.is-full-tablet` class to the element.
     */
    'is-full-tablet'?: boolean
    /**
     * Add Bulma's `.is-three-quarters-tablet` class to the element.
     */
    'is-three-quarters-tablet'?: boolean
    /**
     * Add Bulma's `.is-two-thirds-tablet` class to the element.
     */
    'is-two-thirds-tablet'?: boolean
    /**
     * Add Bulma's `.is-half-tablet` class to the element.
     */
    'is-half-tablet'?: boolean
    /**
     * Add Bulma's `.is-one-third-tablet` class to the element.
     */
    'is-one-third-tablet'?: boolean
    /**
     * Add Bulma's `.is-one-quarter-tablet` class to the element.
     */
    'is-one-quarter-tablet'?: boolean
    /**
     * Add Bulma's `.is-one-fifth-tablet` class to the element.
     */
    'is-one-fifth-tablet'?: boolean
    /**
     * Add Bulma's `.is-two-fifths-tablet` class to the element.
     */
    'is-two-fifths-tablet'?: boolean
    /**
     * Add Bulma's `.is-three-fifths-tablet` class to the element.
     */
    'is-three-fifths-tablet'?: boolean
    /**
     * Add Bulma's `.is-four-fifths-tablet` class to the element.
     */
    'is-four-fifths-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-tablet` class to the element.
     */
    'is-offset-three-quarters-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-tablet` class to the element.
     */
    'is-offset-two-thirds-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-half-tablet` class to the element.
     */
    'is-offset-half-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-tablet` class to the element.
     */
    'is-offset-one-third-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-tablet` class to the element.
     */
    'is-offset-one-quarter-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-tablet` class to the element.
     */
    'is-offset-one-fifth-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-tablet` class to the element.
     */
    'is-offset-two-fifths-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-tablet` class to the element.
     */
    'is-offset-three-fifths-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-tablet` class to the element.
     */
    'is-offset-four-fifths-tablet'?: boolean
    /**
     * Add Bulma's `.is-0-tablet` class to the element.
     */
    'is-0-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-0-tablet` class to the element.
     */
    'is-offset-0-tablet'?: boolean
    /**
     * Add Bulma's `.is-1-tablet` class to the element.
     */
    'is-1-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-1-tablet` class to the element.
     */
    'is-offset-1-tablet'?: boolean
    /**
     * Add Bulma's `.is-2-tablet` class to the element.
     */
    'is-2-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-2-tablet` class to the element.
     */
    'is-offset-2-tablet'?: boolean
    /**
     * Add Bulma's `.is-3-tablet` class to the element.
     */
    'is-3-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-3-tablet` class to the element.
     */
    'is-offset-3-tablet'?: boolean
    /**
     * Add Bulma's `.is-4-tablet` class to the element.
     */
    'is-4-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-4-tablet` class to the element.
     */
    'is-offset-4-tablet'?: boolean
    /**
     * Add Bulma's `.is-5-tablet` class to the element.
     */
    'is-5-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-5-tablet` class to the element.
     */
    'is-offset-5-tablet'?: boolean
    /**
     * Add Bulma's `.is-6-tablet` class to the element.
     */
    'is-6-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-6-tablet` class to the element.
     */
    'is-offset-6-tablet'?: boolean
    /**
     * Add Bulma's `.is-7-tablet` class to the element.
     */
    'is-7-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-7-tablet` class to the element.
     */
    'is-offset-7-tablet'?: boolean
    /**
     * Add Bulma's `.is-8-tablet` class to the element.
     */
    'is-8-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-8-tablet` class to the element.
     */
    'is-offset-8-tablet'?: boolean
    /**
     * Add Bulma's `.is-9-tablet` class to the element.
     */
    'is-9-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-9-tablet` class to the element.
     */
    'is-offset-9-tablet'?: boolean
    /**
     * Add Bulma's `.is-10-tablet` class to the element.
     */
    'is-10-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-10-tablet` class to the element.
     */
    'is-offset-10-tablet'?: boolean
    /**
     * Add Bulma's `.is-11-tablet` class to the element.
     */
    'is-11-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-11-tablet` class to the element.
     */
    'is-offset-11-tablet'?: boolean
    /**
     * Add Bulma's `.is-12-tablet` class to the element.
     */
    'is-12-tablet'?: boolean
    /**
     * Add Bulma's `.is-offset-12-tablet` class to the element.
     */
    'is-offset-12-tablet'?: boolean
    /**
     * Add Bulma's `.is-narrow-touch` class to the element.
     */
    'is-narrow-touch'?: boolean
    /**
     * Add Bulma's `.is-full-touch` class to the element.
     */
    'is-full-touch'?: boolean
    /**
     * Add Bulma's `.is-three-quarters-touch` class to the element.
     */
    'is-three-quarters-touch'?: boolean
    /**
     * Add Bulma's `.is-two-thirds-touch` class to the element.
     */
    'is-two-thirds-touch'?: boolean
    /**
     * Add Bulma's `.is-half-touch` class to the element.
     */
    'is-half-touch'?: boolean
    /**
     * Add Bulma's `.is-one-third-touch` class to the element.
     */
    'is-one-third-touch'?: boolean
    /**
     * Add Bulma's `.is-one-quarter-touch` class to the element.
     */
    'is-one-quarter-touch'?: boolean
    /**
     * Add Bulma's `.is-one-fifth-touch` class to the element.
     */
    'is-one-fifth-touch'?: boolean
    /**
     * Add Bulma's `.is-two-fifths-touch` class to the element.
     */
    'is-two-fifths-touch'?: boolean
    /**
     * Add Bulma's `.is-three-fifths-touch` class to the element.
     */
    'is-three-fifths-touch'?: boolean
    /**
     * Add Bulma's `.is-four-fifths-touch` class to the element.
     */
    'is-four-fifths-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-touch` class to the element.
     */
    'is-offset-three-quarters-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-touch` class to the element.
     */
    'is-offset-two-thirds-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-half-touch` class to the element.
     */
    'is-offset-half-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-touch` class to the element.
     */
    'is-offset-one-third-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-touch` class to the element.
     */
    'is-offset-one-quarter-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-touch` class to the element.
     */
    'is-offset-one-fifth-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-touch` class to the element.
     */
    'is-offset-two-fifths-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-touch` class to the element.
     */
    'is-offset-three-fifths-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-touch` class to the element.
     */
    'is-offset-four-fifths-touch'?: boolean
    /**
     * Add Bulma's `.is-0-touch` class to the element.
     */
    'is-0-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-0-touch` class to the element.
     */
    'is-offset-0-touch'?: boolean
    /**
     * Add Bulma's `.is-1-touch` class to the element.
     */
    'is-1-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-1-touch` class to the element.
     */
    'is-offset-1-touch'?: boolean
    /**
     * Add Bulma's `.is-2-touch` class to the element.
     */
    'is-2-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-2-touch` class to the element.
     */
    'is-offset-2-touch'?: boolean
    /**
     * Add Bulma's `.is-3-touch` class to the element.
     */
    'is-3-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-3-touch` class to the element.
     */
    'is-offset-3-touch'?: boolean
    /**
     * Add Bulma's `.is-4-touch` class to the element.
     */
    'is-4-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-4-touch` class to the element.
     */
    'is-offset-4-touch'?: boolean
    /**
     * Add Bulma's `.is-5-touch` class to the element.
     */
    'is-5-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-5-touch` class to the element.
     */
    'is-offset-5-touch'?: boolean
    /**
     * Add Bulma's `.is-6-touch` class to the element.
     */
    'is-6-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-6-touch` class to the element.
     */
    'is-offset-6-touch'?: boolean
    /**
     * Add Bulma's `.is-7-touch` class to the element.
     */
    'is-7-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-7-touch` class to the element.
     */
    'is-offset-7-touch'?: boolean
    /**
     * Add Bulma's `.is-8-touch` class to the element.
     */
    'is-8-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-8-touch` class to the element.
     */
    'is-offset-8-touch'?: boolean
    /**
     * Add Bulma's `.is-9-touch` class to the element.
     */
    'is-9-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-9-touch` class to the element.
     */
    'is-offset-9-touch'?: boolean
    /**
     * Add Bulma's `.is-10-touch` class to the element.
     */
    'is-10-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-10-touch` class to the element.
     */
    'is-offset-10-touch'?: boolean
    /**
     * Add Bulma's `.is-11-touch` class to the element.
     */
    'is-11-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-11-touch` class to the element.
     */
    'is-offset-11-touch'?: boolean
    /**
     * Add Bulma's `.is-12-touch` class to the element.
     */
    'is-12-touch'?: boolean
    /**
     * Add Bulma's `.is-offset-12-touch` class to the element.
     */
    'is-offset-12-touch'?: boolean
    /**
     * Add Bulma's `.is-narrow-desktop` class to the element.
     */
    'is-narrow-desktop'?: boolean
    /**
     * Add Bulma's `.is-full-desktop` class to the element.
     */
    'is-full-desktop'?: boolean
    /**
     * Add Bulma's `.is-three-quarters-desktop` class to the element.
     */
    'is-three-quarters-desktop'?: boolean
    /**
     * Add Bulma's `.is-two-thirds-desktop` class to the element.
     */
    'is-two-thirds-desktop'?: boolean
    /**
     * Add Bulma's `.is-half-desktop` class to the element.
     */
    'is-half-desktop'?: boolean
    /**
     * Add Bulma's `.is-one-third-desktop` class to the element.
     */
    'is-one-third-desktop'?: boolean
    /**
     * Add Bulma's `.is-one-quarter-desktop` class to the element.
     */
    'is-one-quarter-desktop'?: boolean
    /**
     * Add Bulma's `.is-one-fifth-desktop` class to the element.
     */
    'is-one-fifth-desktop'?: boolean
    /**
     * Add Bulma's `.is-two-fifths-desktop` class to the element.
     */
    'is-two-fifths-desktop'?: boolean
    /**
     * Add Bulma's `.is-three-fifths-desktop` class to the element.
     */
    'is-three-fifths-desktop'?: boolean
    /**
     * Add Bulma's `.is-four-fifths-desktop` class to the element.
     */
    'is-four-fifths-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-desktop` class to the element.
     */
    'is-offset-three-quarters-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-desktop` class to the element.
     */
    'is-offset-two-thirds-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-half-desktop` class to the element.
     */
    'is-offset-half-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-desktop` class to the element.
     */
    'is-offset-one-third-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-desktop` class to the element.
     */
    'is-offset-one-quarter-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-desktop` class to the element.
     */
    'is-offset-one-fifth-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-desktop` class to the element.
     */
    'is-offset-two-fifths-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-desktop` class to the element.
     */
    'is-offset-three-fifths-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-desktop` class to the element.
     */
    'is-offset-four-fifths-desktop'?: boolean
    /**
     * Add Bulma's `.is-0-desktop` class to the element.
     */
    'is-0-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-0-desktop` class to the element.
     */
    'is-offset-0-desktop'?: boolean
    /**
     * Add Bulma's `.is-1-desktop` class to the element.
     */
    'is-1-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-1-desktop` class to the element.
     */
    'is-offset-1-desktop'?: boolean
    /**
     * Add Bulma's `.is-2-desktop` class to the element.
     */
    'is-2-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-2-desktop` class to the element.
     */
    'is-offset-2-desktop'?: boolean
    /**
     * Add Bulma's `.is-3-desktop` class to the element.
     */
    'is-3-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-3-desktop` class to the element.
     */
    'is-offset-3-desktop'?: boolean
    /**
     * Add Bulma's `.is-4-desktop` class to the element.
     */
    'is-4-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-4-desktop` class to the element.
     */
    'is-offset-4-desktop'?: boolean
    /**
     * Add Bulma's `.is-5-desktop` class to the element.
     */
    'is-5-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-5-desktop` class to the element.
     */
    'is-offset-5-desktop'?: boolean
    /**
     * Add Bulma's `.is-6-desktop` class to the element.
     */
    'is-6-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-6-desktop` class to the element.
     */
    'is-offset-6-desktop'?: boolean
    /**
     * Add Bulma's `.is-7-desktop` class to the element.
     */
    'is-7-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-7-desktop` class to the element.
     */
    'is-offset-7-desktop'?: boolean
    /**
     * Add Bulma's `.is-8-desktop` class to the element.
     */
    'is-8-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-8-desktop` class to the element.
     */
    'is-offset-8-desktop'?: boolean
    /**
     * Add Bulma's `.is-9-desktop` class to the element.
     */
    'is-9-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-9-desktop` class to the element.
     */
    'is-offset-9-desktop'?: boolean
    /**
     * Add Bulma's `.is-10-desktop` class to the element.
     */
    'is-10-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-10-desktop` class to the element.
     */
    'is-offset-10-desktop'?: boolean
    /**
     * Add Bulma's `.is-11-desktop` class to the element.
     */
    'is-11-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-11-desktop` class to the element.
     */
    'is-offset-11-desktop'?: boolean
    /**
     * Add Bulma's `.is-12-desktop` class to the element.
     */
    'is-12-desktop'?: boolean
    /**
     * Add Bulma's `.is-offset-12-desktop` class to the element.
     */
    'is-offset-12-desktop'?: boolean
    /**
     * Add Bulma's `.is-narrow-widescreen` class to the element.
     */
    'is-narrow-widescreen'?: boolean
    /**
     * Add Bulma's `.is-full-widescreen` class to the element.
     */
    'is-full-widescreen'?: boolean
    /**
     * Add Bulma's `.is-three-quarters-widescreen` class to the element.
     */
    'is-three-quarters-widescreen'?: boolean
    /**
     * Add Bulma's `.is-two-thirds-widescreen` class to the element.
     */
    'is-two-thirds-widescreen'?: boolean
    /**
     * Add Bulma's `.is-half-widescreen` class to the element.
     */
    'is-half-widescreen'?: boolean
    /**
     * Add Bulma's `.is-one-third-widescreen` class to the element.
     */
    'is-one-third-widescreen'?: boolean
    /**
     * Add Bulma's `.is-one-quarter-widescreen` class to the element.
     */
    'is-one-quarter-widescreen'?: boolean
    /**
     * Add Bulma's `.is-one-fifth-widescreen` class to the element.
     */
    'is-one-fifth-widescreen'?: boolean
    /**
     * Add Bulma's `.is-two-fifths-widescreen` class to the element.
     */
    'is-two-fifths-widescreen'?: boolean
    /**
     * Add Bulma's `.is-three-fifths-widescreen` class to the element.
     */
    'is-three-fifths-widescreen'?: boolean
    /**
     * Add Bulma's `.is-four-fifths-widescreen` class to the element.
     */
    'is-four-fifths-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-widescreen` class to the element.
     */
    'is-offset-three-quarters-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-widescreen` class to the element.
     */
    'is-offset-two-thirds-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-half-widescreen` class to the element.
     */
    'is-offset-half-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-widescreen` class to the element.
     */
    'is-offset-one-third-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-widescreen` class to the element.
     */
    'is-offset-one-quarter-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-widescreen` class to the element.
     */
    'is-offset-one-fifth-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-widescreen` class to the element.
     */
    'is-offset-two-fifths-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-widescreen` class to the element.
     */
    'is-offset-three-fifths-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-widescreen` class to the element.
     */
    'is-offset-four-fifths-widescreen'?: boolean
    /**
     * Add Bulma's `.is-0-widescreen` class to the element.
     */
    'is-0-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-0-widescreen` class to the element.
     */
    'is-offset-0-widescreen'?: boolean
    /**
     * Add Bulma's `.is-1-widescreen` class to the element.
     */
    'is-1-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-1-widescreen` class to the element.
     */
    'is-offset-1-widescreen'?: boolean
    /**
     * Add Bulma's `.is-2-widescreen` class to the element.
     */
    'is-2-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-2-widescreen` class to the element.
     */
    'is-offset-2-widescreen'?: boolean
    /**
     * Add Bulma's `.is-3-widescreen` class to the element.
     */
    'is-3-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-3-widescreen` class to the element.
     */
    'is-offset-3-widescreen'?: boolean
    /**
     * Add Bulma's `.is-4-widescreen` class to the element.
     */
    'is-4-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-4-widescreen` class to the element.
     */
    'is-offset-4-widescreen'?: boolean
    /**
     * Add Bulma's `.is-5-widescreen` class to the element.
     */
    'is-5-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-5-widescreen` class to the element.
     */
    'is-offset-5-widescreen'?: boolean
    /**
     * Add Bulma's `.is-6-widescreen` class to the element.
     */
    'is-6-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-6-widescreen` class to the element.
     */
    'is-offset-6-widescreen'?: boolean
    /**
     * Add Bulma's `.is-7-widescreen` class to the element.
     */
    'is-7-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-7-widescreen` class to the element.
     */
    'is-offset-7-widescreen'?: boolean
    /**
     * Add Bulma's `.is-8-widescreen` class to the element.
     */
    'is-8-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-8-widescreen` class to the element.
     */
    'is-offset-8-widescreen'?: boolean
    /**
     * Add Bulma's `.is-9-widescreen` class to the element.
     */
    'is-9-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-9-widescreen` class to the element.
     */
    'is-offset-9-widescreen'?: boolean
    /**
     * Add Bulma's `.is-10-widescreen` class to the element.
     */
    'is-10-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-10-widescreen` class to the element.
     */
    'is-offset-10-widescreen'?: boolean
    /**
     * Add Bulma's `.is-11-widescreen` class to the element.
     */
    'is-11-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-11-widescreen` class to the element.
     */
    'is-offset-11-widescreen'?: boolean
    /**
     * Add Bulma's `.is-12-widescreen` class to the element.
     */
    'is-12-widescreen'?: boolean
    /**
     * Add Bulma's `.is-offset-12-widescreen` class to the element.
     */
    'is-offset-12-widescreen'?: boolean
    /**
     * Add Bulma's `.is-narrow-fullhd` class to the element.
     */
    'is-narrow-fullhd'?: boolean
    /**
     * Add Bulma's `.is-full-fullhd` class to the element.
     */
    'is-full-fullhd'?: boolean
    /**
     * Add Bulma's `.is-three-quarters-fullhd` class to the element.
     */
    'is-three-quarters-fullhd'?: boolean
    /**
     * Add Bulma's `.is-two-thirds-fullhd` class to the element.
     */
    'is-two-thirds-fullhd'?: boolean
    /**
     * Add Bulma's `.is-half-fullhd` class to the element.
     */
    'is-half-fullhd'?: boolean
    /**
     * Add Bulma's `.is-one-third-fullhd` class to the element.
     */
    'is-one-third-fullhd'?: boolean
    /**
     * Add Bulma's `.is-one-quarter-fullhd` class to the element.
     */
    'is-one-quarter-fullhd'?: boolean
    /**
     * Add Bulma's `.is-one-fifth-fullhd` class to the element.
     */
    'is-one-fifth-fullhd'?: boolean
    /**
     * Add Bulma's `.is-two-fifths-fullhd` class to the element.
     */
    'is-two-fifths-fullhd'?: boolean
    /**
     * Add Bulma's `.is-three-fifths-fullhd` class to the element.
     */
    'is-three-fifths-fullhd'?: boolean
    /**
     * Add Bulma's `.is-four-fifths-fullhd` class to the element.
     */
    'is-four-fifths-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-fullhd` class to the element.
     */
    'is-offset-three-quarters-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-fullhd` class to the element.
     */
    'is-offset-two-thirds-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-half-fullhd` class to the element.
     */
    'is-offset-half-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-fullhd` class to the element.
     */
    'is-offset-one-third-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-fullhd` class to the element.
     */
    'is-offset-one-quarter-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-fullhd` class to the element.
     */
    'is-offset-one-fifth-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-fullhd` class to the element.
     */
    'is-offset-two-fifths-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-fullhd` class to the element.
     */
    'is-offset-three-fifths-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-fullhd` class to the element.
     */
    'is-offset-four-fifths-fullhd'?: boolean
    /**
     * Add Bulma's `.is-0-fullhd` class to the element.
     */
    'is-0-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-0-fullhd` class to the element.
     */
    'is-offset-0-fullhd'?: boolean
    /**
     * Add Bulma's `.is-1-fullhd` class to the element.
     */
    'is-1-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-1-fullhd` class to the element.
     */
    'is-offset-1-fullhd'?: boolean
    /**
     * Add Bulma's `.is-2-fullhd` class to the element.
     */
    'is-2-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-2-fullhd` class to the element.
     */
    'is-offset-2-fullhd'?: boolean
    /**
     * Add Bulma's `.is-3-fullhd` class to the element.
     */
    'is-3-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-3-fullhd` class to the element.
     */
    'is-offset-3-fullhd'?: boolean
    /**
     * Add Bulma's `.is-4-fullhd` class to the element.
     */
    'is-4-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-4-fullhd` class to the element.
     */
    'is-offset-4-fullhd'?: boolean
    /**
     * Add Bulma's `.is-5-fullhd` class to the element.
     */
    'is-5-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-5-fullhd` class to the element.
     */
    'is-offset-5-fullhd'?: boolean
    /**
     * Add Bulma's `.is-6-fullhd` class to the element.
     */
    'is-6-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-6-fullhd` class to the element.
     */
    'is-offset-6-fullhd'?: boolean
    /**
     * Add Bulma's `.is-7-fullhd` class to the element.
     */
    'is-7-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-7-fullhd` class to the element.
     */
    'is-offset-7-fullhd'?: boolean
    /**
     * Add Bulma's `.is-8-fullhd` class to the element.
     */
    'is-8-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-8-fullhd` class to the element.
     */
    'is-offset-8-fullhd'?: boolean
    /**
     * Add Bulma's `.is-9-fullhd` class to the element.
     */
    'is-9-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-9-fullhd` class to the element.
     */
    'is-offset-9-fullhd'?: boolean
    /**
     * Add Bulma's `.is-10-fullhd` class to the element.
     */
    'is-10-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-10-fullhd` class to the element.
     */
    'is-offset-10-fullhd'?: boolean
    /**
     * Add Bulma's `.is-11-fullhd` class to the element.
     */
    'is-11-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-11-fullhd` class to the element.
     */
    'is-offset-11-fullhd'?: boolean
    /**
     * Add Bulma's `.is-12-fullhd` class to the element.
     */
    'is-12-fullhd'?: boolean
    /**
     * Add Bulma's `.is-offset-12-fullhd` class to the element.
     */
    'is-offset-12-fullhd'?: boolean
    /**
     * Add Bulma's `.is-gapless` class to the element.
     */
    'is-gapless'?: boolean
    /**
     * Add Bulma's `.is-multiline` class to the element.
     */
    'is-multiline'?: boolean
    /**
     * Add Bulma's `.is-vcentered` class to the element.
     */
    'is-vcentered'?: boolean
    /**
     * Add Bulma's `.is-desktop` class to the element.
     */
    'is-desktop'?: boolean
    /**
     * Add Bulma's `.is-variable` class to the element.
     */
    'is-variable'?: boolean
    /**
     * Add Bulma's `.is-0-tablet-only` class to the element.
     */
    'is-0-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-0-desktop-only` class to the element.
     */
    'is-0-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-0-widescreen-only` class to the element.
     */
    'is-0-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-1-tablet-only` class to the element.
     */
    'is-1-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-1-desktop-only` class to the element.
     */
    'is-1-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-1-widescreen-only` class to the element.
     */
    'is-1-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-2-tablet-only` class to the element.
     */
    'is-2-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-2-desktop-only` class to the element.
     */
    'is-2-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-2-widescreen-only` class to the element.
     */
    'is-2-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-3-tablet-only` class to the element.
     */
    'is-3-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-3-desktop-only` class to the element.
     */
    'is-3-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-3-widescreen-only` class to the element.
     */
    'is-3-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-4-tablet-only` class to the element.
     */
    'is-4-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-4-desktop-only` class to the element.
     */
    'is-4-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-4-widescreen-only` class to the element.
     */
    'is-4-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-5-tablet-only` class to the element.
     */
    'is-5-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-5-desktop-only` class to the element.
     */
    'is-5-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-5-widescreen-only` class to the element.
     */
    'is-5-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-6-tablet-only` class to the element.
     */
    'is-6-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-6-desktop-only` class to the element.
     */
    'is-6-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-6-widescreen-only` class to the element.
     */
    'is-6-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-7-tablet-only` class to the element.
     */
    'is-7-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-7-desktop-only` class to the element.
     */
    'is-7-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-7-widescreen-only` class to the element.
     */
    'is-7-widescreen-only'?: boolean
    /**
     * Add Bulma's `.is-8-tablet-only` class to the element.
     */
    'is-8-tablet-only'?: boolean
    /**
     * Add Bulma's `.is-8-desktop-only` class to the element.
     */
    'is-8-desktop-only'?: boolean
    /**
     * Add Bulma's `.is-8-widescreen-only` class to the element.
     */
    'is-8-widescreen-only'?: boolean
    /**
     * Add Bulma's `.tile` class to the element.
     */
    tile?: boolean
    /**
     * Add Bulma's `.is-ancestor` class to the element.
     */
    'is-ancestor'?: boolean
    /**
     * Add Bulma's `.is-child` class to the element.
     */
    'is-child'?: boolean
    /**
     * Add Bulma's `.is-parent` class to the element.
     */
    'is-parent'?: boolean
    /**
     * Add Bulma's `.is-vertical` class to the element.
     */
    'is-vertical'?: boolean
    /**
     * Add Bulma's `.is-bold` class to the element.
     */
    'is-bold'?: boolean
    /**
     * Add Bulma's `.hero-body` class to the element.
     */
    'hero-body'?: boolean
    /**
     * Add Bulma's `.is-halfheight` class to the element.
     */
    'is-halfheight'?: boolean
    /**
     * Add Bulma's `.is-fullheight` class to the element.
     */
    'is-fullheight'?: boolean
    /**
     * Add Bulma's `.hero-buttons` class to the element.
     */
    'hero-buttons'?: boolean
    /**
     * Add Bulma's `.hero-head` class to the element.
     */
    'hero-head'?: boolean
    /**
     * Add Bulma's `.hero-foot` class to the element.
     */
    'hero-foot'?: boolean
    /**
     * Add Bulma's `.section` class to the element.
     */
    section?: boolean
    /**
     * Add Bulma's `.footer` class to the element.
     */
    footer?: boolean
    /**
     * Add Bulma's `.modal-close` class to the element. Alias for `modal-close` prop.
     */
    modalClose?: boolean
    /**
     * Add Bulma's `.is-unselectable` class to the element. Alias for `is-unselectable` prop.
     */
    isUnselectable?: boolean
    /**
     * Add Bulma's `.pagination-previous` class to the element. Alias for `pagination-previous` prop.
     */
    paginationPrevious?: boolean
    /**
     * Add Bulma's `.pagination-next` class to the element. Alias for `pagination-next` prop.
     */
    paginationNext?: boolean
    /**
     * Add Bulma's `.pagination-link` class to the element. Alias for `pagination-link` prop.
     */
    paginationLink?: boolean
    /**
     * Add Bulma's `.pagination-ellipsis` class to the element. Alias for `pagination-ellipsis` prop.
     */
    paginationEllipsis?: boolean
    /**
     * Add Bulma's `.is-multiple` class to the element. Alias for `is-multiple` prop.
     */
    isMultiple?: boolean
    /**
     * Add Bulma's `.is-loading` class to the element. Alias for `is-loading` prop.
     */
    isLoading?: boolean
    /**
     * Add Bulma's `.navbar-link` class to the element. Alias for `navbar-link` prop.
     */
    navbarLink?: boolean
    /**
     * Add Bulma's `.is-arrowless` class to the element. Alias for `is-arrowless` prop.
     */
    isArrowless?: boolean
    /**
     * Add Bulma's `.table-container` class to the element. Alias for `table-container` prop.
     */
    tableContainer?: boolean
    /**
     * Add Bulma's `.is-small` class to the element. Alias for `is-small` prop.
     */
    isSmall?: boolean
    /**
     * Add Bulma's `.is-medium` class to the element. Alias for `is-medium` prop.
     */
    isMedium?: boolean
    /**
     * Add Bulma's `.is-large` class to the element. Alias for `is-large` prop.
     */
    isLarge?: boolean
    /**
     * Add Bulma's `.is-overlay` class to the element. Alias for `is-overlay` prop.
     */
    isOverlay?: boolean
    /**
     * Add Bulma's `.is-square` class to the element. Alias for `is-square` prop.
     */
    isSquare?: boolean
    /**
     * Add Bulma's `.has-ratio` class to the element. Alias for `has-ratio` prop.
     */
    hasRatio?: boolean
    /**
     * Add Bulma's `.is-1by1` class to the element. Alias for `is-1by1` prop.
     */
    is1by1?: boolean
    /**
     * Add Bulma's `.is-5by4` class to the element. Alias for `is-5by4` prop.
     */
    is5by4?: boolean
    /**
     * Add Bulma's `.is-4by3` class to the element. Alias for `is-4by3` prop.
     */
    is4by3?: boolean
    /**
     * Add Bulma's `.is-3by2` class to the element. Alias for `is-3by2` prop.
     */
    is3by2?: boolean
    /**
     * Add Bulma's `.is-5by3` class to the element. Alias for `is-5by3` prop.
     */
    is5by3?: boolean
    /**
     * Add Bulma's `.is-16by9` class to the element. Alias for `is-16by9` prop.
     */
    is16by9?: boolean
    /**
     * Add Bulma's `.is-2by1` class to the element. Alias for `is-2by1` prop.
     */
    is2by1?: boolean
    /**
     * Add Bulma's `.is-3by1` class to the element. Alias for `is-3by1` prop.
     */
    is3by1?: boolean
    /**
     * Add Bulma's `.is-4by5` class to the element. Alias for `is-4by5` prop.
     */
    is4by5?: boolean
    /**
     * Add Bulma's `.is-3by4` class to the element. Alias for `is-3by4` prop.
     */
    is3by4?: boolean
    /**
     * Add Bulma's `.is-2by3` class to the element. Alias for `is-2by3` prop.
     */
    is2by3?: boolean
    /**
     * Add Bulma's `.is-3by5` class to the element. Alias for `is-3by5` prop.
     */
    is3by5?: boolean
    /**
     * Add Bulma's `.is-9by16` class to the element. Alias for `is-9by16` prop.
     */
    is9by16?: boolean
    /**
     * Add Bulma's `.is-1by2` class to the element. Alias for `is-1by2` prop.
     */
    is1by2?: boolean
    /**
     * Add Bulma's `.is-1by3` class to the element. Alias for `is-1by3` prop.
     */
    is1by3?: boolean
    /**
     * Add Bulma's `.modal-background` class to the element. Alias for `modal-background` prop.
     */
    modalBackground?: boolean
    /**
     * Add Bulma's `.hero-video` class to the element. Alias for `hero-video` prop.
     */
    heroVideo?: boolean
    /**
     * Add Bulma's `.file-cta` class to the element. Alias for `file-cta` prop.
     */
    fileCta?: boolean
    /**
     * Add Bulma's `.file-name` class to the element. Alias for `file-name` prop.
     */
    fileName?: boolean
    /**
     * Add Bulma's `.is-focused` class to the element. Alias for `is-focused` prop.
     */
    isFocused?: boolean
    /**
     * Add Bulma's `.is-active` class to the element. Alias for `is-active` prop.
     */
    isActive?: boolean
    /**
     * Add Bulma's `.is-clearfix` class to the element. Alias for `is-clearfix` prop.
     */
    isClearfix?: boolean
    /**
     * Add Bulma's `.is-pulled-left` class to the element. Alias for `is-pulled-left` prop.
     */
    isPulledLeft?: boolean
    /**
     * Add Bulma's `.is-pulled-right` class to the element. Alias for `is-pulled-right` prop.
     */
    isPulledRight?: boolean
    /**
     * Add Bulma's `.is-clipped` class to the element. Alias for `is-clipped` prop.
     */
    isClipped?: boolean
    /**
     * Add Bulma's `.is-size-1` class to the element. Alias for `is-size-1` prop.
     */
    isSize1?: boolean
    /**
     * Add Bulma's `.is-size-2` class to the element. Alias for `is-size-2` prop.
     */
    isSize2?: boolean
    /**
     * Add Bulma's `.is-size-3` class to the element. Alias for `is-size-3` prop.
     */
    isSize3?: boolean
    /**
     * Add Bulma's `.is-size-4` class to the element. Alias for `is-size-4` prop.
     */
    isSize4?: boolean
    /**
     * Add Bulma's `.is-size-5` class to the element. Alias for `is-size-5` prop.
     */
    isSize5?: boolean
    /**
     * Add Bulma's `.is-size-6` class to the element. Alias for `is-size-6` prop.
     */
    isSize6?: boolean
    /**
     * Add Bulma's `.is-size-7` class to the element. Alias for `is-size-7` prop.
     */
    isSize7?: boolean
    /**
     * Add Bulma's `.is-size-1-mobile` class to the element. Alias for `is-size-1-mobile` prop.
     */
    isSize1Mobile?: boolean
    /**
     * Add Bulma's `.is-size-2-mobile` class to the element. Alias for `is-size-2-mobile` prop.
     */
    isSize2Mobile?: boolean
    /**
     * Add Bulma's `.is-size-3-mobile` class to the element. Alias for `is-size-3-mobile` prop.
     */
    isSize3Mobile?: boolean
    /**
     * Add Bulma's `.is-size-4-mobile` class to the element. Alias for `is-size-4-mobile` prop.
     */
    isSize4Mobile?: boolean
    /**
     * Add Bulma's `.is-size-5-mobile` class to the element. Alias for `is-size-5-mobile` prop.
     */
    isSize5Mobile?: boolean
    /**
     * Add Bulma's `.is-size-6-mobile` class to the element. Alias for `is-size-6-mobile` prop.
     */
    isSize6Mobile?: boolean
    /**
     * Add Bulma's `.is-size-7-mobile` class to the element. Alias for `is-size-7-mobile` prop.
     */
    isSize7Mobile?: boolean
    /**
     * Add Bulma's `.is-size-1-tablet` class to the element. Alias for `is-size-1-tablet` prop.
     */
    isSize1Tablet?: boolean
    /**
     * Add Bulma's `.is-size-2-tablet` class to the element. Alias for `is-size-2-tablet` prop.
     */
    isSize2Tablet?: boolean
    /**
     * Add Bulma's `.is-size-3-tablet` class to the element. Alias for `is-size-3-tablet` prop.
     */
    isSize3Tablet?: boolean
    /**
     * Add Bulma's `.is-size-4-tablet` class to the element. Alias for `is-size-4-tablet` prop.
     */
    isSize4Tablet?: boolean
    /**
     * Add Bulma's `.is-size-5-tablet` class to the element. Alias for `is-size-5-tablet` prop.
     */
    isSize5Tablet?: boolean
    /**
     * Add Bulma's `.is-size-6-tablet` class to the element. Alias for `is-size-6-tablet` prop.
     */
    isSize6Tablet?: boolean
    /**
     * Add Bulma's `.is-size-7-tablet` class to the element. Alias for `is-size-7-tablet` prop.
     */
    isSize7Tablet?: boolean
    /**
     * Add Bulma's `.is-size-1-touch` class to the element. Alias for `is-size-1-touch` prop.
     */
    isSize1Touch?: boolean
    /**
     * Add Bulma's `.is-size-2-touch` class to the element. Alias for `is-size-2-touch` prop.
     */
    isSize2Touch?: boolean
    /**
     * Add Bulma's `.is-size-3-touch` class to the element. Alias for `is-size-3-touch` prop.
     */
    isSize3Touch?: boolean
    /**
     * Add Bulma's `.is-size-4-touch` class to the element. Alias for `is-size-4-touch` prop.
     */
    isSize4Touch?: boolean
    /**
     * Add Bulma's `.is-size-5-touch` class to the element. Alias for `is-size-5-touch` prop.
     */
    isSize5Touch?: boolean
    /**
     * Add Bulma's `.is-size-6-touch` class to the element. Alias for `is-size-6-touch` prop.
     */
    isSize6Touch?: boolean
    /**
     * Add Bulma's `.is-size-7-touch` class to the element. Alias for `is-size-7-touch` prop.
     */
    isSize7Touch?: boolean
    /**
     * Add Bulma's `.is-size-1-desktop` class to the element. Alias for `is-size-1-desktop` prop.
     */
    isSize1Desktop?: boolean
    /**
     * Add Bulma's `.is-size-2-desktop` class to the element. Alias for `is-size-2-desktop` prop.
     */
    isSize2Desktop?: boolean
    /**
     * Add Bulma's `.is-size-3-desktop` class to the element. Alias for `is-size-3-desktop` prop.
     */
    isSize3Desktop?: boolean
    /**
     * Add Bulma's `.is-size-4-desktop` class to the element. Alias for `is-size-4-desktop` prop.
     */
    isSize4Desktop?: boolean
    /**
     * Add Bulma's `.is-size-5-desktop` class to the element. Alias for `is-size-5-desktop` prop.
     */
    isSize5Desktop?: boolean
    /**
     * Add Bulma's `.is-size-6-desktop` class to the element. Alias for `is-size-6-desktop` prop.
     */
    isSize6Desktop?: boolean
    /**
     * Add Bulma's `.is-size-7-desktop` class to the element. Alias for `is-size-7-desktop` prop.
     */
    isSize7Desktop?: boolean
    /**
     * Add Bulma's `.is-size-1-widescreen` class to the element. Alias for `is-size-1-widescreen` prop.
     */
    isSize1Widescreen?: boolean
    /**
     * Add Bulma's `.is-size-2-widescreen` class to the element. Alias for `is-size-2-widescreen` prop.
     */
    isSize2Widescreen?: boolean
    /**
     * Add Bulma's `.is-size-3-widescreen` class to the element. Alias for `is-size-3-widescreen` prop.
     */
    isSize3Widescreen?: boolean
    /**
     * Add Bulma's `.is-size-4-widescreen` class to the element. Alias for `is-size-4-widescreen` prop.
     */
    isSize4Widescreen?: boolean
    /**
     * Add Bulma's `.is-size-5-widescreen` class to the element. Alias for `is-size-5-widescreen` prop.
     */
    isSize5Widescreen?: boolean
    /**
     * Add Bulma's `.is-size-6-widescreen` class to the element. Alias for `is-size-6-widescreen` prop.
     */
    isSize6Widescreen?: boolean
    /**
     * Add Bulma's `.is-size-7-widescreen` class to the element. Alias for `is-size-7-widescreen` prop.
     */
    isSize7Widescreen?: boolean
    /**
     * Add Bulma's `.is-size-1-fullhd` class to the element. Alias for `is-size-1-fullhd` prop.
     */
    isSize1Fullhd?: boolean
    /**
     * Add Bulma's `.is-size-2-fullhd` class to the element. Alias for `is-size-2-fullhd` prop.
     */
    isSize2Fullhd?: boolean
    /**
     * Add Bulma's `.is-size-3-fullhd` class to the element. Alias for `is-size-3-fullhd` prop.
     */
    isSize3Fullhd?: boolean
    /**
     * Add Bulma's `.is-size-4-fullhd` class to the element. Alias for `is-size-4-fullhd` prop.
     */
    isSize4Fullhd?: boolean
    /**
     * Add Bulma's `.is-size-5-fullhd` class to the element. Alias for `is-size-5-fullhd` prop.
     */
    isSize5Fullhd?: boolean
    /**
     * Add Bulma's `.is-size-6-fullhd` class to the element. Alias for `is-size-6-fullhd` prop.
     */
    isSize6Fullhd?: boolean
    /**
     * Add Bulma's `.is-size-7-fullhd` class to the element. Alias for `is-size-7-fullhd` prop.
     */
    isSize7Fullhd?: boolean
    /**
     * Add Bulma's `.has-text-centered` class to the element. Alias for `has-text-centered` prop.
     */
    hasTextCentered?: boolean
    /**
     * Add Bulma's `.has-text-justified` class to the element. Alias for `has-text-justified` prop.
     */
    hasTextJustified?: boolean
    /**
     * Add Bulma's `.has-text-left` class to the element. Alias for `has-text-left` prop.
     */
    hasTextLeft?: boolean
    /**
     * Add Bulma's `.has-text-right` class to the element. Alias for `has-text-right` prop.
     */
    hasTextRight?: boolean
    /**
     * Add Bulma's `.has-text-centered-mobile` class to the element. Alias for `has-text-centered-mobile` prop.
     */
    hasTextCenteredMobile?: boolean
    /**
     * Add Bulma's `.has-text-centered-tablet` class to the element. Alias for `has-text-centered-tablet` prop.
     */
    hasTextCenteredTablet?: boolean
    /**
     * Add Bulma's `.has-text-centered-tablet-only` class to the element. Alias for `has-text-centered-tablet-only` prop.
     */
    hasTextCenteredTabletOnly?: boolean
    /**
     * Add Bulma's `.has-text-centered-touch` class to the element. Alias for `has-text-centered-touch` prop.
     */
    hasTextCenteredTouch?: boolean
    /**
     * Add Bulma's `.has-text-centered-desktop` class to the element. Alias for `has-text-centered-desktop` prop.
     */
    hasTextCenteredDesktop?: boolean
    /**
     * Add Bulma's `.has-text-centered-desktop-only` class to the element. Alias for `has-text-centered-desktop-only` prop.
     */
    hasTextCenteredDesktopOnly?: boolean
    /**
     * Add Bulma's `.has-text-centered-widescreen` class to the element. Alias for `has-text-centered-widescreen` prop.
     */
    hasTextCenteredWidescreen?: boolean
    /**
     * Add Bulma's `.has-text-centered-widescreen-only` class to the element. Alias for `has-text-centered-widescreen-only` prop.
     */
    hasTextCenteredWidescreenOnly?: boolean
    /**
     * Add Bulma's `.has-text-centered-fullhd` class to the element. Alias for `has-text-centered-fullhd` prop.
     */
    hasTextCenteredFullhd?: boolean
    /**
     * Add Bulma's `.has-text-justified-mobile` class to the element. Alias for `has-text-justified-mobile` prop.
     */
    hasTextJustifiedMobile?: boolean
    /**
     * Add Bulma's `.has-text-justified-tablet` class to the element. Alias for `has-text-justified-tablet` prop.
     */
    hasTextJustifiedTablet?: boolean
    /**
     * Add Bulma's `.has-text-justified-tablet-only` class to the element. Alias for `has-text-justified-tablet-only` prop.
     */
    hasTextJustifiedTabletOnly?: boolean
    /**
     * Add Bulma's `.has-text-justified-touch` class to the element. Alias for `has-text-justified-touch` prop.
     */
    hasTextJustifiedTouch?: boolean
    /**
     * Add Bulma's `.has-text-justified-desktop` class to the element. Alias for `has-text-justified-desktop` prop.
     */
    hasTextJustifiedDesktop?: boolean
    /**
     * Add Bulma's `.has-text-justified-desktop-only` class to the element. Alias for `has-text-justified-desktop-only` prop.
     */
    hasTextJustifiedDesktopOnly?: boolean
    /**
     * Add Bulma's `.has-text-justified-widescreen` class to the element. Alias for `has-text-justified-widescreen` prop.
     */
    hasTextJustifiedWidescreen?: boolean
    /**
     * Add Bulma's `.has-text-justified-widescreen-only` class to the element. Alias for `has-text-justified-widescreen-only` prop.
     */
    hasTextJustifiedWidescreenOnly?: boolean
    /**
     * Add Bulma's `.has-text-justified-fullhd` class to the element. Alias for `has-text-justified-fullhd` prop.
     */
    hasTextJustifiedFullhd?: boolean
    /**
     * Add Bulma's `.has-text-left-mobile` class to the element. Alias for `has-text-left-mobile` prop.
     */
    hasTextLeftMobile?: boolean
    /**
     * Add Bulma's `.has-text-left-tablet` class to the element. Alias for `has-text-left-tablet` prop.
     */
    hasTextLeftTablet?: boolean
    /**
     * Add Bulma's `.has-text-left-tablet-only` class to the element. Alias for `has-text-left-tablet-only` prop.
     */
    hasTextLeftTabletOnly?: boolean
    /**
     * Add Bulma's `.has-text-left-touch` class to the element. Alias for `has-text-left-touch` prop.
     */
    hasTextLeftTouch?: boolean
    /**
     * Add Bulma's `.has-text-left-desktop` class to the element. Alias for `has-text-left-desktop` prop.
     */
    hasTextLeftDesktop?: boolean
    /**
     * Add Bulma's `.has-text-left-desktop-only` class to the element. Alias for `has-text-left-desktop-only` prop.
     */
    hasTextLeftDesktopOnly?: boolean
    /**
     * Add Bulma's `.has-text-left-widescreen` class to the element. Alias for `has-text-left-widescreen` prop.
     */
    hasTextLeftWidescreen?: boolean
    /**
     * Add Bulma's `.has-text-left-widescreen-only` class to the element. Alias for `has-text-left-widescreen-only` prop.
     */
    hasTextLeftWidescreenOnly?: boolean
    /**
     * Add Bulma's `.has-text-left-fullhd` class to the element. Alias for `has-text-left-fullhd` prop.
     */
    hasTextLeftFullhd?: boolean
    /**
     * Add Bulma's `.has-text-right-mobile` class to the element. Alias for `has-text-right-mobile` prop.
     */
    hasTextRightMobile?: boolean
    /**
     * Add Bulma's `.has-text-right-tablet` class to the element. Alias for `has-text-right-tablet` prop.
     */
    hasTextRightTablet?: boolean
    /**
     * Add Bulma's `.has-text-right-tablet-only` class to the element. Alias for `has-text-right-tablet-only` prop.
     */
    hasTextRightTabletOnly?: boolean
    /**
     * Add Bulma's `.has-text-right-touch` class to the element. Alias for `has-text-right-touch` prop.
     */
    hasTextRightTouch?: boolean
    /**
     * Add Bulma's `.has-text-right-desktop` class to the element. Alias for `has-text-right-desktop` prop.
     */
    hasTextRightDesktop?: boolean
    /**
     * Add Bulma's `.has-text-right-desktop-only` class to the element. Alias for `has-text-right-desktop-only` prop.
     */
    hasTextRightDesktopOnly?: boolean
    /**
     * Add Bulma's `.has-text-right-widescreen` class to the element. Alias for `has-text-right-widescreen` prop.
     */
    hasTextRightWidescreen?: boolean
    /**
     * Add Bulma's `.has-text-right-widescreen-only` class to the element. Alias for `has-text-right-widescreen-only` prop.
     */
    hasTextRightWidescreenOnly?: boolean
    /**
     * Add Bulma's `.has-text-right-fullhd` class to the element. Alias for `has-text-right-fullhd` prop.
     */
    hasTextRightFullhd?: boolean
    /**
     * Add Bulma's `.is-capitalized` class to the element. Alias for `is-capitalized` prop.
     */
    isCapitalized?: boolean
    /**
     * Add Bulma's `.is-lowercase` class to the element. Alias for `is-lowercase` prop.
     */
    isLowercase?: boolean
    /**
     * Add Bulma's `.is-uppercase` class to the element. Alias for `is-uppercase` prop.
     */
    isUppercase?: boolean
    /**
     * Add Bulma's `.is-italic` class to the element. Alias for `is-italic` prop.
     */
    isItalic?: boolean
    /**
     * Add Bulma's `.has-text-white` class to the element. Alias for `has-text-white` prop.
     */
    hasTextWhite?: boolean
    /**
     * Add Bulma's `.has-background-white` class to the element. Alias for `has-background-white` prop.
     */
    hasBackgroundWhite?: boolean
    /**
     * Add Bulma's `.has-text-black` class to the element. Alias for `has-text-black` prop.
     */
    hasTextBlack?: boolean
    /**
     * Add Bulma's `.has-background-black` class to the element. Alias for `has-background-black` prop.
     */
    hasBackgroundBlack?: boolean
    /**
     * Add Bulma's `.has-text-light` class to the element. Alias for `has-text-light` prop.
     */
    hasTextLight?: boolean
    /**
     * Add Bulma's `.has-background-light` class to the element. Alias for `has-background-light` prop.
     */
    hasBackgroundLight?: boolean
    /**
     * Add Bulma's `.has-text-dark` class to the element. Alias for `has-text-dark` prop.
     */
    hasTextDark?: boolean
    /**
     * Add Bulma's `.has-background-dark` class to the element. Alias for `has-background-dark` prop.
     */
    hasBackgroundDark?: boolean
    /**
     * Add Bulma's `.has-text-primary` class to the element. Alias for `has-text-primary` prop.
     */
    hasTextPrimary?: boolean
    /**
     * Add Bulma's `.has-background-primary` class to the element. Alias for `has-background-primary` prop.
     */
    hasBackgroundPrimary?: boolean
    /**
     * Add Bulma's `.has-text-link` class to the element. Alias for `has-text-link` prop.
     */
    hasTextLink?: boolean
    /**
     * Add Bulma's `.has-background-link` class to the element. Alias for `has-background-link` prop.
     */
    hasBackgroundLink?: boolean
    /**
     * Add Bulma's `.has-text-info` class to the element. Alias for `has-text-info` prop.
     */
    hasTextInfo?: boolean
    /**
     * Add Bulma's `.has-background-info` class to the element. Alias for `has-background-info` prop.
     */
    hasBackgroundInfo?: boolean
    /**
     * Add Bulma's `.has-text-success` class to the element. Alias for `has-text-success` prop.
     */
    hasTextSuccess?: boolean
    /**
     * Add Bulma's `.has-background-success` class to the element. Alias for `has-background-success` prop.
     */
    hasBackgroundSuccess?: boolean
    /**
     * Add Bulma's `.has-text-warning` class to the element. Alias for `has-text-warning` prop.
     */
    hasTextWarning?: boolean
    /**
     * Add Bulma's `.has-background-warning` class to the element. Alias for `has-background-warning` prop.
     */
    hasBackgroundWarning?: boolean
    /**
     * Add Bulma's `.has-text-danger` class to the element. Alias for `has-text-danger` prop.
     */
    hasTextDanger?: boolean
    /**
     * Add Bulma's `.has-background-danger` class to the element. Alias for `has-background-danger` prop.
     */
    hasBackgroundDanger?: boolean
    /**
     * Add Bulma's `.has-text-black-bis` class to the element. Alias for `has-text-black-bis` prop.
     */
    hasTextBlackBis?: boolean
    /**
     * Add Bulma's `.has-background-black-bis` class to the element. Alias for `has-background-black-bis` prop.
     */
    hasBackgroundBlackBis?: boolean
    /**
     * Add Bulma's `.has-text-black-ter` class to the element. Alias for `has-text-black-ter` prop.
     */
    hasTextBlackTer?: boolean
    /**
     * Add Bulma's `.has-background-black-ter` class to the element. Alias for `has-background-black-ter` prop.
     */
    hasBackgroundBlackTer?: boolean
    /**
     * Add Bulma's `.has-text-grey-darker` class to the element. Alias for `has-text-grey-darker` prop.
     */
    hasTextGreyDarker?: boolean
    /**
     * Add Bulma's `.has-background-grey-darker` class to the element. Alias for `has-background-grey-darker` prop.
     */
    hasBackgroundGreyDarker?: boolean
    /**
     * Add Bulma's `.has-text-grey-dark` class to the element. Alias for `has-text-grey-dark` prop.
     */
    hasTextGreyDark?: boolean
    /**
     * Add Bulma's `.has-background-grey-dark` class to the element. Alias for `has-background-grey-dark` prop.
     */
    hasBackgroundGreyDark?: boolean
    /**
     * Add Bulma's `.has-text-grey` class to the element. Alias for `has-text-grey` prop.
     */
    hasTextGrey?: boolean
    /**
     * Add Bulma's `.has-background-grey` class to the element. Alias for `has-background-grey` prop.
     */
    hasBackgroundGrey?: boolean
    /**
     * Add Bulma's `.has-text-grey-light` class to the element. Alias for `has-text-grey-light` prop.
     */
    hasTextGreyLight?: boolean
    /**
     * Add Bulma's `.has-background-grey-light` class to the element. Alias for `has-background-grey-light` prop.
     */
    hasBackgroundGreyLight?: boolean
    /**
     * Add Bulma's `.has-text-grey-lighter` class to the element. Alias for `has-text-grey-lighter` prop.
     */
    hasTextGreyLighter?: boolean
    /**
     * Add Bulma's `.has-background-grey-lighter` class to the element. Alias for `has-background-grey-lighter` prop.
     */
    hasBackgroundGreyLighter?: boolean
    /**
     * Add Bulma's `.has-text-white-ter` class to the element. Alias for `has-text-white-ter` prop.
     */
    hasTextWhiteTer?: boolean
    /**
     * Add Bulma's `.has-background-white-ter` class to the element. Alias for `has-background-white-ter` prop.
     */
    hasBackgroundWhiteTer?: boolean
    /**
     * Add Bulma's `.has-text-white-bis` class to the element. Alias for `has-text-white-bis` prop.
     */
    hasTextWhiteBis?: boolean
    /**
     * Add Bulma's `.has-background-white-bis` class to the element. Alias for `has-background-white-bis` prop.
     */
    hasBackgroundWhiteBis?: boolean
    /**
     * Add Bulma's `.has-text-weight-light` class to the element. Alias for `has-text-weight-light` prop.
     */
    hasTextWeightLight?: boolean
    /**
     * Add Bulma's `.has-text-weight-normal` class to the element. Alias for `has-text-weight-normal` prop.
     */
    hasTextWeightNormal?: boolean
    /**
     * Add Bulma's `.has-text-weight-medium` class to the element. Alias for `has-text-weight-medium` prop.
     */
    hasTextWeightMedium?: boolean
    /**
     * Add Bulma's `.has-text-weight-semibold` class to the element. Alias for `has-text-weight-semibold` prop.
     */
    hasTextWeightSemibold?: boolean
    /**
     * Add Bulma's `.has-text-weight-bold` class to the element. Alias for `has-text-weight-bold` prop.
     */
    hasTextWeightBold?: boolean
    /**
     * Add Bulma's `.is-family-primary` class to the element. Alias for `is-family-primary` prop.
     */
    isFamilyPrimary?: boolean
    /**
     * Add Bulma's `.is-family-secondary` class to the element. Alias for `is-family-secondary` prop.
     */
    isFamilySecondary?: boolean
    /**
     * Add Bulma's `.is-family-sans-serif` class to the element. Alias for `is-family-sans-serif` prop.
     */
    isFamilySansSerif?: boolean
    /**
     * Add Bulma's `.is-family-monospace` class to the element. Alias for `is-family-monospace` prop.
     */
    isFamilyMonospace?: boolean
    /**
     * Add Bulma's `.is-family-code` class to the element. Alias for `is-family-code` prop.
     */
    isFamilyCode?: boolean
    /**
     * Add Bulma's `.is-block` class to the element. Alias for `is-block` prop.
     */
    isBlock?: boolean
    /**
     * Add Bulma's `.is-block-mobile` class to the element. Alias for `is-block-mobile` prop.
     */
    isBlockMobile?: boolean
    /**
     * Add Bulma's `.is-block-tablet` class to the element. Alias for `is-block-tablet` prop.
     */
    isBlockTablet?: boolean
    /**
     * Add Bulma's `.is-block-tablet-only` class to the element. Alias for `is-block-tablet-only` prop.
     */
    isBlockTabletOnly?: boolean
    /**
     * Add Bulma's `.is-block-touch` class to the element. Alias for `is-block-touch` prop.
     */
    isBlockTouch?: boolean
    /**
     * Add Bulma's `.is-block-desktop` class to the element. Alias for `is-block-desktop` prop.
     */
    isBlockDesktop?: boolean
    /**
     * Add Bulma's `.is-block-desktop-only` class to the element. Alias for `is-block-desktop-only` prop.
     */
    isBlockDesktopOnly?: boolean
    /**
     * Add Bulma's `.is-block-widescreen` class to the element. Alias for `is-block-widescreen` prop.
     */
    isBlockWidescreen?: boolean
    /**
     * Add Bulma's `.is-block-widescreen-only` class to the element. Alias for `is-block-widescreen-only` prop.
     */
    isBlockWidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-block-fullhd` class to the element. Alias for `is-block-fullhd` prop.
     */
    isBlockFullhd?: boolean
    /**
     * Add Bulma's `.is-flex` class to the element. Alias for `is-flex` prop.
     */
    isFlex?: boolean
    /**
     * Add Bulma's `.is-flex-mobile` class to the element. Alias for `is-flex-mobile` prop.
     */
    isFlexMobile?: boolean
    /**
     * Add Bulma's `.is-flex-tablet` class to the element. Alias for `is-flex-tablet` prop.
     */
    isFlexTablet?: boolean
    /**
     * Add Bulma's `.is-flex-tablet-only` class to the element. Alias for `is-flex-tablet-only` prop.
     */
    isFlexTabletOnly?: boolean
    /**
     * Add Bulma's `.is-flex-touch` class to the element. Alias for `is-flex-touch` prop.
     */
    isFlexTouch?: boolean
    /**
     * Add Bulma's `.is-flex-desktop` class to the element. Alias for `is-flex-desktop` prop.
     */
    isFlexDesktop?: boolean
    /**
     * Add Bulma's `.is-flex-desktop-only` class to the element. Alias for `is-flex-desktop-only` prop.
     */
    isFlexDesktopOnly?: boolean
    /**
     * Add Bulma's `.is-flex-widescreen` class to the element. Alias for `is-flex-widescreen` prop.
     */
    isFlexWidescreen?: boolean
    /**
     * Add Bulma's `.is-flex-widescreen-only` class to the element. Alias for `is-flex-widescreen-only` prop.
     */
    isFlexWidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-flex-fullhd` class to the element. Alias for `is-flex-fullhd` prop.
     */
    isFlexFullhd?: boolean
    /**
     * Add Bulma's `.is-inline` class to the element. Alias for `is-inline` prop.
     */
    isInline?: boolean
    /**
     * Add Bulma's `.is-inline-mobile` class to the element. Alias for `is-inline-mobile` prop.
     */
    isInlineMobile?: boolean
    /**
     * Add Bulma's `.is-inline-tablet` class to the element. Alias for `is-inline-tablet` prop.
     */
    isInlineTablet?: boolean
    /**
     * Add Bulma's `.is-inline-tablet-only` class to the element. Alias for `is-inline-tablet-only` prop.
     */
    isInlineTabletOnly?: boolean
    /**
     * Add Bulma's `.is-inline-touch` class to the element. Alias for `is-inline-touch` prop.
     */
    isInlineTouch?: boolean
    /**
     * Add Bulma's `.is-inline-desktop` class to the element. Alias for `is-inline-desktop` prop.
     */
    isInlineDesktop?: boolean
    /**
     * Add Bulma's `.is-inline-desktop-only` class to the element. Alias for `is-inline-desktop-only` prop.
     */
    isInlineDesktopOnly?: boolean
    /**
     * Add Bulma's `.is-inline-widescreen` class to the element. Alias for `is-inline-widescreen` prop.
     */
    isInlineWidescreen?: boolean
    /**
     * Add Bulma's `.is-inline-widescreen-only` class to the element. Alias for `is-inline-widescreen-only` prop.
     */
    isInlineWidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-inline-fullhd` class to the element. Alias for `is-inline-fullhd` prop.
     */
    isInlineFullhd?: boolean
    /**
     * Add Bulma's `.is-inline-block` class to the element. Alias for `is-inline-block` prop.
     */
    isInlineBlock?: boolean
    /**
     * Add Bulma's `.is-inline-block-mobile` class to the element. Alias for `is-inline-block-mobile` prop.
     */
    isInlineBlockMobile?: boolean
    /**
     * Add Bulma's `.is-inline-block-tablet` class to the element. Alias for `is-inline-block-tablet` prop.
     */
    isInlineBlockTablet?: boolean
    /**
     * Add Bulma's `.is-inline-block-tablet-only` class to the element. Alias for `is-inline-block-tablet-only` prop.
     */
    isInlineBlockTabletOnly?: boolean
    /**
     * Add Bulma's `.is-inline-block-touch` class to the element. Alias for `is-inline-block-touch` prop.
     */
    isInlineBlockTouch?: boolean
    /**
     * Add Bulma's `.is-inline-block-desktop` class to the element. Alias for `is-inline-block-desktop` prop.
     */
    isInlineBlockDesktop?: boolean
    /**
     * Add Bulma's `.is-inline-block-desktop-only` class to the element. Alias for `is-inline-block-desktop-only` prop.
     */
    isInlineBlockDesktopOnly?: boolean
    /**
     * Add Bulma's `.is-inline-block-widescreen` class to the element. Alias for `is-inline-block-widescreen` prop.
     */
    isInlineBlockWidescreen?: boolean
    /**
     * Add Bulma's `.is-inline-block-widescreen-only` class to the element. Alias for `is-inline-block-widescreen-only` prop.
     */
    isInlineBlockWidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-inline-block-fullhd` class to the element. Alias for `is-inline-block-fullhd` prop.
     */
    isInlineBlockFullhd?: boolean
    /**
     * Add Bulma's `.is-inline-flex` class to the element. Alias for `is-inline-flex` prop.
     */
    isInlineFlex?: boolean
    /**
     * Add Bulma's `.is-inline-flex-mobile` class to the element. Alias for `is-inline-flex-mobile` prop.
     */
    isInlineFlexMobile?: boolean
    /**
     * Add Bulma's `.is-inline-flex-tablet` class to the element. Alias for `is-inline-flex-tablet` prop.
     */
    isInlineFlexTablet?: boolean
    /**
     * Add Bulma's `.is-inline-flex-tablet-only` class to the element. Alias for `is-inline-flex-tablet-only` prop.
     */
    isInlineFlexTabletOnly?: boolean
    /**
     * Add Bulma's `.is-inline-flex-touch` class to the element. Alias for `is-inline-flex-touch` prop.
     */
    isInlineFlexTouch?: boolean
    /**
     * Add Bulma's `.is-inline-flex-desktop` class to the element. Alias for `is-inline-flex-desktop` prop.
     */
    isInlineFlexDesktop?: boolean
    /**
     * Add Bulma's `.is-inline-flex-desktop-only` class to the element. Alias for `is-inline-flex-desktop-only` prop.
     */
    isInlineFlexDesktopOnly?: boolean
    /**
     * Add Bulma's `.is-inline-flex-widescreen` class to the element. Alias for `is-inline-flex-widescreen` prop.
     */
    isInlineFlexWidescreen?: boolean
    /**
     * Add Bulma's `.is-inline-flex-widescreen-only` class to the element. Alias for `is-inline-flex-widescreen-only` prop.
     */
    isInlineFlexWidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-inline-flex-fullhd` class to the element. Alias for `is-inline-flex-fullhd` prop.
     */
    isInlineFlexFullhd?: boolean
    /**
     * Add Bulma's `.is-hidden` class to the element. Alias for `is-hidden` prop.
     */
    isHidden?: boolean
    /**
     * Add Bulma's `.is-sr-only` class to the element. Alias for `is-sr-only` prop.
     */
    isSrOnly?: boolean
    /**
     * Add Bulma's `.is-hidden-mobile` class to the element. Alias for `is-hidden-mobile` prop.
     */
    isHiddenMobile?: boolean
    /**
     * Add Bulma's `.is-hidden-tablet` class to the element. Alias for `is-hidden-tablet` prop.
     */
    isHiddenTablet?: boolean
    /**
     * Add Bulma's `.is-hidden-tablet-only` class to the element. Alias for `is-hidden-tablet-only` prop.
     */
    isHiddenTabletOnly?: boolean
    /**
     * Add Bulma's `.is-hidden-touch` class to the element. Alias for `is-hidden-touch` prop.
     */
    isHiddenTouch?: boolean
    /**
     * Add Bulma's `.is-hidden-desktop` class to the element. Alias for `is-hidden-desktop` prop.
     */
    isHiddenDesktop?: boolean
    /**
     * Add Bulma's `.is-hidden-desktop-only` class to the element. Alias for `is-hidden-desktop-only` prop.
     */
    isHiddenDesktopOnly?: boolean
    /**
     * Add Bulma's `.is-hidden-widescreen` class to the element. Alias for `is-hidden-widescreen` prop.
     */
    isHiddenWidescreen?: boolean
    /**
     * Add Bulma's `.is-hidden-widescreen-only` class to the element. Alias for `is-hidden-widescreen-only` prop.
     */
    isHiddenWidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-hidden-fullhd` class to the element. Alias for `is-hidden-fullhd` prop.
     */
    isHiddenFullhd?: boolean
    /**
     * Add Bulma's `.is-invisible` class to the element. Alias for `is-invisible` prop.
     */
    isInvisible?: boolean
    /**
     * Add Bulma's `.is-invisible-mobile` class to the element. Alias for `is-invisible-mobile` prop.
     */
    isInvisibleMobile?: boolean
    /**
     * Add Bulma's `.is-invisible-tablet` class to the element. Alias for `is-invisible-tablet` prop.
     */
    isInvisibleTablet?: boolean
    /**
     * Add Bulma's `.is-invisible-tablet-only` class to the element. Alias for `is-invisible-tablet-only` prop.
     */
    isInvisibleTabletOnly?: boolean
    /**
     * Add Bulma's `.is-invisible-touch` class to the element. Alias for `is-invisible-touch` prop.
     */
    isInvisibleTouch?: boolean
    /**
     * Add Bulma's `.is-invisible-desktop` class to the element. Alias for `is-invisible-desktop` prop.
     */
    isInvisibleDesktop?: boolean
    /**
     * Add Bulma's `.is-invisible-desktop-only` class to the element. Alias for `is-invisible-desktop-only` prop.
     */
    isInvisibleDesktopOnly?: boolean
    /**
     * Add Bulma's `.is-invisible-widescreen` class to the element. Alias for `is-invisible-widescreen` prop.
     */
    isInvisibleWidescreen?: boolean
    /**
     * Add Bulma's `.is-invisible-widescreen-only` class to the element. Alias for `is-invisible-widescreen-only` prop.
     */
    isInvisibleWidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-invisible-fullhd` class to the element. Alias for `is-invisible-fullhd` prop.
     */
    isInvisibleFullhd?: boolean
    /**
     * Add Bulma's `.is-marginless` class to the element. Alias for `is-marginless` prop.
     */
    isMarginless?: boolean
    /**
     * Add Bulma's `.is-paddingless` class to the element. Alias for `is-paddingless` prop.
     */
    isPaddingless?: boolean
    /**
     * Add Bulma's `.is-radiusless` class to the element. Alias for `is-radiusless` prop.
     */
    isRadiusless?: boolean
    /**
     * Add Bulma's `.is-shadowless` class to the element. Alias for `is-shadowless` prop.
     */
    isShadowless?: boolean
    /**
     * Add Bulma's `.is-relative` class to the element. Alias for `is-relative` prop.
     */
    isRelative?: boolean
    /**
     * Add Bulma's `.is-hovered` class to the element. Alias for `is-hovered` prop.
     */
    isHovered?: boolean
    /**
     * Add Bulma's `.is-text` class to the element. Alias for `is-text` prop.
     */
    isText?: boolean
    /**
     * Add Bulma's `.is-white` class to the element. Alias for `is-white` prop.
     */
    isWhite?: boolean
    /**
     * Add Bulma's `.is-inverted` class to the element. Alias for `is-inverted` prop.
     */
    isInverted?: boolean
    /**
     * Add Bulma's `.is-outlined` class to the element. Alias for `is-outlined` prop.
     */
    isOutlined?: boolean
    /**
     * Add Bulma's `.is-black` class to the element. Alias for `is-black` prop.
     */
    isBlack?: boolean
    /**
     * Add Bulma's `.is-light` class to the element. Alias for `is-light` prop.
     */
    isLight?: boolean
    /**
     * Add Bulma's `.is-dark` class to the element. Alias for `is-dark` prop.
     */
    isDark?: boolean
    /**
     * Add Bulma's `.is-primary` class to the element. Alias for `is-primary` prop.
     */
    isPrimary?: boolean
    /**
     * Add Bulma's `.is-link` class to the element. Alias for `is-link` prop.
     */
    isLink?: boolean
    /**
     * Add Bulma's `.is-info` class to the element. Alias for `is-info` prop.
     */
    isInfo?: boolean
    /**
     * Add Bulma's `.is-success` class to the element. Alias for `is-success` prop.
     */
    isSuccess?: boolean
    /**
     * Add Bulma's `.is-warning` class to the element. Alias for `is-warning` prop.
     */
    isWarning?: boolean
    /**
     * Add Bulma's `.is-danger` class to the element. Alias for `is-danger` prop.
     */
    isDanger?: boolean
    /**
     * Add Bulma's `.is-normal` class to the element. Alias for `is-normal` prop.
     */
    isNormal?: boolean
    /**
     * Add Bulma's `.is-fullwidth` class to the element. Alias for `is-fullwidth` prop.
     */
    isFullwidth?: boolean
    /**
     * Add Bulma's `.is-static` class to the element. Alias for `is-static` prop.
     */
    isStatic?: boolean
    /**
     * Add Bulma's `.is-rounded` class to the element. Alias for `is-rounded` prop.
     */
    isRounded?: boolean
    /**
     * Add Bulma's `.are-small` class to the element. Alias for `are-small` prop.
     */
    areSmall?: boolean
    /**
     * Add Bulma's `.are-medium` class to the element. Alias for `are-medium` prop.
     */
    areMedium?: boolean
    /**
     * Add Bulma's `.are-large` class to the element. Alias for `are-large` prop.
     */
    areLarge?: boolean
    /**
     * Add Bulma's `.has-addons` class to the element. Alias for `has-addons` prop.
     */
    hasAddons?: boolean
    /**
     * Add Bulma's `.is-selected` class to the element. Alias for `is-selected` prop.
     */
    isSelected?: boolean
    /**
     * Add Bulma's `.is-expanded` class to the element. Alias for `is-expanded` prop.
     */
    isExpanded?: boolean
    /**
     * Add Bulma's `.is-centered` class to the element. Alias for `is-centered` prop.
     */
    isCentered?: boolean
    /**
     * Add Bulma's `.is-right` class to the element. Alias for `is-right` prop.
     */
    isRight?: boolean
    /**
     * Add Bulma's `.is-fluid` class to the element. Alias for `is-fluid` prop.
     */
    isFluid?: boolean
    /**
     * Add Bulma's `.is-widescreen` class to the element. Alias for `is-widescreen` prop.
     */
    isWidescreen?: boolean
    /**
     * Add Bulma's `.is-fullhd` class to the element. Alias for `is-fullhd` prop.
     */
    isFullhd?: boolean
    /**
     * Add Bulma's `.is-lower-alpha` class to the element. Alias for `is-lower-alpha` prop.
     */
    isLowerAlpha?: boolean
    /**
     * Add Bulma's `.is-lower-roman` class to the element. Alias for `is-lower-roman` prop.
     */
    isLowerRoman?: boolean
    /**
     * Add Bulma's `.is-upper-alpha` class to the element. Alias for `is-upper-alpha` prop.
     */
    isUpperAlpha?: boolean
    /**
     * Add Bulma's `.is-upper-roman` class to the element. Alias for `is-upper-roman` prop.
     */
    isUpperRoman?: boolean
    /**
     * Add Bulma's `.is-16x16` class to the element. Alias for `is-16x16` prop.
     */
    is16x16?: boolean
    /**
     * Add Bulma's `.is-24x24` class to the element. Alias for `is-24x24` prop.
     */
    is24x24?: boolean
    /**
     * Add Bulma's `.is-32x32` class to the element. Alias for `is-32x32` prop.
     */
    is32x32?: boolean
    /**
     * Add Bulma's `.is-48x48` class to the element. Alias for `is-48x48` prop.
     */
    is48x48?: boolean
    /**
     * Add Bulma's `.is-64x64` class to the element. Alias for `is-64x64` prop.
     */
    is64x64?: boolean
    /**
     * Add Bulma's `.is-96x96` class to the element. Alias for `is-96x96` prop.
     */
    is96x96?: boolean
    /**
     * Add Bulma's `.is-128x128` class to the element. Alias for `is-128x128` prop.
     */
    is128x128?: boolean
    /**
     * Add Bulma's `.dropdown-item` class to the element. Alias for `dropdown-item` prop.
     */
    dropdownItem?: boolean
    /**
     * Add Bulma's `.is-narrow` class to the element. Alias for `is-narrow` prop.
     */
    isNarrow?: boolean
    /**
     * Add Bulma's `.is-bordered` class to the element. Alias for `is-bordered` prop.
     */
    isBordered?: boolean
    /**
     * Add Bulma's `.is-hoverable` class to the element. Alias for `is-hoverable` prop.
     */
    isHoverable?: boolean
    /**
     * Add Bulma's `.is-striped` class to the element. Alias for `is-striped` prop.
     */
    isStriped?: boolean
    /**
     * Add Bulma's `.is-delete` class to the element. Alias for `is-delete` prop.
     */
    isDelete?: boolean
    /**
     * Add Bulma's `.is-spaced` class to the element. Alias for `is-spaced` prop.
     */
    isSpaced?: boolean
    /**
     * Add Bulma's `.is-1` class to the element. Alias for `is-1` prop.
     */
    is1?: boolean
    /**
     * Add Bulma's `.is-2` class to the element. Alias for `is-2` prop.
     */
    is2?: boolean
    /**
     * Add Bulma's `.is-3` class to the element. Alias for `is-3` prop.
     */
    is3?: boolean
    /**
     * Add Bulma's `.is-4` class to the element. Alias for `is-4` prop.
     */
    is4?: boolean
    /**
     * Add Bulma's `.is-5` class to the element. Alias for `is-5` prop.
     */
    is5?: boolean
    /**
     * Add Bulma's `.is-6` class to the element. Alias for `is-6` prop.
     */
    is6?: boolean
    /**
     * Add Bulma's `.is-7` class to the element. Alias for `is-7` prop.
     */
    is7?: boolean
    /**
     * Add Bulma's `.has-fixed-size` class to the element. Alias for `has-fixed-size` prop.
     */
    hasFixedSize?: boolean
    /**
     * Add Bulma's `.is-disabled` class to the element. Alias for `is-disabled` prop.
     */
    isDisabled?: boolean
    /**
     * Add Bulma's `.file-icon` class to the element. Alias for `file-icon` prop.
     */
    fileIcon?: boolean
    /**
     * Add Bulma's `.has-name` class to the element. Alias for `has-name` prop.
     */
    hasName?: boolean
    /**
     * Add Bulma's `.is-empty` class to the element. Alias for `is-empty` prop.
     */
    isEmpty?: boolean
    /**
     * Add Bulma's `.is-boxed` class to the element. Alias for `is-boxed` prop.
     */
    isBoxed?: boolean
    /**
     * Add Bulma's `.file-label` class to the element. Alias for `file-label` prop.
     */
    fileLabel?: boolean
    /**
     * Add Bulma's `.file-input` class to the element. Alias for `file-input` prop.
     */
    fileInput?: boolean
    /**
     * Add Bulma's `.has-addons-centered` class to the element. Alias for `has-addons-centered` prop.
     */
    hasAddonsCentered?: boolean
    /**
     * Add Bulma's `.has-addons-right` class to the element. Alias for `has-addons-right` prop.
     */
    hasAddonsRight?: boolean
    /**
     * Add Bulma's `.has-addons-fullwidth` class to the element. Alias for `has-addons-fullwidth` prop.
     */
    hasAddonsFullwidth?: boolean
    /**
     * Add Bulma's `.is-grouped` class to the element. Alias for `is-grouped` prop.
     */
    isGrouped?: boolean
    /**
     * Add Bulma's `.is-grouped-centered` class to the element. Alias for `is-grouped-centered` prop.
     */
    isGroupedCentered?: boolean
    /**
     * Add Bulma's `.is-grouped-right` class to the element. Alias for `is-grouped-right` prop.
     */
    isGroupedRight?: boolean
    /**
     * Add Bulma's `.is-grouped-multiline` class to the element. Alias for `is-grouped-multiline` prop.
     */
    isGroupedMultiline?: boolean
    /**
     * Add Bulma's `.is-horizontal` class to the element. Alias for `is-horizontal` prop.
     */
    isHorizontal?: boolean
    /**
     * Add Bulma's `.field-label` class to the element. Alias for `field-label` prop.
     */
    fieldLabel?: boolean
    /**
     * Add Bulma's `.field-body` class to the element. Alias for `field-body` prop.
     */
    fieldBody?: boolean
    /**
     * Add Bulma's `.has-icons-left` class to the element. Alias for `has-icons-left` prop.
     */
    hasIconsLeft?: boolean
    /**
     * Add Bulma's `.has-icons-right` class to the element. Alias for `has-icons-right` prop.
     */
    hasIconsRight?: boolean
    /**
     * Add Bulma's `.is-left` class to the element. Alias for `is-left` prop.
     */
    isLeft?: boolean
    /**
     * Add Bulma's `.has-arrow-separator` class to the element. Alias for `has-arrow-separator` prop.
     */
    hasArrowSeparator?: boolean
    /**
     * Add Bulma's `.has-bullet-separator` class to the element. Alias for `has-bullet-separator` prop.
     */
    hasBulletSeparator?: boolean
    /**
     * Add Bulma's `.has-dot-separator` class to the element. Alias for `has-dot-separator` prop.
     */
    hasDotSeparator?: boolean
    /**
     * Add Bulma's `.has-succeeds-separator` class to the element. Alias for `has-succeeds-separator` prop.
     */
    hasSucceedsSeparator?: boolean
    /**
     * Add Bulma's `.card-header` class to the element. Alias for `card-header` prop.
     */
    cardHeader?: boolean
    /**
     * Add Bulma's `.card-header-title` class to the element. Alias for `card-header-title` prop.
     */
    cardHeaderTitle?: boolean
    /**
     * Add Bulma's `.card-header-icon` class to the element. Alias for `card-header-icon` prop.
     */
    cardHeaderIcon?: boolean
    /**
     * Add Bulma's `.card-image` class to the element. Alias for `card-image` prop.
     */
    cardImage?: boolean
    /**
     * Add Bulma's `.card-content` class to the element. Alias for `card-content` prop.
     */
    cardContent?: boolean
    /**
     * Add Bulma's `.card-footer` class to the element. Alias for `card-footer` prop.
     */
    cardFooter?: boolean
    /**
     * Add Bulma's `.card-footer-item` class to the element. Alias for `card-footer-item` prop.
     */
    cardFooterItem?: boolean
    /**
     * Add Bulma's `.dropdown-menu` class to the element. Alias for `dropdown-menu` prop.
     */
    dropdownMenu?: boolean
    /**
     * Add Bulma's `.is-up` class to the element. Alias for `is-up` prop.
     */
    isUp?: boolean
    /**
     * Add Bulma's `.dropdown-content` class to the element. Alias for `dropdown-content` prop.
     */
    dropdownContent?: boolean
    /**
     * Add Bulma's `.dropdown-divider` class to the element. Alias for `dropdown-divider` prop.
     */
    dropdownDivider?: boolean
    /**
     * Add Bulma's `.is-mobile` class to the element. Alias for `is-mobile` prop.
     */
    isMobile?: boolean
    /**
     * Add Bulma's `.level-left` class to the element. Alias for `level-left` prop.
     */
    levelLeft?: boolean
    /**
     * Add Bulma's `.level-right` class to the element. Alias for `level-right` prop.
     */
    levelRight?: boolean
    /**
     * Add Bulma's `.level-item` class to the element. Alias for `level-item` prop.
     */
    levelItem?: boolean
    /**
     * Add Bulma's `.is-flexible` class to the element. Alias for `is-flexible` prop.
     */
    isFlexible?: boolean
    /**
     * Add Bulma's `.list-item` class to the element. Alias for `list-item` prop.
     */
    listItem?: boolean
    /**
     * Add Bulma's `.media-left` class to the element. Alias for `media-left` prop.
     */
    mediaLeft?: boolean
    /**
     * Add Bulma's `.media-right` class to the element. Alias for `media-right` prop.
     */
    mediaRight?: boolean
    /**
     * Add Bulma's `.media-content` class to the element. Alias for `media-content` prop.
     */
    mediaContent?: boolean
    /**
     * Add Bulma's `.menu-list` class to the element. Alias for `menu-list` prop.
     */
    menuList?: boolean
    /**
     * Add Bulma's `.menu-label` class to the element. Alias for `menu-label` prop.
     */
    menuLabel?: boolean
    /**
     * Add Bulma's `.message-header` class to the element. Alias for `message-header` prop.
     */
    messageHeader?: boolean
    /**
     * Add Bulma's `.message-body` class to the element. Alias for `message-body` prop.
     */
    messageBody?: boolean
    /**
     * Add Bulma's `.modal-content` class to the element. Alias for `modal-content` prop.
     */
    modalContent?: boolean
    /**
     * Add Bulma's `.modal-card` class to the element. Alias for `modal-card` prop.
     */
    modalCard?: boolean
    /**
     * Add Bulma's `.modal-card-head` class to the element. Alias for `modal-card-head` prop.
     */
    modalCardHead?: boolean
    /**
     * Add Bulma's `.modal-card-foot` class to the element. Alias for `modal-card-foot` prop.
     */
    modalCardFoot?: boolean
    /**
     * Add Bulma's `.modal-card-title` class to the element. Alias for `modal-card-title` prop.
     */
    modalCardTitle?: boolean
    /**
     * Add Bulma's `.modal-card-body` class to the element. Alias for `modal-card-body` prop.
     */
    modalCardBody?: boolean
    /**
     * Add Bulma's `.navbar-brand` class to the element. Alias for `navbar-brand` prop.
     */
    navbarBrand?: boolean
    /**
     * Add Bulma's `.navbar-item` class to the element. Alias for `navbar-item` prop.
     */
    navbarItem?: boolean
    /**
     * Add Bulma's `.navbar-burger` class to the element. Alias for `navbar-burger` prop.
     */
    navbarBurger?: boolean
    /**
     * Add Bulma's `.navbar-start` class to the element. Alias for `navbar-start` prop.
     */
    navbarStart?: boolean
    /**
     * Add Bulma's `.navbar-end` class to the element. Alias for `navbar-end` prop.
     */
    navbarEnd?: boolean
    /**
     * Add Bulma's `.has-dropdown` class to the element. Alias for `has-dropdown` prop.
     */
    hasDropdown?: boolean
    /**
     * Add Bulma's `.navbar-dropdown` class to the element. Alias for `navbar-dropdown` prop.
     */
    navbarDropdown?: boolean
    /**
     * Add Bulma's `.has-shadow` class to the element. Alias for `has-shadow` prop.
     */
    hasShadow?: boolean
    /**
     * Add Bulma's `.is-fixed-bottom` class to the element. Alias for `is-fixed-bottom` prop.
     */
    isFixedBottom?: boolean
    /**
     * Add Bulma's `.is-fixed-top` class to the element. Alias for `is-fixed-top` prop.
     */
    isFixedTop?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-top` class to the element. Alias for `has-navbar-fixed-top` prop.
     */
    hasNavbarFixedTop?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-bottom` class to the element. Alias for `has-navbar-fixed-bottom` prop.
     */
    hasNavbarFixedBottom?: boolean
    /**
     * Add Bulma's `.navbar-tabs` class to the element. Alias for `navbar-tabs` prop.
     */
    navbarTabs?: boolean
    /**
     * Add Bulma's `.navbar-menu` class to the element. Alias for `navbar-menu` prop.
     */
    navbarMenu?: boolean
    /**
     * Add Bulma's `.is-tab` class to the element. Alias for `is-tab` prop.
     */
    isTab?: boolean
    /**
     * Add Bulma's `.navbar-content` class to the element. Alias for `navbar-content` prop.
     */
    navbarContent?: boolean
    /**
     * Add Bulma's `.navbar-divider` class to the element. Alias for `navbar-divider` prop.
     */
    navbarDivider?: boolean
    /**
     * Add Bulma's `.is-fixed-bottom-touch` class to the element. Alias for `is-fixed-bottom-touch` prop.
     */
    isFixedBottomTouch?: boolean
    /**
     * Add Bulma's `.is-fixed-top-touch` class to the element. Alias for `is-fixed-top-touch` prop.
     */
    isFixedTopTouch?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-top-touch` class to the element. Alias for `has-navbar-fixed-top-touch` prop.
     */
    hasNavbarFixedTopTouch?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-bottom-touch` class to the element. Alias for `has-navbar-fixed-bottom-touch` prop.
     */
    hasNavbarFixedBottomTouch?: boolean
    /**
     * Add Bulma's `.is-transparent` class to the element. Alias for `is-transparent` prop.
     */
    isTransparent?: boolean
    /**
     * Add Bulma's `.has-dropdown-up` class to the element. Alias for `has-dropdown-up` prop.
     */
    hasDropdownUp?: boolean
    /**
     * Add Bulma's `.is-fixed-bottom-desktop` class to the element. Alias for `is-fixed-bottom-desktop` prop.
     */
    isFixedBottomDesktop?: boolean
    /**
     * Add Bulma's `.is-fixed-top-desktop` class to the element. Alias for `is-fixed-top-desktop` prop.
     */
    isFixedTopDesktop?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-top-desktop` class to the element. Alias for `has-navbar-fixed-top-desktop` prop.
     */
    hasNavbarFixedTopDesktop?: boolean
    /**
     * Add Bulma's `.has-navbar-fixed-bottom-desktop` class to the element. Alias for `has-navbar-fixed-bottom-desktop` prop.
     */
    hasNavbarFixedBottomDesktop?: boolean
    /**
     * Add Bulma's `.has-spaced-navbar-fixed-top` class to the element. Alias for `has-spaced-navbar-fixed-top` prop.
     */
    hasSpacedNavbarFixedTop?: boolean
    /**
     * Add Bulma's `.has-spaced-navbar-fixed-bottom` class to the element. Alias for `has-spaced-navbar-fixed-bottom` prop.
     */
    hasSpacedNavbarFixedBottom?: boolean
    /**
     * Add Bulma's `.is-fullheight-with-navbar` class to the element. Alias for `is-fullheight-with-navbar` prop.
     */
    isFullheightWithNavbar?: boolean
    /**
     * Add Bulma's `.pagination-list` class to the element. Alias for `pagination-list` prop.
     */
    paginationList?: boolean
    /**
     * Add Bulma's `.is-current` class to the element. Alias for `is-current` prop.
     */
    isCurrent?: boolean
    /**
     * Add Bulma's `.panel-heading` class to the element. Alias for `panel-heading` prop.
     */
    panelHeading?: boolean
    /**
     * Add Bulma's `.panel-tabs` class to the element. Alias for `panel-tabs` prop.
     */
    panelTabs?: boolean
    /**
     * Add Bulma's `.panel-block` class to the element. Alias for `panel-block` prop.
     */
    panelBlock?: boolean
    /**
     * Add Bulma's `.panel-icon` class to the element. Alias for `panel-icon` prop.
     */
    panelIcon?: boolean
    /**
     * Add Bulma's `.panel-list` class to the element. Alias for `panel-list` prop.
     */
    panelList?: boolean
    /**
     * Add Bulma's `.is-wrapped` class to the element. Alias for `is-wrapped` prop.
     */
    isWrapped?: boolean
    /**
     * Add Bulma's `.is-center` class to the element. Alias for `is-center` prop.
     */
    isCenter?: boolean
    /**
     * Add Bulma's `.is-toggle` class to the element. Alias for `is-toggle` prop.
     */
    isToggle?: boolean
    /**
     * Add Bulma's `.is-toggle-rounded` class to the element. Alias for `is-toggle-rounded` prop.
     */
    isToggleRounded?: boolean
    /**
     * Add Bulma's `.is-full` class to the element. Alias for `is-full` prop.
     */
    isFull?: boolean
    /**
     * Add Bulma's `.is-three-quarters` class to the element. Alias for `is-three-quarters` prop.
     */
    isThreeQuarters?: boolean
    /**
     * Add Bulma's `.is-two-thirds` class to the element. Alias for `is-two-thirds` prop.
     */
    isTwoThirds?: boolean
    /**
     * Add Bulma's `.is-half` class to the element. Alias for `is-half` prop.
     */
    isHalf?: boolean
    /**
     * Add Bulma's `.is-one-third` class to the element. Alias for `is-one-third` prop.
     */
    isOneThird?: boolean
    /**
     * Add Bulma's `.is-one-quarter` class to the element. Alias for `is-one-quarter` prop.
     */
    isOneQuarter?: boolean
    /**
     * Add Bulma's `.is-one-fifth` class to the element. Alias for `is-one-fifth` prop.
     */
    isOneFifth?: boolean
    /**
     * Add Bulma's `.is-two-fifths` class to the element. Alias for `is-two-fifths` prop.
     */
    isTwoFifths?: boolean
    /**
     * Add Bulma's `.is-three-fifths` class to the element. Alias for `is-three-fifths` prop.
     */
    isThreeFifths?: boolean
    /**
     * Add Bulma's `.is-four-fifths` class to the element. Alias for `is-four-fifths` prop.
     */
    isFourFifths?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters` class to the element. Alias for `is-offset-three-quarters` prop.
     */
    isOffsetThreeQuarters?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds` class to the element. Alias for `is-offset-two-thirds` prop.
     */
    isOffsetTwoThirds?: boolean
    /**
     * Add Bulma's `.is-offset-half` class to the element. Alias for `is-offset-half` prop.
     */
    isOffsetHalf?: boolean
    /**
     * Add Bulma's `.is-offset-one-third` class to the element. Alias for `is-offset-one-third` prop.
     */
    isOffsetOneThird?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter` class to the element. Alias for `is-offset-one-quarter` prop.
     */
    isOffsetOneQuarter?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth` class to the element. Alias for `is-offset-one-fifth` prop.
     */
    isOffsetOneFifth?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths` class to the element. Alias for `is-offset-two-fifths` prop.
     */
    isOffsetTwoFifths?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths` class to the element. Alias for `is-offset-three-fifths` prop.
     */
    isOffsetThreeFifths?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths` class to the element. Alias for `is-offset-four-fifths` prop.
     */
    isOffsetFourFifths?: boolean
    /**
     * Add Bulma's `.is-0` class to the element. Alias for `is-0` prop.
     */
    is0?: boolean
    /**
     * Add Bulma's `.is-offset-0` class to the element. Alias for `is-offset-0` prop.
     */
    isOffset0?: boolean
    /**
     * Add Bulma's `.is-offset-1` class to the element. Alias for `is-offset-1` prop.
     */
    isOffset1?: boolean
    /**
     * Add Bulma's `.is-offset-2` class to the element. Alias for `is-offset-2` prop.
     */
    isOffset2?: boolean
    /**
     * Add Bulma's `.is-offset-3` class to the element. Alias for `is-offset-3` prop.
     */
    isOffset3?: boolean
    /**
     * Add Bulma's `.is-offset-4` class to the element. Alias for `is-offset-4` prop.
     */
    isOffset4?: boolean
    /**
     * Add Bulma's `.is-offset-5` class to the element. Alias for `is-offset-5` prop.
     */
    isOffset5?: boolean
    /**
     * Add Bulma's `.is-offset-6` class to the element. Alias for `is-offset-6` prop.
     */
    isOffset6?: boolean
    /**
     * Add Bulma's `.is-offset-7` class to the element. Alias for `is-offset-7` prop.
     */
    isOffset7?: boolean
    /**
     * Add Bulma's `.is-8` class to the element. Alias for `is-8` prop.
     */
    is8?: boolean
    /**
     * Add Bulma's `.is-offset-8` class to the element. Alias for `is-offset-8` prop.
     */
    isOffset8?: boolean
    /**
     * Add Bulma's `.is-9` class to the element. Alias for `is-9` prop.
     */
    is9?: boolean
    /**
     * Add Bulma's `.is-offset-9` class to the element. Alias for `is-offset-9` prop.
     */
    isOffset9?: boolean
    /**
     * Add Bulma's `.is-10` class to the element. Alias for `is-10` prop.
     */
    is10?: boolean
    /**
     * Add Bulma's `.is-offset-10` class to the element. Alias for `is-offset-10` prop.
     */
    isOffset10?: boolean
    /**
     * Add Bulma's `.is-11` class to the element. Alias for `is-11` prop.
     */
    is11?: boolean
    /**
     * Add Bulma's `.is-offset-11` class to the element. Alias for `is-offset-11` prop.
     */
    isOffset11?: boolean
    /**
     * Add Bulma's `.is-12` class to the element. Alias for `is-12` prop.
     */
    is12?: boolean
    /**
     * Add Bulma's `.is-offset-12` class to the element. Alias for `is-offset-12` prop.
     */
    isOffset12?: boolean
    /**
     * Add Bulma's `.is-narrow-mobile` class to the element. Alias for `is-narrow-mobile` prop.
     */
    isNarrowMobile?: boolean
    /**
     * Add Bulma's `.is-full-mobile` class to the element. Alias for `is-full-mobile` prop.
     */
    isFullMobile?: boolean
    /**
     * Add Bulma's `.is-three-quarters-mobile` class to the element. Alias for `is-three-quarters-mobile` prop.
     */
    isThreeQuartersMobile?: boolean
    /**
     * Add Bulma's `.is-two-thirds-mobile` class to the element. Alias for `is-two-thirds-mobile` prop.
     */
    isTwoThirdsMobile?: boolean
    /**
     * Add Bulma's `.is-half-mobile` class to the element. Alias for `is-half-mobile` prop.
     */
    isHalfMobile?: boolean
    /**
     * Add Bulma's `.is-one-third-mobile` class to the element. Alias for `is-one-third-mobile` prop.
     */
    isOneThirdMobile?: boolean
    /**
     * Add Bulma's `.is-one-quarter-mobile` class to the element. Alias for `is-one-quarter-mobile` prop.
     */
    isOneQuarterMobile?: boolean
    /**
     * Add Bulma's `.is-one-fifth-mobile` class to the element. Alias for `is-one-fifth-mobile` prop.
     */
    isOneFifthMobile?: boolean
    /**
     * Add Bulma's `.is-two-fifths-mobile` class to the element. Alias for `is-two-fifths-mobile` prop.
     */
    isTwoFifthsMobile?: boolean
    /**
     * Add Bulma's `.is-three-fifths-mobile` class to the element. Alias for `is-three-fifths-mobile` prop.
     */
    isThreeFifthsMobile?: boolean
    /**
     * Add Bulma's `.is-four-fifths-mobile` class to the element. Alias for `is-four-fifths-mobile` prop.
     */
    isFourFifthsMobile?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-mobile` class to the element. Alias for `is-offset-three-quarters-mobile` prop.
     */
    isOffsetThreeQuartersMobile?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-mobile` class to the element. Alias for `is-offset-two-thirds-mobile` prop.
     */
    isOffsetTwoThirdsMobile?: boolean
    /**
     * Add Bulma's `.is-offset-half-mobile` class to the element. Alias for `is-offset-half-mobile` prop.
     */
    isOffsetHalfMobile?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-mobile` class to the element. Alias for `is-offset-one-third-mobile` prop.
     */
    isOffsetOneThirdMobile?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-mobile` class to the element. Alias for `is-offset-one-quarter-mobile` prop.
     */
    isOffsetOneQuarterMobile?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-mobile` class to the element. Alias for `is-offset-one-fifth-mobile` prop.
     */
    isOffsetOneFifthMobile?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-mobile` class to the element. Alias for `is-offset-two-fifths-mobile` prop.
     */
    isOffsetTwoFifthsMobile?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-mobile` class to the element. Alias for `is-offset-three-fifths-mobile` prop.
     */
    isOffsetThreeFifthsMobile?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-mobile` class to the element. Alias for `is-offset-four-fifths-mobile` prop.
     */
    isOffsetFourFifthsMobile?: boolean
    /**
     * Add Bulma's `.is-0-mobile` class to the element. Alias for `is-0-mobile` prop.
     */
    is0Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-0-mobile` class to the element. Alias for `is-offset-0-mobile` prop.
     */
    isOffset0Mobile?: boolean
    /**
     * Add Bulma's `.is-1-mobile` class to the element. Alias for `is-1-mobile` prop.
     */
    is1Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-1-mobile` class to the element. Alias for `is-offset-1-mobile` prop.
     */
    isOffset1Mobile?: boolean
    /**
     * Add Bulma's `.is-2-mobile` class to the element. Alias for `is-2-mobile` prop.
     */
    is2Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-2-mobile` class to the element. Alias for `is-offset-2-mobile` prop.
     */
    isOffset2Mobile?: boolean
    /**
     * Add Bulma's `.is-3-mobile` class to the element. Alias for `is-3-mobile` prop.
     */
    is3Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-3-mobile` class to the element. Alias for `is-offset-3-mobile` prop.
     */
    isOffset3Mobile?: boolean
    /**
     * Add Bulma's `.is-4-mobile` class to the element. Alias for `is-4-mobile` prop.
     */
    is4Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-4-mobile` class to the element. Alias for `is-offset-4-mobile` prop.
     */
    isOffset4Mobile?: boolean
    /**
     * Add Bulma's `.is-5-mobile` class to the element. Alias for `is-5-mobile` prop.
     */
    is5Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-5-mobile` class to the element. Alias for `is-offset-5-mobile` prop.
     */
    isOffset5Mobile?: boolean
    /**
     * Add Bulma's `.is-6-mobile` class to the element. Alias for `is-6-mobile` prop.
     */
    is6Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-6-mobile` class to the element. Alias for `is-offset-6-mobile` prop.
     */
    isOffset6Mobile?: boolean
    /**
     * Add Bulma's `.is-7-mobile` class to the element. Alias for `is-7-mobile` prop.
     */
    is7Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-7-mobile` class to the element. Alias for `is-offset-7-mobile` prop.
     */
    isOffset7Mobile?: boolean
    /**
     * Add Bulma's `.is-8-mobile` class to the element. Alias for `is-8-mobile` prop.
     */
    is8Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-8-mobile` class to the element. Alias for `is-offset-8-mobile` prop.
     */
    isOffset8Mobile?: boolean
    /**
     * Add Bulma's `.is-9-mobile` class to the element. Alias for `is-9-mobile` prop.
     */
    is9Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-9-mobile` class to the element. Alias for `is-offset-9-mobile` prop.
     */
    isOffset9Mobile?: boolean
    /**
     * Add Bulma's `.is-10-mobile` class to the element. Alias for `is-10-mobile` prop.
     */
    is10Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-10-mobile` class to the element. Alias for `is-offset-10-mobile` prop.
     */
    isOffset10Mobile?: boolean
    /**
     * Add Bulma's `.is-11-mobile` class to the element. Alias for `is-11-mobile` prop.
     */
    is11Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-11-mobile` class to the element. Alias for `is-offset-11-mobile` prop.
     */
    isOffset11Mobile?: boolean
    /**
     * Add Bulma's `.is-12-mobile` class to the element. Alias for `is-12-mobile` prop.
     */
    is12Mobile?: boolean
    /**
     * Add Bulma's `.is-offset-12-mobile` class to the element. Alias for `is-offset-12-mobile` prop.
     */
    isOffset12Mobile?: boolean
    /**
     * Add Bulma's `.is-narrow-tablet` class to the element. Alias for `is-narrow-tablet` prop.
     */
    isNarrowTablet?: boolean
    /**
     * Add Bulma's `.is-full-tablet` class to the element. Alias for `is-full-tablet` prop.
     */
    isFullTablet?: boolean
    /**
     * Add Bulma's `.is-three-quarters-tablet` class to the element. Alias for `is-three-quarters-tablet` prop.
     */
    isThreeQuartersTablet?: boolean
    /**
     * Add Bulma's `.is-two-thirds-tablet` class to the element. Alias for `is-two-thirds-tablet` prop.
     */
    isTwoThirdsTablet?: boolean
    /**
     * Add Bulma's `.is-half-tablet` class to the element. Alias for `is-half-tablet` prop.
     */
    isHalfTablet?: boolean
    /**
     * Add Bulma's `.is-one-third-tablet` class to the element. Alias for `is-one-third-tablet` prop.
     */
    isOneThirdTablet?: boolean
    /**
     * Add Bulma's `.is-one-quarter-tablet` class to the element. Alias for `is-one-quarter-tablet` prop.
     */
    isOneQuarterTablet?: boolean
    /**
     * Add Bulma's `.is-one-fifth-tablet` class to the element. Alias for `is-one-fifth-tablet` prop.
     */
    isOneFifthTablet?: boolean
    /**
     * Add Bulma's `.is-two-fifths-tablet` class to the element. Alias for `is-two-fifths-tablet` prop.
     */
    isTwoFifthsTablet?: boolean
    /**
     * Add Bulma's `.is-three-fifths-tablet` class to the element. Alias for `is-three-fifths-tablet` prop.
     */
    isThreeFifthsTablet?: boolean
    /**
     * Add Bulma's `.is-four-fifths-tablet` class to the element. Alias for `is-four-fifths-tablet` prop.
     */
    isFourFifthsTablet?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-tablet` class to the element. Alias for `is-offset-three-quarters-tablet` prop.
     */
    isOffsetThreeQuartersTablet?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-tablet` class to the element. Alias for `is-offset-two-thirds-tablet` prop.
     */
    isOffsetTwoThirdsTablet?: boolean
    /**
     * Add Bulma's `.is-offset-half-tablet` class to the element. Alias for `is-offset-half-tablet` prop.
     */
    isOffsetHalfTablet?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-tablet` class to the element. Alias for `is-offset-one-third-tablet` prop.
     */
    isOffsetOneThirdTablet?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-tablet` class to the element. Alias for `is-offset-one-quarter-tablet` prop.
     */
    isOffsetOneQuarterTablet?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-tablet` class to the element. Alias for `is-offset-one-fifth-tablet` prop.
     */
    isOffsetOneFifthTablet?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-tablet` class to the element. Alias for `is-offset-two-fifths-tablet` prop.
     */
    isOffsetTwoFifthsTablet?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-tablet` class to the element. Alias for `is-offset-three-fifths-tablet` prop.
     */
    isOffsetThreeFifthsTablet?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-tablet` class to the element. Alias for `is-offset-four-fifths-tablet` prop.
     */
    isOffsetFourFifthsTablet?: boolean
    /**
     * Add Bulma's `.is-0-tablet` class to the element. Alias for `is-0-tablet` prop.
     */
    is0Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-0-tablet` class to the element. Alias for `is-offset-0-tablet` prop.
     */
    isOffset0Tablet?: boolean
    /**
     * Add Bulma's `.is-1-tablet` class to the element. Alias for `is-1-tablet` prop.
     */
    is1Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-1-tablet` class to the element. Alias for `is-offset-1-tablet` prop.
     */
    isOffset1Tablet?: boolean
    /**
     * Add Bulma's `.is-2-tablet` class to the element. Alias for `is-2-tablet` prop.
     */
    is2Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-2-tablet` class to the element. Alias for `is-offset-2-tablet` prop.
     */
    isOffset2Tablet?: boolean
    /**
     * Add Bulma's `.is-3-tablet` class to the element. Alias for `is-3-tablet` prop.
     */
    is3Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-3-tablet` class to the element. Alias for `is-offset-3-tablet` prop.
     */
    isOffset3Tablet?: boolean
    /**
     * Add Bulma's `.is-4-tablet` class to the element. Alias for `is-4-tablet` prop.
     */
    is4Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-4-tablet` class to the element. Alias for `is-offset-4-tablet` prop.
     */
    isOffset4Tablet?: boolean
    /**
     * Add Bulma's `.is-5-tablet` class to the element. Alias for `is-5-tablet` prop.
     */
    is5Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-5-tablet` class to the element. Alias for `is-offset-5-tablet` prop.
     */
    isOffset5Tablet?: boolean
    /**
     * Add Bulma's `.is-6-tablet` class to the element. Alias for `is-6-tablet` prop.
     */
    is6Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-6-tablet` class to the element. Alias for `is-offset-6-tablet` prop.
     */
    isOffset6Tablet?: boolean
    /**
     * Add Bulma's `.is-7-tablet` class to the element. Alias for `is-7-tablet` prop.
     */
    is7Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-7-tablet` class to the element. Alias for `is-offset-7-tablet` prop.
     */
    isOffset7Tablet?: boolean
    /**
     * Add Bulma's `.is-8-tablet` class to the element. Alias for `is-8-tablet` prop.
     */
    is8Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-8-tablet` class to the element. Alias for `is-offset-8-tablet` prop.
     */
    isOffset8Tablet?: boolean
    /**
     * Add Bulma's `.is-9-tablet` class to the element. Alias for `is-9-tablet` prop.
     */
    is9Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-9-tablet` class to the element. Alias for `is-offset-9-tablet` prop.
     */
    isOffset9Tablet?: boolean
    /**
     * Add Bulma's `.is-10-tablet` class to the element. Alias for `is-10-tablet` prop.
     */
    is10Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-10-tablet` class to the element. Alias for `is-offset-10-tablet` prop.
     */
    isOffset10Tablet?: boolean
    /**
     * Add Bulma's `.is-11-tablet` class to the element. Alias for `is-11-tablet` prop.
     */
    is11Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-11-tablet` class to the element. Alias for `is-offset-11-tablet` prop.
     */
    isOffset11Tablet?: boolean
    /**
     * Add Bulma's `.is-12-tablet` class to the element. Alias for `is-12-tablet` prop.
     */
    is12Tablet?: boolean
    /**
     * Add Bulma's `.is-offset-12-tablet` class to the element. Alias for `is-offset-12-tablet` prop.
     */
    isOffset12Tablet?: boolean
    /**
     * Add Bulma's `.is-narrow-touch` class to the element. Alias for `is-narrow-touch` prop.
     */
    isNarrowTouch?: boolean
    /**
     * Add Bulma's `.is-full-touch` class to the element. Alias for `is-full-touch` prop.
     */
    isFullTouch?: boolean
    /**
     * Add Bulma's `.is-three-quarters-touch` class to the element. Alias for `is-three-quarters-touch` prop.
     */
    isThreeQuartersTouch?: boolean
    /**
     * Add Bulma's `.is-two-thirds-touch` class to the element. Alias for `is-two-thirds-touch` prop.
     */
    isTwoThirdsTouch?: boolean
    /**
     * Add Bulma's `.is-half-touch` class to the element. Alias for `is-half-touch` prop.
     */
    isHalfTouch?: boolean
    /**
     * Add Bulma's `.is-one-third-touch` class to the element. Alias for `is-one-third-touch` prop.
     */
    isOneThirdTouch?: boolean
    /**
     * Add Bulma's `.is-one-quarter-touch` class to the element. Alias for `is-one-quarter-touch` prop.
     */
    isOneQuarterTouch?: boolean
    /**
     * Add Bulma's `.is-one-fifth-touch` class to the element. Alias for `is-one-fifth-touch` prop.
     */
    isOneFifthTouch?: boolean
    /**
     * Add Bulma's `.is-two-fifths-touch` class to the element. Alias for `is-two-fifths-touch` prop.
     */
    isTwoFifthsTouch?: boolean
    /**
     * Add Bulma's `.is-three-fifths-touch` class to the element. Alias for `is-three-fifths-touch` prop.
     */
    isThreeFifthsTouch?: boolean
    /**
     * Add Bulma's `.is-four-fifths-touch` class to the element. Alias for `is-four-fifths-touch` prop.
     */
    isFourFifthsTouch?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-touch` class to the element. Alias for `is-offset-three-quarters-touch` prop.
     */
    isOffsetThreeQuartersTouch?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-touch` class to the element. Alias for `is-offset-two-thirds-touch` prop.
     */
    isOffsetTwoThirdsTouch?: boolean
    /**
     * Add Bulma's `.is-offset-half-touch` class to the element. Alias for `is-offset-half-touch` prop.
     */
    isOffsetHalfTouch?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-touch` class to the element. Alias for `is-offset-one-third-touch` prop.
     */
    isOffsetOneThirdTouch?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-touch` class to the element. Alias for `is-offset-one-quarter-touch` prop.
     */
    isOffsetOneQuarterTouch?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-touch` class to the element. Alias for `is-offset-one-fifth-touch` prop.
     */
    isOffsetOneFifthTouch?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-touch` class to the element. Alias for `is-offset-two-fifths-touch` prop.
     */
    isOffsetTwoFifthsTouch?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-touch` class to the element. Alias for `is-offset-three-fifths-touch` prop.
     */
    isOffsetThreeFifthsTouch?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-touch` class to the element. Alias for `is-offset-four-fifths-touch` prop.
     */
    isOffsetFourFifthsTouch?: boolean
    /**
     * Add Bulma's `.is-0-touch` class to the element. Alias for `is-0-touch` prop.
     */
    is0Touch?: boolean
    /**
     * Add Bulma's `.is-offset-0-touch` class to the element. Alias for `is-offset-0-touch` prop.
     */
    isOffset0Touch?: boolean
    /**
     * Add Bulma's `.is-1-touch` class to the element. Alias for `is-1-touch` prop.
     */
    is1Touch?: boolean
    /**
     * Add Bulma's `.is-offset-1-touch` class to the element. Alias for `is-offset-1-touch` prop.
     */
    isOffset1Touch?: boolean
    /**
     * Add Bulma's `.is-2-touch` class to the element. Alias for `is-2-touch` prop.
     */
    is2Touch?: boolean
    /**
     * Add Bulma's `.is-offset-2-touch` class to the element. Alias for `is-offset-2-touch` prop.
     */
    isOffset2Touch?: boolean
    /**
     * Add Bulma's `.is-3-touch` class to the element. Alias for `is-3-touch` prop.
     */
    is3Touch?: boolean
    /**
     * Add Bulma's `.is-offset-3-touch` class to the element. Alias for `is-offset-3-touch` prop.
     */
    isOffset3Touch?: boolean
    /**
     * Add Bulma's `.is-4-touch` class to the element. Alias for `is-4-touch` prop.
     */
    is4Touch?: boolean
    /**
     * Add Bulma's `.is-offset-4-touch` class to the element. Alias for `is-offset-4-touch` prop.
     */
    isOffset4Touch?: boolean
    /**
     * Add Bulma's `.is-5-touch` class to the element. Alias for `is-5-touch` prop.
     */
    is5Touch?: boolean
    /**
     * Add Bulma's `.is-offset-5-touch` class to the element. Alias for `is-offset-5-touch` prop.
     */
    isOffset5Touch?: boolean
    /**
     * Add Bulma's `.is-6-touch` class to the element. Alias for `is-6-touch` prop.
     */
    is6Touch?: boolean
    /**
     * Add Bulma's `.is-offset-6-touch` class to the element. Alias for `is-offset-6-touch` prop.
     */
    isOffset6Touch?: boolean
    /**
     * Add Bulma's `.is-7-touch` class to the element. Alias for `is-7-touch` prop.
     */
    is7Touch?: boolean
    /**
     * Add Bulma's `.is-offset-7-touch` class to the element. Alias for `is-offset-7-touch` prop.
     */
    isOffset7Touch?: boolean
    /**
     * Add Bulma's `.is-8-touch` class to the element. Alias for `is-8-touch` prop.
     */
    is8Touch?: boolean
    /**
     * Add Bulma's `.is-offset-8-touch` class to the element. Alias for `is-offset-8-touch` prop.
     */
    isOffset8Touch?: boolean
    /**
     * Add Bulma's `.is-9-touch` class to the element. Alias for `is-9-touch` prop.
     */
    is9Touch?: boolean
    /**
     * Add Bulma's `.is-offset-9-touch` class to the element. Alias for `is-offset-9-touch` prop.
     */
    isOffset9Touch?: boolean
    /**
     * Add Bulma's `.is-10-touch` class to the element. Alias for `is-10-touch` prop.
     */
    is10Touch?: boolean
    /**
     * Add Bulma's `.is-offset-10-touch` class to the element. Alias for `is-offset-10-touch` prop.
     */
    isOffset10Touch?: boolean
    /**
     * Add Bulma's `.is-11-touch` class to the element. Alias for `is-11-touch` prop.
     */
    is11Touch?: boolean
    /**
     * Add Bulma's `.is-offset-11-touch` class to the element. Alias for `is-offset-11-touch` prop.
     */
    isOffset11Touch?: boolean
    /**
     * Add Bulma's `.is-12-touch` class to the element. Alias for `is-12-touch` prop.
     */
    is12Touch?: boolean
    /**
     * Add Bulma's `.is-offset-12-touch` class to the element. Alias for `is-offset-12-touch` prop.
     */
    isOffset12Touch?: boolean
    /**
     * Add Bulma's `.is-narrow-desktop` class to the element. Alias for `is-narrow-desktop` prop.
     */
    isNarrowDesktop?: boolean
    /**
     * Add Bulma's `.is-full-desktop` class to the element. Alias for `is-full-desktop` prop.
     */
    isFullDesktop?: boolean
    /**
     * Add Bulma's `.is-three-quarters-desktop` class to the element. Alias for `is-three-quarters-desktop` prop.
     */
    isThreeQuartersDesktop?: boolean
    /**
     * Add Bulma's `.is-two-thirds-desktop` class to the element. Alias for `is-two-thirds-desktop` prop.
     */
    isTwoThirdsDesktop?: boolean
    /**
     * Add Bulma's `.is-half-desktop` class to the element. Alias for `is-half-desktop` prop.
     */
    isHalfDesktop?: boolean
    /**
     * Add Bulma's `.is-one-third-desktop` class to the element. Alias for `is-one-third-desktop` prop.
     */
    isOneThirdDesktop?: boolean
    /**
     * Add Bulma's `.is-one-quarter-desktop` class to the element. Alias for `is-one-quarter-desktop` prop.
     */
    isOneQuarterDesktop?: boolean
    /**
     * Add Bulma's `.is-one-fifth-desktop` class to the element. Alias for `is-one-fifth-desktop` prop.
     */
    isOneFifthDesktop?: boolean
    /**
     * Add Bulma's `.is-two-fifths-desktop` class to the element. Alias for `is-two-fifths-desktop` prop.
     */
    isTwoFifthsDesktop?: boolean
    /**
     * Add Bulma's `.is-three-fifths-desktop` class to the element. Alias for `is-three-fifths-desktop` prop.
     */
    isThreeFifthsDesktop?: boolean
    /**
     * Add Bulma's `.is-four-fifths-desktop` class to the element. Alias for `is-four-fifths-desktop` prop.
     */
    isFourFifthsDesktop?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-desktop` class to the element. Alias for `is-offset-three-quarters-desktop` prop.
     */
    isOffsetThreeQuartersDesktop?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-desktop` class to the element. Alias for `is-offset-two-thirds-desktop` prop.
     */
    isOffsetTwoThirdsDesktop?: boolean
    /**
     * Add Bulma's `.is-offset-half-desktop` class to the element. Alias for `is-offset-half-desktop` prop.
     */
    isOffsetHalfDesktop?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-desktop` class to the element. Alias for `is-offset-one-third-desktop` prop.
     */
    isOffsetOneThirdDesktop?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-desktop` class to the element. Alias for `is-offset-one-quarter-desktop` prop.
     */
    isOffsetOneQuarterDesktop?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-desktop` class to the element. Alias for `is-offset-one-fifth-desktop` prop.
     */
    isOffsetOneFifthDesktop?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-desktop` class to the element. Alias for `is-offset-two-fifths-desktop` prop.
     */
    isOffsetTwoFifthsDesktop?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-desktop` class to the element. Alias for `is-offset-three-fifths-desktop` prop.
     */
    isOffsetThreeFifthsDesktop?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-desktop` class to the element. Alias for `is-offset-four-fifths-desktop` prop.
     */
    isOffsetFourFifthsDesktop?: boolean
    /**
     * Add Bulma's `.is-0-desktop` class to the element. Alias for `is-0-desktop` prop.
     */
    is0Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-0-desktop` class to the element. Alias for `is-offset-0-desktop` prop.
     */
    isOffset0Desktop?: boolean
    /**
     * Add Bulma's `.is-1-desktop` class to the element. Alias for `is-1-desktop` prop.
     */
    is1Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-1-desktop` class to the element. Alias for `is-offset-1-desktop` prop.
     */
    isOffset1Desktop?: boolean
    /**
     * Add Bulma's `.is-2-desktop` class to the element. Alias for `is-2-desktop` prop.
     */
    is2Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-2-desktop` class to the element. Alias for `is-offset-2-desktop` prop.
     */
    isOffset2Desktop?: boolean
    /**
     * Add Bulma's `.is-3-desktop` class to the element. Alias for `is-3-desktop` prop.
     */
    is3Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-3-desktop` class to the element. Alias for `is-offset-3-desktop` prop.
     */
    isOffset3Desktop?: boolean
    /**
     * Add Bulma's `.is-4-desktop` class to the element. Alias for `is-4-desktop` prop.
     */
    is4Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-4-desktop` class to the element. Alias for `is-offset-4-desktop` prop.
     */
    isOffset4Desktop?: boolean
    /**
     * Add Bulma's `.is-5-desktop` class to the element. Alias for `is-5-desktop` prop.
     */
    is5Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-5-desktop` class to the element. Alias for `is-offset-5-desktop` prop.
     */
    isOffset5Desktop?: boolean
    /**
     * Add Bulma's `.is-6-desktop` class to the element. Alias for `is-6-desktop` prop.
     */
    is6Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-6-desktop` class to the element. Alias for `is-offset-6-desktop` prop.
     */
    isOffset6Desktop?: boolean
    /**
     * Add Bulma's `.is-7-desktop` class to the element. Alias for `is-7-desktop` prop.
     */
    is7Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-7-desktop` class to the element. Alias for `is-offset-7-desktop` prop.
     */
    isOffset7Desktop?: boolean
    /**
     * Add Bulma's `.is-8-desktop` class to the element. Alias for `is-8-desktop` prop.
     */
    is8Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-8-desktop` class to the element. Alias for `is-offset-8-desktop` prop.
     */
    isOffset8Desktop?: boolean
    /**
     * Add Bulma's `.is-9-desktop` class to the element. Alias for `is-9-desktop` prop.
     */
    is9Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-9-desktop` class to the element. Alias for `is-offset-9-desktop` prop.
     */
    isOffset9Desktop?: boolean
    /**
     * Add Bulma's `.is-10-desktop` class to the element. Alias for `is-10-desktop` prop.
     */
    is10Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-10-desktop` class to the element. Alias for `is-offset-10-desktop` prop.
     */
    isOffset10Desktop?: boolean
    /**
     * Add Bulma's `.is-11-desktop` class to the element. Alias for `is-11-desktop` prop.
     */
    is11Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-11-desktop` class to the element. Alias for `is-offset-11-desktop` prop.
     */
    isOffset11Desktop?: boolean
    /**
     * Add Bulma's `.is-12-desktop` class to the element. Alias for `is-12-desktop` prop.
     */
    is12Desktop?: boolean
    /**
     * Add Bulma's `.is-offset-12-desktop` class to the element. Alias for `is-offset-12-desktop` prop.
     */
    isOffset12Desktop?: boolean
    /**
     * Add Bulma's `.is-narrow-widescreen` class to the element. Alias for `is-narrow-widescreen` prop.
     */
    isNarrowWidescreen?: boolean
    /**
     * Add Bulma's `.is-full-widescreen` class to the element. Alias for `is-full-widescreen` prop.
     */
    isFullWidescreen?: boolean
    /**
     * Add Bulma's `.is-three-quarters-widescreen` class to the element. Alias for `is-three-quarters-widescreen` prop.
     */
    isThreeQuartersWidescreen?: boolean
    /**
     * Add Bulma's `.is-two-thirds-widescreen` class to the element. Alias for `is-two-thirds-widescreen` prop.
     */
    isTwoThirdsWidescreen?: boolean
    /**
     * Add Bulma's `.is-half-widescreen` class to the element. Alias for `is-half-widescreen` prop.
     */
    isHalfWidescreen?: boolean
    /**
     * Add Bulma's `.is-one-third-widescreen` class to the element. Alias for `is-one-third-widescreen` prop.
     */
    isOneThirdWidescreen?: boolean
    /**
     * Add Bulma's `.is-one-quarter-widescreen` class to the element. Alias for `is-one-quarter-widescreen` prop.
     */
    isOneQuarterWidescreen?: boolean
    /**
     * Add Bulma's `.is-one-fifth-widescreen` class to the element. Alias for `is-one-fifth-widescreen` prop.
     */
    isOneFifthWidescreen?: boolean
    /**
     * Add Bulma's `.is-two-fifths-widescreen` class to the element. Alias for `is-two-fifths-widescreen` prop.
     */
    isTwoFifthsWidescreen?: boolean
    /**
     * Add Bulma's `.is-three-fifths-widescreen` class to the element. Alias for `is-three-fifths-widescreen` prop.
     */
    isThreeFifthsWidescreen?: boolean
    /**
     * Add Bulma's `.is-four-fifths-widescreen` class to the element. Alias for `is-four-fifths-widescreen` prop.
     */
    isFourFifthsWidescreen?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-widescreen` class to the element. Alias for `is-offset-three-quarters-widescreen` prop.
     */
    isOffsetThreeQuartersWidescreen?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-widescreen` class to the element. Alias for `is-offset-two-thirds-widescreen` prop.
     */
    isOffsetTwoThirdsWidescreen?: boolean
    /**
     * Add Bulma's `.is-offset-half-widescreen` class to the element. Alias for `is-offset-half-widescreen` prop.
     */
    isOffsetHalfWidescreen?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-widescreen` class to the element. Alias for `is-offset-one-third-widescreen` prop.
     */
    isOffsetOneThirdWidescreen?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-widescreen` class to the element. Alias for `is-offset-one-quarter-widescreen` prop.
     */
    isOffsetOneQuarterWidescreen?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-widescreen` class to the element. Alias for `is-offset-one-fifth-widescreen` prop.
     */
    isOffsetOneFifthWidescreen?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-widescreen` class to the element. Alias for `is-offset-two-fifths-widescreen` prop.
     */
    isOffsetTwoFifthsWidescreen?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-widescreen` class to the element. Alias for `is-offset-three-fifths-widescreen` prop.
     */
    isOffsetThreeFifthsWidescreen?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-widescreen` class to the element. Alias for `is-offset-four-fifths-widescreen` prop.
     */
    isOffsetFourFifthsWidescreen?: boolean
    /**
     * Add Bulma's `.is-0-widescreen` class to the element. Alias for `is-0-widescreen` prop.
     */
    is0Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-0-widescreen` class to the element. Alias for `is-offset-0-widescreen` prop.
     */
    isOffset0Widescreen?: boolean
    /**
     * Add Bulma's `.is-1-widescreen` class to the element. Alias for `is-1-widescreen` prop.
     */
    is1Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-1-widescreen` class to the element. Alias for `is-offset-1-widescreen` prop.
     */
    isOffset1Widescreen?: boolean
    /**
     * Add Bulma's `.is-2-widescreen` class to the element. Alias for `is-2-widescreen` prop.
     */
    is2Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-2-widescreen` class to the element. Alias for `is-offset-2-widescreen` prop.
     */
    isOffset2Widescreen?: boolean
    /**
     * Add Bulma's `.is-3-widescreen` class to the element. Alias for `is-3-widescreen` prop.
     */
    is3Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-3-widescreen` class to the element. Alias for `is-offset-3-widescreen` prop.
     */
    isOffset3Widescreen?: boolean
    /**
     * Add Bulma's `.is-4-widescreen` class to the element. Alias for `is-4-widescreen` prop.
     */
    is4Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-4-widescreen` class to the element. Alias for `is-offset-4-widescreen` prop.
     */
    isOffset4Widescreen?: boolean
    /**
     * Add Bulma's `.is-5-widescreen` class to the element. Alias for `is-5-widescreen` prop.
     */
    is5Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-5-widescreen` class to the element. Alias for `is-offset-5-widescreen` prop.
     */
    isOffset5Widescreen?: boolean
    /**
     * Add Bulma's `.is-6-widescreen` class to the element. Alias for `is-6-widescreen` prop.
     */
    is6Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-6-widescreen` class to the element. Alias for `is-offset-6-widescreen` prop.
     */
    isOffset6Widescreen?: boolean
    /**
     * Add Bulma's `.is-7-widescreen` class to the element. Alias for `is-7-widescreen` prop.
     */
    is7Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-7-widescreen` class to the element. Alias for `is-offset-7-widescreen` prop.
     */
    isOffset7Widescreen?: boolean
    /**
     * Add Bulma's `.is-8-widescreen` class to the element. Alias for `is-8-widescreen` prop.
     */
    is8Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-8-widescreen` class to the element. Alias for `is-offset-8-widescreen` prop.
     */
    isOffset8Widescreen?: boolean
    /**
     * Add Bulma's `.is-9-widescreen` class to the element. Alias for `is-9-widescreen` prop.
     */
    is9Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-9-widescreen` class to the element. Alias for `is-offset-9-widescreen` prop.
     */
    isOffset9Widescreen?: boolean
    /**
     * Add Bulma's `.is-10-widescreen` class to the element. Alias for `is-10-widescreen` prop.
     */
    is10Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-10-widescreen` class to the element. Alias for `is-offset-10-widescreen` prop.
     */
    isOffset10Widescreen?: boolean
    /**
     * Add Bulma's `.is-11-widescreen` class to the element. Alias for `is-11-widescreen` prop.
     */
    is11Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-11-widescreen` class to the element. Alias for `is-offset-11-widescreen` prop.
     */
    isOffset11Widescreen?: boolean
    /**
     * Add Bulma's `.is-12-widescreen` class to the element. Alias for `is-12-widescreen` prop.
     */
    is12Widescreen?: boolean
    /**
     * Add Bulma's `.is-offset-12-widescreen` class to the element. Alias for `is-offset-12-widescreen` prop.
     */
    isOffset12Widescreen?: boolean
    /**
     * Add Bulma's `.is-narrow-fullhd` class to the element. Alias for `is-narrow-fullhd` prop.
     */
    isNarrowFullhd?: boolean
    /**
     * Add Bulma's `.is-full-fullhd` class to the element. Alias for `is-full-fullhd` prop.
     */
    isFullFullhd?: boolean
    /**
     * Add Bulma's `.is-three-quarters-fullhd` class to the element. Alias for `is-three-quarters-fullhd` prop.
     */
    isThreeQuartersFullhd?: boolean
    /**
     * Add Bulma's `.is-two-thirds-fullhd` class to the element. Alias for `is-two-thirds-fullhd` prop.
     */
    isTwoThirdsFullhd?: boolean
    /**
     * Add Bulma's `.is-half-fullhd` class to the element. Alias for `is-half-fullhd` prop.
     */
    isHalfFullhd?: boolean
    /**
     * Add Bulma's `.is-one-third-fullhd` class to the element. Alias for `is-one-third-fullhd` prop.
     */
    isOneThirdFullhd?: boolean
    /**
     * Add Bulma's `.is-one-quarter-fullhd` class to the element. Alias for `is-one-quarter-fullhd` prop.
     */
    isOneQuarterFullhd?: boolean
    /**
     * Add Bulma's `.is-one-fifth-fullhd` class to the element. Alias for `is-one-fifth-fullhd` prop.
     */
    isOneFifthFullhd?: boolean
    /**
     * Add Bulma's `.is-two-fifths-fullhd` class to the element. Alias for `is-two-fifths-fullhd` prop.
     */
    isTwoFifthsFullhd?: boolean
    /**
     * Add Bulma's `.is-three-fifths-fullhd` class to the element. Alias for `is-three-fifths-fullhd` prop.
     */
    isThreeFifthsFullhd?: boolean
    /**
     * Add Bulma's `.is-four-fifths-fullhd` class to the element. Alias for `is-four-fifths-fullhd` prop.
     */
    isFourFifthsFullhd?: boolean
    /**
     * Add Bulma's `.is-offset-three-quarters-fullhd` class to the element. Alias for `is-offset-three-quarters-fullhd` prop.
     */
    isOffsetThreeQuartersFullhd?: boolean
    /**
     * Add Bulma's `.is-offset-two-thirds-fullhd` class to the element. Alias for `is-offset-two-thirds-fullhd` prop.
     */
    isOffsetTwoThirdsFullhd?: boolean
    /**
     * Add Bulma's `.is-offset-half-fullhd` class to the element. Alias for `is-offset-half-fullhd` prop.
     */
    isOffsetHalfFullhd?: boolean
    /**
     * Add Bulma's `.is-offset-one-third-fullhd` class to the element. Alias for `is-offset-one-third-fullhd` prop.
     */
    isOffsetOneThirdFullhd?: boolean
    /**
     * Add Bulma's `.is-offset-one-quarter-fullhd` class to the element. Alias for `is-offset-one-quarter-fullhd` prop.
     */
    isOffsetOneQuarterFullhd?: boolean
    /**
     * Add Bulma's `.is-offset-one-fifth-fullhd` class to the element. Alias for `is-offset-one-fifth-fullhd` prop.
     */
    isOffsetOneFifthFullhd?: boolean
    /**
     * Add Bulma's `.is-offset-two-fifths-fullhd` class to the element. Alias for `is-offset-two-fifths-fullhd` prop.
     */
    isOffsetTwoFifthsFullhd?: boolean
    /**
     * Add Bulma's `.is-offset-three-fifths-fullhd` class to the element. Alias for `is-offset-three-fifths-fullhd` prop.
     */
    isOffsetThreeFifthsFullhd?: boolean
    /**
     * Add Bulma's `.is-offset-four-fifths-fullhd` class to the element. Alias for `is-offset-four-fifths-fullhd` prop.
     */
    isOffsetFourFifthsFullhd?: boolean
    /**
     * Add Bulma's `.is-0-fullhd` class to the element. Alias for `is-0-fullhd` prop.
     */
    is0Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-0-fullhd` class to the element. Alias for `is-offset-0-fullhd` prop.
     */
    isOffset0Fullhd?: boolean
    /**
     * Add Bulma's `.is-1-fullhd` class to the element. Alias for `is-1-fullhd` prop.
     */
    is1Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-1-fullhd` class to the element. Alias for `is-offset-1-fullhd` prop.
     */
    isOffset1Fullhd?: boolean
    /**
     * Add Bulma's `.is-2-fullhd` class to the element. Alias for `is-2-fullhd` prop.
     */
    is2Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-2-fullhd` class to the element. Alias for `is-offset-2-fullhd` prop.
     */
    isOffset2Fullhd?: boolean
    /**
     * Add Bulma's `.is-3-fullhd` class to the element. Alias for `is-3-fullhd` prop.
     */
    is3Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-3-fullhd` class to the element. Alias for `is-offset-3-fullhd` prop.
     */
    isOffset3Fullhd?: boolean
    /**
     * Add Bulma's `.is-4-fullhd` class to the element. Alias for `is-4-fullhd` prop.
     */
    is4Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-4-fullhd` class to the element. Alias for `is-offset-4-fullhd` prop.
     */
    isOffset4Fullhd?: boolean
    /**
     * Add Bulma's `.is-5-fullhd` class to the element. Alias for `is-5-fullhd` prop.
     */
    is5Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-5-fullhd` class to the element. Alias for `is-offset-5-fullhd` prop.
     */
    isOffset5Fullhd?: boolean
    /**
     * Add Bulma's `.is-6-fullhd` class to the element. Alias for `is-6-fullhd` prop.
     */
    is6Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-6-fullhd` class to the element. Alias for `is-offset-6-fullhd` prop.
     */
    isOffset6Fullhd?: boolean
    /**
     * Add Bulma's `.is-7-fullhd` class to the element. Alias for `is-7-fullhd` prop.
     */
    is7Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-7-fullhd` class to the element. Alias for `is-offset-7-fullhd` prop.
     */
    isOffset7Fullhd?: boolean
    /**
     * Add Bulma's `.is-8-fullhd` class to the element. Alias for `is-8-fullhd` prop.
     */
    is8Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-8-fullhd` class to the element. Alias for `is-offset-8-fullhd` prop.
     */
    isOffset8Fullhd?: boolean
    /**
     * Add Bulma's `.is-9-fullhd` class to the element. Alias for `is-9-fullhd` prop.
     */
    is9Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-9-fullhd` class to the element. Alias for `is-offset-9-fullhd` prop.
     */
    isOffset9Fullhd?: boolean
    /**
     * Add Bulma's `.is-10-fullhd` class to the element. Alias for `is-10-fullhd` prop.
     */
    is10Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-10-fullhd` class to the element. Alias for `is-offset-10-fullhd` prop.
     */
    isOffset10Fullhd?: boolean
    /**
     * Add Bulma's `.is-11-fullhd` class to the element. Alias for `is-11-fullhd` prop.
     */
    is11Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-11-fullhd` class to the element. Alias for `is-offset-11-fullhd` prop.
     */
    isOffset11Fullhd?: boolean
    /**
     * Add Bulma's `.is-12-fullhd` class to the element. Alias for `is-12-fullhd` prop.
     */
    is12Fullhd?: boolean
    /**
     * Add Bulma's `.is-offset-12-fullhd` class to the element. Alias for `is-offset-12-fullhd` prop.
     */
    isOffset12Fullhd?: boolean
    /**
     * Add Bulma's `.is-gapless` class to the element. Alias for `is-gapless` prop.
     */
    isGapless?: boolean
    /**
     * Add Bulma's `.is-multiline` class to the element. Alias for `is-multiline` prop.
     */
    isMultiline?: boolean
    /**
     * Add Bulma's `.is-vcentered` class to the element. Alias for `is-vcentered` prop.
     */
    isVcentered?: boolean
    /**
     * Add Bulma's `.is-desktop` class to the element. Alias for `is-desktop` prop.
     */
    isDesktop?: boolean
    /**
     * Add Bulma's `.is-variable` class to the element. Alias for `is-variable` prop.
     */
    isVariable?: boolean
    /**
     * Add Bulma's `.is-0-tablet-only` class to the element. Alias for `is-0-tablet-only` prop.
     */
    is0TabletOnly?: boolean
    /**
     * Add Bulma's `.is-0-desktop-only` class to the element. Alias for `is-0-desktop-only` prop.
     */
    is0DesktopOnly?: boolean
    /**
     * Add Bulma's `.is-0-widescreen-only` class to the element. Alias for `is-0-widescreen-only` prop.
     */
    is0WidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-1-tablet-only` class to the element. Alias for `is-1-tablet-only` prop.
     */
    is1TabletOnly?: boolean
    /**
     * Add Bulma's `.is-1-desktop-only` class to the element. Alias for `is-1-desktop-only` prop.
     */
    is1DesktopOnly?: boolean
    /**
     * Add Bulma's `.is-1-widescreen-only` class to the element. Alias for `is-1-widescreen-only` prop.
     */
    is1WidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-2-tablet-only` class to the element. Alias for `is-2-tablet-only` prop.
     */
    is2TabletOnly?: boolean
    /**
     * Add Bulma's `.is-2-desktop-only` class to the element. Alias for `is-2-desktop-only` prop.
     */
    is2DesktopOnly?: boolean
    /**
     * Add Bulma's `.is-2-widescreen-only` class to the element. Alias for `is-2-widescreen-only` prop.
     */
    is2WidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-3-tablet-only` class to the element. Alias for `is-3-tablet-only` prop.
     */
    is3TabletOnly?: boolean
    /**
     * Add Bulma's `.is-3-desktop-only` class to the element. Alias for `is-3-desktop-only` prop.
     */
    is3DesktopOnly?: boolean
    /**
     * Add Bulma's `.is-3-widescreen-only` class to the element. Alias for `is-3-widescreen-only` prop.
     */
    is3WidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-4-tablet-only` class to the element. Alias for `is-4-tablet-only` prop.
     */
    is4TabletOnly?: boolean
    /**
     * Add Bulma's `.is-4-desktop-only` class to the element. Alias for `is-4-desktop-only` prop.
     */
    is4DesktopOnly?: boolean
    /**
     * Add Bulma's `.is-4-widescreen-only` class to the element. Alias for `is-4-widescreen-only` prop.
     */
    is4WidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-5-tablet-only` class to the element. Alias for `is-5-tablet-only` prop.
     */
    is5TabletOnly?: boolean
    /**
     * Add Bulma's `.is-5-desktop-only` class to the element. Alias for `is-5-desktop-only` prop.
     */
    is5DesktopOnly?: boolean
    /**
     * Add Bulma's `.is-5-widescreen-only` class to the element. Alias for `is-5-widescreen-only` prop.
     */
    is5WidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-6-tablet-only` class to the element. Alias for `is-6-tablet-only` prop.
     */
    is6TabletOnly?: boolean
    /**
     * Add Bulma's `.is-6-desktop-only` class to the element. Alias for `is-6-desktop-only` prop.
     */
    is6DesktopOnly?: boolean
    /**
     * Add Bulma's `.is-6-widescreen-only` class to the element. Alias for `is-6-widescreen-only` prop.
     */
    is6WidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-7-tablet-only` class to the element. Alias for `is-7-tablet-only` prop.
     */
    is7TabletOnly?: boolean
    /**
     * Add Bulma's `.is-7-desktop-only` class to the element. Alias for `is-7-desktop-only` prop.
     */
    is7DesktopOnly?: boolean
    /**
     * Add Bulma's `.is-7-widescreen-only` class to the element. Alias for `is-7-widescreen-only` prop.
     */
    is7WidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-8-tablet-only` class to the element. Alias for `is-8-tablet-only` prop.
     */
    is8TabletOnly?: boolean
    /**
     * Add Bulma's `.is-8-desktop-only` class to the element. Alias for `is-8-desktop-only` prop.
     */
    is8DesktopOnly?: boolean
    /**
     * Add Bulma's `.is-8-widescreen-only` class to the element. Alias for `is-8-widescreen-only` prop.
     */
    is8WidescreenOnly?: boolean
    /**
     * Add Bulma's `.is-ancestor` class to the element. Alias for `is-ancestor` prop.
     */
    isAncestor?: boolean
    /**
     * Add Bulma's `.is-child` class to the element. Alias for `is-child` prop.
     */
    isChild?: boolean
    /**
     * Add Bulma's `.is-parent` class to the element. Alias for `is-parent` prop.
     */
    isParent?: boolean
    /**
     * Add Bulma's `.is-vertical` class to the element. Alias for `is-vertical` prop.
     */
    isVertical?: boolean
    /**
     * Add Bulma's `.is-bold` class to the element. Alias for `is-bold` prop.
     */
    isBold?: boolean
    /**
     * Add Bulma's `.hero-body` class to the element. Alias for `hero-body` prop.
     */
    heroBody?: boolean
    /**
     * Add Bulma's `.is-halfheight` class to the element. Alias for `is-halfheight` prop.
     */
    isHalfheight?: boolean
    /**
     * Add Bulma's `.is-fullheight` class to the element. Alias for `is-fullheight` prop.
     */
    isFullheight?: boolean
    /**
     * Add Bulma's `.hero-buttons` class to the element. Alias for `hero-buttons` prop.
     */
    heroButtons?: boolean
    /**
     * Add Bulma's `.hero-head` class to the element. Alias for `hero-head` prop.
     */
    heroHead?: boolean
    /**
     * Add Bulma's `.hero-foot` class to the element. Alias for `hero-foot` prop.
     */
    heroFoot?: boolean
    }
  }
}