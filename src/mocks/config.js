export default {
  availableDevices: [
    {name: 'all', media: 'screen'},
    {name: 'phone', media: 'screen and (max-width: 599px)'},
    {name: 'tablet', media: 'screen and (min-width: 600px) and (max-width: 1023px)'},
    {name: 'desktop', media: 'screen and (min-width: 1024px)'}
  ],
  fetchRoleNamesURL: '.cloudserviceconfiguration.json',
  supportedRoleNames: {},
  defaultBodySwitches: [{name: 'no switch', value: ''}],
  defaultFonts: [],
  googleFonts: [],
  typekitFonts: [],
  availableUnits: ['px', '%', 'em', 'rem', 'pt', 'vw', 'vh'],
  elementsMap: {
    rte: {
      name: 'RTE'
    },
    textAndMedia: {
      name: 'Text & Media',
      elements: {
        title: {
          name: 'Title',
          selector: '.text-media-title'
        },
        richtext: {
          name: 'Richtext',
          selector: '> .richtext',
          elements: {
            p: {
              name: 'Paragraph',
              selector: '> p'
            },
            a: {
              name: 'Anchor',
              selector: '> a'
            }
          }
        },
        wrapper: {
          name: 'Wrapper',
          selector: '.text-media-wrapper'
        },
        image: {
          name: 'Image',
          selector: '.text-media-img'
        },
        article: {
          name: 'Article',
          selector: '.text-media-article',
          elements: {
            p: {
              name: 'Paragraph',
              selector: '> p',
              elements: {
                b: {
                  name: 'Bold',
                  selector: '> b'
                }
              }
            },
            a: {
              name: 'Anchor',
              selector: '> a'
            },
            ul: {
              name: 'List',
              selector: '> ul',
              elements: {
                li: {
                  name: 'List Item',
                  selector: '> li'
                }
              }
            }
          }
        },
        button: {
          name: 'Button',
          selector: '.text-media-button'
        },
        buttonWrapper: {
          name: 'Button Wrapper',
          selector: '.text-media-button-wrapper'
        },
        date: {
          name: 'Date',
          selector: '.text-media-date'
        },
        description: {
          name: 'Description',
          selector: '.text-media-description',
          elements: {
            p: {
              name: 'Paragraph',
              selector: '> p'
            },
            a: {
              name: 'Anchor',
              selector: '> a'
            }
          }
        },
        titleLink: {
          name: 'Title link',
          selector: '.text-media-title-link'
        },
        subtitle: {
          name: 'Subtitle',
          selector: '.text-media-subtitle'
        },
        imgLink: {
          name: 'Image link',
          selector: '.text-media-img-link'
        },
        caption: {
          name: 'Caption',
          selector: '.text-media-caption'
        },
        secondaryDate: {
          name: 'Secondary Date',
          selector: '.text-media-secondary-date'
        },
        thumbnailLink: {
          name: 'Thumbnail Link',
          selector: '.text-media-thumbnail-link'
        },
        thumbnail: {
          name: 'Thumbnail',
          selector: '.text-media-thumbnail'
        },
        video: {
          name: 'Video',
          selector: '.cq-dd-video'
        },
        sup: {
          name: 'sup',
          selector: 'sup'
        },
        glossaryLink: {
          name: 'Glossary Link',
          selector: '.glossary-link'
        },

      }
    },
    navigation: {
      name: 'Navigation',
      elements: {
        wrapper: {
          name: 'Wrapper',
          selector: '.menu-wrapper'
        },
        navigationItemLevel1: {
          name: 'Item Level1',
          selector: '.menu-item-level-1'
        },
        navigationItemLevel2: {
          name: 'Item Level2',
          selector: '.menu-item-level-2'
        },
        navigationItemLevel3: {
          name: 'Item Level3',
          selector: '.menu-item-level-3'
        },
        navigationLinkLevel1: {
          name: 'Link Level1',
          selector: '.menu-link-level-1'
        },
        navigationLinkLevel2: {
          name: 'Link Level2',
          selector: '.menu-link-level-2'
        },
        navigationLinkLevel3: {
          name: 'Link Level3',
          selector: '.menu-link-level-3'
        },
        submenuLevel1: {
          name: 'Submenu Level1',
          selector: ' ul.submenu-level-1'
        },
        submenuLevel2: {
          name: 'Submenu Level2',
          selector: ' ul.submenu-level-2'
        },
        submenuLevel3: {
          name: 'Submenu Level3',
          selector: ' ul.submenu-level-3'
        },
        menuOpen: {
          name: 'Open Menu Indicator',
          selector: '.menu-open'
        },
        listboxSelect: {
          name: 'Listbox Menu Select',
          selector: '.listbox-select'
        },
        menuButton: {
          name: 'Menu Button',
          selector: '.menu-button'
        },
        menuCloseButton: {
          name: 'Menu Close Button',
          selector: '.menu-close'
        },
        arrowUp: {
          name: 'Arrow Up',
          selector: '.arrow-up'
        },
        arrowDown: {
          name: 'Arrow Down',
          selector: '.arrow-down'
        },
        modalLink: {
          name: 'Modal Menu Button',
          selector: '.modal-link'
        }
      }
    },
    menu: {
      name: 'Menu',
      elements: {
        wrapper: {
          name: 'Wrapper',
          selector: '.menu-wrapper'
        },
        menuLink: {
          name: 'Menu Link',
          selector: '.menu-link'
        },
        menuItem: {
          name: 'Menu Item',
          selector: '.menuItem'
        }
      }
    },
    page: {
      name: 'Page',
      elements: {
        wrapper: {
          name: 'wrapper',
          selector: '.site'
        },
        firstHeader: {
          name: 'First Header',
          selector: '.first-header'
        },
        secondaryHeader: {
          name: 'Secondary Header',
          selector: '.secondary-header'
        },
        rightAside: {
          name: 'Right Aside',
          selector: '.right-aside'
        },
        leftAside: {
          name: 'Left Aside',
          selector: '.left-aside'
        },
        mainRow: {
          name: 'Main row',
          selector: '.main-row',
          elements: {
            mainContent: {
              name: 'Main Content',
              selector: '.main-content'
            }
          }
        },
        footer: {
          name: 'Footer',
          selector: '.footer'
        },
        secondaryFooter: {
          name: 'Secondary Footer',
          selector: '.secondary-footer'
        },
        disclaiemerContent: {
          name: 'Disclaimer Content',
          selector: '.disclaimer-wrapper .content'
        },
        disclaiemerActions: {
          name: 'Disclaimer Actions',
          selector: '.disclaimer-wrapper .actions'
        },
        disclaiemerSubmit: {
          name: 'Disclaimer Submit',
          selector: '.disclaimer-wrapper .submit'
        },
        disclaiemerReturn: {
          name: 'Disclaimer Return',
          selector: '.disclaimer-wrapper .return'
        },
        disclaiemerWrapper: {
          name: 'Disclaimer Wrapper',
          selector: '.disclaimer-wrapper .confirm'
        },
        modal: {
          name: 'Modal Window',
          selector: '.modal-window'
        },
        modalWrapper: {
          name: 'Modal Wrapper',
          selector: '.modal-window .wrapper'
        },
        modalClose: {
          name: 'Modal Close',
          selector: '.modal-window .close'
        },
        modalContent: {
          name: 'Modal Content',
          selector: '.modal-window .modal-content'
        },
        modalActions: {
          name: 'Modal Actions',
          selector: '.modal-window .actions'
        },
        modalSubmit: {
          name: 'Modal Submit',
          selector: '.modal-window .submit'
        },
        modalReturn: {
          name: 'Modal Return',
          selector: '.modal-window .return'
        },
        modalConfirm: {
          name: 'Modal Confirm',
          selector: '.modal-window .confirm'
        }
      }
    },
    searchbox: {
      name: 'searchbox',
      elements: {
        form: {
          name: 'Form',
          selector: '.search-box-form',
        },
        input: {
          name: 'Input',
          selector: '.search-box-input',
        },
        label: {
          name: 'Label',
          selector: '.search-box-label',
        },
        select: {
          name: 'Select',
          selector: '.search-box-select',
        },
        submit: {
          name: 'Submit Button',
          selector: '.search-box-submit'
        }
      }
    },
    columnLayoutBlock: {
      name: 'Columns',
      elements: {
        row: {
          name: 'Row',
          selector: '.columns'
        },
        column: {
          name: 'Column',
          selector: '.col'
        }
      }
    },
    tabHolder: {
      name: 'Tab Holder',
      elements: {
        indicator: {
          name: 'Indicator',
          selector: '.indicator',
        },
        menuLink: {
          name: 'menu link',
          selector: '.tab-menu-link',
        },
        nav: {
          name: 'Navigation',
          selector: '.tab-nav',
        },
        itemBody: {
          name: 'Item Body',
          selector: '.tab-holder-item-body',
        }
      }
    },
    tabHolderItem: {
      name: 'Tab Holder Item',
      elements: {
        itemBody: {
          name: 'Item Body',
          selector: '.tab-holder-item-body',
        }
      }
    },
    table: {
      name: 'Table',
      elements: {
        tableWrapper: {
          name: 'Table Wrapper',
          selector: '.table-sb',
        },
        th: {
          name: 'TH',
          selector: '.th-sb',
        },
        td: {
          name: 'TD',
          selector: '.td-sb',
        },
        sorterInput: {
          name: 'Sorter Input',
          selector: '.tablesorter-input',
        },
        reset: {
          name: 'Reset',
          selector: '.reset'
        }
      }
    },
    expandableCollapsibleHolder: {
      name: 'Expandable Collapsible',
      elements: {
        header: {
          name: 'Header',
          selector: '.collapsible-header',
        },
        body: {
          name: 'Body',
          selector: '.collapsible-body',
        }
      }
    },
    expandableCollapsibleHolderItem: {
      name: 'Expandable Collapsible Item',
      elements: {
        body: {
          name: 'Body',
          selector: '.collapsible-body',
        }
      }
    },
    contentList: {
      name: 'Content List',
      elements: {
        pagination: {
          name : 'Pagination',
          selector: '.pagination'
        },
        paginationItem: {
          name: 'Pagination Item',
          selector: '.pagination-item'
        },
        more: {
          name: 'More',
          selector: 'content-list-more'
        },
        tags: {
          name: 'Tags',
          selector: '.content-list-tags'
        },
        tagsTitle: {
          name: 'Tags Title',
          selector: '.content-list-tags-title',
        },
        pageInfo: {
          name: 'Page Info',
          selector: '.content-list-page-info',
        },
        textMedia: {
          name: 'Text and Media',
          selector: '.content-list-text-media',
        },
        Item: {
          name: 'Item',
          selector: '.content-list-item'
        },
        title: {
          name: 'Title',
          selector: '.text-media-title'
        },
        richtext: {
          name: 'Richtext',
          selector: '> .richtext',
          elements: {
            p: {
              name: 'Paragraph',
              selector: '> p'
            },
            a: {
              name: 'Anchor',
              selector: '> a'
            }
          }
        },
        wrapper1: {
          name: 'Text and Media Element 1',
          selector: '.text-media:nth-child(1)'
        },
        wrapper2: {
          name: 'Text and Media Element 2',
          selector: '.text-media:nth-child(2)'
        },
        wrapper3: {
          name: 'Text and Media Element 3',
          selector: '.text-media:nth-child(3)'
        },
        wrapper4: {
          name: 'Text and Media Element 4',
          selector: '.text-media:nth-child(4)'
        },
        wrapper5: {
          name: 'Text and Media Element 5',
          selector: '.text-media:nth-child(5)'
        },
        wrapper6: {
          name: 'Text and Media Element 6',
          selector: '.text-media:nth-child(6)'
        },
        wrapper7: {
          name: 'Text and Media Element 7',
          selector: '.text-media:nth-child(7)'
        },
        image: {
          name: 'Image',
          selector: '.text-media-img'
        },
        article: {
          name: 'Article',
          selector: '.text-media-article',
          elements: {
            p: {
              name: 'Paragraph',
              selector: '> p'
            },
            a: {
              name: 'Anchor',
              selector: '> a'
            }
          }
        },
        button: {
          name: 'Button',
          selector: '.text-media-button'
        },
        buttonWrapper: {
          name: 'Button Wrapper',
          selector: '.text-media-button-wrapper'
        },
        date: {
          name: 'Date',
          selector: '.text-media-date'
        },
        description: {
          name: 'Description',
          selector: '.text-media-description',
          elements: {
            p: {
              name: 'Paragraph',
              selector: '> p'
            },
            a: {
              name: 'Anchor',
              selector: '> a'
            }
          }
        },
        titleLink: {
          name: 'Title link',
          selector: '.text-media-title-link'
        },
        subtitle: {
          name: 'Subtitle',
          selector: '.text-media-subtitle'
        },
        imgLink: {
          name: 'Image link',
          selector: '.text-media-img-link'
        },
        caption: {
          name: 'Caption',
          selector: '.text-media-caption'
        },
        secondaryDate: {
          name: 'Secondary Date',
          selector: '.text-media-secondary-date'
        },
        thumbnailLink: {
          name: 'Thumbnail Link',
          selector: '.text-media-thumbnail-link'
        },
        thumbnail: {
          name: 'Thumbnail',
          selector: '.text-media-thumbnail'
        },
        thumbnailOverlay: {
          name: 'Overlay',
          selector: '.thumbnail-overlay'
        },
        video: {
          name: 'Video',
          selector: '.cq-dd-video'
        }
      }
    },
    contentListFilter: {
      name: 'Filter to Content List',
      elements: {
        wrapper: {
          name: 'Wrapper',
          selector: '.contentListFilter',
        },
        tag: {
          name: 'Tag',
          selector: '.content-filter-tag',
        },
        select: {
          name: 'Select',
          selector: '.content-filter-select',
        },
        textInput: {
          name: 'Text Input',
          selector: '.content-filter-text-input',
        },
        tagLable: {
          name: 'Tag Label',
          selector: '.content-filter-tag-label',
        },
        textLable: {
          name: 'Text Label',
          selector: '.content-filter-text-label',
        },
        input: {
          name: 'Input',
          selector: '.content-filter-input',
        }
      }
    },
    pageToolbox: {
      name: 'Pagetoolbox',
      elements: {
        pagetoolboxWrapper: {
          name: 'Wrapper',
          selector: '.pagetoolbox-wrapper',
        },
        facebook: {
          name: 'Facebooke Share',
          selector: '.fb-share',
        },
        twitter: {
          name: 'Twitter Share',
          selector: '.twitter-share',
        },
        google: {
          name: 'Google+ Share',
          selector: '.google-share',
        },
        print: {
          name: 'Print',
          selector: '.page-print',
        }
      }
    },
    definitionList: {
      name: 'Definition List',
      elements: {
        wrapper: {
          name: 'Wrapper',
          selector: '.definition-list',
        },
        dt: {
          name: 'DT',
          selector: '.dt',
        },
        dd: {
          name: 'DD',
          selector: '.dd',
        },
        link: {
          name: 'Link',
          selector: '.definition-list-link',
        }
      }
    },
    section: {
      name: 'Section',
      elements: {
        wrapper: {
          name: 'Wrapper',
          selector: '.section-wrapper',
        }
      }
    },
    sectionItem: {
      name: 'Section Item',
      elements: {
        wrapper: {
          name: 'Wrapper',
          selector: '.section-item',
        },
        body: {
          name: 'Body',
          selector: '.section-body',
        },
        nextSection: {
          name: 'Next Section Link',
          selector: '.next-section'
        }
      }
    },
    slider: {
      name: 'Slider',
      elements: {
        wrapper: {
          name: 'Wrapper',
          selector: '.slider-wrapper'
        },
        dotWrapper: {
          name: 'Dots Line',
          selector: '.slider-dots',
        },
        dot: {
          name: 'Dot',
          selector: '.slider-dots .owl-dot span',
        },
        dotActive: {
          name: 'Active Dot',
          selector: '.slider-dots .owl-dot.active span',
        },
        navigation: {
          name: 'Navigation',
          selector: '.slider-navigation'
        },
        prev: {
          name: 'Prev',
          selector: '.slider-navigation .owl-prev',
        },
        next: {
          name: 'Next',
          selector: '.slider-navigation .owl-next'
        },
        slide: {
          name: 'Slide',
          selector: '.owl-item'
        },
        carousel: {
          name: 'carousel',
          selector: '.owl-carousel'
        }
      }
    },
    searchResults: {
      name: 'Search Results',
      elements: {
        wrapper: {
          name: 'Wrapper',
          selector: '.search-results-wrapper',
        },
        searchbox: {
          name: 'Searchbox',
          selector: '.search-results-searchbox',
        },
        ResultsBox: {
          name: 'Results Box',
          selector: '.search-results'
        },
        SearchResultsMainTitle: {
          name: 'Search Results Title',
          selector: '.search-results-main-title'
        },
        SearchResultsNumber: {
          name: 'Search Results Number',
          selector: '.search-results-number'
        },
        ResultsItem: {
          name: 'Result Item',
          selector: '.search-results-item'
        },
        ResultsDate: {
          name: 'Result Date',
          selector: '.search-results-date'
        },
        ResultsLink: {
          name: 'Result Link',
          selector: '.search-results-link'
        },
        ResultsTitle: {
          name: 'Result Title',
          selector: '.search-results-link-title'
        },
        ResultsSummery: {
          name: 'Result Summery',
          selector: '.search-results-link-summary'
        },
        SearchboxForm: {
          name: 'Searchbox Form',
          selector: '.search-box-form'
        },
        SearchboxWrapper: {
          name: 'Search Wrapper',
          selector: '.search-wrapper'
        },
        SearchboxInput: {
          name: 'Searchbox input',
          selector: '.search-box-input'
        },
        SearchboxFilterInput: {
          name: 'Searchbox Filter Input',
          selector: '.search-box-filter-input'
        },
        SearchboxSelect: {
          name: 'Searchbox Select',
          selector: '.search-box-select'
        },
        SearchboxSuggestions: {
          name: 'Sugestions',
          selector: '.suggestions'
        },
        SearchboxSuggestion: {
          name: 'Sugestion',
          selector: '.suggestion'
        },
        SearchboxLabel: {
          name: 'Searchbox Label',
          selector: '.search-box-label'
        },
        SearchboxSubmit: {
          name: 'Searchbox Submit',
          selector: '.search-box-submit'
        }
      }
    },
    interactiveMapEntityList: {
      name: 'Interactive Map Entity',
      elements: {
        interactiveMapWrapper: {
          name: 'wrapper',
          selector: '.interactive-map-wrapper'
        },
        interactiveMapEntityListlink: {
          name: 'List Link',
          selector: '.interactive-map-entity-list-link'
        },
        props: {
          name: 'Props',
          selector: '.props'
        },
        interactiveMapList: {
          name: 'List',
          selector: '.interactive-map-list'
        },
        interactiveMapEntityListResults: {
          name: 'List Results',
          selector: '.interactive-map-entity-list-results'
        },
        interactiveMapEntityListHit: {
          name: 'List Hit',
          selector: '.interactive-map-entity-list-hit'
        },
        interactiveMapEntityListInformationLibrary: {
          name: 'Information Library',
          selector: '.interactive-map-entity-list-hit.information-library'
        },
        interactiveMapEntityListEmotionalSupport: {
          name: 'Emotional Support',
          selector: '.interactive-map-entity-list-hit.emotional-support'
        },
        name: {
          name: 'Name',
          selector: '.name'
        },
        latitude: {
          name: 'Latitude',
          selector: '.latitude'
        },
        longitude: {
          name: 'Longitude',
          selector: '.longitude'
        },
        description: {
          name: 'Description',
          selector: '.description'
        },
        distance: {
          name: 'Distance',
          selector: '.distance'
        },
        cost: {
          name: 'Cost',
          selector: '.cost'
        }
      }
    },
    interactiveMapFilter: {
      name: 'Interactive Map Filter',
      elements: {
        interactiveMapFilter: {
          name: 'Filter',
          selector: '.interactive-map-filter'
        },
        interactiveMapFilterOptions: {
          name: 'Options',
          selector: '.interactive-map-filter-options'
        },
        interactiveMapFilterTitle: {
          name: 'Title',
          selector: '.interactive-map-filter-title'
        },
        interactiveMapFilterSelect: {
          name: 'Select Wrapper',
          selector: '.interactive-map-filter-select'
        },
        entitytypeSelect: {
          name: 'Entitytype Select',
          selector: '.entitytype-select'
        },
        languageSelect: {
          name: 'Language Select',
          selector: '.language-select'
        },
        distancesortingSelect: {
          name: 'Distancesorting Select',
          selector: '.distancesorting-select'
        },
        costsortingSelect: {
          name: 'Costsorting Select',
          selector: '.costsorting-select'
        }
      }
    },
    interactiveMapRenderer: {
      name: 'Interactive Map Renderer',
      elements: {
        interactiveMapEntityListHit: {
          name: 'List Hit',
          selector: '.interactive-map-entity-list-hit'
        },
        name: {
          name: 'Name',
          selector: '.name'
        },
        longitude: {
          name: 'Longitude',
          selector: '.longitude'
        },
        latitude: {
          name: 'Latitude',
          selector: '.latitude'
        }
      }
    },
    interactiveMapUserLocation: {
      name: 'Interactive Map User Location',
      elements: {
        interactiveMapLocationWrapper: {
          name: 'Wrapper',
          selector: '.interactive-map-location-wrapper'
        },
        interactiveMapUserlocation: {
          name: 'User Location',
          selector: '.interactive-map-userlocation'
        },
        interactiveMapLocationSubmitSearch: {
          name: 'Submit Search',
          selector: '.interactive-map-location-submit-search'
        },
        interactiveMapLocationSubmit: {
          name: 'Submit',
          selector: '.interactive-map-location-submit'
        },
        interactiveMapLocationParagraph: {
          name: 'Paragraph',
          selector: '.interactive-map-location-paragraph'
        },
        selectchangelocation: {
          name: 'Select Change Location',
          selector: '.selectchangelocation'
        },
        interactiveMapLocationQuery: {
          name: 'Location Query',
          selector: '.interactive-map-location-query'
        },
        interactiveMapLocationsubmitLocation: {
          name: 'Submit Location',
          selector: '.interactive-map-location-submit-location'
        }
      }
    }
  },
  supportedCssPropNames: [
    {css: 'width', js: 'width'},
    {css: 'min-width', js: 'minWidth'},
    {css: 'max-width', js: 'maxWidth'},
    {css: 'height', js: 'height'},
    {css: 'min-height', js: 'minHeight'},
    {css: 'max-height', js: 'maxHeight'},

    {css: 'display', js: 'display'},
    {css: 'content', js: 'content'},

    {css: 'flex-direction', js: 'flexDirection'},
    {css: 'flex-wrap', js: 'flexWrap'},
    {css: 'justify-content', js: 'justifyContent'},
    {css: 'align-items', js: 'alignItems'},
    {css: 'align-content', js: 'alignContent'},

    {css: 'position', js: 'position'},
    {css: 'z-index', js: 'zIndex'},
    {css: 'left', js: 'left'},
    {css: 'right', js: 'right'},
    {css: 'top', js: 'top'},
    {css: 'bottom', js: 'bottom'},

    {css: 'float', js: 'float'},
    {css: 'clear', js: 'clear'},

    {css: 'color', js: 'color'},
    {css: 'font-family', js: 'fontFamily'},
    {css: 'font-size', js: 'fontSize'},
    {css: 'font-style', js: 'fontStyle'},
    {css: 'font-weight', js: 'fontWeight'},
    {css: 'line-height', js: 'lineHeight'},
    {css: 'text-align', js: 'textAlign'},
    {css: 'text-decoration', js: 'textDecoration'},

    {css: 'overflow', js: 'overflow'},
    {css: 'cursor', js: 'cursor'},

    {css: 'margin-left', js: 'marginLeft'},
    {css: 'margin-top', js: 'marginTop'},
    {css: 'margin-right', js: 'marginRight'},
    {css: 'margin-bottom', js: 'marginBottom'},

    {css: 'padding-left', js: 'paddingLeft'},
    {css: 'padding-top', js: 'paddingTop'},
    {css: 'padding-right', js: 'paddingRight'},
    {css: 'padding-bottom', js: 'paddingBottom'},

    {css: 'border-top-color', js: 'borderTopColor'},
    {css: 'border-right-color', js: 'borderRightColor'},
    {css: 'border-bottom-color', js: 'borderBottomColor'},
    {css: 'border-left-color', js: 'borderLeftColor'},
    {css: 'border-top-style', js: 'borderTopStyle'},
    {css: 'border-right-style', js: 'borderRightStyle'},
    {css: 'border-bottom-style', js: 'borderBottomStyle'},
    {css: 'border-left-style', js: 'borderLeftStyle'},
    {css: 'border-top-width', js: 'borderTopWidth'},
    {css: 'border-right-width', js: 'borderRightWidth'},
    {css: 'border-bottom-width', js: 'borderBottomWidth'},
    {css: 'border-left-width', js: 'borderLeftWidth'},

    {css: 'background-color', js: 'backgroundColor'},
    {css: 'background-image', js: 'backgroundImage'},
    {css: 'background-repeat', js: 'backgroundRepeat'},
    {css: 'background-size', js: 'backgroundSize'},
    {css: 'background-position', js: 'backgroundPosition'},

    {css: 'box-shadow', js: 'boxShadow'},

    {css: 'list-style-type', js: 'listStyleType'},
    {css: 'list-style-image', js: 'listStyleImage'},
    {css: 'list-style-position', js: 'listStylePosition'}
  ]
};
