import React from 'react';

const LaptopDisplay = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative max-w-4xl w-full">
        <div className="bg-gray-800 rounded-t-2xl p-2">
          <div className="bg-white rounded-lg overflow-hidden laptop-shadow">
            <div className="bg-gray-100 px-4 py-2 border-b flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600 ml-4">WOW уроки</div>
              </div>
              <div className="text-sm text-gray-600">info@svs.com.ua    044-5</div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-brand-purple rounded flex items-center justify-center">
                    <span className="text-white text-sm font-bold">W</span>
                  </div>
                  <span className="font-bold text-lg">WOW уроки</span>
                </div>
                <nav className="ml-8 flex space-x-6 text-sm">
                  <a href="#" className="text-gray-600 hover:text-brand-purple">Про нас</a>
                  <a href="#" className="text-gray-600 hover:text-brand-purple">WOW уроки</a>
                  <a href="#" className="text-gray-600 hover:text-brand-purple">Книги</a>
                </nav>
              </div>
              
              <div className="grid grid-cols-9 gap-2 mb-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((grade) => (
                  <div key={grade} className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mb-1 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{grade}</span>
                    </div>
                    <span className="text-xs">{grade} клас</span>
                  </div>
                ))}
              </div>
              
              <div className="flex">
                <div className="w-1/3 pr-4">
                  <h3 className="font-bold mb-4">Готові підручники</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Готові підручники (2)</span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold mt-6 mb-2">Клас</h4>
                  <div className="space-y-1 text-sm">
                    {[
                      { grade: '0 клас', count: '(0)' },
                      { grade: '1 клас', count: '(522)', checked: true },
                      { grade: '2 клас', count: '(391)' },
                      { grade: '3 клас', count: '(402)' },
                      { grade: '4 клас', count: '(443)' },
                      { grade: '5 клас', count: '(397)' },
                      { grade: '6 клас', count: '(417)' },
                      { grade: '7 клас', count: '(446)' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-2" 
                          defaultChecked={item.checked}
                        />
                        <span className={item.checked ? 'text-blue-600' : 'text-gray-600'}>
                          {item.grade} {item.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="w-2/3">
                  <div className="flex justify-end mb-4">
                    <button className="bg-gray-200 px-4 py-2 rounded text-sm">
                      Сортувати за ціною
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-lg p-3">
                      <div className="bg-orange-400 h-24 rounded mb-2 flex items-center justify-center">
                        <span className="text-white text-xs">Обчислення</span>
                      </div>
                      <p className="text-xs mb-2">Освітньо-електронний ресурс з Математики 1 клас</p>
                      <p className="font-bold text-sm">240 грн.</p>
                    </div>
                    
                    <div className="border rounded-lg p-3">
                      <div className="bg-red-500 h-24 rounded mb-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">А</span>
                      </div>
                      <p className="text-xs mb-2">Освітньо-електронний ресурс з української мови та читання 1 клас</p>
                      <p className="font-bold text-sm">252 грн.</p>
                    </div>
                    
                    <div className="border rounded-lg p-3">
                      <div className="bg-purple-500 h-24 rounded mb-2 flex items-center justify-center">
                        <span className="text-white text-xs">Підготовка</span>
                      </div>
                      <p className="text-xs mb-2">Підготовка та удосконалення навчального логічного мислення матеріалу</p>
                      <p className="font-bold text-sm">180 грн.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-600 h-4 rounded-b-2xl relative">
          <div className="absolute inset-x-0 bottom-0 h-2 bg-gray-700 rounded-b-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDisplay;