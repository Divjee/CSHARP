using System;
using System.Collections.Generic;

namespace ArrayTask
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var arr = new int[20, 20];
            var ran = new Random();
            var sortedArr = new int[20];

            for (int i = 0; i < arr.GetLength(0); i++)
            {
                var minIndex = 0;
                var maxIndex = 0;
                int minValue = int.MaxValue;
                int maxValue = int.MinValue;

                for (int j = 0; j < arr.GetLength(1); j++)
                {
                    arr[i, j] = ran.Next(1001);
                    sortedArr[j] = arr[i, j];
                    Console.Write(string.Format($"{arr[i, j]}   "));

                    if (arr[i, j] < minValue) minValue = arr[i, j];
                    if (arr[i, j] > maxValue) maxValue = arr[i, j];

                    if (arr[i, j] == minValue) minIndex = j;
                    if (arr[i, j] == maxValue) maxIndex = j;
                }

                var sortedList = new List<int>();
                foreach (int n in sortedArr)
                {
                    sortedList.Add(n);
                }
                sortedList.Sort();

                Console.WriteLine();
                Console.WriteLine($"min value index in array Nr:{i + 1} is {minIndex}");
                Console.WriteLine($"max value index in array Nr:{i + 1} is {maxIndex}");
                Console.Write("Sorted Array: ");

                foreach (var item in sortedList)
                {
                    Console.Write(string.Format($"{item}  "));
                }

                Console.Write(Environment.NewLine + Environment.NewLine);
            }

            Console.ReadLine();
        }
    }
}
