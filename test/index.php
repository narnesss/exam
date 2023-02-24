<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Тестовый раздел");
?>Наше участие в праздниках Благотворительного центра <a title="Сайт благотворительного центра" target="_blank" href="http://deti39.com">"Верю в чудо"</a><br>
<table border="1" cellpadding="1" cellspacing="1">
<tbody>
<tr>
	<td>
		 &nbsp;<img width="205" alt="Смотри еще" src="/test/practic_1.jpg" height="154" title="Смотри еще">
	</td>
	<td>
		 &nbsp;<img width="205" src="/test/practic_2.jpg" height="154">
	</td>
</tr>
<tr>
	<td>
		 &nbsp;<img width="205" src="/test/practic_3.jpg" height="115">
	</td>
	<td>
		 &nbsp;<img width="205" src="/test/practic_4.jpg" height="136">
	</td>
</tr>
</tbody>
</table>
 .
<table width="80%" cellspacing="0" border="1">
<tbody>
<tr>
	<th>
		 1
	</th>
	<th colspan="3">
		 1
	</th>
	<th colspan="3">
		 2
	</th>
	<th colspan="2">
		 3
	</th>
</tr>
<tr>
	<th>
		 2
	</th>
	<td>
		 нет
	</td>
	<td>
		 нет
	</td>
	<td>
		 нет
	</td>
	<td>
		 нет
	</td>
	<td>
		 нет
	</td>
	<td>
		 нет
	</td>
	<td>
		 нет
	</td>
	<td>
		 нет
	</td>
</tr>
<tr>
	<th>
		 3
	</th>
	<td>
		 Да
	</td>
	<td>
		 Да
	</td>
	<td>
		 Да
	</td>
	<td>
		 Да
	</td>
	<td>
		 Да
	</td>
	<td>
		 Да
	</td>
	<td>
		 Да
	</td>
	<td>
		 Да
	</td>
</tr>
</tbody>
</table>
 <?$APPLICATION->IncludeComponent(
	"bitrix:news", 
	"flat", 
	array(
		"ADD_ELEMENT_CHAIN" => "Y",
		"ADD_SECTIONS_CHAIN" => "Y",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"BROWSER_TITLE" => "BROWSER_TITLE",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"DETAIL_ACTIVE_DATE_FORMAT" => "",
		"DETAIL_DISPLAY_BOTTOM_PAGER" => "Y",
		"DETAIL_DISPLAY_TOP_PAGER" => "N",
		"DETAIL_FIELD_CODE" => array(
			0 => "SHOW_COUNTER",
			1 => "",
		),
		"DETAIL_PAGER_SHOW_ALL" => "Y",
		"DETAIL_PAGER_TEMPLATE" => "",
		"DETAIL_PAGER_TITLE" => "Страница",
		"DETAIL_PROPERTY_CODE" => array(
			0 => "AUTHORS",
			1 => "YEAR",
			2 => "",
		),
		"DETAIL_SET_CANONICAL_URL" => "N",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_DATE" => "Y",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "17",
		"IBLOCK_TYPE" => "test",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
		"LIST_ACTIVE_DATE_FORMAT" => "",
		"LIST_FIELD_CODE" => array(
			0 => "SHOW_COUNTER",
			1 => "",
		),
		"LIST_PROPERTY_CODE" => array(
			0 => "AUTHORS",
			1 => "",
		),
		"MESSAGE_404" => "",
		"META_DESCRIPTION" => "-",
		"META_KEYWORDS" => "KEY_WORDS",
		"NEWS_COUNT" => "20",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "Новости",
		"PREVIEW_TRUNCATE_LEN" => "",
		"SEF_MODE" => "N",
		"SET_LAST_MODIFIED" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "Y",
		"SHOW_404" => "N",
		"SORT_BY1" => "ID",
		"SORT_BY2" => "ID",
		"SORT_ORDER1" => "ASC",
		"SORT_ORDER2" => "ASC",
		"STRICT_SECTION_CHECK" => "N",
		"USE_CATEGORIES" => "N",
		"USE_FILTER" => "N",
		"USE_PERMISSIONS" => "N",
		"USE_RATING" => "N",
		"USE_REVIEW" => "N",
		"USE_RSS" => "N",
		"USE_SEARCH" => "N",
		"USE_SHARE" => "N",
		"COMPONENT_TEMPLATE" => "flat",
		"TAGS_CLOUD_ELEMENTS" => "150",
		"PERIOD_NEW_TAGS" => "",
		"DISPLAY_AS_RATING" => "rating",
		"FONT_MAX" => "50",
		"FONT_MIN" => "10",
		"COLOR_NEW" => "3E74E6",
		"COLOR_OLD" => "C0C0C0",
		"TAGS_CLOUD_WIDTH" => "100%",
		"TEMPLATE_THEME" => "blue",
		"MEDIA_PROPERTY" => "",
		"SLIDER_PROPERTY" => "MORE_PHOTO",
		"VARIABLE_ALIASES" => array(
			"SECTION_ID" => "SECTION_ID",
			"ELEMENT_ID" => "ELEMENT_ID",
		)
	),
	false
);?><br>
<ul>
</ul><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>