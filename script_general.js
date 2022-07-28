(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"scrollBarOpacity":0.5,"propagateClick":false,"borderSize":0,"shadow":false,"borderRadius":0,"gap":10,"width":"100%","desktopMipmappingEnabled":false,"paddingLeft":0,"paddingTop":0,"backgroundPreloadEnabled":true,"id":"rootPlayer","mobileMipmappingEnabled":false,"defaultMenu":["fullscreen","mute","rotation"],"horizontalAlign":"left","paddingBottom":0,"downloadEnabled":false,"contentOpaque":false,"paddingRight":0,"overflow":"hidden","backgroundOpacity":1,"scripts":{"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"initAnalytics":TDV.Tour.Script.initAnalytics,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playAudioList":TDV.Tour.Script.playAudioList,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"shareSocial":TDV.Tour.Script.shareSocial,"initQuiz":TDV.Tour.Script.initQuiz,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaByName":TDV.Tour.Script.getMediaByName,"registerKey":TDV.Tour.Script.registerKey,"quizShowScore":TDV.Tour.Script.quizShowScore,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getKey":TDV.Tour.Script.getKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"openLink":TDV.Tour.Script.openLink,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizStart":TDV.Tour.Script.quizStart,"showWindow":TDV.Tour.Script.showWindow,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizFinish":TDV.Tour.Script.quizFinish,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeJS":TDV.Tour.Script.executeJS,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"existsKey":TDV.Tour.Script.existsKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"showPopupImage":TDV.Tour.Script.showPopupImage,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"isPanorama":TDV.Tour.Script.isPanorama,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getComponentByName":TDV.Tour.Script.getComponentByName,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"mixObject":TDV.Tour.Script.mixObject,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"translate":TDV.Tour.Script.translate,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateDeepLink":TDV.Tour.Script.updateDeepLink},"backgroundColorDirection":"vertical","scrollBarMargin":2,"verticalAlign":"top","backgroundColor":["#FFFFFF"],"scrollBarWidth":10,"height":"100%","mediaActivationMode":"window","mouseWheelEnabled":true,"backgroundColorRatios":[0],"toolTipHorizontalAlign":"center","scrollBarVisible":"rollOver","scrollBarColor":"#000000","children":["this.MainViewer","this.CloseButton_5BAF7B99_4041_8F76_41CB_F13D3EAE0EDB","this.ThumbnailList_5ACB4EC0_4042_86D6_41B4_3460F19B3A88"],"vrPolyfillScale":0.75,"defaultVRPointer":"laser","layout":"absolute","class":"Player","definitions": [{"adjacentPanoramas":[{"distance":1.06,"yaw":3.17,"backwardYaw":-128.26,"data":{"overlayID":"overlay_268C74B3_3FC1_BABA_41AC_55640729839B"},"panorama":"this.panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78","class":"AdjacentPanorama","select":"this.overlay_268C74B3_3FC1_BABA_41AC_55640729839B.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","partial":false,"hfovMax":130,"overlays":["this.overlay_268C74B3_3FC1_BABA_41AC_55640729839B"],"pitch":0,"id":"panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465","thumbnailUrl":"media/panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465_t.jpg","label":trans('panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465.label'),"frames":[{"thumbnailUrl":"media/panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"colCount":12,"url":"media/panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465_0/{face}/0/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465_0/{face}/1/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"}}],"class":"Panorama","hfov":360,"data":{"label":"THIRTH POINT"},"vfov":180},{"scrollBarOpacity":0.5,"itemLabelFontSize":14,"borderSize":0,"data":{"name":"ThumbnailList35762"},"itemPaddingTop":3,"itemBackgroundOpacity":0,"itemBackgroundColorDirection":"vertical","width":"35.074%","paddingLeft":20,"rollOverItemBackgroundOpacity":0,"id":"ThumbnailList_5ACB4EC0_4042_86D6_41B4_3460F19B3A88","itemThumbnailWidth":75,"itemMode":"normal","paddingRight":20,"itemLabelFontStyle":"normal","itemThumbnailShadowVerticalLength":3,"backgroundOpacity":0.71,"itemLabelPosition":"bottom","itemHorizontalAlign":"center","itemVerticalAlign":"middle","itemThumbnailShadow":true,"backgroundColorDirection":"vertical","height":119.5,"scrollBarMargin":2,"itemLabelFontColor":"#000000","backgroundColor":["#FFFFFF"],"selectedItemLabelFontColor":"#CC6600","itemThumbnailShadowOpacity":0.27,"itemLabelGap":8,"itemThumbnailShadowColor":"#000000","scrollBarWidth":10,"backgroundColorRatios":[0],"layout":"horizontal","toolTipHorizontalAlign":"center","scrollBarColor":"#FFFFFF","playList":"this.ThumbnailList_5ACB4EC0_4042_86D6_41B4_3460F19B3A88_playlist","class":"ThumbnailList","minHeight":20,"minWidth":20,"itemBackgroundColor":[],"itemLabelFontFamily":"Arial","gap":13,"itemThumbnailOpacity":1,"propagateClick":false,"itemPaddingRight":3,"borderRadius":5,"itemThumbnailShadowBlurRadius":8,"paddingTop":10,"horizontalAlign":"left","paddingBottom":10,"itemBackgroundColorRatios":[],"itemOpacity":1,"itemBorderRadius":0,"itemThumbnailShadowSpread":1,"itemThumbnailShadowHorizontalLength":3,"verticalAlign":"top","bottom":"3.72%","itemPaddingLeft":3,"selectedItemLabelFontWeight":"bold","itemLabelTextDecoration":"none","itemPaddingBottom":3,"itemThumbnailHeight":75,"rollOverItemLabelFontWeight":"bold","itemLabelHorizontalAlign":"center","scrollBarVisible":"rollOver","itemThumbnailBorderRadius":5,"left":"32.02%","itemLabelFontWeight":"normal","itemThumbnailScaleMode":"fit_outside","shadow":false},{"toolTipShadowOpacity":1,"borderSize":0,"subtitlesFontColor":"#FFFFFF","toolTipPaddingLeft":6,"surfaceReticleColor":"#FFFFFF","playbackBarLeft":0,"progressBackgroundColor":[],"progressBarOpacity":1,"width":"100%","paddingLeft":0,"progressBottom":0,"playbackBarHeadHeight":15,"id":"MainViewer","toolTipTextShadowColor":"#000000","playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"paddingRight":0,"toolTipFontWeight":"normal","playbackBarHeadBorderSize":0,"toolTipFontFamily":"Arial","subtitlesFontFamily":"Arial","playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","toolTipShadowColor":"#333138","toolTipOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesPaddingTop":5,"playbackBarBorderRadius":0,"toolTipPaddingRight":6,"transitionDuration":500,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadow":true,"playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"toolTipHorizontalAlign":"center","playbackBarHeadOpacity":1,"vrPointerColor":"#FFFFFF","progressHeight":10,"subtitlesTop":0,"firstTransitionDuration":0,"progressBackgroundColorRatios":[],"toolTipDisplayTime":600,"subtitlesTextShadowVerticalLength":1,"subtitlesShadow":false,"subtitlesFontWeight":"normal","class":"ViewerArea","toolTipFontSize":"1.11vmin","minHeight":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"translationTransitionDuration":1000,"playbackBarOpacity":1,"progressRight":0,"subtitlesOpacity":1,"surfaceReticleOpacity":0.6,"minWidth":100,"playbackBarHeadBorderRadius":0,"progressBarBorderRadius":0,"propagateClick":false,"progressBorderSize":0,"progressOpacity":1,"toolTipFontStyle":"normal","borderRadius":0,"displayTooltipInTouchScreens":true,"progressBarBackgroundColorDirection":"vertical","playbackBarBottom":5,"toolTipFontColor":"#606060","playbackBarHeadBorderColor":"#000000","progressBarBorderColor":"#000000","playbackBarProgressOpacity":1,"height":"100%","subtitlesGap":0,"toolTipBorderColor":"#767676","progressBarBorderSize":0,"playbackBarBorderSize":0,"paddingTop":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesTextShadowColor":"#000000","toolTipTextShadowOpacity":0,"subtitlesBackgroundColor":"#000000","progressBarBackgroundColorRatios":[0,0.48,0.55,0.67],"subtitlesHorizontalAlign":"center","subtitlesFontSize":"3vmin","progressBackgroundOpacity":1,"paddingBottom":0,"subtitlesPaddingBottom":5,"subtitlesPaddingLeft":5,"toolTipTextShadowBlurRadius":3,"subtitlesEnabled":true,"toolTipShadowVerticalLength":0,"subtitlesPaddingRight":5,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeight":10,"displayTooltipInSurfaceSelection":true,"subtitlesVerticalAlign":"bottom","progressBackgroundColorDirection":"vertical","subtitlesBackgroundOpacity":0.2,"playbackBarHeadWidth":6,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesBorderColor":"#FFFFFF","subtitlesBottom":50,"toolTipPaddingTop":4,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderSize":0,"toolTipBorderSize":1,"playbackBarBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","transitionMode":"blending","doubleClickAction":"toggle_fullscreen","toolTipShadowBlurRadius":3,"toolTipPaddingBottom":4,"progressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"progressLeft":0,"subtitlesBorderSize":0,"surfaceReticleSelectionOpacity":1,"subtitlesTextDecoration":"none","toolTipBorderRadius":3,"toolTipShadowSpread":0,"progressBarBackgroundColor":["#3399FF","#000000","#000000","#000000"],"playbackBarHeadShadowOpacity":0.7,"progressBorderColor":"#000000","shadow":false,"toolTipShadowHorizontalLength":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowBlurRadius":0,"data":{"name":"Main Viewer"},"subtitlesTextShadowOpacity":1},{"fieldOfViewOverlayOutsideOpacity":0,"fieldOfViewOverlayInsideColor":"#99D6FF","fieldOfViewOverlayInsideOpacity":0.4,"id":"map_2DAC0053_3FC6_99FA_41C2_E9C28B9F892E","height":1080,"class":"Map","label":trans('map_2DAC0053_3FC6_99FA_41C2_E9C28B9F892E.label'),"fieldOfViewOverlayOutsideColor":"#000000","scaleMode":"fit_inside","width":2048,"image":{"levels":["this.imlevel_4F71F75A_42D2_8D33_41C1_7242C5BF2FAE","this.imlevel_4F71E75A_42D2_8D33_41B1_60E509E0A938","this.imlevel_4F71975A_42D2_8D33_417D_78B0A28FECCE","this.imlevel_4F71B75A_42D2_8D33_41C4_80095DDCDACA"],"class":"ImageResource"},"maximumZoomFactor":1.2,"thumbnailUrl":"media/map_2DAC0053_3FC6_99FA_41C2_E9C28B9F892E_t.jpg","fieldOfViewOverlayRadiusScale":0.3,"data":{"label":"LINE_ALBUM_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_4"},"minimumZoomFactor":0.5,"initialZoomFactor":1},{"initialPosition":{"yaw":-0.49,"class":"PanoramaCameraPosition","hfov":116,"pitch":-1.08},"initialSequence":{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawSpeed":33.25,"path":"shortest","easing":"cubic_in_out","pitchSpeed":17.94,"targetYaw":-37.3,"class":"TargetPanoramaCameraMovement","targetPitch":-27.66}]},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78_camera"},{"initialPosition":{"yaw":0.62,"class":"PanoramaCameraPosition","hfov":105,"pitch":-1.27},"initialSequence":"this.sequence_2D6C9D72_3FCE_8BBA_41BA_D933E5E35C0D","manualRotationSpeed":1808,"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B_camera"},{"adjacentPanoramas":[{"distance":3.41,"yaw":140.45,"backwardYaw":127.88,"data":{"overlayID":"overlay_59EBA46E_40C2_99AA_41C5_98C59A535E1A"},"panorama":"this.panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78","class":"AdjacentPanorama","select":"this.overlay_59EBA46E_40C2_99AA_41C5_98C59A535E1A.get('areas').forEach(function(a){ a.trigger('click') })"}],"data":{"label":"SECONDE POINT"},"hfovMin":"185%","partial":false,"hfovMax":105,"overlays":["this.overlay_59EBA46E_40C2_99AA_41C5_98C59A535E1A"],"pitch":0,"id":"panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B","thumbnailUrl":"media/panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B_t.jpg","label":trans('panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B.label'),"frames":[{"thumbnailUrl":"media/panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"colCount":12,"url":"media/panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B_0/{face}/0/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B_0/{face}/1/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"}}],"class":"Panorama","hfov":360,"vfov":180},{"adjacentPanoramas":[{"distance":2.97,"yaw":127.88,"backwardYaw":140.45,"data":{"overlayID":"overlay_25F35123_3FC3_BB5A_41A7_DBCD31F4CDA5"},"panorama":"this.panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B","class":"AdjacentPanorama","select":"this.overlay_25F35123_3FC3_BB5A_41A7_DBCD31F4CDA5.get('areas').forEach(function(a){ a.trigger('click') })"},{"distance":1.78,"yaw":-2.5,"enabledInSurfaceSelection":false,"backwardYaw":140.45,"data":{"overlayID":"overlay_59D1D46F_40C2_99AA_41CC_1E5FF187E1CC"},"panorama":"this.panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B","class":"AdjacentPanorama","select":"this.overlay_59D1D46F_40C2_99AA_41CC_1E5FF187E1CC.get('areas').forEach(function(a){ a.trigger('click') })"},{"distance":2.99,"yaw":-128.26,"backwardYaw":3.17,"data":{"overlayID":"overlay_25F42E0D_3FC1_896E_41C6_CCE476768504"},"panorama":"this.panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465","class":"AdjacentPanorama","select":"this.overlay_25F42E0D_3FC1_896E_41C6_CCE476768504.get('areas').forEach(function(a){ a.trigger('click') })"}],"data":{"label":"FIRST POINT"},"hfovMin":"150%","partial":false,"hfovMax":130,"overlays":["this.overlay_25F35123_3FC3_BB5A_41A7_DBCD31F4CDA5","this.overlay_25F42E0D_3FC1_896E_41C6_CCE476768504","this.overlay_264CBCA9_3FFE_8956_41C9_5AB989267778","this.overlay_59D1D46F_40C2_99AA_41CC_1E5FF187E1CC"],"pitch":0,"id":"panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78","thumbnailUrl":"media/panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78_t.jpg","label":trans('panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78.label'),"frames":[{"thumbnailUrl":"media/panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"width":6144,"colCount":12,"url":"media/panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78_0/{face}/0/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78_0/{face}/1/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"}}],"class":"Panorama","hfov":360,"vfov":180},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78_camera","media":"this.panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B_camera","media":"this.panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465_camera","media":"this.panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465"}],"id":"ThumbnailList_5ACB4EC0_4042_86D6_41B4_3460F19B3A88_playlist"},{"zoomEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","touchControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"displayPlaybackBar":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78_camera","media":"this.panorama_2F067E6A_3FC7_89AA_41CD_347E2EAFAA78","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B_camera","media":"this.panorama_2D104AEC_3FC1_8EAE_41BB_79499038BF8B","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465_camera","media":"this.panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"propagateClick":false,"borderSize":0,"right":"1.88%","borderRadius":0,"fontWeight":"normal","gap":5,"width":40,"textDecoration":"none","cursor":"hand","paddingLeft":5,"paddingTop":5,"rollOverIconColor":"#666666","id":"CloseButton_5BAF7B99_4041_8F76_41CB_F13D3EAE0EDB","shadowColor":"#000000","horizontalAlign":"center","paddingBottom":5,"shadowSpread":1,"iconWidth":"100%","paddingRight":5,"data":{"name":"CloseButton17917"},"top":"1.92%","backgroundOpacity":0.3,"backgroundColorDirection":"vertical","height":40,"iconLineWidth":2,"verticalAlign":"middle","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"iconColor":"#000000","fontFamily":"Arial","fontColor":"#FFFFFF","backgroundColorRatios":[0,0.1,1],"toolTipHorizontalAlign":"center","pressedIconColor":"#888888","mode":"push","fontSize":"1.29vmin","borderColor":"#000000","class":"CloseButton","iconHeight":"100%","minHeight":1,"minWidth":1,"shadow":false,"fontStyle":"normal","shadowBlurRadius":6,"layout":"horizontal"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_2D6CBD72_3FCE_8BBA_41B7_BB2452931C2F","automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_2D6E7E5F_3FC1_89EA_41C5_B3B4F9792465_camera"},{"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_4"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_4F09A83A_42D2_8373_41BF_EECE8F978BD0","distance":100,"yaw":3.17,"pitch":-57.93,"vfov":3.25,"class":"HotspotPanoramaOverlayImage","data":{"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_4"},"verticalAlign":"middle","horizontalAlign":"center","hfov":11.6,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_265192E8_3FCE_FED5_41CF_6434DA251F63"],"maps":[],"id":"overlay_268C74B3_3FC1_BABA_41AC_55640729839B"},{"height":1080,"width":2048,"class":"ImageResourceLevel","url":trans('imlevel_4F71F75A_42D2_8D33_41C1_7242C5BF2FAE.url'),"id":"imlevel_4F71F75A_42D2_8D33_41C1_7242C5BF2FAE"},{"height":540,"width":1024,"class":"ImageResourceLevel","url":trans('imlevel_4F71E75A_42D2_8D33_41B1_60E509E0A938.url'),"id":"imlevel_4F71E75A_42D2_8D33_41B1_60E509E0A938"},{"height":270,"width":512,"class":"ImageResourceLevel","url":trans('imlevel_4F71975A_42D2_8D33_417D_78B0A28FECCE.url'),"id":"imlevel_4F71975A_42D2_8D33_417D_78B0A28FECCE"},{"width":256,"url":trans('imlevel_4F71B75A_42D2_8D33_41C4_80095DDCDACA.url'),"height":135,"class":"ImageResourceLevel","tags":"preload","id":"imlevel_4F71B75A_42D2_8D33_41C4_80095DDCDACA"},{"id":"sequence_2D6C9D72_3FCE_8BBA_41BA_D933E5E35C0D","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_4"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_4F09E83A_42D2_8373_41C6_74321A5C666A","distance":100,"yaw":140.45,"pitch":-26.47,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","data":{"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_4"},"roll":-14,"verticalAlign":"middle","horizontalAlign":"center","hfov":9.5,"vfov":3.94}],"areas":["this.HotspotPanoramaOverlayArea_59BC447A_40C2_99AA_41C9_74DD11880449"],"maps":[],"id":"overlay_59EBA46E_40C2_99AA_41C5_98C59A535E1A"},{"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_5"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_4F08B83A_42D2_8373_41B9_C4AC40BE665B","distance":50,"vertices":[{"yaw":121.61,"class":"PanoramaPoint","pitch":-24.83},{"yaw":132.41,"class":"PanoramaPoint","pitch":-24.05},{"yaw":134.33,"class":"PanoramaPoint","pitch":-34.14},{"yaw":124.8,"class":"PanoramaPoint","pitch":-33.27}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_5"}}],"areas":["this.HotspotPanoramaOverlayArea_25E2E128_3FC3_BB56_419C_1D547BFAA81E"],"maps":[],"id":"overlay_25F35123_3FC3_BB5A_41A7_DBCD31F4CDA5"},{"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_6"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_4F09483A_42D2_8373_41C4_B5EFCCEE86A7","distance":100,"vertices":[{"yaw":-135.75,"class":"PanoramaPoint","pitch":-26.78},{"yaw":-124.38,"class":"PanoramaPoint","pitch":-25.36},{"yaw":-120.66,"class":"PanoramaPoint","pitch":-31.86},{"yaw":-133.26,"class":"PanoramaPoint","pitch":-34.41}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_6"}}],"areas":["this.HotspotPanoramaOverlayArea_25F56E0E_3FC1_896A_41B6_A7E14C796A33"],"maps":[],"id":"overlay_25F42E0D_3FC1_896E_41C6_CCE476768504"},{"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"data":{"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_7"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_4F09183A_42D2_8373_41B8_346FE102C02A","distance":100,"yaw":-91.9,"pitch":-16.9,"vfov":3.25,"class":"HotspotPanoramaOverlayImage","data":{"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_7"},"verticalAlign":"middle","horizontalAlign":"center","hfov":9.81,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_25DECCCD_3FFE_8AEE_41B9_B1562A65B8A2"],"maps":[],"id":"overlay_264CBCA9_3FFE_8956_41C9_5AB989267778"},{"areas":["this.HotspotPanoramaOverlayArea_5A28F023_40CE_995A_41C9_5950A23F5E9F"],"enabledInCardboard":true,"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabled":false,"maps":[],"items":[{"image":"this.AnimatedImageResource_4F09383A_42D2_8373_41C7_3EA97FB9A1AB","distance":100,"yaw":-2.5,"pitch":-43.72,"vfov":2.94,"class":"HotspotPanoramaOverlayImage","data":{"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_5"},"verticalAlign":"middle","horizontalAlign":"center","hfov":10.5,"scaleMode":"fit_inside"}],"data":{"hasPanoramaAction":true,"label":"GoToLine_album_360_\u0e52\u0e52\u0e50\u0e57\u0e52\u0e57_5"},"id":"overlay_59D1D46F_40C2_99AA_41CC_1E5FF187E1CC"},{"id":"sequence_2D6CBD72_3FCE_8BBA_41B7_BB2452931C2F","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"linear","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"frameDuration":41,"colCount":4,"frameCount":22,"levels":[{"height":420,"width":1000,"class":"ImageResourceLevel","url":"media/res_25947F5F_3FC3_87EA_41B0_17B5463E9379_0.png"}],"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4F09A83A_42D2_8373_41BF_EECE8F978BD0"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_265192E8_3FCE_FED5_41CF_6434DA251F63"},{"frameDuration":41,"colCount":4,"frameCount":22,"levels":[{"height":420,"width":1000,"class":"ImageResourceLevel","url":"media/res_25947F5F_3FC3_87EA_41B0_17B5463E9379_0.png"}],"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4F09E83A_42D2_8373_41C6_74321A5C666A"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_59BC447A_40C2_99AA_41C9_74DD11880449"},{"frameDuration":41,"colCount":4,"frameCount":22,"levels":[{"height":420,"width":1000,"class":"ImageResourceLevel","url":"media/res_25947F5F_3FC3_87EA_41B0_17B5463E9379_0.png"}],"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4F08B83A_42D2_8373_41B9_C4AC40BE665B"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_25E2E128_3FC3_BB56_419C_1D547BFAA81E"},{"frameDuration":41,"colCount":4,"frameCount":22,"levels":[{"height":420,"width":1000,"class":"ImageResourceLevel","url":"media/res_25947F5F_3FC3_87EA_41B0_17B5463E9379_0.png"}],"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4F09483A_42D2_8373_41C4_B5EFCCEE86A7"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_25F56E0E_3FC1_896A_41B6_A7E14C796A33"},{"frameDuration":41,"colCount":4,"frameCount":22,"levels":[{"height":420,"width":1000,"class":"ImageResourceLevel","url":"media/res_25947F5F_3FC3_87EA_41B0_17B5463E9379_0.png"}],"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4F09183A_42D2_8373_41B8_346FE102C02A"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_25DECCCD_3FFE_8AEE_41B9_B1562A65B8A2"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_5A28F023_40CE_995A_41C9_5950A23F5E9F"},{"frameDuration":41,"colCount":4,"frameCount":22,"levels":[{"height":420,"width":1000,"class":"ImageResourceLevel","url":"media/res_25947F5F_3FC3_87EA_41B0_17B5463E9379_0.png"}],"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_4F09383A_42D2_8373_41C7_3EA97FB9A1AB"}],"minHeight":0,"minWidth":0,"data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"defaultLocale":"en","name":"Player7135","locales":{"en":"locale/en.txt"}},"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_5ACB4EC0_4042_86D6_41B4_3460F19B3A88_playlist])"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.18.js.map
})();
//Generated with v2022.1.18, Thu Jul 28 2022