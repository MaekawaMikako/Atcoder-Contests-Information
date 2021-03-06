import React, { useState } from 'react'
import './styles.css'

const Header = (props) => {
    const [type, setType] = useState('')
    const [keyword, setKeyword] = useState('')
    const [sort, setSort] = useState('newer')

    // 種類
    const typeHandleChange = (filterType) => {
        setType(filterType.target.value)
        const searched = searchFilter(filterType.target.value, keyword)
        const sorted = sortFilter(searched, sort)
        props.setDisplayList(sorted)
        sortFilter(sort)
    }

    // 検索
    const keywordChange = (filterWord) => {
        setKeyword(filterWord.target.value)
        const searched = searchFilter(type, filterWord.target.value)
        const sorted = sortFilter(searched, sort)
        props.setDisplayList(sorted)
    }

    const searchFilter = (filterType, filterWord) => {
        // 大文字小文字対応
        const toLowerWord = filterWord.toLowerCase()
        // 空白で区切って配列生成
        const filterWordList = toLowerWord.split(/\s+/)
        const regType = new RegExp(`^(?=.*${filterType}).*$`)
        return (props.contestsList.filter((contest) => {
            const toLowerTitle = contest.title.toLowerCase()
            let cnt = 0
            for (let i = 0; i < filterWordList.length; i++) {
                const regWord = new RegExp(`^(?=.*${filterWordList[i]}).*$`)
                if (regWord.test(`${toLowerTitle} | ${contest.start} | ${contest.duration_second} | ${contest.rate_change} | ${contest.url}`) && regType.test(`${contest.id}`)) {
                    cnt++
                }
            }
            if (cnt === filterWordList.length) {
                return true
            }
        }))
    }

    // 表示件数
    const displayCountHandleChange = (count) => {
        props.setDisplayCount(+count.target.value)
    }

    // 並び替え
    const sortHandleChange = (filterSort) => {
        setSort(filterSort.target.value)
        const sorted = sortFilter(props.displayList, filterSort.target.value)
        props.setDisplayList(sorted)
    }

    const sortFilter = (searchedList, filterSort) => {
        if (filterSort === 'newer') {
            return (searchedList.slice().sort((a, b) => {
                if (a.start_epoch_second > b.start_epoch_second) {
                    return -1;
                } else {
                    return 1;
                }
            }))
        }
        if (filterSort === 'older') {
            return (searchedList.slice().sort((a, b) => {
                if (a.start_epoch_second < b.start_epoch_second) {
                    return -1;
                } else {
                    return 1;
                }
            }))
        }
        if (filterSort === 'abcSort') {
            return (searchedList.slice().sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                } else {
                    return 1;
                }
            }))
        }
    }

    return (
        <div class='header'>
            <h1 class='header-logo'><a href='#' class='header-logo'>Atcoder Contests Information</a></h1>

            <div class='drawer'>
                <input type='checkbox' id='drawer-check' class='drawer-hidden' />
                <label for='drawer-check' class='drawer-open'><span></span></label>
                <div class='forms'>
                    <div class='form select'>
                        <select onChange={typeHandleChange} value={type}>
                            <option value=''>ALL</option>
                            <option value='abc'>ABC</option>
                            <option value='arc'>ARC</option>
                            <option value='agc'>AGC</option>
                            <option value='past'>PAST</option>
                            <option value='joi'>JOI</option>
                            <option value='jag'>JAG</option>
                        </select>
                    </div>
                    <div class='form select'>
                        <select onChange={displayCountHandleChange} value={props.displayCount}>
                            <option value='10'>10件表示</option>
                            <option value='50'>50件表示</option>
                            <option value='100'>100件表示</option>
                            <option value={props.displayList.length} >全件表示</option>
                        </select>
                    </div>
                    <div class='form select'>
                        <select onChange={sortHandleChange} value={sort} class='sort-select'>
                            <option value='newer'>新しい順</option>
                            <option value='older'>古い順</option>
                            <option value='abcSort'>五十音順</option>
                        </select>
                    </div>
                    <div class='form'>
                        <label class='form-focus'>
                            <input
                                type='text'
                                value={keyword}
                                placeholder='検索'
                                onChange={(text) => { keywordChange(text) }}
                            />
                        </label>
                        <span class='focus_line'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header