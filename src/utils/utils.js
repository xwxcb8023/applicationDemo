// 调整数据解构
export const handlerData = (arr, result = []) => {
	for(let i = 0; i < arr.length; i++){
		let random = Math.ceil(Math.random() * 5);
		let obj = {
			grade: random < 2 ? 2 : random,
			name: arr[i]['im:name'].label,
			image:arr[i]['im:image'],
			link:arr[i].link, 
			attributes: arr[i].category.attributes,
		};
		result.push(obj);
	}
	result.sort((a,b) => b.grade - a.grade)
	return result;
}
