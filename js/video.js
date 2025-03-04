
// date time convert
function getTimeString(time){

    const hours = parseInt( time / 3600)
    let second = time % 3600
    const minuts = parseInt(second / 60)
    second = second % 60

    return `${hours} hours ${minuts} min ${second} sec ago `
    

}


// // category function 




const LoadCategory = async () => {
    try{
        const categoryData = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        const data = await categoryData.json()
        DisplayCegory(data.categories)
    }

    catch(error){
        console.log('error faching user', error)
    }
    
   
}




const DisplayCegory = (categories) => {
    const categoryContainer  = document.getElementById('categories');

    categories.forEach((item) => {
        // console.log(item)

        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item. category;
        categoryContainer.append(button);
    });

}

LoadCategory()



// const LoadCategories = () => {
//     fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
//         .then((res) => res.json())
//         .then((data) => DisplayCategory(data.categories))
//         .catch((error) => console.log('error fetching categories', error));
// };

// const DisplayCategory = (categories) => {
//     const categoryContainer = document.getElementById('categories');

//     categories.forEach((item) => {
//         console.log(item);

//         const button = document.createElement('button');
//         button.classList = 'btn';
//         button.innerText = item.category;
//         categoryContainer.append(button);
//     });
// }

// LoadCategories();



// Video show


const VideoLoad = async () => {
    
    try{
        const all_video = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
        const data = await all_video.json();
        console.log(data);

        DisplayVideo(data.videos);


    }
    catch(error){
        console.log('Error faching user', error);
    }
}



// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }




const DisplayVideo = (videos) => {
    
    const videoContainer = document.getElementById('videos')

    videos.forEach((item) => {
        console.log(item)

        const card = document.createElement('div');
        card.classList = 'card card-compact md:col-2'
        card.innerHTML = 
        
        `
         <figure class="h-[200px] relative">
            <img src=${item.thumbnail} alt="Shoes" class="h-full w-full object-cover" />
           ${
            item.others.posted_date?.length == 0 ? "" : `<span class='absolute text-xs right-2 bottom-2 bg-black text-white'> ${getTimeString(item.others.posted_date)} </span>`
           }
            
        </figure>
        <div class="card-body ">
        <div class="px-0 py-2 flex gap-2">

            <div>
                <img src=${item.authors[0].profile_picture} class="h-10 w-10 rounded-full object-cover" >
            </div>
            <div>
                <h2 class="font-bold text-l"> ${item.title} </h2>
                <div class="flex">
                    <p>${item.authors[0].profile_name} </p>
                    ${
                        item.authors[0].verified == true ? `<img class="h-5 w-5" src= 'https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png'` : ""
                    }
                    
                </div>
                
            </div>
            <p>${item.others.views} </p>
            
        
        </div>
            
        </div>
        
        
        `;
        videoContainer.append(card)

    })

    
}





VideoLoad();

