<h1>Chart.js</h1>
<img align="left" width="100" height="100" src="https://github.com/WireBootstrap/Chartjs/blob/master/images/eb-chartjs.jpg">

<p>
<strong>
Charts for WireBootstrap using Chart.js
</strong>
</p>
<p>
Vendor: <a href="http://www.chartjs.org/" target="_blank">Chart.js</a><br/>
Support: <a href="http://www.www.com" target="_blank">WireBootstrap Forums</a><br/>
Demo: <a href="http://www.chartjs.org/samples/latest">Chart.js Samples</a>
</p>

<hr/>

<p>
<img src="https://github.com/WireBootstrap/Chartjs/blob/master/images/chartjs6.jpg">
</p>

<p>
Create widgets from the popular open source Chart.js charting library.  Chart.js supports bar, line, area, pie, and other chart types.
</p>
<hr/>

<h1><a id="config">Configuration</a></h1>

```javascript
{
 "schema": {
   "series": [],
   "labels": "labels"
 },
 "type": "line",
 "chartjs": {
   "options": {
      "maintainAspectRatio": true,
      "responsive": true
   }
 }
}
```
<table>
	<thead>
		<tr>
			<th style="width:100px">Property</th>
			<th style="width:300px">Description</th>
			<th style="width:100px">Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="width:100px">schema</td>
			<td style="width: 300px;">Data source fields mapped to the chart's data configuration</td>
			<td style="width:100px">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width:100px">type</td>
			<td style="width:300px">Type of chart to be plotted. View the list of valid values <a href="http://www.chartjs.org/docs/latest/charts/" target="_new">here</a>.</td>
			<td style="width:100px">line</td>
		</tr>
		<tr>
			<td style="width:100px">chartjs</td>
			<td style="width:300px">Use this property to set the chart's <a href="http://www.chartjs.org/docs/latest/configuration" target="_new">native configuration options</a></td>
			<td style="width:100px">See <em>chartjs</em> property in JSON configuration above.</td>
		</tr>
	</tbody>
</table>

<p>
	<br>
</p>

<h2>Data Binding (schema)</h2>

<p>
	<br>
</p>

<table>
	<thead>
		<tr>
			<th style="width:100px">Property</th>
			<th style="width:300px">Description</th>
			<th style="width:100px">Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="width:100px">series</td>
			<td style="width:300px">Array of fields to be plotted on the chart</td>
			<td style="width:100px">
				<br>
			</td>
		</tr>
		<tr>
			<td style="width:100px">label</td>
			<td style="width:300px">Field to be used on the x-axis</td>
			<td style="width:100px">labels</td>
		</tr>
	</tbody>
</table>
