import { useEffect, useState } from 'react'

// component
import { Loader } from 'components/GeneralUI'
import Select from 'react-select'

// const
import { baseUrl, currencyArr } from './const'

// util
import getSymbolFromCurrency from 'currency-symbol-map'
import * as moment from 'moment'
import { useFetch } from 'hooks'

function convertCurrencyArrToReactSelectOptions(arr) {
  return arr.map((currency) => ({
    label: `${currency} (${getSymbolFromCurrency(currency)})`,
    value: currency,
  }))
}

const currencyOptions = convertCurrencyArrToReactSelectOptions(currencyArr)

export default function ForeignExchangeRate() {
  const [params, setParams] = useState({
    base: 'USD',
    currencyArr: ['USD', 'KRW', 'JPY'],
    endAt: moment().format('YYYY-MM-DD'),
    startAt: moment().subtract('day', 15).format('YYYY-MM-DD'),
  })
  const [{ data }, isLoading, setUrl] = useFetch(
    `${baseUrl}/history?${new URLSearchParams({
      base: params.base,
      end_at: params.endAt,
      start_at: params.startAt,
      symbols: params.currencyArr,
    })}`
  )

  return (
    <div>
      <div>
        <Select
          closeMenuOnSelect={false}
          components={{ ClearIndicator }}
          defaultValue={convertCurrencyArrToReactSelectOptions(
            params.currencyArr
          )}
          isMulti
          options={currencyOptions}
          styles={{ clearIndicator: ClearIndicatorStyles }}
        />
      </div>
      <Graph data={data} isLoading={isLoading} />
    </div>
  )
}

function Graph(props) {
  if (props.isLoading) {
    return (
      <div className='h-100'>
        <Loader />
      </div>
    )
  } else if (!props.data) {
    return <div>No data</div>
  } else {
    return <pre>{JSON.stringify(props.data, null, 2)}</pre>
  }
}

const CustomClearText = () => 'clear all'
const ClearIndicator = (props) => {
  const {
    children = <CustomClearText />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props)}
    >
      <div style={{ padding: '0px 5px' }}>{children}</div>
    </div>
  )
}

const ClearIndicatorStyles = (base, state) => ({
  ...base,
  cursor: 'pointer',
  color: state.isFocused ? 'blue' : 'black',
})
