export const selectForecastWeatherHistoryData = state => state.weatherHistory.dataWeatherHistory;
export const selectForecastWeatherHistoryDate = state => state.weatherHistory.dateWeatherHistory;
export const selectForecastWeatherHistoryIsDataLoading = state => state.weatherHistory.isDataLoading;
export const selectForecastWeatherHistoryError = state => state.weatherHistory.error;
