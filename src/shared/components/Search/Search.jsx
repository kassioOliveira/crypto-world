import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { IconLoader, IconSearch, Line, ListSearchItem, ListSearchResults, SearchComponent, SearchInput, SearchItemLink, SearchResultTitle, SearchResultsContainer, SearchResultsSubContainer } from "./SearchStyle";
import { AssetsService } from "../../services/api/assets/AssetsService";
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import { ExchangesService } from "../../services/api/exchanges/ExchangesService";
import { useDebounce } from "../../hooks/useDebounce";
import { ErrorPage } from "../Fallback/ErrorPage";

export const Search = () => {

  const { showBoundary } = useErrorBoundary();
  const { debounce } = useDebounce();

  const inputRef = useRef(null);
  const resultsRef = useRef(null);

  const [assets, setAssets] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  const [searchValues, setSearchValues] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [showResults, setShowResults] = useState(false)

  useEffect(() => {

    AssetsService.getAll().then((response) => {
      setAssets(response?.data);
    }).catch((error) => {
      showBoundary(error);
    });

    ExchangesService.getAll().then((response) => {
      setExchanges(response?.data);
    }).catch((error) => {
      showBoundary(error);
    });

  }, [showBoundary]);


  const handleShowResults = useCallback((result = true) => {
    if (result) {
      setShowResults(value => !value)
      return;
    }

    setShowResults(false);
  }, []);

  useEffect(() => {

    const close = (e) => {

      if (resultsRef.current && !resultsRef.current.contains(e.target)) {
        if (showResults) {
          setTimeout(() => {
            handleShowResults(false);
          }, [200])

          return;
        }
      }
    }


    document.addEventListener('click', close, true);
    document.addEventListener("mousedown", close, true);

    return () => {
      document.removeEventListener('click', close, true);
      document.removeEventListener("mousedown", close, true);
    }

  }, [resultsRef, handleShowResults,showResults]);



  const getSearch = useCallback(() => {

    if (!isLoading) {
      setIsLoading(true);
    }
    handleShowResults(false)

    debounce(() => {

      const query = inputRef.current.value;
      const assetsResults = assets.filter((item) => {
        return String(item.id).toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1;
      });

      const exChangesResults = exchanges.filter((item) => {
        return String(item.exchangeId).toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1;
      })

      if ((assetsResults.length > 0 || exChangesResults.length > 0) && query.length > 0) {
        handleShowResults();
      }


      const value = {
        assetsResult: assetsResults.length > 5 ? [...assetsResults.slice(0, 5)] : [...assetsResults],
        exchangesResult: exChangesResults.length > 5 ? [...exChangesResults.slice(0, 5)] : [...exChangesResults]
      }

      setSearchValues(value);
      setIsLoading(false)




    });








  }, [assets, exchanges,isLoading,debounce,handleShowResults]);


  return (
    <ErrorBoundary fallback={<ErrorPage/>}>
      <SearchComponent>
      <SearchInput ref={inputRef} onChange={getSearch} type="text" />
      {isLoading ? (<IconLoader />) : (<IconSearch />)}
          <SearchResultsContainer d={{showResults}} ref={resultsRef}>

            {
             searchValues && searchValues.assetsResult?.length > 0 && (
                <SearchResultsSubContainer>
                <SearchResultTitle>
                    Cryptos
                  </SearchResultTitle>
                  <ListSearchResults>

                    {
                      (searchValues.assetsResult?.map((item) => {
                        return (
                         <SearchItemLink key={item.rank} to={`/cryptos/${item.id}`}>
                           < ListSearchItem >
                            {item.id}
                          </ListSearchItem>
                         </SearchItemLink>
                        )
                      }))
                    }

                  </ListSearchResults>

                </SearchResultsSubContainer>
              )
            }



            {searchValues.exchangesResult?.length > 0 && searchValues.assetsResult?.length > 0 && (
                <Line />
              )}

            {
              searchValues.exchangesResult?.length > 0 && (
                <SearchResultsSubContainer>
                  <SearchResultTitle>
                    Corretoras
                  </SearchResultTitle>
                  <ListSearchResults>
                    {(searchValues.exchangesResult?.map((item) => {
                      return (
                        <SearchItemLink key={item.rank} to={`/corretoras/${item.exchangeId}`} >
                          <ListSearchItem >
                          {item.exchangeId}
                        </ListSearchItem>
                        </SearchItemLink>
                      )
                    }))}

                  </ListSearchResults>

                </SearchResultsSubContainer>
              )
            }


          </SearchResultsContainer>
    </SearchComponent>
    </ErrorBoundary>
  )
}
